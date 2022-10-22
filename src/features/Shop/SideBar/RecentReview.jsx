import './style.scss'
import { Box, Rating } from '@mui/material'

function RecentReview(props){
   const { reviewProduct } = props;
   return (
      <Box>
         <h2 className='recent'>Recent reviews</h2>
         {reviewProduct.map((item, index) => (
            <div key={index} className='itemRecent'>
               <img src={require(`../../../asset/img/${item.avt}.jpg`)} className='img_Recent' alt=''/>
               <div className='contentRecent'>
                  <div className='title_Recent'>{item.productName}</div>
                  <Rating className='star_Recent' name='haft-rating-read' defaultValue={item.star} precision={0.5} readOnly/>
                  <h4>By {item.poster}</h4>
               </div>
            </div>
         ))}
      </Box>
   )
}

export default RecentReview
