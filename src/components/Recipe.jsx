import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";

const Recipe = () => {
  const { id } = useParams();

  const [, setLoading] = useState(false);
  const [recipe, setRecipe] = useState();
  const [ingredients, setIngredients] = useState([]);

  const getIngredients = () => {
    if (!recipe) return;
    const ings = [];
    const rec = recipe[0];
    for (let i = 1; i <= 20; i++) {
      const ingredient = rec[`strIngredient${i}`];
      const measure = rec[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ings.push(`${ingredient} - ${measure ? `${measure}` : ""} `);
      }
    }
    setIngredients(ings);
  };

  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          import.meta.env.VITE_API_URL + `lookup.php?i=` + id
        );
        const data = await res.json();
        setRecipe(data.meals);
      } catch (err) {
        console.error("Error fetching recipe: " + err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, []);

  useEffect(() => {
    getIngredients();
  }, [recipe]);

  return (
    <div>
      {!recipe ? (
        <p>Loading...</p>
      ) : (
        <div>
          {recipe.map((rec) => {
            return (
              <div className="m-15 lg:m-30 font-playfair">
                <div key={rec.idMeal} className="mb-10">
                  <h1 className="text-2xl lg:text-6xl mb-5">{rec.strMeal}</h1>
                  <Link to={`/categories/${rec.strCategory}`}
                  className=" lg:text-xl underline">
                  {rec.strCategory}
                  </Link>
                </div>
                <div className="lg:flex lg:justify-evenly">
                  <div className="lg:w-1/4 mb-10">
                    <h2 className="text-lg lg:text-3xl mb-5 ">Ingredients</h2>
                    {ingredients.map((ingr, i) => {
                      return <li key={i} className="list-none mb-2 lg:m-2 text-sm lg:text-lg">{ingr}</li>;
                    })}
                  </div>
                  <div>
                    <img
                      src={rec.strMealThumb}
                      alt="A picture of a meal"
                      className="h-60 lg:h-120 rounded-xl"
                    />
                  </div>
                </div>
                <div className="">
                  <h2 className="text-lg lg:text-3xl mt-15 mb-5 text-center">
                    Instructions
                  </h2>
                  <div>
                    {rec.strInstructions.split("\r\n").map((rivi, i) => {
                      return (
                        <span key={i} className="text-md lg:text-lg">
                          {rivi}
                          <br />
                          <br />
                        </span>
                      );
                    })}
                  </div>
                  {rec.strYoutube && ( 
                    <a href={rec.strYoutube} className="underline">Check out the instructions in video form!</a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Recipe;
