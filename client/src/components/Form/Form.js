import axios from "axios";
import React, { useEffect, useState } from "react";
import { FormWrapper } from "./Form.styles";

export const Form = () => {
  const initalState = {
    breakfastName: "",
    calories: null,
  };
  const [newBreakfast, setNewBreakfast] = useState(initalState);

  const handleChange = (e) => {
    setNewBreakfast((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    console.log(newBreakfast);
  }, [newBreakfast]);

  const handleSubmit = async () => {
    try {
      await axios.post("/api/insert", newBreakfast);
      setNewBreakfast(initalState);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h1>Add new Breakfast:</h1>
      <input
        type="text"
        placeholder="Give brekfast name"
        name="breakfastName"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="How much calories"
        name="calories"
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </FormWrapper>
  );
};
