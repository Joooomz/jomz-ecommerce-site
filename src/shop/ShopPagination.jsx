import React from 'react'

const ShopPagination = ({productsPerPage, totalProducts, paginate, activePage}) => {
    const pageNumbers = [];
    for(let x = 1; x <= Math.ceil(totalProducts/productsPerPage); x++){
        pageNumbers.push(x)
    }

  return (
    <ul className='default-pagination lab-ul'>
        <li>
            <a onClick={() => {
                if (activePage < pageNumbers.length){
                    navigate(-1)
                }
            }} href='#'>
                <i className='icofont-rounded-left'></i>
            </a>
        </li>
        {
            pageNumbers.map((number) => (
                <li key={number} className={`page-item ${number === activePage ? "bg-warning" : ""}`}>
                    <button onClick={() => paginate(number)} className='bg-transparent'>{number}</button>
                </li>
            ))
        }
        <li>
            <a onClick={() => {
                if (activePage < pageNumbers.length){
                    paginate(activePage+1)
                }
            }} href='#'>
                <i className='icofont-rounded-right'></i>
            </a>
        </li>
    </ul>
    
  )
}

export default ShopPagination