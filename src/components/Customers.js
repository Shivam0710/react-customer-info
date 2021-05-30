import React,{useState} from 'react';
import axios from 'axios';
import classes from './Card.module.css';
import { Pagination } from './Pagination';
import { CustomerCard } from './CustomerCard';


const Card = () =>{
    const [loading, setLoading] = useState(false);
    const [customers, setCustomers] =useState([]);
    const [currentPage, setCurrentPage] =useState(1);
    const [customerPerPage, setCustomerPerPage] =useState(5);

    const apiURL="http://intense-tor-76305.herokuapp.com/merchants";
    
    const fetchData = async () => {
        const response = await axios.get(apiURL)
        setLoading(true)
        setCustomers(response.data)
    }

    let indexOfLastPost = currentPage * customerPerPage;
    let indexOfFirstPost = indexOfLastPost - customerPerPage;
    let currentCustomers = customers.slice(indexOfFirstPost, indexOfLastPost);

    return ( 
        
    <div className={classes.outer}>
      <h1>Customer Information</h1>
      <h2>Fetch a list from an API and display it</h2>

      <div className={classes.button}>
        <button onClick={fetchData}>
          Fetch Data
        </button>
      </div>
      { customers.length > 0 &&
        <Pagination 
            totalCustomers={customers.length}
            customerPerPage={customerPerPage}
            onPageClick={setCurrentPage}
            currentPage={currentPage}
        />
        }
      <div className={classes.inner}>
          {
             currentCustomers && currentCustomers.map((customer,index)=>{
                 return(
                     <CustomerCard 
                        customer={customer}
                        index={index}
                     />
                 )
             })
          }
      </div>
       
    </div> );
}

export default Card;