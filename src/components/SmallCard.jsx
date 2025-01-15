import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaExclamationCircle } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";
import AddCart from "./AddCart";

const SmallCard = ({ image, name, price, description }) => {
  return (
    <div className="flex items-end gap-3 rounded-md border w-fit hover:shadow-xl ">
      <div className="h-full">
        <img src={image} alt="" />
      </div>
      <div className="py-2">
        <h2 className="capitalize text-[16px] font-medium flex items-center gap-5">
          {name}
          <Dialog>
            <DialogTrigger asChild className="cursor-pointer text-gray-500">
              <FaExclamationCircle />
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="font-medium text-2xl text-gray-800">
                  {name}
                </DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </h2>
        <p className="text-gray-600 text-sm my-2">{description}</p>
        <p className="font-medium">৳{price} </p>
      </div>
      <div className="py-3 px-3">
     
     <AddCart name={'Coka-cola'} photo={image} price={29.00} description={"This is Description"} />
      </div>
    </div>
  );
};

export default SmallCard;
