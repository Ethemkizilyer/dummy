import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return <Spinner animation="border" role="status" />;
};

export default Loader;
