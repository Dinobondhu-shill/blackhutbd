import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
const Address = () => {
  return (
    <div className="lg:py-10 relative top-8">
      <div className='my-5 flex justify-around'>
      <h3 className=' font-bold text-3xl mb-5'>Address</h3>
      <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className='bg-[#e440a536] rounded-full hover:bg-pink-600 hover:text-white text-pink-600 group'> <span className="bg-pink-600 w-[20px] h-[20px] rounded-full group-hover:bg-white group-hover:text-pink-600 text-white font-bold">+</span>Add New</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Your Address</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

      </div>
    </div>
  );
};

export default Address;