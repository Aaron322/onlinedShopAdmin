import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([])
  const fetchProducts = async () => {
    await fetch('http://localhost:4000/allproducts')
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data)
      })
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  const removeProduct = async (id) => {
    await fetch('http://localhost:4000/removeproduct', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    })
    await fetchProducts()
  }
  return (
    <div className="list-product">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => {
          return (
            <>
              <div
                key={index}
                className="listproduct-format-main listproduct-format"
              >
                <img
                  src={product.image}
                  alt=""
                  className="listproduct-product-icon"
                />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <FontAwesomeIcon
                  className="cartitems-remove-icon"
                  icon={faTrashAlt}
                  onClick={() => {
                    removeProduct(product.id)
                  }}
                />
              </div>
              <hr />
            </>
          )
        })}
      </div>
    </div>
  )
}

export default ListProduct
