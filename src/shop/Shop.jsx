import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import ProductData from '../products.json'
import ProductCards from './ProductCards';
import Pagination  from '../shop/ShopPagination' ;

//count total number of products
var productObject = ProductData;
var countProduct = Object.keys(productObject).length;

const showResults = "01 - 12 "

const shop = () => {
  const [gridList, setGridList] = useState(true);
  const [products, setProducts] = useState(ProductData);

  {/* Shop Pagination */}
  const [currPage, setCurrPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = products.slice(indexOfFirstProduct, indexOfLastProduct);

  //function to change the current page
  const paginate = (pageNumber) => {
    setCurrPage(pageNumber)
  }

  return (
    <div>
      <PageHeader title="Shop Page" curPage="Shop"/>
      <div className='shop-page padding-tb'>
        <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-8 col-12'>
                <article>
                  <div className='shop-title d-flex flex-warp justify-content-between '>
                    <p>Showing {showResults} of {countProduct} Results</p>
                    <div className={`product-view-mode ${gridList ? "gridActive" : "listActive"}`}>
                      <a className='grid' onClick={() => setGridList(!gridList)}>
                        <i className='icofont-ghost'></i>
                      </a>
                      <a className='grid' onClick={() => setGridList(!gridList)}>
                        <i className='icofont-listine-dots'></i>
                      </a>
                    </div>
                  </div>
                  <div className='cards'>
                    <ProductCards GridList={gridList} Products={currentProduct}/>
                  </div>
                  <div>
                    <Pagination 
                      productsPerPage={productsPerPage}
                      totalProducts = {products.length}
                      paginate = {paginate}
                      activePage = {currPage}
                    />
                  </div>
                </article>
              </div>
              <div className='col-lg-4 col-12'>
                <aside>
                  
                </aside>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default shop