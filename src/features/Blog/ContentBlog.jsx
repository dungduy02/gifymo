import './style.scss'

function ContentBlog(props) {
   const { data } = props
   console.log(data)
   return (
      <div className="content-blog">
         {data.map((item, index) => (
            <div className="blog-item" key={index}>
               <img src={require(`../../asset/img/${item.img}.jpg`)} alt="" />
               <div className="content_item">
                  <a className='title_blog' href='#'>
                     <h4>{item.title}</h4>
                  </a>
                  <div className='content_item_blog'>
                     <div className="info_item">
                        <h3>By: &nbsp;</h3>
                        <h2>{item.creator} &nbsp; &nbsp;</h2>
                     </div>
                     <div className="info_item">
                        <h3>Post: &nbsp;</h3>
                        <h2>{item.update}</h2>
                     </div>
                  </div>
                  <p>{item.description}</p>
               </div>
            </div>
         ))}
      </div>
   )
}

export default ContentBlog