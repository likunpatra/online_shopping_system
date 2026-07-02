import React from "react";

function Background() {

  return (
    <div className={` absolute inset-0 -z-10`}>
      
      {/* Pink Background (Left) */}
      <div className={`absolute left-0 top-0 h-full w-2/3 bg-[#f9bac7]`} />

      {/* Teal Background (Right) */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-[#38c4c1]" />
    
    </div>
  );
}

export default Background;
