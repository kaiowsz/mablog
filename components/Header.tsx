import React from 'react'
import Link from 'next/link'

function Header() {
    return (
    <header className="flex justify-between items-center space-x-2 font-bold px-10 py-5">
        <Link href="/" className="flex justify-center items-center space-x-2">
            <img src="https://github.com/kaiowsz.png" alt="kaiowsz" className="rounded-full" width={50} height={50} loading="lazy"  />
            <h2 className="text-slate-800 text-lg">Mablog</h2>
        </Link>

        <button className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center">Sign Up</button>
    </header>
    )
}

export default Header