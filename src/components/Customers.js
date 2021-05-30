import React,{useEffect, useState} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import axios from 'axios';
import classes from './Card.module.css';
import { Pagination } from './Pagination';
import { CustomerCard } from './CustomerCard';


const Card = () =>{
    const [loading, setLoading] = useState(false);
    const [customers, setCustomers] =useState([]);
    const [currentPage, setCurrentPage] =useState(1);
    const [customerPerPage] =useState(5);

    let getHighestBid = (bids) => {
      return bids.sort((a,b) => a.amount - b.amount).reverse()[0].amount;
    }

    const apiURL="https://intense-tor-76305.herokuapp.com/merchants";
    
    const fetchData = async () => {
      setLoading(true)
      const response = await axios.get(apiURL)
      let customers = response.data;
      customers.map(customer => {
        if(customer.bids && customer.bids.length > 0) {
          customer["highestBid"] = getHighestBid(customer.bids)
        } else {
          customer["highestBid"] = 0
        }
        
        return customer
      })
      customers = customers.sort((a,b) => a.highestBid - b.highestBid).reverse()
      setCustomers(customers)
      setLoading(false)
    }

    useEffect(() => {
      fetchData()
    }, [])

    let indexOfLastPost = currentPage * customerPerPage;
    let indexOfFirstPost = indexOfLastPost - customerPerPage;
    let currentCustomers = customers.slice(indexOfFirstPost, indexOfLastPost);

    return ( 
        
    <div className={classes.outer}>
      <h1>Customer Information</h1>
      <h2>Fetch a list from an API and display it</h2>

      { loading &&
        <div style={{ height: '400px', position: 'relative' }}>
          <div style={{ margin: 0, position: 'absolute', top: '50%', left: '50%', transform: 'translateY(-50%) translateX(-50%)' }}>
            <CircularProgress style={{color: '#BE6E46'}} />
          </div>
        </div>
      }
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