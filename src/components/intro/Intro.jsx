import "./intro.scss"
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

function Intro({open,openImage}) {
   
    return (
     
        <div className='intro' id="intro" >
            <div className="left">
                <motion.h1 className="container" onClick={()=>{openImage(!open)}}>
                    CLICK TO REVEAL<br/>
                    <p className="random">(my exclusive digital art)</p> 
                </motion.h1>
                
                {open && 
                    (<motion.div className="image" whileHover={{scale:1.06}} animate={{x:150,y:-250}} transition={{type: "spring" , damping: 14}}>
                        <img src={require("./deer.jpg")} />
                    </motion.div>)}
                </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Loading<Typewriter options={{strings:[".","..","..."],autoStart:true,
                        delay:75,
                        loop:true
                        }}> </Typewriter> </h2> <h1><Typewriter options={{ 
                        strings:["Full Stack Developer ", "Digital Artist ", "Game Developer"," Software Developer"],
                        autoStart:true,
                        delay:75,
                        loop:true
                        }}> </Typewriter></h1>
                </div>

            </div>
            
        </div>

    );
}

export default Intro;