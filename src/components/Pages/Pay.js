import React, { Component } from 'react';
import { connect } from 'react-redux';
import PayButton from '../PayButton/PayButton';
import { getCheckSum } from '../../data/app/appActions';

const { paymentEnv } = require('../../config/variables');
const { paytm: { [paymentEnv]: { url, merchantId, orderId, customerId, amount, industryTypeId, channelId, website, callbackUrl, email, phone } } } = require('../../config/variables');

class Pay extends Component {
  componentDidMount() {
    const { getCheckSum } = this.props;
    getCheckSum({
      'ORDER_ID': orderId,
      'MID': merchantId,
      'CUST_ID': customerId,
      'TXN_AMOUNT': amount,
      'INDUSTRY_TYPE_ID': industryTypeId,
      'CHANNEL_ID': channelId,
      'WEBSITE': website,
      'CALLBACK_URL': callbackUrl,
      'EMAIL': email,
      'MOBILE_NO': phone,
    });
  }
  render() {
    const { app: { clues, checksum } } = this.props;

    return !clues.length && checksum && <React.Fragment>
      <PayButton
        amount={amount}
        merchantId={merchantId}
        orderId={orderId}
        customerId={customerId}
        email={email}
        phone={phone}
        website={website}
        industryTypeId={industryTypeId}
        channelId={channelId}
        checksum={checksum}
        callbackUrl={callbackUrl}
        url={url} />
      {/* <img src="./img/partners.png" style={{ width: '100%', maxWidth: 250, margin: 'auto', display: 'block', marginTop: 10 }} /> */}
    </React.Fragment>;
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  getCheckSum: data => dispatch(getCheckSum(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pay);