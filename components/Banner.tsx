import React from 'react'

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
        <div>
          <h1 className="text-6xl">Mablog by kaiowsz</h1>
          <h2 className="mt-5">
              Welcome to{" "} <span className="underline decoration-2 decoration-[#F7AB0A]">every dev</span> {" "} favourite blog in the world!
          </h2>
        </div>
    <div>

    </div>
    <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New Product Features | The Latest in Technology | The weekly debugging nightmares & more!
    </p>

    </div>
  )
}

export default Banner