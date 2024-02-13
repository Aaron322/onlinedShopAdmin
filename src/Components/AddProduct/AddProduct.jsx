import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/Admin_Panel_Assets/upload_area.svg'

const AddProduct = () => {
  const [image, setImage] = useState(false)
  const [productDetaills, setProductDetaills] = useState({
    name: '',
    image: '',
    category: '',
    new_price: '',
    old_price: '',
  })
  const imageHandler = (e) => {
    setImage(e.target.files[0])
  }
  const changeHandler = (e) => {
    setProductDetaills({ ...productDetaills, [e.target.name]: e.target.value })
  }
  const addProduct = async () => {
    console.log(productDetaills)
  }
  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input
          value={productDetaills.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type Here"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            value={productDetaills.old_price}
            onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder="Type Here"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input
            value={productDetaills.new_price}
            onChange={changeHandler}
            type="text"
            name="new_price"
            placeholder="Type Here"
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select
          value={productDetaills.category}
          onChange={changeHandler}
          name="category"
          className="add-product-selector"
        >
          <option value="women">Women</option>
          <option value="kid">Kid</option>
          <option value="Men">Men</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            alt=""
            className="addproduct-thumnail-img"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button className="addproduct-btn" onClick={() => addProduct()}>
        ADD
      </button>
    </div>
  )
}

export default AddProduct
