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
// import "../../"

type Product = {
  id: number
  name: string
  price: number
  image: string
}

const products: Product[] = [
  { id: 1, name: "Classic Suit", price: 75000, image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "Summer Dress", price: 45000, image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Wedding Gown", price: 150000, image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "Casual Shirt", price: 25000, image: "/placeholder.svg?height=200&width=200" },
  { id: 5, name: "polo", price: 25000, image: "/placeholder.svg?height=200&width=200" },
  { id: 6, name: "Agbada ", price: 25000, image: "/placeholder.svg?height=200&width=200" },
  { id: 7, name: "Native ", price: 25000, image: "/placeholder.svg?height=200&width=200" },
  { id: 8, name: "Danshiki ", price: 25000, image: "/placeholder.svg?height=200&width=200" },
]

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
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Elegant Stitches</h1>
          <nav>
            <ul className="flex space-x-4 max-sm:hidden md:flex lg-flex ">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
              <li><a href="#products" className="text-gray-600 hover:text-gray-800">Designs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
          </nav>
          <div className="max-sm:flex md:hidden lg:hidden"><DropDown/></div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <ShoppingCart className="h-4 w-4 border-black"  />
                <span className="sr-only">Cart</span>
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cart.length}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              {cart.length === 0 ? (
                <DropdownMenuItem>Your cart is empty</DropdownMenuItem>
              ) : (
                <>
                  {cart.map(item => (
                    <DropdownMenuItem key={item.id} className="flex justify-between">
                      <span>{item.name}</span>
                      <span>₦{item.price.toLocaleString()}</span>
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
      <section  className="bg-gray-800 text-white py-20 h-[100vh] flex justify-center items-center bg-[url('/img/hero-pattern.svg')]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Bestspoke Tailoring for Every Occasion</h2>
          <p className="text-xl mb-8">Crafting elegance, one stitch at a time</p>
          <Button size="lg">Book an Appointment</Button>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16" id="products">
        <div className="container mx-auto px-4 h-[80h]">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">Our Designs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-black">{product.name}</h3>
                  <p className=" mb-4  text-black">₦{product.price.toLocaleString()}</p>
                  <Button onClick={() => addToCart(product)} className="w-full">
                    Add to Cart
                  </Button>
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
            {[1, 2].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <p className=" text-black mb-4">"Elegant Stitches has transformed my wardrobe. Their attention to detail and perfect fit is unmatched."</p>
                <p className="font-semibold  text-black">- Happy Client {i}</p>
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
              <h3 className="text-xl font-semibold mb-4">Elegant Stitches</h3>
              <p>Crafting bespoke garments since 2005</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p>123 Fashion Street, Lagos, Nigeria</p>
              <p>Phone: +234 123 456 7890</p>
              <p>Email: info@elegantstitches.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">Facebook</a>
                <a href="#" className="hover:text-gray-300">Instagram</a>
                <a href="#" className="hover:text-gray-300">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )}