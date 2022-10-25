import './style.scss'
import { Box } from '@mui/material'

function SideBarBlog(props) {
   const { categoriesBlog, tag, blogList } = props
   console.log(categoriesBlog)
   console.log(tag)
   console.log(blogList)
   return (
      <div className="sidebar-blog">
         <Box md={5}>
            <h2 className='categories item_catefories'>Categories</h2>
            {categoriesBlog.map((item, index) => (
               <Box className='item_catefories' key={index}>
                  <li>{item}</li>
               </Box>
            ))}
         </Box>
         <Box>
            <h2 className='categories item_catefories'>Tags</h2>
            <Box className='tag_blog'>
               {tag.map((item, index) => (
                  <Box className='item_tags' key={index}>
                     <h5 className='item_tags_css'>{item}</h5>
                  </Box>
               ))}
            </Box>
         </Box>
         <Box>
            <h2 className='categories item_catefories'>Recent Posts</h2>
            <Box className='recent_posts'>
               {blogList.map((item, index) => (
                  index <=4 && (
                  <div className='item_recent_posts' key={index}>
                     <div className='img_blog_recent'>
                        <img src={require(`../../asset/img/${item.img}.jpg`)} alt="" />
                     </div>
                     <div className="content_blog_recent">
                        <h4>{item.title}</h4>
                        <h5>{item.update}</h5>
                     </div>
                  </div>
                  )
               ))}
            </Box>
         </Box>
      </div>
   )
}

export default SideBarBlog