"use client"
import { React, useState, useEffect, useDeferredValue, useRef } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
// import { successToast } from '../services/toast.service';
import ProductCard from '@/components/ProductCard';
import Loader from '@/components/Loader';
import AddProduct from '@/components/AddProduct';
import EditProduct from '@/components/EditProduct';
import ViewProduct from '@/components/ViewProduct';

const Products = () => {
  //State for API Products.
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState()
  const limit = useRef(10)
  //State for copying the produts to the another state.
  const [originalProducts, setOriginalProducts] = useState([]);
  const [product, setProduct] = useState({
    id: Date.now(),
    title: "",
    thumbnail: "",
    description: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    setDisplayData(currentProducts);
  }, [currentPage, products, productsPerPage]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };


  //State for adding categories....
  const [categories, setCategories] = useState([]);


  //State for editted product.
  const [editedProduct, setEditedProduct] = useState([]);

  //State for Loader.
  const [isLoading, setIsLoading] = useState(false);

  //State for showing the modal while click on the add product.
  const [show, setShow] = useState(false);

  //state for editting product.
  const [showEdit, setShowEdit] = useState(false);

  //state for viewing products.
  const [showView, setShowView] = useState(false);
  const deferredSearch = useDeferredValue(search)

  const getProduct = async ({ skip,
    limit,
    search,
    category }) => {
    let url = 'https://dummyjson.com/products'
    if (search) {
      url += `/search?q=${search}&skip=0&limit=100`
    } else if (category) {
      url += `/category/${category}?skip=0&limit=100`
    } else {
      url += `?limit=100&skip=0`
    }
    try {
      setIsLoading(true);
      const { data } = await axios.get(url);
      setProducts(data.products);
      setOriginalProducts(data.products);

      //Adding products category while page loading.
      const categories = data.products.map((data) => {
        return data.category;
      })
      setCategories([...new Set(categories)])
      setIsLoading(false);
      return data
    } catch (error) {
      // errorToast(error.response.data);
      setIsLoading(false);
    }
  };

  console.log(limit)

  useEffect(() => {
    getProduct({ limit: 100, skip: 0, search: deferredSearch })
  }, [deferredSearch]);

  const deleteHandler = (e, id) => {
    e.preventDefault();
    const filteredProducts = products.filter((prod) => {
      return prod.id !== id;
    })
    setProducts(filteredProducts);
    // successToast('Product Deleted.');

  };

  //Add Product
  const showModal = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const handleClose = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    setShow(false);
  };

  const handleChange = (e) => {
    setProduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const addProductHandler = (e) => {
    e.preventDefault();
    setProducts([product, ...products]);
    setShow(false);
    // successToast('Product Added Successfully.');
  };

  //Edit Product
  const editHandler = (e, id) => {
    e.preventDefault();
    const prod = products.find((product) => product.id === id);
    setEditedProduct(prod);
    setShowEdit(true);

  };

  const handleEditClose = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    setShowEdit(false);
  };

  const handleEditChange = (e) => {
    setEditedProduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const editProductHandler = (e, id) => {
    e.preventDefault();
    const finalData = products.map((prod) => {
      return prod.id === id ? editedProduct : prod;
    })
    setProducts(finalData);
    setShowEdit(false);
    // successToast('Product Edited Successfully.');
  };

  //View product
  const viewHandler = (e, id) => {
    e.preventDefault();
    const prod = products.find((product) => product.id === id);
    setEditedProduct(prod);
    setShowView(true);
  };

  const handleViewClose = () => {
    setShowView(false);
  }

  const searchProducts = (e) => {
    const searchedData = originalProducts.filter((originalProd) => {
      return originalProd.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setProducts(searchedData);
  }

  const filterCategory = (data) => {
    if (data !== '') {
      const filteredData = originalProducts.filter((val) => {
        return val.category === data
      })
      setProducts(filteredData);
      setCurrentPage(1)
    } else {
      setProducts(originalProducts);
    }
  }

  console.log("products", products)



  return (
    <>
      <div className="container mt-2 d-flex justify-content-between">
        <Button variant='primary' onClick={showModal}>Yeni Ürün Ekle</Button>
        <Form.Control className='w-25' type='search' name='search' placeholder='Ürün Ara' onChange={searchProducts} />
        <Form.Select className='w-25' onChange={(e) => filterCategory(e.target.value)}>
          <option value=''>Kategori</option>
          {categories.map((val, i) => {
            return <option value={val} key={i}>{val}</option>;
          })}
        </Form.Select>
      </div>
      <h4 className='text-center mt-3'>Ürünlerim</h4>
      <div className="buttonContainer text-center mt-3 mb-3">
        <AddProduct show={show} handleClose={handleClose} handleChange={handleChange} addProductHandler={addProductHandler} />
        <EditProduct showEdit={showEdit} handleEditClose={handleEditClose} handleEditChange={handleEditChange} editProductHandler={editProductHandler} editedProduct={editedProduct} />
        <ViewProduct showView={showView} handleViewClose={handleViewClose} editedProduct={editedProduct} />
      </div>
      <div className='container d-flex flex-wrap align-items-center gap-2 text-center'>
        {isLoading ? (<div className='mx-auto'>
          <Loader /></div>
        ) : (
          displayData.map((product) => {
            return (

              <ProductCard key={product.id} product={product} deleteHandler={deleteHandler} editHandler={editHandler} viewHandler={viewHandler} />

            )
          }))}

      </div>
      <div className="flex w-[150px] items-center justify-center mx-auto my-2 rounded bg-gray-100 py-2 gap-4">
        <button onClick={prevPage} className='bg-gray-300 rounded p-1' disabled={currentPage === 1}>
          Geri
        </button><div>
          {currentPage}
        </div>
        <button onClick={nextPage} className='bg-gray-300 rounded p-1' disabled={currentPage * productsPerPage >= products.length}>
          İleri
        </button>

      </div>


    </>
  )
}

export default Products;