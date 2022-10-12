import './style.scss'
import big from '../../../../asset/img/S2-big.jpg'
import small from '../../../../asset/img/S2-Small.jpg'
import BigBox from './BigBox';
import SmallBox from './SmallBox';

const dataBig = {
   image: big,
   title: "Women's Day",
   subTitle: "Clearance Sale",
   name: "SHOP NOW"
};

const dataSmall = {
   image: small,
   title: "Sale 50% Off",
   subTitle: "Holiday Offers",
   name: "CODE: GRS18"
}
function Section2(props){
   return (
      <div className='slider_content1'>
         <BigBox data={dataBig} />
         <SmallBox data={dataSmall} />
      </div>
   )
}

export default Section2