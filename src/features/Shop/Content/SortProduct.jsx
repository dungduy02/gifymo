import './style.scss'
import { Box } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import GridView from '@mui/icons-material/GridView'
import ViewListIcon from '@mui/icons-material/ViewList';
import FormControl from '@mui/material/FormControl'

function SortProduct() {
   return (
      <Box className='sortProduct_shop'>
         <div>
            <h4>Found 23 Result</h4>
         </div>
         <div className='sortList'>
            <GridView className='icon_size' />
            <ViewListIcon className='icon_size' />
            <FormControl className='inputSort'>
               <InputLabel className='inputSort'>Sort</InputLabel>
               <Select>
                  <MenuItem value='a'>
                     <em>None</em>
                  </MenuItem>
                  <MenuItem value='a'>Sort by Price: Low to High</MenuItem>
                  <MenuItem value='a'>Sort by Price: Hight to Low</MenuItem>
                  <MenuItem value='a'>Sort by Name: A - Z</MenuItem>
                  <MenuItem value='a'>Sort by Name: Z - A</MenuItem>
                  <MenuItem value='a'>Sort by Star</MenuItem>
               </Select>
            </FormControl>
         </div>
      </Box>
   )
}

export default SortProduct