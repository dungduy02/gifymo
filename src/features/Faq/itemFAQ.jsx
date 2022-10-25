import './style.scss'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState} from 'react'

function ItemFAQ(props){
   const {dataItem} = props
   const [visible, setVisible] = useState(false)
   return (
      <div className='answer_faq'>
         <div className="answer" onClick={() => setVisible(!visible)}>
            <h3>{dataItem.question}</h3>
            {!visible &&(
               <ArrowForwardIosIcon fontSize='small' sx={{color: 'gray', fontSize: '16px', padding: '18px 0'}}/>
            )}
            {visible && (
               <KeyboardArrowUpIcon sx={{color: 'gray', fontSize: '26px'}}/>
            )}
         </div>
         {visible && (
            <h4 className='text_answer'>{dataItem.answer}</h4>
         )}
      </div>
   )
}

export default ItemFAQ