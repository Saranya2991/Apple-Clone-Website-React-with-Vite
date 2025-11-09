import Button from "./Button"
function Header (){
    return (
        <header className="container">
         <div className="bg-black text-white h-64 w-screen text-center p-8">    
        <h1 className="text-5xl font-bold">iPhone 17 Pro</h1>
        <p className="text-3xl my-4">All Out Pro</p>
        <Button></Button>
        </div>
        <div className="bg-black w-screen">
        <img className="h-64 mx-auto" src="https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-camera-close-up-250909_big.jpg.large_2x.jpg" alt=""></img>
        </div>
        </header>
    )
}

export default Header