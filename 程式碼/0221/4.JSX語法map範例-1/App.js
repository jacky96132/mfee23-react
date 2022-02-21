import { data } from './data/student'

function App() {
  console.log(data)

  const newData = data.map((v, i) => {
    return <li>{v.name}</li>
  })

  console.log(newData)

  return (
    <>
      <ul>
        {data.map((v, i) => {
          return <li key={i}>{v.name}</li>
        })}
      </ul>
    </>
  )
}

export default App
