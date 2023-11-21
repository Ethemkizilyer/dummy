import React from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { returnDiscountAmount, returnTotal } from "../utils/helper";

const ViewProduct = ({ showView, handleViewClose, editedProduct }) => {
  return (
    <Modal show={showView} onHide={handleViewClose}>
      <Modal.Header>
        <Modal.Title>Ürün Detayı</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicImage">
            <Form.Label>Ürün Resmi</Form.Label>
            <Form.Control
              type="image"
              name="thumbnail"
              placeholder="Image Here"
              src={editedProduct.thumbnail}
              disabled
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Ürün Adı</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Title Here"
              value={editedProduct.title}
              disabled
            />
          </Form.Group>
          <Form.Group className="row">
            <Form.Group className="mb-3 col-6" controlId="formBasicTitle">
              <Form.Label>Ürün Fiyatı</Form.Label>
              <Form.Control
                type="text"
                name="price"
                placeholder="Price Here"
                value={editedProduct.price}
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3 col-6" controlId="formBasicTitle">
              <Form.Label>Ürün İndirimi</Form.Label>
              <Form.Control
                type="text"
                name="discountPercentage"
                placeholder="Discount Here"
                value={editedProduct.discountPercentage}
                disabled
              />
            </Form.Group>
          </Form.Group>
          <Form.Group className="row">
            <Form.Group className="mb-3 col-6" controlId="formBasicTitle">
              <Form.Label>İndirimli Tutar</Form.Label>
              <Form.Control
                type="text"
                name="price"
                readOnly
                placeholder="Discounted Amount"
                value={"$" + returnDiscountAmount(editedProduct)}
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3 col-6" controlId="formBasicTitle">
              <Form.Label>Toplam Fiyat</Form.Label>
              <Form.Control
                type="text"
                name="discountPercentage"
                readOnly
                placeholder="Total Price"
                value={"$" + returnTotal(editedProduct)}
                disabled
              />
            </Form.Group>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Ürün Açıklaması</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              placeholder="Description Here"
              value={editedProduct.description}
              disabled
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleViewClose}>
          Kapat
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewProduct;
