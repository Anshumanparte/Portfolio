import ThreeOne from "./components/ThreeOne";
import { About, Contact, Feedbacks, Experience, Hero, Navbar, Tech, Works } from "./components";



function App() {

  return (
    <>
      
      <div className="relative z-0 w-full ">
        <div className="w-full ">
          <Navbar />
          <Hero />
        </div>

        <div className=" ">
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
