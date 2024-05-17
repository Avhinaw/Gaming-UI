import React from "react";

const Modes = ()=>{
    return (
        <>
            <div className="h-full w-full p-2 py-10 m-3">
                <h1 className="border bg-zinc-300 text-4xl rounded-[1vw] font-semibold px-5 py-3 text-center w-[50%] m-auto">Modes</h1>
                <div className="flex justify-between m-10 my-32">
                <button className="block border bg-zinc-300 text-2xl rounded-[1vw] font-semibold px-5 py-3 text-center w-[18%]">Ranked</button>
                <button className="block border bg-zinc-300 text-2xl rounded-[1vw] font-semibold px-5 py-3 text-center w-[18%]">Unranked</button>
                <button className="block border bg-zinc-300 text-2xl rounded-[1vw] font-semibold px-5 py-3 text-center w-[18%]">Casual</button>
                </div>
            </div>
        </>
    )
}

export default Modes;