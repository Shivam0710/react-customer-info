import React, {useState} from 'react'
import Card from '@material-ui/core/Card'
import TypoGraphy from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import { CardActions } from '@material-ui/core';

export const CustomerCard = ({ customer, index }) => {
    const [showMinimumBid, setShowMinimumBid] = useState(false)

    let getHighestBid = (bids) => {
        return bids.sort((a,b) => a.amount - b.amount).reverse()[0].amount;
    }

    let getLowestBid = (bids) => {
        return bids.sort((a,b) => a.amount - b.amount)[0].amount;
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
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
        outline: {
            border: 'none',
            borderBottom: '1px solid rgba(0,0,0,.12)',
            marginBottom: 20
        }
    });

    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <TypoGraphy variant="h4"> Customer Info </TypoGraphy>
            <hr className={classes.outline}></hr>
            { customer.avatarUrl &&
                <img src={customer.avatarUrl} alt="avatar"></img>
            }
            { (customer.firstname || customer.lastname) &&
                <h2>{customer.firstname} {customer.lastname}</h2>
            }
            { customer.email &&
                <p>Email: {customer.email}</p>
            }
            { customer.phone &&
                <p>Phone: {customer.phone}</p>
            }
            { customer.bids && customer.bids.length > 0 &&
                <div>
                    <p> Highest bid: {getHighestBid(customer.bids)} </p>
                    { showMinimumBid &&
                        <p> Minimum bid: {getLowestBid(customer.bids)} </p>
                    }
                    <Button color="primary" onClick={() => setShowMinimumBid(true)} variant="contained"> Show min bid </Button>
                </div>
            }
        </Card>
    )
}
