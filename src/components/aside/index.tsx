
import { animated, useSpring } from '@react-spring/web'

function Aside(){

    const spring: any = useSpring({
        from: { x: -100},
        to: {x: 0},
        delay: 8
       });

       const spring2: any = useSpring({
        from: { x: 100},
        to: {x: 0},
        delay: 8
       });

    return (
        <>
        <div className="flex pt-20 pb-16 items-center w-full   bg-slate-800 text-white pl-10 pr-10 lg:pl-36 lg:pr-36 lg:justify-between lg:text-start justify-center text-center">
          
          <div className="flex flex-col lg:text-start gap-4 r text-center">
           <h3 className="text-4xl">Olá, sou
             <animated.div style={spring}><button className="bg-blue-600">DEV FULLSTACK</button></animated.div> Alan Silva</h3>
             <animated.div style={spring2}>
             <p>Mais de 3 anos de experiência em desenvolvimento web, contruindo aplicações de forma rapida e bem estruturada!</p>
             </animated.div>
           </div>
        
        </div>
        </>
    )
}


export default Aside