import React from 'react';
import Banner from '../../Components/Banner/Banner';
import CoffeeSection from '../../Components/coffee-section/CoffeeSection';
import DessertSection from '../../Components/Dessert-section/DessertSection';

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <CoffeeSection></CoffeeSection>
      <DessertSection></DessertSection>
    </>
  );
};

export default Home;
