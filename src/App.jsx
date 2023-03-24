import Header from "./components/Header"
import imageInteractiveDk from './assets/images/desktop/image-interactive.jpg'
import imageInteractiveMb from './assets/images/mobile/image-interactive.jpg'
import Footer from "./components/Footer"
import Creations from "./components/Creations"

function App() {

  return (
    <div className="w-full">

      <Header />

      <section className="md:p-20 p-5">
        <div className="lg:relative p-5 lg:w-2/3 max-lg:flex max-lg:flex-col max-lg:items-center">
          <img src={imageInteractiveMb} alt="image-interactive-mobile" className="lg:hidden mb-10" />

          <div className="relative">
            <img src={imageInteractiveDk} alt="image-interactive-desktop" className="max-lg:hidden" />

            <div className="lg:p-20 lg:bg-white lg:text-left lg:w-5/6 lg:absolute lg:left-[80%] lg:top-[40%] text-center">
              <h1 className="md:text-5xl text-3xl mb-5 md:tracking-widest tracking-normal">THE LEADER IN INTERACTIVE R</h1>
              <p className="text-slate-500 leading-7">
                Fonded in 2011, Loopstudios has been producing world-class virtual reality projjects for some of the est companies around the globe. Ouraward-wining creations hae transformed businesses through digital experiences that bind to their brand
              </p>
            </div>
          </div>

        </div>
      </section>

      <Creations />

      <Footer />
    </div>
  )
}

export default App
