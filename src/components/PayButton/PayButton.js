/* eslint-disable no-magic-numbers */
import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import HourGlassIcon from '@material-ui/icons/HourglassFull'
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

class Paytmbutton extends Component {
  state = {
    submit: false,
  };
  onSubmit() {
    this.setState({
      submit: true,
    });
    document.getElementById('pay-form').submit();
  }
  render() {
    const { classes } = this.props;
    const { url, orderId, merchantId, website, industryTypeId, channelId, customerId, amount, phone, email, callbackUrl, checksum } = this.props;

    return <form id="pay-form" style={{ marginBottom: 0 }} className="form-control" action={url} name="f1" method="POST">
      <input type="hidden" name="MID" value={merchantId} />
      <input type="hidden" name="WEBSITE" value={website} />
      <input type="hidden" name="INDUSTRY_TYPE_ID" value={industryTypeId} />
      <input type="hidden" name="CHANNEL_ID" value={channelId} />
      <input type="hidden" name="ORDER_ID" value={orderId} />
      <input type="hidden" name="CUST_ID" value={customerId} />
      <input type="hidden" name="TXN_AMOUNT" value={amount} />
      <input type="hidden" name="MOBILE_NO" value={phone} />
      <input type="hidden" name="EMAIL" value={email} />
      <input type="hidden" name="CALLBACK_URL" size="64" value={callbackUrl} />
      <input type="hidden" name="CHECKSUMHASH" value={checksum} />
      <Fab className={classes.fab} color={'secondary'} onClick={this.onSubmit.bind(this)} aria-label="clues" name="clues">
        {this.state.submit
          ? <HourGlassIcon />
          : `Clues ${this.props.amount.toLocaleString('en-GB', { style: 'currency', currency: 'INR' })}`}
      </Fab>
      {/* <Button variant="contained" color="secondary" style={{ margin: '0 auto', display: 'block', padding: 0, width: '100%', height: 44 }} disabled={this.state.submit}>
        <input type="submit" style={{ outline: 'none', color: 'white', padding: 0, background: 'none', border: 'none', width: '100%', height: 44, fontSize: 14, textTransform: 'uppercase', fontWeight: 'normal' }} value={
          this.state.submit
            ? 'Please wait..'
            : `Reveal Clues: ${this.props.amount.toLocaleString('en-GB', { style: 'currency', currency: 'INR' })}`}
          onClick={this.onSubmit.bind(this)} />
      </Button> */}
    </form>;
  }
}

export default withStyles(styles)(Paytmbutton);