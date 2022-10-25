import './style.scss';
import { Grid } from '@mui/material';
import { introduction, customService } from '../../api'

export function OurStory() {
   const ourstory = introduction;
   const services = customService;
   console.log(ourstory);
   return (
      <div className='container ourstory'>
         <div className='ourstory_title'>OurStory</div>
         <div className="list_ourstory">
            <div className="list_ourstory_item">
               {ourstory.map((item, index) => (
                  <div className="item_ourstory" key={index}>
                     {index % 2 === 0 && (
                        <div className="oneourstory">
                           <div className="story_img">
                              <img src={require(`../../asset/img/${item.image}.jpg`)} alt="" />
                           </div>
                           <div className="story_content">
                              <div className="story_content_item">
                                 <h4>{item.title}</h4>
                                 <h5>{item.des}</h5>
                              </div>
                           </div>
                        </div>
                     )}
                     {index % 2 === 1 && (
                        <div className="oneourstory">
                           <div className="story_content">
                              <div className="story_content_item">
                                 <h4>{item.title}</h4>
                                 <h5>{item.des}</h5>
                              </div>
                           </div>
                           <div className="story_img">
                              <img src={require(`../../asset/img/${item.image}.jpg`)} alt="" />
                           </div>
                        </div>

                     )}
                  </div>

               ))}
            </div>
         </div>

         <div className="customerservice">
            <h4>Customer Services</h4>
         </div>
         <div className="servicesItem">
            <Grid container spacing={{ xs: 4, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }}>
               {services.map((item, index) => (
                  <Grid item xs={2} sm={4} md={4} className="service" key={index}>
                     <h3>{item.title}</h3>
                     <h4>{item.content}</h4>
                  </Grid>
               ))}
            </Grid>
         </div>


      </div>
   )
}