import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#74070E] text-[#F4E3B2] py-8 md:py-12 md:px-6">
 <div className="container mx-auto">
   <div className="">
   <div className='block md:hidden'>
       <h3 className="text-xl font-semibold mb-4">Lent-It</h3>
       <p className="text-white/80 mb-4">
         Premium fashion rental for the discerning individual.
       </p>
     </div>
    <div className='flex justify-between md:justify-evenly'>
     <div className='hidden md:block w-[25vw]'>
       <h3 className="text-xl font-semibold mb-4">Lent-It</h3>
       <p className="text-white/80 mb-4 md:text-lg">
         Premium fashion rental for the discerning individual.
       </p>
     </div>
     <div>
       <h4 className="text-sm md:text-lg font-medium mb-4">Shop</h4>
       <ul className="space-y-2 text-xs md:text-lg">
         <li><a href="#" className="text-white/80 hover:text-white transition-colors">Men</a></li>
         <li><a href="#" className="text-white/80 hover:text-white transition-colors">Women</a></li>
         <li><a href="#" className="text-white/80 hover:text-white transition-colors">Costumes</a></li>
         <li><a href="#" className="text-white/80 hover:text-white transition-colors">Accessories</a></li>
       </ul>
     </div>
     
     <div>
       <h4 className="text-sm md:text-lg font-medium mb-4">About</h4>
       <ul className="space-y-2 text-xs md:text-lg">
         <li><a href="#" className="text-white/80 hover:text-white transition-colors">Our Story</a></li>
         <li><a href="#" className="text-white/80 hover:text-white transition-colors">Sustainability</a></li>
         <li><a href="#" className="text-white/80 hover:text-white transition-colors">Careers</a></li>
         <li><a href="#" className="text-white/80 hover:text-white transition-colors">Press</a></li>
       </ul>
     </div>
     
     <div>
       <h4 className="text-sm md:text-lg font-medium mb-4">Customer Service</h4>
       <ul className="space-y-2 text-xs md:text-lg">
         <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contact Us</a></li>
         <li><a href="#" className="text-white/80 hover:text-white transition-colors">Shipping & Returns</a></li>
         <li><a href="#" className="text-white/80 hover:text-white transition-colors">FAQ</a></li>
         <li><a href="#" className="text-white/80 hover:text-white transition-colors">Size Guide</a></li>
       </ul>
     </div>
   </div>
   </div> 
   
   <div className="border-t border-white/20 mt-8 pt-4 md:pt-8 text-center text-white/60 text-sm">
     <p>© {new Date().getFullYear()} Lent-It. All rights reserved.</p>
   </div>
 </div>
</footer>
    </div>
  )
}

export default Footer

 