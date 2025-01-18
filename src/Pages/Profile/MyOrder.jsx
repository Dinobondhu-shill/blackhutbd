import BackHome from "@/components/BackHome";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


const MyOrder = () => {
  return (
    <div className="lg:py-10 py-5 relative  top-12 min-h-screen">
      <BackHome />
     <Tabs defaultValue="active" className="w-full">
  <TabsList className='w-full flex gap-5'>
    <TabsTrigger className='w-1/2 text-[#000] font-bold lg:text-3xl hover:bg-pink-300 rounded-full '  value="active">Active Orders</TabsTrigger>
    <TabsTrigger className='w-1/2 text-[#000] font-bold lg:text-3xl hover:bg-pink-300 rounded-full ' value="previous">Previous Orders</TabsTrigger>
  </TabsList>
  <TabsContent className="my-10 md:px-10" value="active">You don't have any order right now</TabsContent>
  <TabsContent className="my-10 md:px-10" value="previous">Your previous Order will show here</TabsContent>
</Tabs>
    </div>
  );
};

export default MyOrder;