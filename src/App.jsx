import React, { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react'; 
import { SplitText } from "gsap/SplitText";
import Navbar from "./Navbar";
import { useEffect } from "react";
import './App.css'
import Product from "./Product";
import Hero from "./Hero";
import cards from "./cards";
import AboutUsImg from "./assets/aboutUs.jpg"
import LogoImg from"./assets/logoo.png"
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);

function App() {
 let [search, setSearch] = useState(""); 

useEffect(()=> {
let split = SplitText.create(".text",{
type :"chars"
// charsClass: "char",
});
gsap.from(split.chars,{
  opacity: 0,
  yPercent:"random(-100,100)",
  rotation : "random(-60 , 60)",
  ease:"back.out",
  stagger:0.08,
   onComplete: ()=> {
     split.revert()
   }

  });

  return () => split.revert();
  
},[])
  
  return (
    <>
        <Navbar search={search} setSearch={setSearch}/> 

            <Hero />
<section class="text-gray-600 body-font bg-gray-100  w-full">
  <div class="container mx-auto flex flex-col md:flex-row items-center px-5 py-20">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-6/6  mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src={AboutUsImg}/>

    </div>
<div className="mx-auto flex px-5 py-5 items-center  md:flex-row  flex-col ">
    <div  className="lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left  text-center md:pl-16">
   <p className=" text-black font-bold mb-2">
  <i>Salon on Demand</i> 💄</p>
      <h1  className=" text title-font sm:text-6xl text-3xl  font-medium text-black"><span className=" text-[#eec0c0]">WHO </span> WE </h1> 
       <h1 className=" text title-font sm:text-6xl text-3xl mb-4 font-medium text-[#eec0c0] " > ARE?
      </h1>
      
      <p className="mb-8 leading-relaxed text-lg max-w-xl  text-black  ">
     Welcome to Glam The Girl, your one-stop-shop for finding the perfect hair salon near you! Our mission is to connect you with the best hair salons in your area and make booking an appointment a breeze. Thank you for choosing Glam The Girl!</p>
      <div className="flex justify-center md:justify-start">
        <button className="inline-flex text-black  bg-[#eec0c0] border border-[#eec0c0] font-bold py-3 px-6 rounded   ">Book Your Appointment Now</button>
      </div>
    </div>
  </div>
  </div>
</section>

      <Product search={search}/>  
      <cards/>
       <section className="text-black  body-font  bg-gradient-to-br from-white via-gray-50 to-gray-100 
            p-8  shadow-lg  ">
  <div className="container px-5 py-24 mx-auto ">
    <h1 className="text-5xl font-medium title-font   mb-12 text-center">It's Our Customer Who Love Us</h1>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3 w-full">
        <div className="h-full bg-[#eec0c0] p-8 rounded-3xl">
          
          <p className="leading-relaxed mb-6">  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#272520" fill="#413d33" stroke="#2e2c26" strokeWidth="1.5" className="quotations">
    <path d="M14 16C14 14.1144 14 13.1716 14.5858 12.5858C15.1716 12 16.1144 12 18 12C19.8856 12 20.8284 12 21.4142 12.5858C22 13.1716 22 14.1144 22 16C22 17.8856 22 18.8284 21.4142 19.4142C20.8284 20 19.8856 20 18 20C16.1144 20 15.1716 20 14.5858 19.4142C14 18.8284 14 17.8856 14 16Z" />
    <path d="M14 16V11.8626C14 8.19569 16.5157 5.08584 20 4" />
    <path d="M2 16C2 14.1144 2 13.1716 2.58579 12.5858C3.17157 12 4.11438 12 6 12C7.88562 12 8.82843 12 9.41421 12.5858C10 13.1716 10 14.1144 10 16C10 17.8856 10 18.8284 9.41421 19.4142C8.82843 20 7.88562 20 6 20C4.11438 20 3.17157 20 2.58579 19.4142C2 18.8284 2 17.8856 2 16Z" />
    <path d="M2 16V11.8626C2 8.19569 4.51571 5.08584 8 4" />
</svg>

"I can't imagine going back to the old ways of finding salons. Glam The Girl makes everything so convenient!"</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src="./src/assets/people.jpg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">Tem Bush</span>
              <span className="text-gray-500 text-sm">⭐⭐⭐⭐⭐ </span>
            </span>
          </a>
        </div>
      </div>
    
      <div className="p-4 md:w-1/3 w-full  ">
        <div className="h-full bg-[#eec0c0] p-8 rounded-3xl">
          
          <p className="leading-relaxed mb-6">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#22201c" fill="#13110d" stroke="#1b1a17" strokeWidth="1.5" className="quotations">
    <path d="M14 16C14 14.1144 14 13.1716 14.5858 12.5858C15.1716 12 16.1144 12 18 12C19.8856 12 20.8284 12 21.4142 12.5858C22 13.1716 22 14.1144 22 16C22 17.8856 22 18.8284 21.4142 19.4142C20.8284 20 19.8856 20 18 20C16.1144 20 15.1716 20 14.5858 19.4142C14 18.8284 14 17.8856 14 16Z" />
    <path d="M14 16V11.8626C14 8.19569 16.5157 5.08584 20 4" />
    <path d="M2 16C2 14.1144 2 13.1716 2.58579 12.5858C3.17157 12 4.11438 12 6 12C7.88562 12 8.82843 12 9.41421 12.5858C10 13.1716 10 14.1144 10 16C10 17.8856 10 18.8284 9.41421 19.4142C8.82843 20 7.88562 20 6 20C4.11438 20 3.17157 20 2.58579 19.4142C2 18.8284 2 17.8856 2 16Z" />
    <path d="M2 16V11.8626C2 8.19569 4.51571 5.08584 8 4" />
</svg>
"The best experience ever! The reviews helped me choose the perfect salon for my makeover."</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src="./src/assets/man.jpg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">Elan joe</span>
               <span className="text-gray-500 text-sm">⭐⭐⭐⭐ </span>
            </span>
          </a>
        </div>
        </div>
        
      <div className="p-4 md:w-1/3 w-full">
        <div className="h-full bg-[#eec0c0] p-8 rounded-3xl">
          
          <p className="leading-relaxed mb-6">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#131211" fill="#201f1c" stroke="#222120" strokeWidth="1.5" className="quotations">
    <path d="M14 16C14 14.1144 14 13.1716 14.5858 12.5858C15.1716 12 16.1144 12 18 12C19.8856 12 20.8284 12 21.4142 12.5858C22 13.1716 22 14.1144 22 16C22 17.8856 22 18.8284 21.4142 19.4142C20.8284 20 19.8856 20 18 20C16.1144 20 15.1716 20 14.5858 19.4142C14 18.8284 14 17.8856 14 16Z" />
    <path d="M14 16V11.8626C14 8.19569 16.5157 5.08584 20 4" />
    <path d="M2 16C2 14.1144 2 13.1716 2.58579 12.5858C3.17157 12 4.11438 12 6 12C7.88562 12 8.82843 12 9.41421 12.5858C10 13.1716 10 14.1144 10 16C10 17.8856 10 18.8284 9.41421 19.4142C8.82843 20 7.88562 20 6 20C4.11438 20 3.17157 20 2.58579 19.4142C2 18.8284 2 17.8856 2 16Z" />
    <path d="M2 16V11.8626C2 8.19569 4.51571 5.08584 8 4" />
</svg>
"I love how easy it is to find salons through Glam The Girl! Their platform is user-friendly and always up-to-date."</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src="./src/assets/women.jpg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">Alper Kamu</span>
               <span className="text-gray-500 text-sm">⭐⭐⭐ </span>
            
            </span>
          </a>
        </div>
        </div>

        
      </div>
    </div>

</section>

<section class="text-gray-600 bg-gray-100 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero"        src="./src/assets/newnails.webp"/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#f36666]">Amazing Designs,No Joke!!</h1>
      <p class="mb-8 leading-relaxed">Discover my collection of incredible designs that will surprise you with their originality and creativity. From elegant and minimalist patterns to bolder and more eye-catching styles, I have something for everyone. Each design is a unique expression of art and fashion, carefully crafted to highlight the beauty of your nails and complement your personal style. Let me take your nails to the next level with my exclusive designs!</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-[#f36666] border-0 py-2 px-6 focus:outline-none hover:bg-[#f85959] rounded text-lg">Gallery</button>
       
      </div>
    </div>
  </div>
</section>
   
   
  <footer class="text-gray-600 body-font bg-black">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

      <span class="ml-3 text-xl">  <img src={LogoImg} alt=""className="ml-3 text-xl  w-35"/></span>
    </a>
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"> © 2026 Glam the Girl  Salon & Spa | All Rights Reserved.

     <div> <a href="https://twitter.com/ BizRocketUp" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@Powered by BizRocketUp.com —</a></div>
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a class="text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>

    </>
  )
}

export default App

