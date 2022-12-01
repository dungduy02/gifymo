import './style.scss'
import { Box} from '@mui/material'
import ShowProductItem from './ShowProductItem'
import { ProductItemsData, CustomerReview } from '../../api/ProductItem';
import InfoDetail from './InfoDetail';
import {listItems} from '../../api'
import RelateProduct from './RelatedProduct';
import {useParams} from 'react-router-dom'  

function Product(){
   const {productId} = useParams()
   // console.log(listItems.findIndex(3))
   // const product = listItems.find((listItems) => listItems.id === productId)
   const product = listItems[productId -1]
   const data = product;
   const dataReview = CustomerReview;
   const dataRelatedProduct = [
      listItems[Math.ceil(Math.random() *20)],
      listItems[Math.ceil(Math.random() *20)],
      listItems[Math.ceil(Math.random() *20)],
      listItems[Math.ceil(Math.random() *20)]
   ]
   return (
      <div className='container productItem'>
         <Box></Box>
         <ShowProductItem data = {data}/>
         <InfoDetail dataReview = {dataReview}/>
         <RelateProduct data = {dataRelatedProduct}/>
      </div>
   )
}

export default Product