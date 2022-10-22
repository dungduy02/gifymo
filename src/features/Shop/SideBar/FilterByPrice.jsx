import './style.scss'
import { Box } from '@mui/material'
import Slider from '@mui/material/Slider'
import React from 'react'

function valuetext(value) {
   return `${value} $`
}
function FilterByPrice() {
   const [value, setValue] = React.useState([20, 37]);

   const handleChange = (event, newValue) => {
      setValue(newValue);
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
               />
            </Box>
            <h4>Price: </h4>
         </Box>
      )
   }
export default FilterByPrice