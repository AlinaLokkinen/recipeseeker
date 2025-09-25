import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Randomizer = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [chosenCategory, setChosenCategory] = useState();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          import.meta.env.VITE_API_URL + `categories.php`
        );
        const data = await res.json();
        setCategories(data.categories);
      } catch (err) {
        console.error("Error fetching categories: " + err);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      setChosenCategory(categories[0].strCategory);
    }
  }, [categories]);

  const getRandomRecipe = async () => {
    const url = import.meta.env.VITE_API_URL + `filter.php?c=${chosenCategory}`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.meals && data.meals.length > 0) {
        const randomNumber = Math.floor(Math.random() * data.meals.length);
        const randomRecipeId = data.meals[randomNumber].idMeal;
        navigate(`/recipe/${randomRecipeId}`);
      }
    } catch (err) {
      console.error("Error fetching recipes: " + err);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-around m-20 lg:m-30 font-playfair">
      <div className="flex flex-col text-center self-center flex-1">
        <h1 className="text-2xl">
          Can't decide? Let Recipe Seeker choose for you!
        </h1>
        <h2 className="mt-10 text-xl">Choose category:</h2>

        {categories && (
          <select
            className="text-center self-center w-1/3 mb-10 mt-5"
            value={chosenCategory}
            onChange={(e) => setChosenCategory(e.target.value)}
          >
            {categories.map((cat) => {
              return <option key={cat.idCategory}>{cat.strCategory}</option>;
            })}
          </select>
        )}
        <button
          className="bg-stone-800 text-white rounded-4xl lg:h-18 self-center text-md lg:text-lg font-lexend text-center px-6"
          onClick={getRandomRecipe}
        >
          GET RANDOM <br /> RECIPE
        </button>
      </div>

      <div className="mt-15 flex-1">
        <img
          src="../images/randomizer.jpg"
          alt="an egg sandwich"
          className="h-4/5 bg-blue-100 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Randomizer;
