



import { useState, useEffect } from "react";

const HomePage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Simulated fetching of news updates
    setNews([
      { id: 1, title: "AI Revolution in Healthcare", content: "Discover how AI is transforming patient care." },
      { id: 2, title: "Data-Driven Decision Making", content: "Empowering businesses with analytics." },
      { id: 3, title: "Ethical AI Practices", content: "Ensuring transparency and fairness in AI." },
    ]);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <video autoPlay loop muted className="absolute w-full h-full object-cover">
          <source src="/background-video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold">Data is eternal and we are building consciousness around it.</h1>
          <h2 className="text-4xl mt-4">We are <span className="font-bold">WAYSAHEAD GLOBAL.</span></h2>
          <p className="mt-4 text-lg">We help companies transform their business vision into data-centric innovations.</p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-red-500 px-6 py-3 rounded-md text-white">Explore AIaaS</button>
            <button className="bg-red-600 px-6 py-3 rounded-md text-white">Rapid Product Development</button>
          </div>
        </div>
      </div>

      {/* Mission & Expertise Section */}
      <div className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">Our Mission</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">We empower businesses with cutting-edge AI & Data Analytics solutions, transforming industries with innovation and efficiency.</p>
      </div>

      {/* AI & Data Analytics Solutions */}
      <div className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold text-center">AI & Data Analytics Solutions</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {["Predictive Analytics", "AI Automation", "Data Engineering"].map((solution, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg text-center hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold">{solution}</h3>
              <p className="mt-2 text-gray-400">Innovative AI-driven approaches for business transformation.</p>
            </div>
          ))}
        </div>
      </div>

      {/* News/Updates Section */}
      <div className="py-16 px-6 bg-gray-950">
        <h2 className="text-3xl font-bold text-center">Latest Updates</h2>
        <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.map((item) => (
            <div key={item.id} className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-400">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
