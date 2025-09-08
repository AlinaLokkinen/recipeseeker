import { useState, useEffect } from "react";
import { useParams } from "react-router";

const Recipelist = () => {
  const { name } = useParams();

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          import.meta.env.VITE_API_URL + "filter.php?c=" + name
        );
        const data = await res.json();
        setRecipes(data.meals);
      } catch (err) {
        console.error("Virhe haettaessa reseptejä:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="font-playfair m-25 font-medium grid grid-cols-2">
      
        {recipes.map((rec) => {
          return (
            <div key={rec.idMeal} className="mt-20">
              <button className="flex gap-8">
                <img
                  src={rec.strMealThumb}
                  alt={rec.strMeal}
                  className="h-40 rounded-2xl"
                />
                <p className="self-center text-2xl">{rec.strMeal}</p>
              </button>
            </div>
          );
        })}
      
    </div>
  );
};

export default Recipelist;
