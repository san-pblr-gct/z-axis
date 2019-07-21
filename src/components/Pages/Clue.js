/* eslint-disable no-magic-numbers */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import ClueIcon from '@material-ui/icons/Widgets';
import { withStyles } from '@material-ui/core/styles';

import PaytmButton from '../PayButton/PayButton';
import styles from './styles';
import { getCheckSum } from '../../data/app/appActions';

const amount = 9;
const merchantId = 'lzSXOq48634307639622';
const orderId = (new Date).getTime();
const customerId = (new Date).getTime();
const email = '';
const phone = '';
const website = "DEFAULT"
const industryTypeId = "Retail"
const channelId = "WEB"
const callbackUrl = `https://${window.location.host}/paymentsuccess`;

class Page extends Component {
  componentDidMount() {
    const { getCheckSum } = this.props;
    getCheckSum({
      orderId, merchantId, customerId, amount, industryTypeId, channelId, website, callbackUrl, email, phone,
    });
  }
  getClues() {
    const { app: { clues, checksum } } = this.props;
    if(!clues.length && checksum) return <PaytmButton
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
      callbackUrl={callbackUrl} />;
    return clues.map((clue, i) => <Typography variant="subtitle2" key={i}>{i+1}: <i>{clue}</i></Typography>);
  }
  render() {
    const { classes } = this.props;
    return <div style={{ marginTop: 20 }}>
      <ClueIcon className={classes.clueIcon} />
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