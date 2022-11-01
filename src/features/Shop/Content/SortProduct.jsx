import './style.scss'
import { Box } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import GridView from '@mui/icons-material/GridView'
import ViewListIcon from '@mui/icons-material/ViewList';
import FormControl from '@mui/material/FormControl'

function SortProduct(props) {
   const {
      length,
      sortItems,
      setSortItems,
      typeProduct,
      setTypeProduct,
      minPrice,
      maxPrice,
      filterMinPrice,
      filterMaxPrice,
      setFilterMinPrice,
      setFilterMaxPrice,
      layoutShow,
      setLayoutShow
   } = props;
   console.log(setSortItems)
   console.log(typeProduct)
   console.log(setTypeProduct)
   console.log(setTypeProduct)
   console.log(minPrice)
   console.log(maxPrice)
   console.log(filterMinPrice)
   console.log(filterMaxPrice)
   console.log(setFilterMinPrice)
   console.log(setFilterMaxPrice)
   console.log(layoutShow)

   const handleChange = (event) => {
      setSortItems(event.target.value);
   };

   return (
      <Box className='sortProduct_shop'>
         <div>
            <h4>Found {length} Result</h4>
         </div>
         <div className='sortList'>
            <GridView className='icon_size' 
               onClick={()=> setLayoutShow(1)}
            />
            <ViewListIcon className='icon_size' />
            <FormControl className='inputSort'>
               <InputLabel className='inputSort'>Sort</InputLabel>
               <Select value={sortItems} onChange={handleChange}>
                  <MenuItem value='a'>
                     <em>None</em>
                  </MenuItem>
                  <MenuItem value='SortByPriceLowToHight'>Sort by Price: Low to High</MenuItem>
                  <MenuItem value='SortByPriceHightToLow'>Sort by Price: Hight to Low</MenuItem>
                  <MenuItem value='SortByNameAZ'>Sort by Name: A - Z</MenuItem>
                  <MenuItem value='SortByNameZA'>Sort by Name: Z - A</MenuItem>
                  <MenuItem value='SortByStar'>Sort by Star</MenuItem>
               </Select>
            </FormControl>
         </div>
      </Box>
   )
}

export default SortProduct