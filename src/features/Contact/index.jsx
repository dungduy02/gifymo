import './style.scss'
import { TextField, InputAdornment, TextareaAutosize } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
function Contact() {
   return (
      <div className='container contact'>
         <div className="title_contact">
            <h4 className="title_style">We here to help!</h4>
         </div>
         <div className="content_contact">
            <div className="getInTouch">
               <h3 className="title_style">Get in touch</h3>
               <h5>Contact us to find out more or how we can help you better.</h5>
               <TextField
                  id='input-icon-textFile'
                  placeholder='Duy Dung'
                  fullWidth
                  InputProps={{
                     startAdornment: (
                        <InputAdornment position='start'>
                           <PersonIcon />
                        </InputAdornment>
                     )
                  }}
                  variant='standard'
                  style={{ marginBottom: '40px' }}
               />
               <TextField
                  id='input-icon-textFile2'
                  placeholder='dungduy020@gmail.com'
                  fullWidth
                  style={{ marginBottom: '50px' }}
                  InputProps={{
                     startAdornment: (
                        <InputAdornment position='start'>
                           <MailOutlineIcon />
                        </InputAdornment>
                     )
                  }}
                  variant='standard'
               />
               <TextareaAutosize
                  minRows={8}
                  placeholder='Say something...'
                  style={{
                     width: '93%',
                     border: 'none',
                     background: 'rgba(207, 204, 204, 0.377)',
                     padding: '20px',
                     fontSize: '16px',
                     borderRadius: '10px'
                  }}
               />
               <p>Submit</p>
            </div>
            <div className="map_contact">
               {/* <div className="map">
                  <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.630840492935!2d106.67966462812917!3d10.762907824778463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1c06f4e1dd%3A0x43900f1d4539a3d!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBLaG9hIGjhu41jIFThu7Egbmhpw6puIC0gxJDhuqFpIGjhu41jIFF14buRYyBnaWEgVFAuSENN!5e0!3m2!1svi!2s!4v1662952651922!5m2!1svi!2s"
                  style={{ border: 0, width: '100%', height: '350px' }}
                     allowFullScreen=''
                     loading='lazy'
                  />
               </div> */}
               <h3>Opening hours:</h3>
               <div className="adress fomat">
                  <h5>Adress: </h5>
                  <h4>Thủ Đức, TP HCM</h4>
               </div>
               <div className="phone fomat">
                  <h5>Phone: </h5>
                  <h4>0123456789</h4>
               </div>
               <div className="email fomat">
                  <h5>Email: </h5>
                  <h4>dungduy020@gmail</h4>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Contact