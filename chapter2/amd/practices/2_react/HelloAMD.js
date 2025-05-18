define(['react'], function (React) {
  return function HelloAMD(props) {
    return React.createElement('p', null, `Hello! ${props.message}`)
  }
})