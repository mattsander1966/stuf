import React from 'react';
import './Style/StufComponent';

class StufComponent extends React.Component { 
    render() {
        return (
            <div className="container">
                <div className="split left">
                    <h1>Stuf</h1>
                    <a href="stufadd.html" className="button">Add.Stuf</a>
                    <h3>On the left, Personalities upload items to be auctioned. Half the net proceeds go to their designated national charity.</h3>
                </div>
                <div className="split right">
                    <h1 style="color: black;">Fans</h1>
                    <a href="stufbid.html" className="button1">Bid.Stuf</a>
                    <h3 style="color: black;">On the right, Fans bid on those items with the other half of the net proceeds going to their designated local charity.</h3>
                </div>
            </div>
        )
    }
        
}

export default StufComponent;
