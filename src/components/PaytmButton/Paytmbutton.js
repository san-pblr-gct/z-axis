import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { genchecksum } from './crypt';

// const key = 'qvXqT6z5tSKDjWXh';
const key = 'qWzN4AATjzd8pRPC'; // test

class Paytmbutton extends Component {
  state = {
    mid: this.props.merchantId,
    orderId: this.props.orderId,
    website: this.props.website,
    industryTypeId: this.props.industryTypeId,
    channelId: this.props.channelId,
    customerId: this.props.customerId,
    phone: this.props.phone,
    email: this.props.email,
    amount: this.props.amount,
    callbackUrl: this.props.callbackUrl,
    checksum: '',
    submit: false,
  };

  componentDidMount() {
    this.setProperties();
  }

  setProperties() {
    const { merchantId, orderId, website, industryTypeId, channelId, customerId, amount, phone, email, callbackUrl } = this.props;
    const paramarray = {};
    paramarray['ORDER_ID'] = orderId;
    paramarray['MID'] = merchantId;
    paramarray['CUST_ID'] = customerId;
    paramarray['TXN_AMOUNT'] = amount;
    paramarray['INDUSTRY_TYPE_ID'] = industryTypeId;
    paramarray['CHANNEL_ID'] = channelId;
    paramarray['WEBSITE'] = website;
    paramarray['CALLBACK_URL'] = callbackUrl;
    paramarray['EMAIL'] = email;
    paramarray['MOBILE_NO'] = phone;
    genchecksum(paramarray, key, checksum => this.setState({
      checksum,
    }));
  }
  onSubmit() {
    this.setState({
      submit: true,
    });
  }
  render() {
    const { merchantId, orderId, website, industryTypeId, channelId, customerId, amount, phone, email, callbackUrl } = this.props;
    const { checksum } = this.state;
    // const url = `https://securegw.paytm.in/theia/processTransaction?ORDER_ID=${this.props.orderId}`;
    const url = `https://securegw-stage.paytm.in/theia/processTransaction?ORDER_ID=${orderId}`;

    return <form className="form-control" action={url} name="f1" method="POST">
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
      <Button variant="contained" color={"primary"} style={{ margin: '20px auto', display: 'block', padding: 0, width: '100%', height: 50 }} disabled={this.state.submit}>
        <input type="submit" style={{ outline: 'none', color: 'white', padding: 0, background: 'none', border: 'none', width: '100%', height: 50, fontSize: 14, textTransform: 'uppercase', fontWeight: 'normal' }} value={
          this.state.submit
            ? 'Please wait..'
            : amount.toLocaleString('en-GB', { style: 'currency', currency: 'INR' })}
        onClick={this.onSubmit.bind(this)} />
      </Button>
    </form>;
  }
}

export default Paytmbutton;