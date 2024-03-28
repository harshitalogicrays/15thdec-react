import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Routing from "./features/Routing"

function App() {

  return (
  <>
  <ToastContainer
      position="bottom-left"
      autoClose={2000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
      theme="colored"
      />
   <Routing/>
  </>
  )
}

export default App
