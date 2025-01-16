import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Camera, Send, Smile } from "lucide-react";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); // State for all messages
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const [emojiPickerPosition, setEmojiPickerPosition] = useState("top"); // Default position
  const inputBoxRef = useRef(null);
  const [photo, setPhoto] = useState(null);

  // Load messages from localStorage on component mount
  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(storedMessages);
  }, []);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhoto(reader.result); // Set the image preview as base64
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() || photo) {
      const newMessage = {
        text: message,
        photo,
        timestamp: new Date().toISOString(), // Add a timestamp
      };

      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages); // Update state
      localStorage.setItem("messages", JSON.stringify(updatedMessages)); // Save to localStorage

      setMessage(""); // Clear input
      setPhoto(null); // Reset photo
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
      <div className="bg-white h-5/6 my-10 w-3/5 rounded-md">
        {/* Messages display */}
        <div className="p-4 max-h-[70%] text-end overflow-y-auto chat_plate">
          {messages.map((item, index) => (
            <div
              key={index}
              className="mb-4 p-2 rounded-md  gap-4 space-y-2"
            >
              {item.photo && (
               <div className="flex justify-end overflow-hidden px-4 "> <img
               src={item.photo}
               alt="Uploaded"
               className="w-12 h-12 object-cover rounded-md"
             /></div>
              )}
              <div>
                <div className="flex justify-end">
                <p className="text-gray-800 bg-gray-300 px-4 text-end py-2 w-fit rounded-full">{item.text}</p>
                </div>
                <p className="text-gray-400 text-xs px-4">
                  {new Date(item.timestamp).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message input form */}
        <div className="w-full max-w-3xl mx-auto p-4">
          {photo && (
            <div className="mb-2">
              <button
                onClick={() => setPhoto(null)}
                className="bg-gray-400 relative top-6 left-[70px] w-5 h-5 p-2 hover:text-pink-600 rounded-full flex justify-center items-center font-thin hover:bg-gray-600"
              >
                X
              </button>
              <img
                src={photo}
                alt="Preview"
                className="w-24 h-24 object-cover border rounded-md"
              />
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 w-full rounded-lg"
          >
            <div className="relative">
              <Input
                id="photo"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoChange}
              />
              <label
                htmlFor="photo"
                className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full cursor-pointer text-pink-500 hover:text-pink-600 hover:bg-pink-50 transition"
              >
                <Camera className="h-5 w-5" />
                <span className="sr-only">Add media</span>
              </label>
            </div>

            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-gray-200 rounded-full"
                ref={inputBoxRef}
              />
              <Popover
                open={isEmojiPickerOpen}
                onOpenChange={handleEmojiPickerOpen}
              >
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    size="icon"
                    variant="link"
                    className="text-gray-500 absolute top-0 right-2 hover:text-gray-800 "
                  >
                    <Smile className="h-5 w-5" />
                    <span className="sr-only">Add emoji</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-[300px] h-[300px] p-0"
                  side={emojiPickerPosition}
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
