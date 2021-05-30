import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import { Button, CircularProgress } from '@material-ui/core'

export const Customer = () => {
    let params = useParams();
    let { customerId } = params;
    let [ customerData, setCustomerData ] = useState({})
    let [loading, setLoading] = useState(false)
    
    const getCustomerInfo = async(customerId) => {
        setLoading(true)
        let response = await axios.get(`https://intense-tor-76305.herokuapp.com/merchants/${customerId}`)
        setCustomerData(response.data)
        setLoading(false)
    }

    const useStyles = makeStyles({
        root: {
            maxWidth: 400,
            margin: 'auto',
            marginBottom: 12,
            padding: 8,
            borderRadius: 16,
            paddingBottom: 4,
            background: '#BE6E46',
            overflow: 'visible',
            position: 'relative',
            paddingTop: 48,
            textAlign: 'center',
            height: 400,
            boxShadow: '0 11px 28px 0 rgb(0 0 0 / 58%)',
            position: 'absolute',
            top: '55%',
            left: '50%',
            width: '44%',
            transform: 'translate(-50%, -50%)'
        },
        imageStyle: {
            width: 80,
            borderRadius: '50%',
            border: '1px solid #fff',
            left: '50%',
            top: '-42px',
            transform: 'translateX(-50%)',
            position: 'absolute',
            boxShadow: '0 4px 12px 0 rgb(0 0 0 / 23%)'
        },
        titleStyle: {
            margin: 0,
        },
        noBidStyle: {
            height: 190,
            display: 'grid',
            alignItems: 'center',
            textAlign: 'center'
        },
        bidStyle: {
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            textAlign: 'left',
            border: '1px dashed aquamarine',
            textTransform: 'uppercase',
            padding: '10px 7px',
            color: 'aquamarine',
            fontWeight: 'bold',
            margin: '10px 0'
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
            { loading ?
                <div style={{ height: '400px', position: 'relative' }}>
                    <div style={{ margin: 0, position: 'absolute', top: '50%', left: '50%', transform: 'translateY(-50%) translateX(-50%)' }}>
                    <CircularProgress style={{color: '#BE6E46'}} />
                    </div>
                </div>
                :
                <Card variant="outlined" className={classes.root}>
                    { customerData.avatarUrl &&
                        <img src={customerData.avatarUrl} className={classes.imageStyle} />
                    }
                    <h2 className={classes.titleStyle}>
                        {customerData.firstname}`s BIDS
                    </h2>
                    { customerData && customerData.bids &&
                        customerData.bids.map((bid, index) => {
                            return (
                                <div key={index} className={classes.bidStyle}>
                                    <span> {bid.carTitle} </span>
                                    <span> {bid.amount} </span>
                                </div>
                            )
                        })
                    }
                    { customerData && customerData.bids && customerData.bids.length == 0 &&
                        <h2 className={classes.noBidStyle}>
                            NO BIDS FOUND
                        </h2>
                    }
                </Card>
            }
        </React.Fragment>
    )
}
