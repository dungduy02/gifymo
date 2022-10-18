import { Box, Grid } from '@mui/material';
import Item from './Item';
// import { useSelector} from 'react-redux';
import { listItems } from '../../../../api';

function FeatureItems(props) {
   // const {products} = useSelector((state) => state.getData);

   return (
      <Box className='layout-feature-item'>
         <Box mb={5} mt={3}>
            <div className='feature_items_title'>
               <h4>Feature items</h4>
            </div>
         </Box>
         <Box className='feature_items_box_items'>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
               {listItems.map(
                  (item, index) =>
                     index + 1 <= 8 && (
                        <Grid item xs={6} sm={4} md={3} key={index}>
                           <Item data={item} />
                        </Grid>
                     )
               )}
            </Grid>
         </Box>
      </Box>
   )

}

export default FeatureItems