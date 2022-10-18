import { Box } from '@mui/material';
import FeatureItems from './Section3/FeatureItems';
import Section5 from './Section5/Section5';
import Section4 from './SectionTwoFour/SectionFour';
import Section2 from './SectionTwoFour/SectionTwo';
import ContentSlider from './Slider/ContentSilder';

function Content(props){
   console.log(props)
   return (
      <Box>
         <Box>
            <ContentSlider />
         </Box>
         <Box>
            <Section2 />
         </Box>
         <Box>
            <FeatureItems />
         </Box>
         <Box>
            <Section4 />
         </Box>
         <Box>
            <Section5 />
         </Box>
      </Box>
   )
}

export default Content;