
import { useFetch } from "./Pages/Components/useFetch";
const [, , third] = ['One', 'Two', 'Three']

function App({ name, login }) {
  const {loading, data, error} = useFetch(
    `https://api.github.com/users/${login}`
  )
  if(loading) return(<h1>Loading..</h1>)
  if(error) return(<pre>{JSON.stringify(error, null, 2)}</pre>)

  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <h1>{third}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
