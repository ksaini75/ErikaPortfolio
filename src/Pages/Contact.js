import React, { useState, forwardRef, useImperativeHandle } from 'react'
import * as emailjs from 'emailjs-com'
import swal from 'sweetalert';
import { Modal, ModalHeader, ModalBody, ModalFooter,Button} from 'reactstrap';
import ReCAPTCHA from "react-google-recaptcha";
import { Form, FormGroup, Label, Input } from 'reactstrap'

const Contact = forwardRef((props,ref) => {

  const [displayModal,setDisplayModal]=useState(false);
  const [isVerified,setVerification]= useState(false);

const [fullname,setFullName]= useState('');
const [email,setEmail]= useState('');
const [subject,setSubject]= useState('');
const [message,setMessage]= useState('');
const isEnabled=email.length>0 && isVerified;

 const verifyCallback= ()=>{
   setVerification(true);
 }


const showModal= () =>{
  setDisplayModal(true);
};
const hideModal=()=>{
  setDisplayModal(false);
};

  useImperativeHandle(ref,() =>{

return{
  showModal: showModal
};

});



 const handleSubmit=(e)=> {
    e.preventDefault()
    
    
    let templateParams = {
      from_name: fullname,
      to_name: 'Erika',
      reply_to: email,
      subject: subject,
      message: message,
     }
     handleVerification(templateParams);
    }

    const handleVerification=(templateParams)=>{
     
      if(isVerified){
     emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE,
       templateParams,
       process.env.REACT_APP_USER_ID_EMAILJS
     ).then(function(response) {
      swal({
       title: "Message on the way!",
       text: "We can't wait to work with you, " + fullname + "!",
       icon: "success",
       dangerMode: false,
       timer: 2500,
       buttons: {cancel : null}
     })

  }, function(error) {
   swal({
       title: "Oops!",
       text: "Message not sent please email us directly: moyaerika5@gmail.com",
       icon: "error",
       dangerMode: true,
       timer: 2500,
       buttons: { cancel: null }
     })

  });

    hideModal();
    resetForm();
 }
}

 const resetForm = () =>  {

    setFullName('');
    setEmail('');
    setSubject('');
    setMessage('');
 
    
 }


    return (
      
       <Modal isOpen={displayModal} toggle={() => setDisplayModal(false)} className="mt-5 text-center">
         <ModalHeader className="text-black modal-color text-center">Contact me!</ModalHeader>
                <ModalBody className="font-weight-bold">

                <Form onSubmit={handleSubmit}>
            <FormGroup controlid="formBasicEmail">
              <Label className="d-block text-left">Email address</Label>
              <Input
                type="email"
                name="email"
                value={email}
                className="text-primary"
              
                onChange={e=>setEmail(e.target.value)}
                placeholder="Enter email"
                required
              />
            </FormGroup>

<FormGroup controlid="formBasicName">
              <Label className="d-block text-left">Name</Label>
              <Input
                type="text"
                name="name"
                value={fullname}
                className="text-primary"
                onChange={e=>setFullName(e.target.value)}
                placeholder="Name"
                required
              />
            </FormGroup>
<FormGroup controlid="formBasicSubject">
              <Label className="d-block text-left">Subject</Label>
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={subject}
                onChange={e=>setSubject(e.target.value)}
                placeholder="Subject"
                required
              />
            </FormGroup>
<FormGroup controlid="formBasicMessage">
              <Label className="d-block text-left">Message</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={message}
                onChange={e=>setMessage(e.target.value)}
                required
              />
            </FormGroup>
            <ReCAPTCHA className="mb-4 d-flex justify-content-center"
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={verifyCallback}
                  
                 />
<Button outline color= "secondary" disabled={!isEnabled} type="submit">Submit</Button>
          </Form>
       
                   
                   
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
      </Modal>
       
          
 
    )
  });

export default Contact;
