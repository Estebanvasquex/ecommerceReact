import React, { useState } from "react";
import GridProducts from "../../components/GridProducts/GridProducts";
import Search from "../../components/Search/Search";

function Main(props) {
  const { setInputUser, inputUser } = props;

  return (
    <div>
      <Search setInputUser={setInputUser} inputUser={inputUser} />
      <GridProducts />
    </div>
  );
}

export default Main;
