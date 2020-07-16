import React from 'react';
import './Style/AddComponents';

className AddComponent extends React.Component { 
    render() {
        return (
            <div className="container">
        <header className="header flex">
            <div className="logo">
                <img src="images/Original on Transparentwhite.png" alt="logo"><a href="stufindex.html"></a>
            </div>
            <nav className="main-nav">
                <ul className="nav-links">
                    <li><a href="stufindex.html">Stuf</a></li>
                    <li><a href="#">Stuf.Add</a></li>
                    <li><a href="stufbid.html">Stuf.Bid</a></li>
                    <li><a href="stufitems.html">Stuf.Items</a></li>
                </ul>
            </nav>
            <a className='cta' href="#"><button>Join</button></a>
        </header>
    </div>

    <div classNameName="heading">
        <span className="title1">Stuf.Add</span>
        <span className="title2">You've got stuf your fans would love to have!</span>
        <span className="title3">Here's a chance to connect with fans, AND make a diff.</span>
        <span className="title4">Click on Add.Stuf below, give us the deets, then do the tweets. And yeah, Insta, Snap and Pinta as well. 50% of the net-proceeds will be donated to the national organization you love - who is making a difference across the country.</span>
        
            <button className="register">
                <a href="#modal" className="registerLink">Add.Stuf</a>
            </button>
    </div>
        <div className="modal_container" id="modal">
            <div className="modal">
                <a href="#" className="close">+</a>
                <span className="modal_heading">ENTER YOUR DEETS...</span>
                    <form action="#">
                        <input type="text" placeholder="Name">
                        <input type="text" placeholder="Email">
                        <input type="text" placeholder="Item">
                        <input type="text" placeholder="Estimated Value">
                        <input type="text" placeholder="Organization Supported">
                        <label for="media">Upload some media</label>
                        <input type="file" id="media" name="media" required />
                        <input type="submit" className="btnRegister" value="REGISTER">
                    </form>
                        <a href="#" className="signin">
                            Have an account already?
                        </a>
                        <a href="#" className="forgotPassword">
                            Forgot Password?
                        </a>
            </div>
        </div>
        )
    }
        
}

Export default AddComponent;
