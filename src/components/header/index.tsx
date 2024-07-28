
import { useContext } from "react";
import { MdMenu } from "react-icons/md";
import { ThemeContext } from "../../contexts/theme";
import { CiSun } from "react-icons/ci";
import { LuMoonStar } from "react-icons/lu";
function Header(){

     const { isDarkTheme, toggleTheme }: any = useContext(ThemeContext);
    const alterTheme = () => {
        toggleTheme(true)
    }
    
    return (
        <>
        <div className="fixed flex dark:bg-black bg-slate-800 w-full p-4 lg:pl-36 lg:pr-36 items-center justify-between text-white">
         <div>
         <h3 className="lg:text-4xl">Dev Solutions</h3>
         </div>

         <div className="flex items-center gap-2">
         <p onClick={alterTheme} className="text-[22px]">{isDarkTheme === true ? <CiSun className="text-[26px] text-orange-400"/>: <LuMoonStar className="text-blue-500"/>}</p>
            <nav className="hidden lg:flex md:flex">
            
                <ul className="flex flex-row items-center gap-4 text-2xl">
                    <a href="">
                        <li>Inicio</li>
                    </a>

                    <a href="">
                        <li>Sobre mim</li>
                    </a>

                    <a href="">
                        <li>Inicio</li>
                    </a>
                </ul>
            </nav>

            <div className="flex items-center gap-2 sm:flex lg:hidden md:hidden">
            
            <MdMenu className="text-3xl cursor-pointer hover:text-slate-400"/>
            </div>
         </div>
        </div>
        </>
    )
}




export default Header