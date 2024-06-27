import React from 'react';
import Navbar from "./navbar/Navbar";
import Header from "./header/Header";
import History from "./history/History";
import Slider from "./slider/Slider";
import Team from "./team/Team";
import Footer from './footer/Footer';

function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <History />
      <Slider />
      <Team />
      <Footer />
    </main>
  );
}

export default App;
