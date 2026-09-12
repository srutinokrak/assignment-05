

import Logo from "../assets/logo-text.png"
const Nav = () => {
    return (
        <nav className="sticky top-0 z-50 w-full bg-white py-4 px-6 border-b border-gray-100  md:px-8">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src={Logo} alt="" className="h-8 w-auto"/>
                </div>

                <ul className="flex gap-8 items-center text-sm font-medium text-gray-600">
                    <li className="text-pink-600 font-semibold cursor-pointer">Home</li>
                    <li className="cursor-pointer">Technologies</li>
                    <li className="cursor-pointer" >Projects</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Contact</li>
                 </ul>
                    <div className="font flex gap-6 items-center ">
                       <button className="text-gray-700" >Sign in</button>
                        <button className="bg-pink-600 text-white px-5 py-2
                         rounded-full transition-colors ">Sign Up</button>
                    </div>
               
            </div>
        </nav>
    );
};

export default Nav;