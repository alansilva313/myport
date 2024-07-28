
import { useContext } from "react";
import { MdMenu } from "react-icons/md";
import { ThemeContext } from "../../contexts/theme";

function Header(){

     const { isDarkTheme, toggleTheme }: any = useContext(ThemeContext);
    const alterTheme = () => {
        toggleTheme(true)
    }
    
    return (
        <>
        <div className="fixed flex bg-slate-800 w-full p-4 lg:pl-36 lg:pr-36 items-center justify-between text-white">
         <div>
         <h3 className="lg:text-4xl">Dev Solutions</h3>
         </div>

         <div>
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
             <p onClick={alterTheme}>{isDarkTheme === true ? "light" : "Dark"}</p>
            <MdMenu className="text-3xl cursor-pointer hover:text-slate-400"/>
            </div>
         </div>
        </div>
        </>
    )
}




export default Header