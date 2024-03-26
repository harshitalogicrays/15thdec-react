import { FaArrowAltCircleLeft } from "react-icons/fa"
import { Navigate, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const ShowOnLogin=({children})=>{
    if(sessionStorage.getItem("logindata")!=null){
        let obj=JSON.parse(sessionStorage.getItem("logindata"))
        if(obj.isLoggedIn){
            return children
        }
        else return null   
    
    }
}

export const ShowOnLogout=({children})=>{
    if(sessionStorage.getItem("logindata")==null)
    return children
    else 
        return null
      
}

// export const Logout=()=>{
//         const navigate=useNavigate()
       

//          let handleLogout=()=>{
//             sessionStorage.removeItem("logindata")
//             toast.success("loggedOut successfully")
//             navigate('/')
//          }
//          return(<>
//             <span onClick={handleLogout}><FaArrowAltCircleLeft/> Logout</span>
//          </>)

// }