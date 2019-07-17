export default theme => ({
  app: {
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    color: '#333',
    background: "url('/img/bg.jpg'), url('/img/bg2.jpg') #000",
    backgroundPosition: 'top 40px left, top 60px right',
    backgroundSize: "300px 400px, 100px 500px",
    backgroundRepeat: 'no-repeat',
  },
  contentWrapper: {
    // [theme.breakpoints.up('md')]: {
    //   marginLeft: 275,
    // },
  },
  content: {
    maxWidth: 860,
    margin: 'auto',
  },
  sidebar: {
  },
  fab: {
    position: 'fixed',
    bottom: 40,
    right: 20,
    zIndex: 2002,
  },
  footer: {
    fontStyle: 'italic',
    fontWeight: 300,
    width: '100%',
    position: 'fixed',
    textAlign: 'center',
    padding: 10,
    background: '#4267b2',
    color: '#fff',
    bottom: 0,
    zIndex: 2001,
    // borderTop: 'solid 2px ' + theme.background.primary,
    [theme.breakpoints.down('sm')]: {
      zIndex: 2,
    },
  },
});
