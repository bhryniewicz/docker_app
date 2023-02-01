import { useState, useEffect } from "react";
import axios from "axios";
import { BreakfastsList, Breakfast } from "./List.styles";

export const List = () => {
  const [breakfasts, setBreakfasts] = useState([]);

  useEffect(() => {
    const fetchMecze = async () => {
      const res = await axios.get("/api/get");
      console.log(res);
      setBreakfasts(res.data);
    };
    fetchMecze();
  }, []);

  return (
    <BreakfastsList>
      <h1>Breakfasts list:</h1>

      {breakfasts.length ? (
        breakfasts.map((breakfast) => {
          return (
            <Breakfast key={breakfast.id}>
              <span>{breakfast.breakfastName}</span>
              <span>{breakfast.calories} kcal</span>
            </Breakfast>
          );
        })
      ) : (
        <p>Lodaing...</p>
      )}
    </BreakfastsList>
  );
};
