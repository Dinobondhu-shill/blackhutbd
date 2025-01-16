import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Lottie from "lottie-react";
import { GiBeachBag } from "react-icons/gi";
import animationData from "../../../public/food.json"

const MyCart = () => {
  
  return (
    <Sheet>
      <SheetTrigger asChild>
      <Button
      variant="outline"
      className="hidden md:flex items-center gap-1 cursor-pointer bg-gray-900 rounded-full px-5 py-2 text-white"
    >
      <GiBeachBag />
      <span className="text-sm font-medium">0.00</span>
    </Button>
      </SheetTrigger>
      <SheetContent  className="right-0 h-full w-full md:max-w-sm bg-white p-6 shadow-lg border-l transition-transform duration-300 ease-in-out transform data-[state=closed]:translate-x-full data-[state=open]:translate-x-0">
       
    <div className="flex flex-col h-full">
      <div className="flex-grow">
        {/* Add your drawer content here */}
        <h2 className=" font-semibold text-2xl my-4 text-center ">Your Cart</h2>
        
        {/* content goes here */}
        <div className="flex flex-col items-center justify-center h-full gap-10">
        <Lottie className="w-36" animationData={animationData} loop={true} />
        <p className="text-gray-600 text-center">Good food is always cooking! Go ahead, order some yummy items from the menu.</p>
        </div>
      </div>
      </div>
      </SheetContent>
    </Sheet>
         
      
    
 
  );
};

export default MyCart;