import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useRef } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Camera, Send, Smile } from "lucide-react";
import EmojiPicker from "emoji-picker-react";
import { Theme } from 'emoji-picker-react';

const Chat = () => {
  const [message, setMessage] = useState("");
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const [emojiPickerPosition, setEmojiPickerPosition] = useState("top"); // Default position
  const inputBoxRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      console.log("Message sent:", message);
      setMessage("");
    }
  };

  const onEmojiClick = (emojiObject) => {
    setMessage((prev) => prev + emojiObject.emoji);
  };

  const handleEmojiPickerOpen = (isOpen) => {
    setIsEmojiPickerOpen(isOpen);

    if (isOpen && inputBoxRef.current) {
      const inputBoxRect = inputBoxRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if the input box is closer to the bottom of the screen
      if (viewportHeight - inputBoxRect.bottom < inputBoxRect.top) {
        setEmojiPickerPosition("top");
      } else {
        setEmojiPickerPosition("bottom");
      }
    }
  };

  return (
    <div className="lg:py-16 h-screen flex justify-center items-center">
      <div className="bg-white my-10 w-3/5 rounded-md">
        {/* message input form */}
        <div className="w-full max-w-3xl mx-auto p-4">
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 w-full rounded-lg"
          >
            <Button
              type="button"
              size="icon"
              variant="ghost"
              className="text-pink-500 hover:text-pink-600 hover:bg-pink-50"
            >
              <Camera className="h-5 w-5" />
              <span className="sr-only">Add media</span>
            </Button>
          <div className="flex-1 relative">
          <Input 
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-gray-200 rounded-full"
              ref={inputBoxRef} // Attach ref to the input box
            />
            <Popover
              open={isEmojiPickerOpen}
              onOpenChange={handleEmojiPickerOpen}
            >
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  className="text-gray-500 absolute top-0 right-2 hover:text-gray-800 hover:bg-gray-50"
                >
                  <Smile className="h-5 w-5" />
                  <span className="sr-only">Add emoji</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-[300px] h-[300px] p-0"
                side={emojiPickerPosition} // Dynamically set side
              >
                <EmojiPicker
                  onEmojiClick={onEmojiClick}
                  height={300}
                   className="custom-emoji-picker"
                  previewConfig={false}
                />
              </PopoverContent>
            </Popover>
          </div>
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
