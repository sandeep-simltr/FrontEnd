
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "./component/lastpage/Footer";
import Navbar from "./component/header/Navbar"; 
import ChatBotWidget from "./component/chatBot/ChatBotWidget";



// import About from "./pages/About";
// import Services from "./pages/Services";
// import UseCases from "./pages/UseCases";
// import Careers from "./pages/Careers";
// import Contact from "./pages/Contact";
// import NewsMedia from "./pages/NewsMedia";
// import Chatbot from "./components/Chatbot";

// import Footer from "./components/Footer";
// import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App flex flex-col min-h-screen min-w-full bg-gray-100">
    <Navbar/>
    <div className="flex-grow mt-15"><Outlet/></div>
    <ChatBotWidget/>
    <Footer/>
    </div>
  );
}

export default App;