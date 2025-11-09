const navlink = [
    {
        name: "Store",
        href: "#"
    },
    {
        name: "Mac",
        href: "#"
    },
    {
        name: "iPad",
        href: "#"
    },
    {
        name: "iPhone",
        href: "#"
    },
    {
        name: "Watch",
        href: "#"
    },
    {
        name: "AirPods",
        href: "#"
    },
    {
        name: "TV & Home",
        href: "#"
    },
    {
        name: "Entertainment",
        href: "#"
    },
    {
        name: "Accessories",
        href: "#"
    },
]


function Navbar() {
    return (
        <nav className="sticky top-0 z-10">
            <div className="flex justify-between items-center gap-10 p-2 bg-black text-gray-400 text-xs font-semibold md:justify-center">
                <img className="size-6" src="data:image/png;base64,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" alt="" />
                <div>
                    <ul className="hidden justify-center gap-10 md:flex">
                        {navlink.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} alt="">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-center gap-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 md:hidden">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
</svg>

                </div>
            </div>
        </nav>
    )
}

export default Navbar