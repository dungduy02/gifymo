import './style.scss'
import logo from '../../asset/img/logo.svg'
import ship from '../../asset/icon/ship.gif'
import cart from '../../asset/icon/cart.gif'
import support from '../../asset/icon/support.gif'

function LogoInfo() {
    return (
        <div>
            <div className='container'>
                <div className='logo'>
                    <div className='logo_icon'>
                        <a href="">
                            <img src={logo} alt="" className='icon_logo' />
                        </a>
                    </div>
                </div>
                <div className='list_info'>
                    <div className='content'>
                        <div className='shipping format'>
                            <div className='icon_shipp icon'>
                                <img src={ship} alt="" />
                            </div>
                            <div className='text_ship text'>
                                <div>Free standard shipping</div>
                                <p>on all orders over $99</p>
                            </div>
                        </div>
                        <div className='support format'>
                            <div className='icon_support icon'>
                                <img src={support} alt="" />
                            </div>
                            <div className='text_support text'>
                                <div>support@example.com</div>
                                <p>012 - 345 - 6789</p>
                            </div>
                        </div>
                        <div className='cart format'>
                            <div className='icon_cart icon'>
                                <img src={cart} alt="" />
                            </div>
                            <div className='text_cart text'>
                                <div>Cart: 0 items</div>
                                <p>$0</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default LogoInfo