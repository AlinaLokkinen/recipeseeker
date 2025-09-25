import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

const Recipelist = () => {
  const { name } = useParams();
  const navigate = useNavigate();

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
    <div className="font-playfair  font-medium ">
      
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid lg:grid-cols-2 m-15 lg:m-25">
            {recipes.map((rec) => {
          return (
            <div key={rec.idMeal} className=" lg:mt-15">
              <button 
                className="flex m-5 gap-4 lg:gap-8"
                onClick={() => navigate(`/recipe/${rec.idMeal}`)}>
                <img
                  src={rec.strMealThumb}
                  alt={rec.strMeal}
                  className="h-30 lg:h-40 rounded-2xl"
                />
                <p className="self-center text-lg lg:text-2xl">{rec.strMeal}</p>
              </button>
            </div>
          );
        })}
          </div>
        )}
      
    </div>
  );
};

export default Recipelist;
