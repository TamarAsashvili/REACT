import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  const date = new Date();
  // const date = new Date(2019, 6, 31, 15);   thime now or before
  const hours = date.getHours();
  const styles = {
    fontSize: "30px",
    backgroundColor: "#ff2",
    padding: "40px",
    textAlign: "center"
  };

  let timeOfDay;
  if (hours < 12) {
    timeOfDay = "morning";
    styles.color = "#8914a3";
  } else if (hours > 12 && hours < 17) {
    timeOfDay = "afternoon";
    styles.color = "#6ef";
  } else {
    timeOfDay = "night";
    styles.color = "#d90021";
  }

  return (
    <div>
      <Header />
      <h1>it is currenttly about {date.getHours() % 12} o'clock !</h1>
      <h3 style={styles}>Good {timeOfDay} !!!</h3>
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
