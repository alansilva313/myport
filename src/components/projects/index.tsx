import { animated, useScroll } from "@react-spring/web"
import Uptopo from "../uptopo";



function Projects()
{
      
    const { scrollXProgress }: any = useScroll({});

    const projects = [
        {
            id: 1,
            title: "Primeiro projeto",
            description: "Projeto em andamento",
            link: "#"
        },
        {
            id: 2,
            title: "Segundo projeto",
            description: "Este é o meu segundo projeto!",
            link: "#"
            
        },

        {
            id: 3,
            title: "Terceiro projeto",
            description: "Este é o meu Terceiro projeto!",
            link: "#"
        },
        {
            id: 4,
            title: "Quarto projeto",
            description: "Este é o meu Quarto projeto!",
            link: "#"
        },

        {
            id: 5,
            title: "Quinto projeto",
            description: "Este é o meu Quinto projeto!",
            link: "#"
        }
    ]
 

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