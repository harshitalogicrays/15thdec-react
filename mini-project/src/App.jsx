import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Routing from "./features/Routing"
import DataProvider from "./DataProvider";

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
      <DataProvider>
          <Routing/>
      </DataProvider>
  </>
  )
}

export default App
