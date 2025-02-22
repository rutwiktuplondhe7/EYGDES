import React from 'react';
import foodimage from '../assets/foodRecipe.png';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <>
      <Navbar /> 

      <section className='home'>
        <div className='left'>
          <h1>Recipe Sharing Platform</h1>
          <h5>
            Welcome to Recipe Sharing Platform, your go-to destination for discovering and sharing delicious recipes! 
            Whether you're a home cook or a seasoned chef, our platform lets you explore a variety of mouthwatering 
            dishes, save your favorite recipes, and even contribute your own creations.
          </h5>
          <button>Share your recipe</button>
        </div>
        <div className='right'>
          <img src={foodimage} width="320px" height="300px" alt="Food Recipe" />
        </div>
      </section>

      <div className='bg'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e1b0b0" fill-opacity="1" d="M0,192L24,181.3C48,171,96,149,144,165.3C192,181,240,235,288,266.7C336,299,384,309,432,277.3C480,245,528,171,576,160C624,149,672,203,720,186.7C768,171,816,85,864,64C912,43,960,85,1008,133.3C1056,181,1104,235,1152,261.3C1200,288,1248,288,1296,282.7C1344,277,1392,267,1416,261.3L1440,256L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>      </div>
      <Footer /> 
    </>
  );
}
