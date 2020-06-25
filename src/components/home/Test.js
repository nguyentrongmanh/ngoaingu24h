import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
// import Content from "../layout/Content"
import RankTable from "./test/RankTable";
// import TestInfo from "./test/TestInfo";

const Test = () => {
  return (
    <div>
      <Header></Header>
      {/* <Content> */}
      {/* <TestInfo></TestInfo> */}
      <RankTable></RankTable>
      {/* </Content> */}
      <Footer></Footer>
    </div>
  );
};

export default Test;
