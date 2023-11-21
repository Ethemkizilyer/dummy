import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "react-bootstrap";
import { returnTotal } from "../utils/helper";

const ProductCard = ({ product, deleteHandler, editHandler, viewHandler }) => {
  

  return (
    <Card key={product.id} style={{ width: "17rem", height: "380px" }}>
      <CardHeader className="w-100 h-50">
        <img
          src={product.thumbnail}
          alt="product-image"
          className="w-100 h-75"
        />
        <h6 className="pt-3">{product.title}</h6>
      </CardHeader>
      <CardBody>
        <div className="costContainer d-flex justify-content-between align-items-center">
          <div className="leftContainer">
            <p className="text-success">Price: ${returnTotal(product)}</p>
          </div>
          <div className="rightContainer d-flex">
            <p className="text-secondary line-through me-1">
              {" "}
              <del> ${product.price}</del>{" "}
            </p>
            <p className="text-danger"> {-product.discountPercentage}%</p>
          </div>
        </div>
        <p className="d-flex flex-column text-start">
          Description: <span>{product.description.slice(0, 25) + "..."}</span>{" "}
        </p>
      </CardBody>
      <CardFooter>
        <Button
          variant="primary"
          className="bg-primary"
          onClick={(e) => viewHandler(e, product.id)}
        >
          İncele
        </Button>
        <Button
          variant="warning"
          className="mx-1 bg-warning"
          onClick={(e) => editHandler(e, product.id)}
        >
          Güncelle
        </Button>
        <Button
          variant="danger"
          className="bg-danger"
          onClick={(e) => deleteHandler(e, product.id)}
        >
          Sil
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
