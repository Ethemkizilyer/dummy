import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { returnDiscountAmount, returnTotal } from "../utils/helper";

const EditProduct = ({
  showEdit,
  handleEditClose,
  handleEditChange,
  editProductHandler,
  editedProduct,
}) => {
  return (
    <Modal show={showEdit} onHide={handleEditClose}>
      <Modal.Header>
        <Modal.Title>Ürün Güncelle</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicImage">
            <Form.Label>Ürün Resmi</Form.Label>
            <Form.Control
              type="image"
              name="thumbnail"
              placeholder="Url"
              src={editedProduct.thumbnail}
              onChange={handleEditChange}
              disabled
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Ürün Adı</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Başlık"
              value={editedProduct.title}
              onChange={handleEditChange}
            />
          </Form.Group>
          <Form.Group className="row">
            <Form.Group className="mb-3 col-6" controlId="formBasicTitle">
              <Form.Label>Ürün Fiyatı</Form.Label>
              <Form.Control
                type="text"
                name="price"
                placeholder="Fiyat"
                value={editedProduct.price}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-6" controlId="formBasicTitle">
              <Form.Label>Ürün İndirimi</Form.Label>
              <Form.Control
                type="text"
                name="discountPercentage"
                placeholder="İndirim"
                value={editedProduct.discountPercentage}
                onChange={handleEditChange}
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
                placeholder="Tutar"
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
                placeholder="Toplam Fiyat"
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
              placeholder="Açıklama"
              value={editedProduct.description}
              onChange={handleEditChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="danger"
          className="bg-danger"
          onClick={handleEditClose}
        >
          Kapat
        </Button>
        <Button
          variant="primary"
          className="bg-primary"
          onClick={(e) => editProductHandler(e, editedProduct.id)}
        >
          Kaydet
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProduct;
