import './style.scss'
import vn from '../../asset/img/vn.png'

function Header(){
    return (
        <div className='header'>
            <div className='header_container'>
                <div className='header_container_top'>
                    <p>&nbsp;210 Đường 11, Phường Trường Thọ, TP Thủ Đức</p>
                </div>
                <div className='header_container_center'>
                    <img src={vn} alt='vn' className='vn' />
                    <p>Vietnamese</p>
                </div>
                <ul className='header_container_bottom'>
                    <li>Sign In / Register</li>
                    <li>About Us</li>
                    <li>Track Orders</li>
                    <li>FAQ</li>
                </ul>
            </div>
        </div>
    )
}

export default Header