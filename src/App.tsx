import Aside from "./components/aside"
import Footer from "./components/footer"
import Header from "./components/header"
import Projects from "./components/projects"



function App(){

  return (
    <>
   <div className="w-full">
      <Header />

    <Aside />

    <Projects />


    <Footer />
   </div>
    </>
  )
}


export default App