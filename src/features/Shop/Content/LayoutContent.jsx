import './style.scss'
import { Box, Grid } from '@mui/material';
import Item from '../../Home/Content/Section3/Item'


function LayoutContent(props) {
   const { data } = props
   return (
      <Box className='items_product_shop'>
         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className='items_product'>
            {data.map((items, index) => (
               <Grid item xs={6} sm={4} md={3} key={index}>
                  <Item data={items} key={index} />
               </Grid>
            ))}
         </Grid>
      </Box>
   )
}

export default LayoutContent