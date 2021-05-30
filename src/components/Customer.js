import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import { Button } from '@material-ui/core'

export const Customer = () => {
    let params = useParams();
    let { customerId } = params;
    let [ customerData, setCustomerData ] = useState({})
    
    const getCustomerInfo = async(customerId) => {
        let response = await axios.get(`https://intense-tor-76305.herokuapp.com/merchants/${customerId}`)
        setCustomerData(response.data)
    }

    const useStyles = makeStyles({
        root: {
            maxWidth: 400,
            margin: 'auto',
            marginBottom: 12,
            padding: 8,
            borderRadius: 16,
            paddingBottom: 20,
            background: '#BE6E46'
        }
    })

    const classes = useStyles()

    useEffect(() => {
        getCustomerInfo(customerId)
    }, [])

    return (
        <React.Fragment>
            <Button variant="contained" href="/react-customer-info" style={{ background: '#BE6E46', marginLeft: 12, color: '#fff' }}>
                Go Back
            </Button>
            <Card variant="outlined" className={classes.root}>
                { customerData && customerData.bids &&
                    customerData.bids.map((bid, index) => {
                        return (
                            <div key={index}>
                                {bid.carTitle}
                            </div>
                        )
                    })
                }
            </Card>
        </React.Fragment>
    )
}
