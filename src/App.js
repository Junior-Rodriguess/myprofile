import './style.css'
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from 'react-icons/fa'; 
import imgjs from './assets/javascript.svg'
import imghtml from './assets/html.svg';


function App() {
  return (
    <div className="body">
      <div className="container">
      <div className="personal-info">
      
        <div className="info">
          <div className="avatar">
            <img src="https://foxtradeclub.com/wp-content/uploads/2021/06/WhatsApp-Image-2021-06-09-at-17.56.17.jpeg"></img>
          </div>
          <h1>Júnior Rodrigues</h1>
          <p className="label-info">Developer</p>
          <p className="label-info">Florianópolis-SC</p>
        </div>



        <div className="widget-contact">
      <ImLinkedin className="icon"/>
      <span className="label">Linkedin</span>
    </div>
      
      <a href="https://github.com/Junior-Rodriguess">
      <div className="widget-contact">
      <FaGithub className="icon"/>
      <span className="label">Github</span> 
      </div>
      </a>
       
        </div> 
        
   <div className="dashboard"> 

          <h1>Dashboard</h1> 

          <input placeholder="Pesquise uma skill"/>
        
          


    <div className="widget-skill">
     <img src={imghtml}/>
      <span className="label">Html</span>
    </div>

    
    <div className="widget-skill">
     <img src={imgjs}/>
      <span className="label">JavaScript</span>
    </div>





   </div>



  
       </div>
      
        
    </div>
  );
}

export default App;
