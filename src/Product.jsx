import React, { useState } from "react";
import Cards from "./cards";
 import coldCoffee from "/videos/makeup.mp4";
 import ice from "/videos/bridl.mp4";
 import me from "/videos/eye.mp4";
 import plz from "/videos/valima.mp4";
 import yumy  from "/videos/haircutt.mp4";
import she from "/videos/brush.mp4";
import hairs from "/videos/hydra facial.mp4";
import facial from "/videos/hair ceritine.mp4";

function Product({ search }) {
const [cart, setCart] = useState([]);
  let cards= [
    {id:1  , name :"PARTY MAKEUP" ,  category :" a glamorous, long-lasting look for social events, balancing polish  stands out in photos and lasts through the event" , price: 2.80 , video :"/videos/makeup.mp4" },
     {id:2  , name :"BRIDLE MAKEUP" ,
     category :"Creates a flawless, long-lasting, and camera-ready look, focusing on enhancing , picture-perfect finish that lasts through event." ,
        price: 3.99 ,
        video:"/videos/bridl.mp4" },
     {id:3  , name :"SMOKYEYE MAKEUP"  , category :"sultry makeup look featuring dark, blended eyeshadow and eyeliner for a soft, gradient effect, creating depth and making eyes appear larger" , price:16.99  ,video:"/videos/eye.mp4" },
     {id:4 , name :"VALIMA"  , category :"Often styled with soft, romantic curls, elegant updos, or, for hijabi brides, styled with delicate draping" , price: 18.40 ,video: "/videos/valima.mp4" },
    {id:5 , name :"HAIR EXTENSIONS"  , category :": A new hairstyle can significantly lift your mood and confidence. " , price: 4.89 ,video: "/videos/haircutt.mp4" },
    {id:6 , name :"ACESSORIES"  , category :"The essential tools, supplies, and small equipment used in beauty salons for services like hair, nails, and skin care, ranging from basic combs, brushes, and foils ." , price: 2.70 ,video: "/videos/brush.mp4" },
  {id:7 , name :"HYDRA FACIAL"  , category :"A popular, non-invasive skin treatment that uses a patented device to cleanse, exfoliate, extract impurities" , price: 16.70 ,video: "/videos/hydra facial.mp4" },
  {id:8 , name :" HAIR KERATIN"  , category :"a natural protein that forms the structure of hair, providing strength and health, but formaldehyde, which carries health risks. " , price: 18.40 ,video: "/videos/hair ceritine.mp4" },



  ];
  const filteredProduct = cards.filter((item)=>
    item.name.toLowerCase().includes(search.trim().toLowerCase())); 
  
  // 

  // ADD
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // DECREASE
  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // REMOVE
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

 
 return(
   <> 
    <cart
  cart={cart}
  addToCart={addToCart}
  decreaseQty={decreaseQty}
  removeItem={removeItem}
/>

  <section className="bg-gray-100 body-font w-full ">
      <div className="container mx-auto px-14 sm:px-26 lg:px-8  ">
      <h1 className="text-5xl font-medium title-font text-[#f36666] mb-12 text-left ">OUR EXPERTISE</h1>
    <div   className="flex flex-wrap -m-4">
   
    {filteredProduct.map((item)=>(
     <div key={item.id} className=" lg:w-1/4 md:w-1/2 
      sm:w-1/2 p-4 w-full  ">
       <div className="  block  h-90  md-h-72  lg-h-80  h-64 sm:h-72  md:h-80 lg:h-90     
  xl:h-96  rounded-3xl overflow-hidden">
          <video 
    className="object-cover object-center w-full h-full  " muted  loop  playsInline   onMouseEnter={e => e.target.play()}
                   onMouseLeave={e => e.target.pause()}>
     <source src={item.video} type="video/mp4" />
   </video> 
         </div>
         <div className="mt-4">
<p className="mt-1 price font-bold text-[#f36666] ">${item.price}</p>
           <h2 className=" text-black font-bold text-lg ">{item.name} </h2>
           <p className="text-black text-xs tracking-widest title-font mb-1">{item.category}</p>


             <button
        onClick={() => addToCart(item)}
        className="bg-[#f36666] text-white px-4 py-2 rounded font-bold"
      >
        Add to Cart
      </button>
         </div>
       </div>
     ))}
   </div>
   {filteredProduct.length===0 &&(
   <h1 className="text-[#f36666]  font-bold  text-xl mt-">PRODUCT NOT FOUND</h1>
)}
       </div>
 </section>
  
 

     <div className="container mx-auto px-5 py-10">
   
     

      {/* CART */}
      <div className="mt-10 bg-gray-100 p-5 rounded">
        <h2 className="text-xl font-bold mb-4">Cart</h2>

        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-3"
            >
              <span>
                {item.name} (Rs {item.price})
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-2 bg-gray-300"
                >
                  -
                </button>

                <span>{item.qty}</span>

                <button
                  onClick={() => addToCart(item)}
                  className="px-2 bg-gray-300"
                >
                  +
                </button>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 font-bold"
                >
                  ❌
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div> 

   </>
 )
 

 }
 export default Product