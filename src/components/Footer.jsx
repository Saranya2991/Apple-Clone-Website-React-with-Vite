import React from "react";

const links = [
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

const links1 = [
    {
        name: "Manage Your Apple Account",
        href: "#"
    },
    {
        name: "Apple Store Account",
        href: "#"
    },
    {
        name: "iCloud.com",
        href: "#"
    },
    
]
const links2 = [
    {
        name: "Apple One",
        href: "#"
    },
    {
        name: "Apple TV+",
        href: "#"
    },
    {
        name: "Apple Music",
        href: "#"
    },
    {
        name: "Apple Arcade",
        href: "#"
    },
    {
        name: "Apple Podcasts",
        href: "#"
    },
    {
        name: "Apple Books",
        href: "#"
    },
    {
        name: "App Store",
        href: "#"
    },
    
]

const links3 = [
    {
        name: "Find a Store",
        href: "#"
    },
    {
        name: "Genius Bar",
        href: "#"
    },
    {
        name: "Today at Apple",
        href: "#"
    },
    {
        name: "Group Reservations",
        href: "#"
    },
    {
        name: "Apple Camp",
        href: "#"
    },
    {
        name: "Apple Trade In",
        href: "#"
    },
    {
        name: "Ways to Buy",
        href: "#"
    },
    {
        name: "Recycling Programme",
        href: "#"
    },
    {
        name: "Order Status",
        href: "#"
    },
    {
        name: "Shopping Help",
        href: "#"
    },
]
const links4 = [
    {
        name: "Apple and Business",
        href: "#"
    },
    {
        name: "Shop for Business",
        href: "#"
    },
    
    
]
const links5 = [
    {
        name: "Apple and Education",
        href: "#"
    },
    {
        name: "Shop for Educationt",
        href: "#"
    },
    {
        name: "Shop for University",
        href: "#"
    },
    
]
const links6 = [
    {
        name: "Accessibility",
        href: "#"
    },
    {
        name: "Education",
        href: "#"
    },
    {
        name: "Environment",
        href: "#"
    },
    {
        name: "Privacy",
        href: "#"
    },
    {
        name: "Supply Chain Innovation",
        href: "#"
    },
]

const links7 = [
    {
        name: "Newsroom",
        href: "#"
    },
    {
        name: "Apple Leadership",
        href: "#"
    },
    {
        name: "Career Opportunities",
        href: "#"
    },
    {
        name: "Investors",
        href: "#"
    },
    {
        name: "Ethics & Compliance",
        href: "#"
    },
    {
        name: "Events",
        href: "#"
    },
    {
        name: "Contact Apple",
        href: "#"
    },
    
]


function Footer() {
    return (
        <footer> 
            <div className="block md:flex justify-around text-sm font-sans p-14 bg-gray-200 text-gray-600">
                <div className="text-sm">
                    <h3 className="font-bold">Shop and Store</h3>
                    {links.map((link, index) => (
                        <a key={index} className="flex items-center  hover:underline" href={link.href}>
                            {link.name}
                        </a>
                    ))}
                    <h3 className="font-bold mt-3">Apple Wallet</h3>
                    <a className="flex items-center  hover:underline" href="" alt="">Wallet</a>
                </div>
                <div>
                    <h3 className="font-bold">Account</h3>
                    {links1.map((link, index) => (
                        <a key={index} className="flex items-center  hover:underline" href={link.href}>
                            {link.name}
                        </a>
                    ))}
                    <h3 className="font-bold mt-3">Entertainment</h3>
                    {links2.map((link, index) => (
                        <a key={index} className="flex items-center  hover:underline" href={link.href}>
                            {link.name}
                        </a>
                    ))}
                </div>
                <div>
                    <h3 className="font-bold">Apple Store</h3>
                    {links3.map((link, index) => (
                        <a key={index} className="flex items-center  hover:underline" href={link.href}>
                            {link.name}
                        </a>
                    ))}
                </div>
                <div>
                    <h3 className="font-bold">For Businesse</h3>
                    {links4.map((link, index) => (
                        <a key={index} className="flex items-center  hover:underline" href={link.href}>
                            {link.name}
                        </a>
                    ))}
                    <h3 className="font-bold mt-3">For Education</h3>
                    {links5.map((link, index) => (
                        <a key={index} className="flex items-center  hover:underline" href={link.href}>
                            {link.name}
                        </a>
                    ))}
                    <h3 className="font-bold mt-3">For Healthcare</h3>
                    <a className="flex items-center  hover:underline" href="" alt="">Apple and Healthcare</a>
                    <h3 className="font-bold mt-3">For Govenrment</h3>
                    <a className="flex items-center  hover:underline" href="" alt="">Apple and Government</a>
                </div>
                <div>
                    <h3 className="font-bold">Account</h3>
                    {links6.map((link, index) => (
                        <a key={index} className="flex items-center  hover:underline" href={link.href}>
                            {link.name}
                        </a>
                    ))}
                    <h3 className="font-bold mt-3">Entertainment</h3>
                    {links7.map((link, index) => (
                        <a key={index} className="flex items-center  hover:underline" href={link.href}>
                            {link.name}
                        </a>
                    ))}
                </div> 
            </div>

            <div className="bg-gray-200 text-gray-600 text-sm p-5 md:pl-24 sm:pl-14">
            <p>More ways to shop : <a className="text-blue-600  underline hover:cursor-pointer" href="" alt="">Find an Apple Store</a> or <a className="text-blue-600 underline hover:cursor-pointer" href="" alt="">other retailer</a> near you. Or call <a className="text-blue-600 underline hover:cursor-pointer" href="" alt="">000800 040 1966.</a></p>
            </div>

            <div className=" block md:flex justify-around items-center p-4 mt-1 text-sm bg-gray-200 text-gray-600 pl-14">
                <p>Copyright @ 2025 Apple Inc. All rights reserved.</p>
                <div className="flex justify-start items-center space-x-2 md:justify-center">
                    <a className="hover:cursor-pointer hover:underline" href="#">Privacy policy    |</a>
                    <a className="hover:cursor-pointer hover:underline" href="#">Terms of Use    |</a>
                    <a className="hover:cursor-pointer hover:underline" href="#">Sales Policy    |</a>
                    <a className="hover:cursor-pointer hover:underline" href="#">Legal    |</a>
                    <a className="hover:cursor-pointer hover:underline" href="#">Site Map</a>
                </div>
                <p><a className="hover:cursor-pointer hover:underline" href="#">India</a></p>
            </div>
        </footer>
    )
};

export default Footer;