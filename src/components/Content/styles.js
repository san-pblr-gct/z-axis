/* eslint-disable no-magic-numbers */

export default theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    wordBreak: 'break-word',
  },
  content: {
    flexGrow: 1,
    padding: 20,
    [theme.breakpoints.up('md')]: {
      padding: 20,
    },
  },
  toolbar: {
    height: 44,
  },
  fab: {
    height: 50,
    width: 50,
    float: 'right',
    top: -24,
  },
  green: {
    height: 50,
    width: 50,
    color: '#fff',
    float: 'right',
    marginTop: -25,
    marginRight: 10,
    borderRadius: '50%',
    backgroundColor: '#999',
    background: 'linear-gradient(60deg, #66bb6a, #43a047)',
    boxShadow: '0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)',
  },
});
