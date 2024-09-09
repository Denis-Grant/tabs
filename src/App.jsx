import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [entries, setEntries] = useState([
    { title: "one", content: "First paragraph", active: true },
    { title: "two", content: "Second paragraph", active: false },
    { title: "three", content: "Third paragraph", active: false },
    { title: "four", content: "Fourth paragraph", active: false },
  ]);

  const handleClick = (e)=>{
    const title = e.target.textContent
    // clear actives
    const clearedEntries = entries.map((entry)=>{
      if (entry.active == true){
        entry.active = false
      } 
      return entry
    })
    console.log(clearedEntries)
    const updatedEntries = clearedEntries.map((entry)=>{
      if (entry.title == title){
        entry.active = true
      }
      return entry
    })
    setEntries(updatedEntries)
  }
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen flex-col">
          <div id="heading" className="w-2/3 bg-white flex shadow-lg">
            {entries.map((entry, i) => (
              <div
                onClick={handleClick}
                key={i}
                className={`${
                  entry.active ? "bg-white" : "bg-gray-100"
                } uppercase py-2 px-5 border w-full cursor-pointer`}
              >
                {entry.title}
              </div>
            ))}
          </div>
          <div className="bg-white w-2/3 h-[200px] py-3 px-5">
            {entries.map(
              (entry, i) => entry.active && <p key={i}>{entry.content}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
