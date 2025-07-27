import { Analytics } from "@vercel/analytics/next"

function Main_Container() {
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
export default function Home() {
  return (

    <Main_Container />
 
  );
}
