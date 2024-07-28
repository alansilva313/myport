
import { animated, useResize } from "@react-spring/web"

function Projects()
{
    const { width, height }  = useResize({});

    return (
        <>
        <div className="pl-10 pr-10 flex items-center justify-center mt-12">
            <animated.div style={{ width, height}}>
            <h3 className="text-2xl">PROJETOS</h3>
            </animated.div>
        </div>
        </>
    )
}



export default Projects