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
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-120 w-120 bg-gray-500 flex items-center justify-center z-20 b rounded-3xl shadow-2xl">

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
