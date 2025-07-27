function Main_Container() {
  return (
    <div className="min-h-screen w-full bg-gray-600 flex">
          <div className="flex flex-row">
          <div className="flex bg-amber-400 w-20"></div>
          <div className="flex bg-amber-500 w-20"></div>
          <div className="flex bg-amber-600 w-20"></div>
          <div className="flex bg-amber-700 w-20"></div>
          <div className="flex bg-amber-800 w-20"></div>

        </div>
  </div>

  );
}
export default function Home() {
  return (

    <Main_Container />
 
  );
}
