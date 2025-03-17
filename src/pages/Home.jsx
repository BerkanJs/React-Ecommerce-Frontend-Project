import React from 'react'
import HomeHero from '../components/HomeHero'
import LatestCollections from '../components/LatestCollections'
import BestSellersSlider from '../components/BestSellersSlider'
import Policies from '../components/Policies'
import NewsLetterBox from '../components/NewsLetterBox'

const Home = () => {
  return (
    <div className="w-full bg-gray-50">
      <HomeHero />
      <LatestCollections />
      <BestSellersSlider />
      <Policies />
      <NewsLetterBox />
    </div>
  )
}

export default Home;
