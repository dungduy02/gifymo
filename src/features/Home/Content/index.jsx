import { Box } from '@mui/material';
import Section4 from './SectionTwoFour/SectionFour';
import Section2 from './SectionTwoFour/SectionTwo';
import ContentSlider from './Slider/ContentSilder';

function Content(){
   return (
      <Box>
         <Box>
            <ContentSlider />
         </Box>
         <Box>
            <Section2 />
         </Box>
         <Box>
            <Section4 />
         </Box>
      </Box>
   )
}

export default Content;