export default theme => ({
  appBar: {
    // eslint-disable-next-line no-magic-numbers
    zIndex: theme.zIndex.drawer + 1,
    background: '#394959',
  },
  menuButton: {
    cursor: 'pointer',
    padding: 8,
    marginRight: 0,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
    },
  },
  menuIcon: {
    height: '1.2em',
    width: '1.2em',
  },
  toolBar: {
    minHeight: 50,
    marginLeft: 0,
    [theme.breakpoints.down('sm')]: {
      marginLeft: -20,
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: -12,
    },
  },
  flex: {
    color: '#fff',
    cursor: 'pointer',
    flexGrow: 1,
  },
  italics: {
    fontStyle: 'italic',
  },
  logoIcon: {
    cursor: 'pointer',
    height: 25,
    width: 25,
    marginRight: 20,
  },
});
