'use client'
import { useState } from "react"



interface MainContainerProps {
  onHomeClick: () => void;
  onAboutClick: () => void;
  onProjectClick: () => void;
}



function Main_bg() {
  return (
    <div className="min-h-screen w-full bg-gray-600 flex">
        <div className="flex flex-row w-screen h-screen">
          <div className="flex bg-amber-400 flex-1"></div>
          <div className="flex bg-amber-500 flex-1"></div>
          <div className="flex bg-amber-600 flex-1"></div>
          <div className="flex bg-amber-700 flex-1"></div>
          <div className="flex bg-amber-800 flex-1"></div>
          <div className="flex bg-blue-900 flex-1"></div>
          <div className="flex bg-blue-800 flex-1"></div>
          <div className="flex bg-blue-700 flex-1"></div>
          <div className="flex bg-blue-600 flex-1"></div>
          <div className="flex bg-blue-500 flex-1"></div>
        </div>
    </div>
  );
}



function Main_Container({ onHomeClick, onAboutClick, onProjectClick } : MainContainerProps) {
  return (
    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-96 h-20 flex items-center justify-center z-20 rounded-3xl">
      <div className="flex flex-row gap-8">
        <button 
          className="bg-gray-500/30 backdrop-blur-md px-4 py-2 rounded-2xl text-white hover:bg-gray-400/40 border border-gray-300/20 shadow-lg"onClick={onHomeClick}>HOME</button>
        <button className="bg-gray-500/30 backdrop-blur-md px-4 py-2 rounded-2xl text-white hover:bg-gray-400/40 border border-gray-300/20 shadow-lg"onClick={onAboutClick}>ABOUT</button>
        <button className="bg-gray-500/30 backdrop-blur-md px-4 py-2 rounded-2xl text-white hover:bg-gray-400/40 border border-gray-300/20 shadow-lg" onClick={onProjectClick}>PROJECTS</button>
      </div>
    </div>
  );
}



function Home_Container() {
  return (
    <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-96 h-64 bg-white/90 backdrop-blur-md flex items-center justify-center z-20 rounded-3xl shadow-2xl">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome Home!</h2>
        <p className="text-gray-600">Das ist der Home Container</p>
      </div>
    </div>
  );
}



function About_Container() {
  return (
    <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-96 h-64 bg-white/90 backdrop-blur-md flex items-center justify-center z-20 rounded-3xl shadow-2xl">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome About!</h2>
        <p className="text-gray-600">Das ist der About Container</p>
      </div>
    </div>
  );
}



function Project_Container() {
  return (
    <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-96 h-64 bg-white/90 backdrop-blur-md flex items-center justify-center z-20 rounded-3xl shadow-2xl">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome Project!</h2>
        <p className="text-gray-600">Das ist der Project Container</p>
      </div>
    </div>
  );
}



export default function Home() {
  const [activeContainer, setActiveContainer] = useState<string | null>(null);

  const handleHomeClick = () => {
    setActiveContainer(activeContainer === "home" ? null : "home");
  };

  const handleAboutClick = () => {
    setActiveContainer(activeContainer === "about" ? null : "about");
  };

  const handleProjectClick = () => {
    setActiveContainer(activeContainer === "project" ? null : "project");
  };

  return (
    <div className="relative">
      <Main_bg />
      <Main_Container 
        onHomeClick={handleHomeClick} 
        onAboutClick={handleAboutClick} 
        onProjectClick={handleProjectClick} 
      />
      {activeContainer === "home" && <Home_Container />}
      {activeContainer === "about" && <About_Container />}
      {activeContainer === "project" && <Project_Container />}
    </div>
  );
}