import SectionOne from './SectionOne'
import SectionFive from './SectionFive'
import SectionFour from './SectionFour'
import SectionThree from './SectionThree'
import SectionTwo from './SectionTwo'

function SideBar(props) {
   const { typeOfProduct } = props
   return (
      <div>
         
         <SectionOne typeOfProduct={typeOfProduct} />
         <SectionTwo />
         <SectionThree />
         <SectionFour />
         <SectionFive />
      </div>
   )
}

export default SideBar