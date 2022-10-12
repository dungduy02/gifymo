import './style.scss'

function BigBox(props){
   const { data, section4 } = props;
   const {image, title, subTitle, name} = data
   return (
      <div className='bigBox'>
         <img src={image} alt="" />
         <div className={`${
            (section4 && 'layout-big-content-section4') || 'big-content'
         } layout_big_box `
      }
         >
            <h4>{subTitle}</h4>
            <h2>{title}</h2>
            <div className='layout_big_btn'>{name}</div>
         </div>
      </div>
   )
}

export default BigBox