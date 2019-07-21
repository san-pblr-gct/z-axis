/* eslint-disable no-magic-numbers */
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Paytmbutton extends Component {
  state = {
    submit: false,
  };
  onSubmit() {
    this.setState({
      submit: true,
    });
  }
  render() {
    return <form style={{ marginBottom: 0 }} className="form-control" action={`https://securegw.paytm.in/theia/processTransaction?ORDER_ID=${this.props.orderId}`} name="f1" method="POST">
      <input type="hidden" name="MID" value={this.props.merchantId} />
      <input type="hidden" name="WEBSITE" value={this.props.website} />
      <input type="hidden" name="INDUSTRY_TYPE_ID" value={this.props.industryTypeId} />
      <input type="hidden" name="CHANNEL_ID" value={this.props.channelId} />
      <input type="hidden" name="ORDER_ID" value={this.props.orderId} />
      <input type="hidden" name="CUST_ID" value={this.props.customerId} />
      <input type="hidden" name="TXN_AMOUNT" value={this.props.amount} />
      <input type="hidden" name="MOBILE_NO" value={this.props.phone} />
      <input type="hidden" name="EMAIL" value={this.props.email} />
      <input type="hidden" name="CALLBACK_URL" size="64" value={this.props.callbackUrl} />
      <input type="hidden" name="CHECKSUMHASH" value={this.props.checksum} />
      <Button variant="contained" color="primary" style={{ margin: '0 auto', display: 'block', padding: 0, width: '100%', height: 44 }} disabled={this.state.submit}>
        <input type="submit" style={{ outline: 'none', color: this.props.color === 'default' ? 'black' : 'white', padding: 0, background: 'none', border: 'none', width: '100%', height: 44, fontSize: 14, textTransform: 'uppercase', fontWeight: 'normal' }} value={
          this.state.submit
            ? 'Please wait..'
            : `Reveal Clues: ${this.props.amount.toLocaleString('en-GB', { style: 'currency', currency: 'INR' })}`}
        onClick={this.onSubmit.bind(this)} />
      </Button>
    </form>;
  }
}

export default Paytmbutton;