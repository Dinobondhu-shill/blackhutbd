import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook } from 'lucide-react'
import { Link } from "react-router-dom";
import logo from '../../public/food/New/3.png'
// bg-[#FF0066]

const Footer = () => {
  return (
    <footer className="bg-[#FF0066] text-white px-5  md:px-10 lg:px-28">
    <div className="container px-4 py-8  mx-auto">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Left Column - Newsletter */}
        <div className="space-y-4 ">
          <img 
            src={logo}
            alt="BlackHut Logo" 
            width={150} 
            height={40}
            className="mb-4"
          />
          <p className="text-sm">Subscribe to our newsletter to get latest updates</p>
          <div className="flex gap-2 bg-white relative py-2 rounded-sm">
          <input
  type="email"
  placeholder="Your email address"
  className="text-black w-full outline-none border-none shadow-none focus:ring-0 focus:outline-none focus:border-none py-1 px-2"
/>
            <Button 
              className="whitespace-nowrap absolute top-[6px] right-2 bg-[#FF0066] text-white hover:bg-[#ff0066a1]"
            >
              Subscribe
            </Button>
          </div>
          <div className="space-y-2">
            <p className="text-sm">Follow Us On</p>
            <div className="flex gap-2">
              <Link href="#" className="p-2 bg-white rounded-full">
                <Facebook className="w-5 h-5 text-[#FF0066]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Middle Column - Useful Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Useful Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="#" className="text-sm hover:underline">Privacy Policy</Link>
            <Link href="#" className="text-sm hover:underline">Terms & Conditions</Link>
            <Link href="#" className="text-sm hover:underline">Data Delete</Link>
          </nav>
        </div>

        {/* Right Column - Contact */}
        <div className="space-y-4">
          <a href="mailto:contact@blackhutbd.com" className="flex items-center gap-2 text-sm hover:underline">
            contact@blackhutbd.com
          </a>
          <a href="tel:01929-049000" className="flex items-center gap-2 text-sm hover:underline">
            01929-049000
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-8 mt-8 text-sm text-center border-t border-white/20">
        © Danpite.tech Ltd 2025, All Rights Reserved
      </div>
    </div>
  </footer>
  );
};

export default Footer;