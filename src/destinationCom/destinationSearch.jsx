import React from "react";

const DestinationSearch = ({ intial, setintial ,totalArr}) => {
  const changeFunc = (e) => {
    if (e.target.value == "") {
       setintial(totalArr)
    } else {
      let filteredData = intial.filter((each) =>
        each.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setintial(filteredData);
    }
  };
  return (
    <>
      <div>
        <input type="text" onChange={changeFunc}></input>
      </div>
    </>
  );
};

export default DestinationSearch;
