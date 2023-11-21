import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

const AddProduct = ({ show, handleClose, handleChange, addProductHandler }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Yeni Ürün Ekle</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicImage">
            <Form.Label>Ürün Resmi</Form.Label>
            <Form.Control
              type="text"
              name="thumbnail"
              placeholder="Image Here"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Ürün Adı</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Title Here"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="row">
            <Form.Group className="mb-3 col-6" controlId="formBasicTitle">
              <Form.Label>Ürün Fiyatı</Form.Label>
              <Form.Control
                type="text"
                name="price"
                placeholder="Price Here"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-6" controlId="formBasicTitle">
              <Form.Label>Ürün İndirimi</Form.Label>
              <Form.Control
                type="text"
                name="discountPercentage"
                placeholder="Discount Here"
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Ürün Açıklaması</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              placeholder="Description Here"
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Kapat
        </Button>
        <Button variant="primary" onClick={addProductHandler}>
          Ekle
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddProduct;
