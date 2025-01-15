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
import { IoBagAdd } from "react-icons/io5";

const AddCart = ({ name, photo, price, description }) => {
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

            <DialogDescription className='mt-2'>{description}</DialogDescription>
            <p className="text-lg font-medium "> ৳{price}.00</p>
          </div>
        </DialogHeader>
        <DialogFooter>
          <Button
            className="w-full bg-pink-600 hover:bg-pink-700"
            type="submit"
          >
            Add to cart - ৳{price}.00
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddCart;
