import { useParams } from "react-router-dom"
import { Navbar } from "./components/Navbar"

const arr = [{ id: 1, slug: `aaa` }]

function App() {
  const { slug } = useParams()

  const item = arr.find((x) => x.slug === slug)

  return (
    <>
      <Navbar />
      <h1>Page Main</h1>
    </>
  )
}

export default App
