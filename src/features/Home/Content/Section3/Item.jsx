// import MdFavoriteBorder from 'react-icons/md'
// import FaShoppingCart from 'react-icons/fa'
// import FiZoomIn from 'react-icons/fi'
import './style.scss';
import {Box, Rating} from '@mui/material'


function Item(props){
   const { data } = props
   console.log(data)
   return (
      <div>
         <Box className='layout-items'>
            {data && (
               <div className="features_items">
                  <div className="group_image">
                     {/* <img src={data?.image[0]} alt="" /> */}
                     <img src={require(`../../../../asset/img/${data.image}.jpg`)} alt="" className='img_items'/>
                     <Box className='group_action'>
                        {/* <FaShoppingCart className='action_icon' />
                        <FiZoomIn className='action_icon' />
                        <MdFavoriteBorder className='action_icon' />
                        <FiZoomIn className='action_icon' /> */}
                     </Box>
                  </div>
                  <div className="info_item">
                     <div className='items_price'>
                        <h5>${data?.discounts}&nbsp;</h5>
                        <h5 className='item_price'>${data?.price}</h5>
                     </div>
                     <h4>{data?.nameItem}</h4>
                     <Rating name='read-only'   value={data?.star} readOnly precision={0.5} />
                  </div>
               </div>
            )}
         </Box>
      </div>
   )
}

export default Item