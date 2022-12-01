import './style.scss'
import {Link} from 'react-router-dom'

import { RiCloseFill} from 'react-icons/ri'

const Cart = () => {

   return (
      <div>
         <div className='close' >
            <RiCloseFill />
         </div>
         <div>
            
         </div>
         <div className='cartLayout'>
            <h5>Cart</h5>
         </div>
         <div className='noItem'>
            
         </div>
         <div className="layoutListItem">
            
         </div>
         <div className="btnorder">
            <Link to={'/gifymo/pay'}> 
               <div className="order">
                  <h4>PAY NOW</h4>
               </div>
            </Link>
         </div>
      </div>
   )
}

export default Cart