import BigBox from './BigBox'
import SmallBox from './SmallBox'
import small from '../../../../asset/img/S4-small.jpg'
import big from '../../../../asset/img/S4-big.jpg'
import './style.scss'

const dataSmallBox = {
   image: small,
   title: '$19.99',
   subTitle: 'Shop Online Gifts Under',
   name: 'SHOP NOW'
}

const dataBigBox = {
   image: big,
   title: '30% Off Home Decor',
   subTitle: 'Amazing Gifts',
   name: 'SHOP NOW'
}
function Section4(props){
   return (
      <div className='slider_content1'>
         <SmallBox data={dataSmallBox} section4 />
         <BigBox data={dataBigBox} section4/>
      </div>
   )
}

export default Section4