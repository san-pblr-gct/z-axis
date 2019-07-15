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
    padding: 10,
    [theme.breakpoints.up('md')]: {
      padding: 20,
    },
    marginBottom: 60,
  },
  toolbar: {
    minHeight: 48,
  },
});
