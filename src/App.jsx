import { useEffect, useState } from "react";
import "./App.css";
import FilterableProductTable from "./components/FilterableProductTable";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const endPoint = "get-data";
        const response = await fetch(`${apiURL}/${endPoint}`);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        await data.sort((a, b) => {
          if (a.category < b.category) return -1;
          if (a.category > b.category) return 1;
          return 0;
        });

        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <FilterableProductTable
        products={products}
        error={error}
        loading={loading}
      />
    </>
  );
}

export default App;