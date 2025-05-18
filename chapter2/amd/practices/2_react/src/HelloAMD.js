define(['react'], function (React) {
  return function HelloAMD(props) {
    React.useEffect(() => {
      console.log('HelloAMD mounted')
    }, [])

    return React.createElement('p', null, `Hello! ${props.message}`)
  }
})