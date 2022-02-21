function Child(props) {
  console.log(props)

  return (
    <>
      {props.name}, {props.text}
    </>
  )
}

Child.defaultProps = {
  name: 'Pony',
  text: '沒有',
}

export default Child
