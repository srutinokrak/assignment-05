import { Suspense, useState } from "react"
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Technologies from "./components/technologies/Technologies"
import type { ITech } from "./types/technologiestypes";
import { ToastContainer } from "react-toastify";


const technologiesFetch = async():Promise<ITech[]>=>{
  const res = await fetch("/technologies.json")
  const data = await res.json()
  return data;
}



function App() {
  
const [technologiesPromise] = useState(()=> technologiesFetch)
  return (
    <>
   
   <Nav/>
     
     <Banner/>
  <Suspense fallback={<h2>loading...</h2>}>
     <Technologies technologiesPromise= {technologiesPromise()} />
  </Suspense>

  <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
