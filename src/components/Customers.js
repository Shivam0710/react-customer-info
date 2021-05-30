import React,{useState} from 'react';
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import axios from 'axios';
import classes from './Card.module.css';
import { Pagination } from './Pagination';
import { CustomerCard } from './CustomerCard';


const Card = () =>{
    const [loading, setLoading] = useState(false);
    const [customers, setCustomers] =useState([]);
    const [currentPage, setCurrentPage] =useState(1);
    const [customerPerPage, setCustomerPerPage] =useState(5);

    const apiURL="https://intense-tor-76305.herokuapp.com/merchants";
    
    const fetchData = async () => {
      setLoading(true)
      const response = await axios.get(apiURL)
      setTimeout(() => {
        setCustomers(response.data)
        setLoading(false)
      }, 2000)
    }

    let indexOfLastPost = currentPage * customerPerPage;
    let indexOfFirstPost = indexOfLastPost - customerPerPage;
    let currentCustomers = customers.slice(indexOfFirstPost, indexOfLastPost);

    return ( 
        
    <div className={classes.outer}>
      <h1>Customer Information</h1>
      <h2>Fetch a list from an API and display it</h2>

      <div className={classes.button}>
        <Button style={{background: '#BE6E46'}} onClick={fetchData} variant="contained" color="primary">
          Fetch Data
        </Button>
      </div>
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