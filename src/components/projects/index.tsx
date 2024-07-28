


function Projects()
{


    const projects = [
        {
            id: 1,
            title: "Primeiro projeto",
            description: "Projeto em andamento"
        },
        {
            id: 2,
            title: "Segundo projeto",
            description: "Este é o meu segundo projeto!"
        },

        {
            id: 3,
            title: "Terceiro projeto",
            description: "Este é o meu Terceiro projeto!"
        },
        {
            id: 4,
            title: "Quarto projeto",
            description: "Este é o meu Quarto projeto!"
        },

        {
            id: 5,
            title: "Quinto projeto",
            description: "Este é o meu Quinto projeto!"
        }
    ]
 

    return (
        <>
        <div className="w-full pl-10 pr-10 flex flex-col items-center justify-center mt-12">
            
            <h3 className="text-2xl">PROJETOS</h3>

            <div className="flex flex-col gap-5 mt-10">
                {projects.map((itens, index) => (
                    <div key={index} className="w-[280px] bg-slate-100 p-4 rounded">
                        <div className="w-full flex flex-col items-center justify-center">
                        <h3 className="font-bold">{itens.title}</h3>
                        <p>{itens.description}</p>
                        </div>
                        <br />
                        <hr />
                    </div>    
                ))


                }
            </div>
           
        </div>
        </>
    )
}



export default Projects