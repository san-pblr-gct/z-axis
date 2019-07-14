export default theme => ({
  footer: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 2001,
    borderTop: 'solid 1px ' + theme.background.primary,
    [theme.breakpoints.down('sm')]: {
      zIndex: 2,
    },
  },
})
