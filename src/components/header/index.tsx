


function Header(){
    
    return (
        <>
        <div className="flex w-full p-4 lg:pl-20 lg:pr-20 items-center justify-between">
         <div>
         <h3>Dev Solutions</h3>
         </div>

         <div>
            <nav className="hidden lg:flex md:flex">
                <ul className="flex flex-row items-center gap-4">
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

            <div className="flex sm:flex lg:hidden md:hidden">
                <h3>menu</h3>
            </div>
         </div>
        </div>
        </>
    )
}




export default Header