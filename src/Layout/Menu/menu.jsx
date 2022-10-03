import './style.scss'
import { BsSearch } from 'react-icons/bs';
// import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function Menu(){
    return (
        <div>
            <div className='container1'>
                <div className="menu">
                    <ul className="listMenu">
                        <li className='itemslist active'>
                            <p className='left'></p>
                            <p className='item'><a className='items' href="">HOME</a></p>
                            <p className='right'></p>
                        </li>
                        <li className='itemslist'>
                            <p className='left'></p>
                            <p className='item'><a className='items' href="">SHOP</a></p>
                            <p className='right'></p>
                        </li>
                        <li className='itemslist'>
                            <p className='left'></p>
                            <p className='item'><a className='items' href="">PAGES</a></p>
                            <p className='right'></p>
                        </li>
                        <li className='itemslist'>
                            <p className='left'></p>
                            <p className='item'><a className='items' href="">OUR STORY</a></p>
                            <p className='right'></p>
                        </li>
                        <li className='itemslist'>
                            <p className='left'></p>
                            <p className='item'><a className='items' href="">BLOG</a></p>
                            <p className='right'></p>
                        </li>
                        <li className='itemslist'>
                            <p className='left'></p>
                            <p className='item'><a className='items' href="">CONTACT</a></p>                            
                            <p className='right'></p>
                        </li>
                    </ul>
                </div>
                <div className="search">
                    <form action="" className='search_form'>
                        <div  className="icon_search">
                            <BsSearch className='icon_seachBr' />
                        
                            <input className='input_search' type="text" title='Search...' placeholder='Search...'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Menu