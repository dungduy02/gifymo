import { TypeOfProduct, ReviewProduct, listItems } from '../../api'
import { Box } from '@mui/material'
import './style.scss'
import SideBarShop from './SideBar';
import ShowListProduct from './Content/ShowListProduct';

const ListTypeOfProduct = TypeOfProduct;
const ListRecentProduct = ReviewProduct;
const ListItemsProduct = listItems;

function Shop(props) {
   console.log(props)
   return (
      <Box className='shop_contain'>
         <Box className='sideBarShop'>
            <SideBarShop 
               typeOfProduct={ListTypeOfProduct}
               reviewProduct= {ListRecentProduct}
             />
         </Box>
         <Box className='showListProduct'>
            <ShowListProduct listItemsProduct={ListItemsProduct}/>
         </Box>
      </Box>
   )
}

export default Shop