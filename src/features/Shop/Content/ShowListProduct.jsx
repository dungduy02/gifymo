import './style.scss'
import { Box } from '@mui/material'
import SortProduct from './SortProduct'
import LayoutContent from './LayoutContent'
function ShowListProduct(props){
   const {listItemsProduct} = props
   return (
      <Box className='container showList'>
         <Box className='sortProduct'>
            <SortProduct />
         </Box>
         <Box className='layoutContent'>
            <LayoutContent data={listItemsProduct} />
         </Box>
      </Box>
   )
}

export default ShowListProduct