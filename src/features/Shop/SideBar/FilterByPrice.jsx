import './style.scss'
import { Box } from '@mui/material'
import Slider from '@mui/material/Slider'
import React from 'react'
import { useState } from 'react'

function valuetext(value) {
   return `${value} $`
}
function FilterByPrice(props) {
   const {
      minPrice,
      maxPrice,
      filterMinPrice,
      filterMaxPrice,
      setFilterMinPrice,
      setFilterMaxPrice
   } = props;
   const [value, setValue] = useState([filterMinPrice, filterMaxPrice]);

   const handleChange = (event, newValue) => {
      setValue(newValue);
      setFilterMinPrice(newValue[0]);
      setFilterMaxPrice(newValue[1]);
   }
      return (
         <Box>
            <h2>Filter by Price</h2>
            <Box>
               <Slider
                  getAriaLabel={() => 'Temperature range'}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  min = {minPrice}
                  max = {maxPrice}
               />
            </Box>
            <h4>Price: ${value[0]} --- ${value[1]}</h4>
         </Box>
      )
   }
export default FilterByPrice