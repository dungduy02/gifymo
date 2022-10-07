import './style.scss'
import banner5 from '../../../../asset/img/banner5.jpg'

function SectionFive(){
   return (
      <div className='container5'>
         <div className="five_center">
            <div className="image_center">
               <img src={banner5} alt="" className='image_banner5' />
            </div>
            <div className="LoveMyBasket">
               <div className="wonderfull">"Love my basket! It's going to make a wonderfull gift!</div>
               <div className="hannah">Hannah Vaughn</div>
            </div>
         </div>
      </div>
   )
}

export default SectionFive