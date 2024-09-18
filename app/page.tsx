"use client"
import { useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import DropDown from './DropDown'


import Image from 'next/image'
 import "../app/assets/images/collection2.jpg"
import logo from "../app/assets/images/logo.png"
import Img1 from "../app/assets/images/IMG-20240915-WA0001.jpg"
import Img2 from "../app/assets/images/IMG-20240915-WA0002.jpg"
import Img3 from "../app/assets/images/IMG-20240915-WA0003.jpg"
import Img4 from "../app/assets/images/IMG-20240915-WA0004.jpg"
import Img5 from "../app/assets/images/IMG-20240915-WA0009.jpg"
import Img6 from "../app/assets/images/IMG-20240915-WA0006.jpg"
import Img7 from "../app/assets/images/IMG-20240915-WA0007.jpg"
import Img8 from "../app/assets/images/IMG-20240915-WA0008.jpg"
import Link from 'next/link'


export interface Product {
  id: number;
  name: string;
  price: number;
  image: any;
  
}

 export const products: Product[] = [
  { id: 1, name: "Classic Suit", price: 75000, image:Img1 },
  { id: 2, name: "Summer Dress", price: 45000, image:Img2},
  { id: 3, name: "Wedding Gown", price: 150000, image:Img3 },
  { id: 4, name: "Casual Shirt", price: 25000, image:Img4 },
  { id: 5, name: "Polo", price: 25000, image:Img5 },  
  { id: 6, name: "Agbada", price: 25000, image:Img6 },  
  { id: 7, name: "Native", price: 25000, image:Img7 },  
  { id: 8, name: "Danshiki", price: 25000, image:Img8 }, 
];


export default function TailorWebsite() {
  const [cart, setCart] = useState<Product[]>([])
  const addToCart = (product: Product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="">
      {/* Header */}
      <header className="bg-white shadow-sm h-[70px] flex justify-center items-center w-full fixed top-0 z-[200]">
        <div className="bg-white w-full h-[70px] mx-auto px-4 py-4 flex justify-between items-center fixed top-0">
        <Image 
                width={0}
                height={0}
                src={logo} alt="" className="w-[70px]" 
                />
          <nav>
            <ul className="flex space-x-10 sm:hidden max-sm:hidden md:flex lg-flex font-bold">
              <li><a href="#" className="text-black hover:text-gray-800">Home</a></li>
              <li><a href="#products" className="text-black hover:text-gray-800">Designs</a></li>
              <li><a href="#" className="text-black hover:text-gray-800">About</a></li>
              <li><a href="#" className="text-black hover:text-gray-800">Contact</a></li>
            </ul>
          </nav>
          
          <div className="max-sm:flex md:hidden lg:hidden"><DropDown/></div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className='bg-white'>
                <ShoppingCart className="h-4 w-4 border-black"  />
                <span className="sr-only">Cart</span>
                {cart.length > 0 && (
                  <span className="absolute top-3 right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cart.length}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[300px] h-[50vh] overflow-y-auto">
              {cart.length === 0 ? (
                <DropdownMenuItem>Your cart is empty</DropdownMenuItem>
              ) : (
                <>
                  {cart.map(item => (
                    <DropdownMenuItem key={item.id} className=" flex-col flex justify-between">
                      <span>{item.name}</span>
                      <span>₦{item.price.toLocaleString()}</span>
                     <div className='w-[100px] h-[100px]'>
                    <Image src={item.image} alt="images"/>
                     </div>
                      <Button variant="ghost" size="sm" onClick={() => removeFromCart(item.id)}>
                        Remove
                      </Button>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuItem>
                    <strong>Total: ₦{totalPrice.toLocaleString()}</strong>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Hero Section */} 
      <section  className="text-white py-20 h-[100vh] flex justify-center items-center bg-[url('../app/assets/images/collection2.jpg')] bg-center bg-cover">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Bestspoke Tailoring for Every Occasion</h2>
          <p className="text-xl mb-8">Crafting elegance, one stitch at a time</p>
         <Link href="/appointment"> <Button size="lg">Book an Appointment</Button></Link>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16" id="products">
        <div className="container mx-auto px-4 h-[80h]">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">Our Designs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <div key={product.id} className=" bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 z-0">
                <Image  className="w-full h-48 object-cover object-top"src={product.image} alt={product.name}/>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-black">{product.name}</h3>
                  <p className=" mb-4  text-black">₦{product.price.toLocaleString()}</p>
                  <div className='flex justify-around items-center gap-4'>
                  <Button onClick={() => addToCart(product)} className="w-full">
                    Add to Cart
                  </Button>
                  <Button className="w-full">
                   View Product
                  </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    {/* Testimonials */}
    <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center  text-black">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1,2].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <p className=" text-black mb-4">Adom Stitches has transformed my wardrobe. Their attention to detail and perfect fit is unmatched.</p>
                <p className="font-semibold  text-black"> Happy Client {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Adom Stitches</h3>
              <p>Crafting bespoke garments since 2005</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p>123 Fashion Street, Lagos, Nigeria</p>
              <p>Phone: +234 123 456 7890</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">Facebook</a>
                <a href="https://www.instagram.com/domi.yung?igsh=MXhlam12d2ZkNm1oZg==" className="hover:text-gray-300">Instagram</a>
                <a href="https://x.com/domiyung1?t=-7Ljzqb7kRiRgS7GG0a0lQ&s=09" className="hover:text-gray-300">Twitter</a>
                <a href="#" className="hover:text-gray-300">WatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )}