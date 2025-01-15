import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


const MyOrder = () => {
  return (
    <div className="lg:py-10 relative  top-12 min-h-screen">
     <Tabs defaultValue="active" className="w-full">
  <TabsList className='w-full'>
    <TabsTrigger className='w-1/2 text-[#000] font-bold text-3xl '  value="active">Active Orders</TabsTrigger>
    <TabsTrigger className='w-1/2 text-[#000] font-bold text-3xl ' value="previous">Previous Orders</TabsTrigger>
  </TabsList>
  <TabsContent className="my-10 px-10" value="active">You don't have any order right now</TabsContent>
  <TabsContent className="my-10 px-10" value="previous">Your previous Order will show here</TabsContent>
</Tabs>
    </div>
  );
};

export default MyOrder;