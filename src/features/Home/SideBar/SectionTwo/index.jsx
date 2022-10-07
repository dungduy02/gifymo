import './style.scss';
import gift from '../../../../asset/icon/gift.gif'
import gift_confetti from '../../../../asset/icon/gift_confetti.gif';
import gift_qr_code from '../../../../asset/icon/gift_qr_code.gif';

function SectionTwo() {
   return (
      <div className="containerTwo">
         <div className="items2 Two_active">
            <div className="image">
               <img src={gift} alt="" />
            </div>
            <div className="content2">
               <div className="title2">
                  <h4>Delivering quality gifts</h4>
               </div>
               <p>information on its origins</p>
            </div>
         </div>
         <div className="items2 Two_active">
            <div className="image">
               <img src={gift_confetti} alt="" />
            </div>
            <div className="content2">
               <div className="title2">
                  <h4>Gifts for all occasions</h4>
               </div>
               <p>Variants and technical</p>
            </div>
         </div><div className="items2">
            <div className="image">
               <img src={gift_qr_code} alt="" />
            </div>
            <div className="content2">
               <div className="title2">
                  <h4>Great customer service</h4>
               </div>
               <p>random Lipsum generator</p>
            </div>
         </div>
      </div>
   )
}

export default SectionTwo