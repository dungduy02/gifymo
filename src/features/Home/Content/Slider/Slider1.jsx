import './style.scss'
import slider1_img from '../../../../asset/img/slider1.png'
import CloseIcon from '@mui/icons-material/Close'

export default function Slider1(){
   return (
      <div style={{background: '#f6eee0'}} className='slider1 animation-show-slider'> 
         <div className="slider_image">
            <img src={slider1_img} alt="" />
         </div>
         <div className="slider_content">
            <div className="center_arrivale">
               <CloseIcon />
               <p className='format_font text_arrivals'>New Arrivals</p>
               <CloseIcon />
            </div>
            <h2 className='format_font sendYourLove'>Send Your Love</h2>
            <div className="from_price">
               <h3 className="format_font font-h3">FROM</h3>
               <h3 className="format_font font-h3 color-prink">$29,90</h3>
            </div>
            <div className="linkslider">
               <div className="format_font slider1_btn">SEND GIFT</div>
            </div>
         </div>
      </div>
   )
}
