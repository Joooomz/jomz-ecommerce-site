import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import productData from "../products.json"
import SelectCategory from '../components/SelectCategory';

const title = (
    <h2>Search your <span>Preference</span> from Thousand of Products</h2>
)
const desc = "We have the largest collection of Products"
const bannerList = [
    {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
    },
    {
    iconName: "icofont-notification",
    text: "More then 2000 Merchant",
    },
    {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
    },
    ];

const Banner = () => {
    const [searchInput, setSearchInput] = useState("");
    const [filteredProduct, setFilteredProduct] = useState(productData);
    
    //search functionality
    const handleSearch = x => {
    const searchTerm = x.target.value;
    setSearchInput(searchTerm);

    //filtering product based on search
    const filter = productData.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

    setFilteredProduct(filter);
    }
  return (
    <div className='banner-section style-4'>
        <div className='container'>
            <div className='banner-content'>
                {title}
                <form>
                    <SelectCategory select={"all"}/>
                    <input type='text' name='search' id='search' placeholder='Search your Product' 
                        value={searchInput} onChange={handleSearch}/>
                    <button><i className="icofont-search-2"></i></button>
                </form>
                <p>{desc}</p>
                <ul className="lab-ul">
                    {
                        searchInput && filteredProduct.map((product, i) => <li key={i}>
                            <Link to={`/shop/${product.id}`}>{product.name}</Link>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Banner