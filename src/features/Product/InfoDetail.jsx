import './style.scss'
import Tabs from '@mui/material/Tabs';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box'
import { Typography } from '@mui/material';
import { Avatar, Rating, TextareaAutosize, TextField } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useState } from 'react'

function TabPanel(props) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`full-width-tabpanel-${index}`}
         aria-labelledby={`full-width-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box sx={{ p: 3 }}>
               <Typography>{children}</Typography>
            </Box>
         )}
      </div>

   )
}

TabPanel.proTypes = {
   children: PropTypes.node,
   index: PropTypes.number.isRequired,
   value: PropTypes.number.isRequired
}

function allyProps(index) {
   return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`
   }
}

export default function InfoDetail({ dataReview }) {
   const [value, setValue] = useState(0);
   const [rating, setRating] = useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   }

   return (
      <Box sx={{ width: '100%', display: 'contents' }}>
         <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%', margin: 'auto' }} className="tabPanel">
            <Tabs value={value} onChange={handleChange} aria-label='basic tabs example' className='tabs'>
               <Tab label="DESCRIPTION" {...allyProps(0)} />
               <Tab label="REVIEW" {...allyProps(1)} />
               <Tab label="YOUR REVIEW" {...allyProps(2)} />
            </Tabs>
         </Box>
         <TabPanel value={value} index={0}>
            <div className='tabOne'>
               <h4>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
               </h4>
               <h3>Product Features</h3>
               <div className='description-item'>
                  <CheckCircleOutlineIcon className='checkIcon' />
                  <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
               </div>
               <div className='description-item'>
                  <CheckCircleOutlineIcon className='checkIcon' />
                  <h4>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
               </div>
               <div className='description-item'>
                  <CheckCircleOutlineIcon className='checkIcon' />
                  <h4>
                     Ut enim ad minim veniam, quis nostrud execritation ullamco laboris nisi ut aliquip ex ea commod
                  </h4>
               </div>
               <div className='description-item'>
                  <CheckCircleOutlineIcon className='checkIcon' />
                  <h4>
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                     nulla pariatur.
                  </h4>
               </div>
               <h4>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                  quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                  quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem.
               </h4>
            </div>
         </TabPanel>
         <TabPanel value={value} index={1}>
            <div className="tabTwo">
               {dataReview.map((item, index) => (
                  <div className="comment">
                     <div className="img-review">
                        <Avatar alt="Remy Sharp" src={item.avt} sx={{ width: '70px', height: '70px' }} />
                     </div>
                     <div className="content-review">
                        <h4>{item.content}</h4>
                        <div className="creator-rating flex">
                           <Rating name="read-only" value={item.star} readOnly precision={0.5} />
                           <h3>{item.poster}</h3>
                           <h4>{item.date}</h4>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </TabPanel>
         <TabPanel value={value} index={2}>
            <div className="tabThree">
               <div className="yourReview">
                  <h2>Your Review</h2>
               </div>
               <div className="starYour">
                  <Rating
                     name='simple-controlled'
                     value={rating}
                     onChange={(event, newValue) => {
                        setRating(newValue);
                     }}
                  />
               </div>
               <div className="textAreYour">
                  <TextareaAutosize
                     aria-label='minimum height'
                     minRows={10}
                     placeholder="Your review"
                     style={{ width: '100%', padding: '20px' }}
                  />
               </div>
               
               <div className="name-email-your">
                  <TextField label='Name' variant='outlined' fullWidth='true' />
                  <TextField label='Email' variant='outlined' fullWidth='true' />
               </div>
               <div className="checkYour">
                  <input type="checkbox" />
                  <h4>Save my name, email, and website in this browser for the next time I comment.</h4>
               </div>
               <div className="btnSubmit">
                  <h4 className='btnSubmit-type'>SUBMIT YOUR REVIEW</h4>
               </div>
            </div>
         </TabPanel>
      </Box>
   )
}

