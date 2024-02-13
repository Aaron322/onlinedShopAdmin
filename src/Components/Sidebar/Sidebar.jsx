import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import list_products from '../../assets/Admin_Panel_Assets/Product_list_icon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={'/addproduct'} style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          {/* <img src={add_product_icon} alt=" " /> */}
          <FontAwesomeIcon icon={faPlus} size="xl" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={'/listproduct'} style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          {/* <img src={list_products} alt=" " /> */}
          <FontAwesomeIcon icon={faList} size="xl" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar
