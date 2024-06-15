import { useState } from "react";
import React from "react";
import Sidebar from "./components/sidebars/Sidebar";
import ReuseSidebar from "./components/sidebars/ReuseSidebar";
import LeftSidebar from "./components/sidebar2/LeftSidebar";
import MessageHeader from "./components/chat-section/MessageHeader";
import InputSection from "./components/chat-section/InputSection";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" bg-hero-pattern mx-auto flex">
        <div>
          <LeftSidebar />
        </div>

        <div>
          <div>
            <Sidebar />
          </div>
.
          <div>
            <ReuseSidebar />
          </div>
        </div>

        <div className="container">
          <MessageHeader />

          <div className="">
            <InputSection />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
