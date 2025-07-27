import Image from "next/image";

function MyButton() {
  return (
    
    <button>
      I'm a button
    </button>
  );
}
export default function Home() {
  return (
    <div >
    <h1>Welcome</h1>
    <MyButton />
  </div>
  );
}
