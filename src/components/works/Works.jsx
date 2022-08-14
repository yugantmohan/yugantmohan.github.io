import "./works.scss"
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import background from "./black.avif";


function Works(props) {
    return (

       <div style={{ backgroundImage: `url(${background})` }} className="works" id="works"> 
        <motion.h2 
        animate={{rotate:[0,10,-10,10,-10,0]}}
        transition={{repeat:Infinity,duration:5}}
        >PROJECTS</motion.h2>
           <div class="container">
 
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <motion.div whileHover={{scale:1.2}} class="carousel-inner">

      <div class="item active">
        <img src={require("./petcare_01.jpg")} alt="pets"/>
        <div class="carousel-caption">
          <h3>Pet Day Care</h3>
          <p>A web appication for your pets!</p>
        </div>
      </div>

      <div class="item">
        <img src={require("./petcare_02.jpg")} alt="petss"  />
        <div class="carousel-caption">
          <h3>Technologies Used: </h3>
          <p>Flask Python, MySql, HTML/CSS </p>
        </div>
      </div>
    
      <div class="item">
        <img src={require("./petcare_03.jpg")} alt="petsss" />
        <div class="carousel-caption">
          <h3>Now with a manager login feature!</h3>
          <p>A customisable webiste for your beloved pets</p>
        </div>
        
      </div>

      <div class="item">
        <img src={require("./petcare_04.jpg")} alt="petssss" />
        <div class="carousel-caption">
          <h3>Pet Day Care</h3>
          <p>A web appication for your pets!</p>
        </div>
        
      </div>
      
   
    </motion.div>

    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
    
  </div>
  <div id="myCarousel1" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel1" data-slide-to="0" class="active"></li>
    </ol>

    <motion.div whileHover={{scale:1.2}} class="carousel-inner">

      <div class="vitem active">
        <ReactPlayer  
        controls
        width= '500px'
        height= '250px'
        url='https://youtu.be/uPrm2I4dPwY'/>
        <div class="carousel-caption">
          <h3>Floor is Lava Game !</h3>
          <p>A never ending game for the thrill lovers!</p>
        </div>
      </div>
    </motion.div>

    
  
  </div>
  <div id="myCarousel2" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel2" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel2" data-slide-to="1"></li>
      <li data-target="#myCarousel2" data-slide-to="2"></li>
    </ol>

    
    <a class="left carousel-control" href="#myCarousel2" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel2" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  <div id="myCarousel3" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel3" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel3" data-slide-to="1"></li>
    </ol>

    <motion.div whileHover={{scale:1.2}} class="carousel-inner">

      <div class="item active">
        <img src={require("./coffee.jpg")} alt="Los Angeles" onclick="enlargeImg()"/>
        <div class="carousel-caption">
          <h3>Coffee Shop Website</h3>
          <p>A web appication for ypur favorite coffee shop!</p>
        </div>
      </div>

      <div class="item">
        <img src={require("./me.png")} alt="Chicago" />
        <div class="carousel-caption">
          <h3>Technologies Used: </h3>
          <p>NodeJS, MySQL, JavaScript, React and HTML/CSS</p>
        </div>
      </div>
    
  
    </motion.div>

    <a class="left carousel-control" href="#myCarousel3" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel3" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
</div>);
}
export default Works;