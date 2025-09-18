import { Navigate, useNavigate } from "react-router";



const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-black relative h-screen">
        <div className="bg-[url('../images/bg.jpg')] bg-cover h-screen opacity-50 absolute inset-0 "></div>
        <div className="h-full flex flex-row justify-evenly ">

            {/* nimi */}
          <div className="relative z-20 text-white font-playfair self-center ">
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl">
              Recipe <br /> Seeker
            </h1>
          </div>

            {/* kortti */}
          <div className="relative z-20 bg-white self-center h-1/3 md:h-1/3 lg:h-1/2 w-1/2 sm:w-1/3 lg:w-1/4 rounded-4xl flex flex-col gap-4 sm:gap-5 lg:gap-10 text-center justify-center font-lexend font-medium">
            <div className="text-xs sm:text-sm md:text-md lg:text-xl">
              <p>
                CAN'T DECIDE <br /> ON TODAY'S MENU?
              </p>
            </div>

            <div>
              <p className="text-xs lg:text-sm">
                Let recipe seeker decide for <br /> you or browse available{" "}
                <br />
                recipes!
              </p>
            </div>

            <div className="flex flex-col gap-1 md:gap-3 lg:gap-5">
              <button className=" bg-stone-800 text-white rounded-4xl h-8 md:h-10 lg:h-15 w-1/2 lg:w-1/2 self-center text-xs md:text-sm lg:text-xl"
              onClick={() => navigate("/randomizer")}>
                RANDOM
              </button>
              <button className=" bg-stone-800 text-white rounded-4xl h-8 md:h-10 lg:h-15 w-1/2 lg:w-1/2 self-center text-xs md:text-sm lg:text-xl"
              onClick={() => navigate("/categories")}>
                BROWSE
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
