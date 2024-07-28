
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
        <div className="flex flex-col pt-20 pb-16 items-center w-full dark:bg-black bg-slate-800 text-white pl-10 pr-10 lg:pl-36 lg:pr-36 lg:justify-between lg:text-start justify-center text-center">
          
          <div className="flex flex-col lg:text-start gap-4 r text-center">
           <h3 className="text-4xl leading-tight"><strong className='text-[15px] text-start'>Olá, sou</strong>
             <animated.div style={spring}>Alan Silva <button className="bg-blue-600 pl-4 pr-4 text-[22px] rounded">DEV FULLSTACK</button></animated.div></h3>
             <animated.div style={spring2} className="mt-4">
             <p className='leading-relaxed '>Mais de 3 anos de experiência em desenvolvimento web, contruindo aplicações de forma rapida e bem estruturada!</p>
             </animated.div>
           </div>
        
        <animated.div style={spring} className='flex mt-10 w-full items-center'>
            <a href="https://w.app/devsolutions" 
            className='w-full p-2 border rounded dark:bg-white dark:text-black'>Entrar em Contato</a>
        </animated.div>
        </div>
        </>
    )
}


export default Aside