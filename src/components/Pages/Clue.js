/* eslint-disable no-magic-numbers */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
// import ClueIcon from '@material-ui/icons/Widgets';
import { withStyles } from '@material-ui/core/styles';

import PayButton from '../PayButton/PayButton';
import styles from './styles';
import { getCheckSum } from '../../data/app/appActions';

const amount = 49;
// const merchantId = 'lzSXOq48634307639622';
const merchantId = 'lfBFyS02396274370168'; // test
const orderId = (new Date()).getTime();
const customerId = `Customer-${(new Date()).getTime()}`;
const email = '-';
const phone = '-';
const website = "WEBSTAGING"
const industryTypeId = "Retail"
const channelId = "WEB"
const callbackUrl = `https://${window.location.host}/paymentprocess`;

class Page extends Component {
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
  getClues() {
    const { app: { clues, checksum } } = this.props;
    if (!clues.length && checksum) return <div>
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
        callbackUrl={callbackUrl} />
    </div>;
    return clues.map((clue, i) => <Typography variant="subtitle2" key={i}>{i + 1}: <i>{clue}</i></Typography>);
  }
  render() {
    const { app: { checksum }, classes } = this.props;
    return !checksum ? null : <div style={{ marginTop: 20 }}>
      {/* <ClueIcon className={classes.clueIcon} /> */}
      <div className={classes.pageTitle}>
        {this.getClues()}
      </div>
    </div>;
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  getCheckSum: data => dispatch(getCheckSum(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Page));