import './style.scss'

function SectionOne(props) {
  const { typeOfProduct } = props;
  return (
    <div>
      <div className="category">
        {typeOfProduct.map((item, index) => (
          <div className="itemCate cate_active" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionOne




