import { Analytics } from "@vercel/analytics/next"

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
function Main_Container(){
  return (
  //className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-120 w-120 bg-gray-500 flex items-center justify-center z-20 b rounded-3xl shadow-2xl "
  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-96 h-20 flex items-center justify-center z-20 rounded-3xl">
  <div className="flex flex-row gap-8">
  <button className="bg-gray-500/30 backdrop-blur-md px-4 py-2 rounded-2xl text-white hover:bg-gray-400/40 border border-gray-300/20 shadow-lg">HOME</button>
        <button className="bg-gray-500/30 backdrop-blur-md px-4 py-2 rounded-2xl text-white hover:bg-gray-400/40 border border-gray-300/20 shadow-lg">ABOUT</button>
        <button className="bg-gray-500/30 backdrop-blur-md px-4 py-2 rounded-2xl text-white hover:bg-gray-400/40 border border-gray-300/20 shadow-lg">PROJECTS</button>
  </div>
</div>
  );
}

export default function Home() {
  return (

    <div className="relative">
        <Main_bg />
        <Main_Container />
        
    </div>

 
  );
}
