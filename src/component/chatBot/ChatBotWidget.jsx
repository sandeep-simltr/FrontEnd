import { useState } from "react";
import { Bot } from "lucide-react";

export function Card({ children, className = "" }) {
  return <div className={`bg-white rounded-lg shadow-md ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export function Input({ value, onChange, placeholder, className = "" }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border border-gray-300 rounded-lg p-2 w-full ${className}`}
    />
  );
}

export function Button({ onClick, children, className = "" }) {
  return (
    <button onClick={onClick} className={`bg-red-500 text-white px-4 py-2 rounded-lg ${className}`}>
      {children}
    </button>
  );
}


export default function ChatBotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "Hello! How can I help you?", sender: "bot" }]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");

    try {
      const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDfoUpjJm0JaoArtI6e58mlfegboIVMUIc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: input }]
          }]
        }),
      });
      const data = await response.json();
      console.log("API Response:", data);
      
      if (data.candidates && data.candidates.length > 0) {
        const botMessage = { text: data.candidates[0].content.parts[0].text, sender: "bot" };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } else {
        setMessages((prevMessages) => [...prevMessages, { text: "No response from bot.", sender: "bot" }]);
      }
    } catch (error) {
      console.error("Error fetching Gemini response:", error);
      setMessages((prevMessages) => [...prevMessages, { text: "Sorry, something went wrong.", sender: "bot" }]);
    }
  };

  return (
    <div className="fixed bottom-4 right-20 flex flex-col items-end z-30 shadow-2xl">
      {isOpen && (
        <Card className="w-80 mb-2 shadow-2xl">
          <CardContent className="h-64 overflow-y-auto flex flex-col gap-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-[75%] ${
                  msg.sender === "user" ? "bg-red-500 text-white self-end" : "bg-gray-200 text-black self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </CardContent>
          <div className="flex p-2 border-t border-gray-300">
            <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." className="flex-1" />
            <Button onClick={sendMessage} className="ml-2">Send</Button>
          </div>
        </Card>
      )}
      <button onClick={toggleChat} className="bg-red-600 text-white p-3 rounded-full shadow-lg">
        <Bot size={32} />
      </button>
    </div>
  );
}