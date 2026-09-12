import { Suspense, useState } from "react"
import Banner from "./components/Banner"
import Technologies from "./components/technologies/Technologies"
import type { ITech } from "./types/technologiestypes";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const technologiesFetch = async():Promise<ITech[]>=>{
  const res = await fetch("/technologies.json")
  const data = await res.json()
  return data;
}



function App() {
  
const [technologiesPromise] = useState(()=> technologiesFetch)
  return (
    <>
   
  
     <Navbar/>
     <Banner/>
  <Suspense fallback={<h2>loading...</h2>}>
     <Technologies technologiesPromise= {technologiesPromise()} />
  </Suspense>
  <Footer/>
  <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
