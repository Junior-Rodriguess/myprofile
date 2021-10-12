import './style.css'
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from 'react-icons/fa'; 



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
      


      
      <div className="widget-contact">
      <a href="https://github.com/Junior-Rodriguess">
      <FaGithub className="icon"/>
      <span className="label">Github</span>
      </a>
      </div>

        </div> 
        
   



  
       </div>
      
        
    </div>
  );
}

export default App;
