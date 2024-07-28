import { animated, useScroll } from "@react-spring/web"
import Uptopo from "../uptopo";
import projects from '../../services/api-projetos'


function Projects()
{
      
    const { scrollXProgress }: any = useScroll({});

  

    return (
        <>
        <div className="w-full pl-10 pr-10 flex flex-col items-center justify-center mt-12">
            
            <h3 className="text-2xl dark:text-white">PROJETOS</h3>

            <div className="w-full flex flex-col gap-5 mt-10">
                {projects.map((itens, index) => (
                    <animated.div style={{opacity: scrollXProgress}} key={index} className="w-full  p-4 rounded">
                        <div className="w-full flex flex-col items-center justify-center dark:text-white">
                        <h3 className="font-bold">{itens.title}</h3>
                        <p>{itens.description}</p>
                        </div>
                        <br />
                        <hr />

                        <div className="w-full flex mt-10 items-center justify-center text-center">
                        <a href={itens.link} className="dark:text-white w-full border flex items-center text-center justify-center p-2 rounded">Ver mais</a>
                        </div>
                    </animated.div>    
                ))


                }
            </div>
           
           <Uptopo />
        </div>
        </>
    )
}



export default Projects