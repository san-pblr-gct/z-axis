export default theme => ({
  footer: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 2001,
    [theme.breakpoints.down('sm')]: {
      zIndex: 2,
    },
    background: 'transparent',
  },
  icon: {
    color: 'white',
  },
})
