import './style.scss'
import { Box, Grid } from '@mui/material';
import Item from '../Home/Content/Section3/Item'

function RelateProduct({data}){
   return (
      <Box>
         <Box mb={5} mt={3}>
            <div className='featureItemPro'>
               <h4 style={{fontSize:'25px'}}>Related Products</h4>
            </div>
         </Box>
         <Box className='layout-feature-items'>
         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {data.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Item data={item} />
            </Grid>
          ))}
        </Grid>
         </Box>
      </Box>
   )
}

export default RelateProduct