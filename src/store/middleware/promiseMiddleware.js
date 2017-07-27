import promiseMiddleware from 'redux-promise-middleware'

export default promiseMiddleware({
  promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR'],
})
