import React, { useEffect, useState } from "react";
import axios from "axios";
import Allplans from "./Allplans.jsx"
import Add from "./Add.jsx";
var App = () => {
  const [plan, setplan] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/api/plans").then((res) => {
      setplan(res.data);
      console.log(res.data)
    });
  }, []);

  return (
    <div>
     <div className="welcome"> <h1 className="title" > Welcome In Your Plans  💡 </h1> </div>
      <Allplans data={plan}/>
      <Add />
    </div>
  );
};

export default App;