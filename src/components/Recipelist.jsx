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
    <div>
      <div>
        {recipes.map((rec) => {
          return (
            <div key={rec.idMeal}>
              <button>
                <img
                  src={rec.strMealThumb}
                  alt={rec.strMeal}
                  className="h-20"
                />
                <p>{rec.strMeal}</p>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recipelist;
