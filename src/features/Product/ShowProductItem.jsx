import imgItemPro from '../../asset/img/itemProduct.jpg';
import { Rating } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './style.scss'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';
function ShowProductItem({ data }) {
   const { price, discount, image, type, description, tag, star, nameItem } = data;
   const [like, setLike] = useState(false);
   return (
      <div className="showProduct">
         <div className="showImage">
            <div className="imageProduct">
               <img src={require(`../../asset/img/${image}.jpg`)} alt="image" />
            </div>
            <div className="listImage">
               {/* {image.map((item, index) => (
                  <div className="imageItem" key={index}>
                     <img src={require(`../../asset/img/${item}.jpg`)} alt="image" />
                  </div>
               ))} */}
            </div>
         </div>
         <div className="showInfo">
            <h3 className='name'>{nameItem}</h3>
            <div className="price">
               <span>{price}</span>
               <span className='discount'>{discount}</span>
            </div>
            <div className="star">
               <Rating name='read-only' value={data?.star} readOnly precision={0.5} className='starIcon' />
               <p>({star} customer reviews) </p>
            </div>
            <div className="description">
               <p>{description}</p>
            </div>
            <div className="quanity">
               <p className="title">Quantity:</p>
               <div className='setcount'>
                  <RemoveIcon />
                  <span>1</span>
                  <AddIcon />
               </div>
               <h3 className='addToCart'>ADD TO CART</h3>
               <div className="favorite" onClick={() => setLike(!like)}>
                  {(like && <FavoriteIcon />) || (<FavoriteBorderIcon />)}
               </div>
            </div>
            <div className="share">
               <h3>Share</h3>
               <div>
                  <FacebookOutlinedIcon />
                  <TwitterIcon />
                  <InstagramIcon />
                  <LinkedInIcon />
                  <GoogleIcon />
                  <PinterestIcon />
                  <MailIcon />
               </div>
            </div>
            <div className="category_tags">
               <div className="categorys">
                  <h4>Categories: </h4>
                  <h4>{type}</h4>
               </div>
               <div className="tags">
                  <h4>Tags: </h4>
                  <h4>{tag}</h4>
               </div>
            </div>
         </div>

      </div>
   )
}

export default ShowProductItem