import { TypeOfProduct } from '../../api';
import Content from './Content';
import SideBar from './SideBar'
import homeStyle from './style.module.scss'

const ListTypeOfProduct = TypeOfProduct;

function Home(props){
    return (
        <div>
            <div className={`${homeStyle.container}`}>
                <div className={`${homeStyle.sidebar_home}`}>
                    <SideBar typeOfProduct={ListTypeOfProduct} />
                </div>
                <div className={`${homeStyle.content_home}`}>
                    <Content />
                </div>
            </div>
        </div>
    )
}

export default Home