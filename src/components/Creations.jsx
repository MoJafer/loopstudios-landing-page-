import { creations } from "../consts"

const Creations = () => {
    return (
        <section className="md:p-20 p-5 w-full">
            <div className="flex flex-row md:justify-between justify-center items-center mb-10">
                <h1 className="md:text-5xl text-3xl max-md:text-center">OUR CREATIONS</h1>
                <a href="#!" className="border-solid border-2 border-black px-10 py-1 tracking-widest max-md:hidden">SEE ALL</a>
            </div>
            <div className="md:columns-4 columns-1 gap-8 ">

                {creations.map((creation, index) => (
                    <div key={creation.id} className="mb-8 relative">
                        <img src={creation.desktopImage} alt={creation.title} className="max-md:hidden" />
                        <img src={creation.mobileImage} alt={creation.title} className="md:hidden" />
                        <h1 className="absolute bottom-5 left-5 text-white lg:text-4xl md:text-3xl text-2xl md:w-2/3 w-1/3">{creation.title}</h1>
                    </div>
                ))}
            </div>
            <div className="text-center md:hidden">
                <a href="#!" className="border-solid border-2 border-black px-10 py-1 tracking-widest">SEE ALL</a>
            </div>

        </section>
    )
}

export default Creations