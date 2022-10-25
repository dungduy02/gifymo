import ContentBlog from "./ContentBlog"
import SideBarBlog from "./SideBarBlog"
import { BlogList, CategoriesBlog, TagBlogs } from '../../api'

function Blog(props){
   const blogList = BlogList
   const categoriesBlog = CategoriesBlog
   const tagBlogs = TagBlogs
   return (
      <div className="container blog">
         <div className="content_blog">
            <ContentBlog data={blogList}/>
         </div>
         <div className="sideBar_blog">
            <SideBarBlog 
               categoriesBlog={categoriesBlog}
               tag={tagBlogs}
               blogList={blogList}
            />
         </div>
      </div>
   )
}

export default Blog