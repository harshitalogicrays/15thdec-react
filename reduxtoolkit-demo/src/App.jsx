import Add from "./Add"
import View from "./View"

function App() {
 
  return (
    <div className="container mt-5">
    <h1>Redux toolkit demo</h1>
        <div className="row">
          <div className="col"><Add/></div>
          <div className="col"><View/></div>
        </div>
    </div>
    )
}

export default App
