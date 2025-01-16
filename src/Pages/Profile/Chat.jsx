import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Camera, Send } from 'lucide-react';
import { useState } from 'react';

const Chat = () => {
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      console.log("Message sent:", message)
      setMessage("")
    }
  }

  return (
    <div className="lg:py-16 h-screen flex justify-center items-center ">


<div className='bg-white my-10 w-3/5 rounded-md'>
 {/* message input form  */}
 <div className="w-full max-w-3xl  mx-auto p-4">
      <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full  rounded-lg">
        <Button
          type="button"
          size="icon"
          variant="ghost"
          className="text-pink-500 hover:text-pink-600 hover:bg-pink-50"
        >
          <Camera className="h-5 w-5" />
          <span className="sr-only">Add media</span>
        </Button>
        <Input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-gray-200 rounded-full"
        />
        <Button
          type="submit"
          size="icon"
          variant="ghost"
          className="text-gray-500 hover:text-gray-800 hover:bg-gray-50"
        >
          <Send className="h-5 w-5" />
          <span className="sr-only">Send message</span>
        </Button>
      </form>
    </div>
</div>
     
    </div>
  );
};

export default Chat;