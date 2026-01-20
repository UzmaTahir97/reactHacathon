import React, { useState } from "react";
// import search from "./search.png";


function Navbar({ search, setSearch }) {
 const [open, setOpen] = useState(false);
const [openSearch, setOpenSearch] = useState(false);



return(
    <>
  <header className="text-white body-font  fixed top-0 left-0 w-full z-50  ">

    <nav className="bg-[#eec0c0] shadow">
 <div className="flex justify-between items-center p-4">
<button  className="md:hidden text-2xl"  onClick={() => setOpen(!open)}>☰</button>

          {/* Mobile cart + search */}
      <div className="flex md:hidden items-center gap-2">
      
          <img  src="./src/assets/shopping-carrt.png" alt="png" className=" w-10 h-10 inline-flex items-center cart mr-2 md:mt-2 sm:mt-3 "/>
     
  <button onClick={() => setOpenSearch(!openSearch)}><img src= "/search.png" alt="search" className="w-12  mt-3   items-center" /></button>
</div>
        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6  items-center ">
      <li className="hover:text-white hover:border  border-[#f19696] p-1 rounded-3xl">SALON</li>
      <li className="hover:text-white hover:border   border-[#f19696] p-1 rounded-3xl">OUR EXPERTIES</li>
      <li className="hover:text-white hover:border   border-[#f19696] p-1 rounded-3xl">TESTIMONIALS</li>
      <li className="hover:text-white hover:border   border-[#f19696] p-1 rounded-3xl">CONTACT US</li>
</ul>

<a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center  lg:items-center lg:justify-center mb-4 md:mb-0">
       <img src="./src/assets/logoo .png"  alt=""className="ml-3 text-xl  w-35  bg-black logo"  />
    </a>
        
{/* {desktop serch +cart} */}
<div className="hidden md:flex gap-6">
     <img  src="./src/assets/shopping-carrt.png" alt="png" className=" w-10 h-10 inline-flex items-center cart mr-[-12px] md:mt-1 sm:mt-3 "/>
<div className=" border font-bold bg-white/100 text-black   flex text-center  here">
  <input type="search" placeholder="Search Here..."  value={search} 
    onChange={(e)=> 
    setSearch (e.target.value)}
     className="p-3 text-black  focus:outline-none  focus:ring-0 "/>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="2 -7 30 24 " width="30" height="30" color="#181717" fill="none" stroke="rgb(15, 15, 15)" strokeWidth="1.5" strokeLinecap="round" stroke-lineJoin="round">
    <path d="M17 17L21 21" />
    <path d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"  />
</svg>
</div> 
</div>
</div>
    
  {/* Mobile Search Input */}
    {openSearch && (
      <div className="md:hidden  p-4  border border-white rounded-3xl bg-white/100 text-black">
        <input
          type="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-2x1 p-3 focus:outline-none  focus:ring-0 font-bold  "
        />
      </div>
    )}

{/* {Moble Menu} */}
  {open && (
      <ul className="md:hidden p-4 bg-[#eec0c0] text-black  hover:text-white hover:border            border-[#f19696] p-1 rounded-3xl space-y-3">
        <img src={search}  alt="search" className="w-6 h-6"/>
      <li className="hover:text-white hover:border   border-[#f19696] p-1 rounded-3xl ">SALON</li>
       <li className="hover:text-white hover:border   border-[#f19696] p-1 rounded-3xl">OUR EXPERTIES</li>
      <li className="hover:text-white hover:border   border-[#f19696] p-1 rounded-3xl">TESTIMONIALS</li>
      <li className="hover:text-white hover:border   border-[#f19696] p-1 rounded-3xl">CONTACT US</li> 

     </ul>

      )}

        
    </nav>
</header>
</>
)}
export default  Navbar;



