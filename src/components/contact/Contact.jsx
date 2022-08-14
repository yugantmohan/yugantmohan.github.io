import "./contact.scss"
import {motion} from 'framer-motion'
// import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import background from "./contact.jpg";
import emailjs from "emailjs-com"
import pdf from "./resume.pdf"


export default function Contact() {

    function sendEmail(e){
        e.preventDefault();
    
    emailjs.sendForm('service_oxhycri', 'template_ymu7soa', e.target, 'Oc5ZeDz-BNHDZhPnX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }
    
    return (
        <div style={{ backgroundImage: `url(${background})` }} className="contact" id="contact">

        
        
        <div className="contacti">
                <motion.h2 class="title"animate={{rotate:[0,4,4,0], y:0}} transition={{repeat:Infinity,duration:2}}>
                <span class="title-word title-word-1">C</span>
                <span class="title-word title-word-2">O</span>
                <span class="title-word title-word-3">N</span>
                <span class="title-word title-word-4">T</span>
                <span class="title-word title-word-5">A</span>
                <span class="title-word title-word-6">C</span>
                <span class="title-word title-word-7">T</span>
                <span class="title-word title-word-7"> </span>
                <span class="title-word title-word-5">M</span>
                <span class="title-word title-word-7">E</span>
                </motion.h2>   
                <br/><br/>        
            <motion.div className="left" whileHover={{scale:1.06}} animate={{x:10,y:10}}>
                <form onSubmit={sendEmail}>
                    <div className="name">Name</div>
                    <input type="text" name="name" />
                    <div className="email">Email</div>
                    <input type="email" name="email" />
                    <div className="subject">Subject</div>
                    <input type="text" name="subject" />
                    <div className="message">Message</div>
                    <textarea className="textarea" name="message" placeholder="A message for me ?" ></textarea>
                    <br/>
                    <div className="row"><input  type="submit" value="send" name="message"/>
                    </div>
                </form>
            <div className="rightt">
                <div>Downloadable <a href={pdf} download>Resume</a></div>
                
            </div>
            </motion.div>
        </div>

    </div>
    );
}



