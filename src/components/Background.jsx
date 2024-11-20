import React from 'react'

const Background = () => {
  return (
    <div className="fixed z-[2] w-full h-screen">
      <div className="mt-16 flex items-center justify-center text-xl text-zinc-500 font-semibold">
        Documents.
      </div>
      <h1 className="text-[300px] text-zinc-500 font-semibold absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        Docs.
      </h1>
    </div>
  )
}

export default Background