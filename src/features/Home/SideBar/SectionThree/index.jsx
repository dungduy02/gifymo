import './style.scss'
import banner3 from '../../../../asset/img/banner3.jpg'

function SectionThree(){
   return (
      <div>
         <div className="container3">
            <div className='Three_Top'>
               <div className="Three_Top_title"><h4>Top Holiday</h4></div>
               <div className="Three_Top_Text">GIFT IDEAS</div>
            </div>
            <div className="image3">
               <img src={banner3} alt="" />
            </div>
            <div className="Three_ShopNow">
               <div>SHOP NOW</div>
            </div>
         </div>
      </div>
   )
}

export default SectionThree