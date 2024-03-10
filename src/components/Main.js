import React, { useState, createContext } from "react";


export const dataBasket = createContext();

function Main() 
{
    const [data, setData] = useState("login");
    const [score, setScore] = useState(0);

  return (
    <div>
      <dataBasket.Provider value={{ set: setData, score: score, setScore: setScore }}>
        {data === "homepage" && <HomePage />}
        {data === "login" && <Login />}
        {data === "question" && <Question />}
        {data === "result" && <Result />}
      </dataBasket.Provider>
    </div>
  )
}

export default Main
