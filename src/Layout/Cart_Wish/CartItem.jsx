import './style.scss'
import {Link} from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {BiTrash} from 'react-icons/bi'

const CartItem = () => {
   return (
      <div className='listItemCart'>
         <div className="itemImage">
            <Link to={'/gifymo/product'}>
               <img src={sd} alt="" />
            </Link>
         </div>
         <div className='content'>
            <div className="name">
               <Link to={'/gifymo/product'}>
                  <h3>name</h3>
               </Link>
               <div className="price_count">
                  <div className="count">
                     <RemoveIcon />
                     <h4>count</h4>
                     <AddIcon />
                  </div>
                  <div className="price">price</div>
               </div>

            </div>

         </div>
         <div className="removeItem">
            <BiTrash />
         </div>
      </div>
   )
}

export default CartItem