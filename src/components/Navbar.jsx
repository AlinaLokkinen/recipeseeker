import { Link, useNavigate } from "react-router";

const Navbar = () => {

    const navigate = useNavigate();

    return(
        <div className="bg-stone-200 h-20 top-0 rounded-b-md flex justify-between">
            <div className="flex">
                <Link to="/"><h1 className="self-center font-playfair ml-15 text-3xl font-medium"> Recipe <br /> Seeker</h1></Link>
            </div>
            <div className="flex gap-7 lg:gap-10 mr-15 font-lexend">
                <button className="bg-stone-800 text-white rounded-4xl h-10 lg:h-15 w-20 md:w-25 lg:w-35 self-center text-xs md:text-sm lg:text-lg"
                onClick={() => navigate("/randomizer")}>RANDOM</button>
                <button className="bg-stone-800 text-white rounded-4xl h-10 lg:h-15 w-20 md:w-25 lg:w-35 self-center text-xs md:text-sm lg:text-lg"
                onClick={() => navigate("/categories")}>BROWSE</button>
            </div>
        </div>
    )
}


export default Navbar;