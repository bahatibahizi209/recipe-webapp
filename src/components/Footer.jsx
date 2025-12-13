import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import logo from "../assets/logo.png";
function Footer() {
  return (
    <div className="bg-light-neutral-100 py-6">
     <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-3 gap-8 items-center">
    <div className="text-center md:text-left">
    <img src={logo}  className="h-10 w-auto" alt="logo of recipe website"/>
    </div>
     <div className="flex items-center justify-center space-x-1">
        <span className="text-gray-400">Copyright 2025</span>
        <span className="text-primary">&copy;Healthy Recipes</span>
     </div>
     <div className="flex items-center justify-center md:justify-end space-x-4">
    <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-20 transition-all
     duration-300 hover:scale-110">
    <Instagram className="fill-white h-8  w-8 text-center"/>
     </a>
  <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-20 transition-all
     duration-300 hover:scale-110">
    <Twitter className="fill-white h-8  w-8 text-center"/>
     </a>
     <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-20 transition-all
     duration-300 hover:scale-110">
    <Youtube className="fill-white h-8  w-8 text-center"/>
     </a>
     <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-20 transition-all
     duration-300 hover:scale-110">
    <Facebook className="fill-white h-8  w-8 text-center"/>
     </a>
     </div>
    </div>
     </div>
    </div>
  )
}

export default Footer
