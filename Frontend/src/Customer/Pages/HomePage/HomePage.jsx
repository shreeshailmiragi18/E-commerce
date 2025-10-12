import React from 'react'
import MainCarousel from '../../Components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../Components/HomeSectionCarousel/HomeSectionCarousel';
import { Mens_Kurta } from '../../../Data/Mens_Kurta';


const HomePage = () => {
  return (
    <div>
          <MainCarousel  />

      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10 bg-white ">
        <HomeSectionCarousel data={Mens_Kurta} sectionName="Men's Kurtas" />
        <HomeSectionCarousel data={Mens_Kurta} sectionName="Men's Shoes" />
        <HomeSectionCarousel data={Mens_Kurta} sectionName="Men's Shirt" />
        <HomeSectionCarousel data={Mens_Kurta} sectionName="Women's Saree" />
        <HomeSectionCarousel data={Mens_Kurta} sectionName="Women's Dress" />
     
      </div>
    </div>
  )
}

export default HomePage;
 








