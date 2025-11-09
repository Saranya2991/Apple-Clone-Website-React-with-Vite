import Button from "./Button"
function Hero (){
    return (
        <div className="bg-gray-50 text-black h-42 w-screen text-center p-4 pt-16 mt-6">    
        <h1 className="text-6xl font-bold mb-3">iPhone Air</h1>
        <p className="text-4xl">The Thinnest iPhone ever.</p>
        <p className="text-4xl mb-5">With the power of pro inside.</p>
        <Button></Button>
        <img className="h-96 w-full mt-0" src="https://platform.theverge.com/wp-content/uploads/sites/2/2025/09/Apple-iPhone-Air-profile-250909.jpg?quality=90&strip=all" alt=""></img>
        </div>
    )
}

export default Hero