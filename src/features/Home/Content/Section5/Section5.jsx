import './style.scss'
import { Box, Grid } from '@mui/material'
import cat01 from './../../../../asset/img/cat01.jpg'
import cat02 from './../../../../asset/img/cat02.jpg'
import cat03 from './../../../../asset/img/cat03.jpg'
import cat04 from './../../../../asset/img/cat04.jpg'

function Section5() {
   return (
      <Box className='layout_feature5'>
         <Box mb={5} mt={3}>
            <div className='title'>
               <h4>Gift kits & baskets</h4>
            </div>
         </Box>
         <Box className='layout_box_items'>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ sx: 4, sm: 8, md: 12 }}>
               <Grid item xs={6} sm={4} md={3}>
                  <div className="item-sub-content">
                        <img src={cat01} alt="" />
                        <h4 className='text_gifts'>For Him</h4>
                        <h5 className="item-sub-content__h5">6 items</h5>
                  </div>
               </Grid>
               <Grid item xs={6} sm={4} md={3}>
                  <div className="item-sub-content">
                        <img src={cat02} alt="" />
                        <h4 className='text_gifts'>For Baby</h4>
                        <h5 className="item-sub-content__h5">7 items</h5>
                  </div>
               </Grid>
               <Grid item xs={6} sm={4} md={3}>
                  <div className="item-sub-content">
                        <img src={cat03} alt="" />
                        <h4 className='text_gifts'>Occasions</h4>
                        <h5 className="item-sub-content__h5">3 items</h5>
                  </div>
               </Grid>
               <Grid item xs={6} sm={4} md={3}>
                  <div className="item-sub-content">
                        <img src={cat04} alt="" />
                        <h4 className='text_gifts'>For Her</h4>
                        <h5 className="item-sub-content__h5">8 items</h5>
                  </div>
               </Grid>
            </Grid>
         </Box>
      </Box>
   )
}

export default Section5