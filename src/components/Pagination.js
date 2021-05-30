import React from 'react'

export const Pagination = ({ totalCustomers, customerPerPage, onPageClick, currentPage }) => {
    let pages = Math.ceil(totalCustomers/customerPerPage);
    let totalPages = []
    for(let i=1; i<=pages; i++) {
        totalPages.push(i);
    }

    return (
        <div className="paginationContainer">
            { totalPages.map((page, index) => {
                return (
                    <p key={index} className={`pageNumber ${page === currentPage ? 'selected' : ''}`} onClick={() => onPageClick(page)}>
                        {page}
                    </p>
                )
            })
            }
        </div>
    )
}
