
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import img1 from "../../public/food/New/Chicken-Chow-Mein-1-cover.jpg";
import { IoBagAdd } from "react-icons/io5";
import { FaExclamationCircle } from "react-icons/fa";
import AddCart from "./AddCart";

const FoodCard = () => {
  return (
    <div className="bg-white w-fit overflow-hidden rounded-md hover:shadow-lg border">
      <div className="rounded-t-xl">
        <img src={img1} alt="" />
      </div>
      <div className="px-3 py-2">
        <h2 className="capitalize text-[16px] font-medium flex items-center gap-5">
          Name
          <Dialog>
            <DialogTrigger asChild className="cursor-pointer text-gray-500">
              <FaExclamationCircle />
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="font-medium text-2xl text-gray-800">
                  Full Name goes Here
                </DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </h2>
        <p className="text-gray-600 text-sm my-3">This is description</p>
        <div className="flex justify-between items-center pb-2">
          <p className="font-medium">৳249.00 </p>
         <AddCart name={'Thai Fried chicken'} photo={img1} price={249.00} description={"Hello from description"} />
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
