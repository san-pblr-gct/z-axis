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
    marginBottom: 60,
  },
  toolbar: {
    height: 40,
  },
  extension: {
    height: 24,
    width: 24,
    color: '#fff',
    float: 'right',
    padding: 10,
    marginTop: -8,
    marginRight: 10,
    borderRadius: 3,
    backgroundColor: '#999',
    background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
    boxShadow: '0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)',
  },
});
