import Button from "./Button"
function MainSection (){
    return ( 
        <div className="bg-black text-white h-54 w-screen text-center p-4 pt-8 mt-8">    
        <h1 className="text-6xl font-bold mb-4">MacBook Pro 14"</h1>
        <p className="text-3xl mb-6">Supercharged by M5.</p>
        <Button></Button>
        <img className="h-72 mx-auto mt-5" src="https://www.apple.com/newsroom/images/2025/10/apple-unveils-new-14-inch-macbook-pro-powered-by-the-m5-chip/article/Apple-MacBook-Pro-14-in-hero-251015_big.jpg.large_2x.jpg" alt=""></img>
        </div>
    )
}

export default MainSection