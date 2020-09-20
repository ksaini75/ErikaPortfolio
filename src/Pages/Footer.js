import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import ErikaMoyaResume from '../Documents/Erika Moya Resume.docx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../styles/Footer.css';


const notify = () => {
    toast.warning ('📃 Downloading Resume!', 
    { position: toast.POSITION.BOTTOM_LEFT}
    )
  }

class Footer extends Component{
    render(){
        return(

<div className="footer_bg pt-5 pb-3 bg-light text-center" id="footer">
            <div className="container">
                <div className="row">
                    <div className=" col-md-4 mb-4">
                    <span className="footer-moya">Moya</span>
                    </div>
                    <div className=" col-md-4 text-center">
                        <div className="row">
                            <div className="col-md-8">
                            
                                <p>
                                <a className="icon-color" href={ErikaMoyaResume}  onClick={notify}>
                                <FontAwesomeIcon icon={faFile} color="black" className="icon fa-2x"/> 
                                
                                </a>
                                <br/>
                                Resume
                                </p>
                                
                            </div>
                          
                            <div className="col-md-3">

                                <p>  
                                <a className="icon-color" href="https://www.linkedin.com/in/erika-moya-82a608165/" target = "_blank" 
                                 rel = "noopener noreferrer" >
                                <FontAwesomeIcon icon={faLinkedin} color="black" className="icon fa-2x"/> 
                                </a>
                                <br/>
                                LinkedIn
                                </p>
                            </div>
                           
                            
                        </div>
                    </div>
                    <div className="col-md-4 bg-light"><h6 className="font-weight-bolder line-height">CONTACT INFORMATION</h6><p>moyaerika5@gmail.com</p>
                    </div>
                    
                
                </div>

                <div className="row">
                            <div className="col-md-12 mt-4">
                            <span className="text-center"><p className="copyright text-muted">©2020 by <a href="https://github.com/ksaini75">Karishma</a></p></span>

                            </div>
                            </div>
            </div>
        </div>
        )
    }
}

export default Footer;
