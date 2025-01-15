import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { IoBagAdd } from "react-icons/io5";
import { Textarea } from "./ui/textarea";

const AddCart = ({ name, photo, price, description }) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price)
  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <Dialog className="">
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-1 text-sm text-pink-600 shadow-lg px-2 py-1 cursor-pointer hover:bg-pink-600 hover:text-white
               transition-all rounded-3xl border-none"
        >
          {" "}
          <IoBagAdd /> Add{" "}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:w-xl">
        <DialogHeader className="flex flex-row gap-4">
          <img src={photo} alt="" className="w-20 h-20 rounded-md space-y-3" />
          <div>
            <DialogTitle>{name}</DialogTitle>

            <DialogDescription className="mt-2">
              {description}
            </DialogDescription>
            <p className="text-lg font-medium "> ৳{price}.00</p>
          </div>
        </DialogHeader>
        <div className="flex gap-5 items-center">
          <p>Quantity: </p>

          <div className="flex items-center gap-3 bg-[#26252509] w-fit px-3 py-1 rounded-full">
            <button
              onClick={decrementQuantity}
              className="w-6 h-6 flex items-center justify-center rounded-full bg-rose-100 text-rose-600 hover:bg-rose-200 transition-colors"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span
              className="w-4 text-center tabular-nums"
              aria-label="Current quantity"
            >
              {quantity}
            </span>
            <button
              onClick={incrementQuantity}
              className="w-5 h-5 flex items-center justify-center rounded-full bg-rose-100 text-rose-600 hover:bg-rose-200 transition-colors"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>
      <div>
      <Label className='text-[12px] font-semibold' htmlFor="message">Special Instructions</Label>
      <Textarea placeholder="Add note (extra mayo, cheese, etc.)" id="message" />
      </div>
        <DialogFooter>
          <Button
            className="w-full bg-pink-600 hover:bg-pink-700"
            type="submit"
          >
            Add to cart - ৳{quantity*price}.00
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddCart;
