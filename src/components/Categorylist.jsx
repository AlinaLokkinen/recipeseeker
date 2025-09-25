import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Categorylist = () => {
  const [loading, setLoading] = useState(false);
  const [categoryInfo, setCategoryInfo] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          import.meta.env.VITE_API_URL + "categories.php"
        );
        const data = await res.json();
        setCategoryInfo(data.categories); // data.categories sisältää listan kategorioista
      } catch (err) {
        console.error("Virhe haettaessa kategorioita:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="font-playfair m-10 md:m-15 lg:m-25 font-medium">
      {loading ? (
        <p className="text-center text-3xl">Loading...</p>
      ) : (
        <div>
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl">Browse recipes by category</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {categoryInfo.map((c) => {
              return (
                <div key={c.idCategory} className="mt-15 lg:mt-20">
                  <button
                    className="flex gap-10"
                    onClick={() => navigate(`/categories/${c.strCategory}`)}
                  >
                    <img
                      src={c.strCategoryThumb}
                      alt="A picture of food according to its category"
                      className="h-30 lg:h-40 rounded-2xl"
                    />
                    <p className="self-center text-2xl">{c.strCategory}</p>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Categorylist;
