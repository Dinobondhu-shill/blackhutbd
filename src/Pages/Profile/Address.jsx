import Maps from "@/components/Maps";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { ImOffice } from "react-icons/im";
import { MdDashboardCustomize } from "react-icons/md";




const Address = () => {
const [label, setLabel] = useState(null);
console.log(label)

  return (
    <div className="lg:py-10 relative top-8">
      <div className='my-5 flex justify-around'>
      <h3 className=' font-bold text-3xl mb-5'>Address</h3>
      <form>
      <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className='bg-[#e440a536] rounded-full hover:bg-pink-600 hover:text-white text-pink-600 group'> <span className="bg-pink-600 w-[20px] h-[20px] rounded-full group-hover:bg-white group-hover:text-pink-600 text-white font-bold">+</span>Add New</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-2xl min-h-lvh">
        <DialogHeader>
          <DialogTitle>Your Address</DialogTitle>
        </DialogHeader>
        <Input  type="text" placeholder="Search Location" />
        <div style={{ height: '150px', width: '100%' }}>
          <Maps />
        </div>
        <div className="grid w-full">
      <Label htmlFor="address" className="text-sm  text-gray-600">Apartment & Flat No</Label>
      <Textarea required placeholder="" id="address" />
      <h4 className="mt-4 font-bold text-2xl -mb-4">Add Label</h4>
      <ToggleGroup required className='gap-4 my-5' type="single">
      <ToggleGroupItem
      onClick={()=>setLabel('Home')}
       className="flex items-center gap-2 w-full text-lg font-bold  bg-slate-200 p-4 rounded-md hover:bg-pink-100 hover:text-pink-500"  value="Home" aria-label="Toggle home">
       <FaHome /> 
       <span>Home</span>
      </ToggleGroupItem>
      <ToggleGroupItem
       onClick={()=>setLabel('Work')}
      className="flex items-center gap-2 w-full text-lg font-bold  bg-slate-200 p-4 rounded-md hover:bg-pink-100 hover:text-pink-500" value="Work" aria-label="Toggle work">
        <ImOffice />
        <span>Work</span>
      </ToggleGroupItem>
      <ToggleGroupItem
       onClick={()=>setLabel('Others')}
       className="flex items-center gap-2 w-full text-lg font-bold hover:bg-pink-100 hover:text-pink-500 bg-slate-200 px-4 rounded-md" value="Others" aria-label="Toggle others">
      <MdDashboardCustomize />
      <span>
        Others
      </span>
      </ToggleGroupItem>
    </ToggleGroup>
     
    </div>
        <DialogFooter>
          <Button className='w-full bg-pink-600' type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </form>
      </div>
    </div>
  );
};

export default Address;