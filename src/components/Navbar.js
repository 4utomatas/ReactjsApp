import React from 'react';

function Navbar() {
    // navbar
    return(
        <nav className="navbar fixed-top navbar-dark bg-dark">
        <a className="navbar-brand" href="#top">Online Shop</a>      
        <ul className="navbar-nav">
            <li className="nav-item active">
            <a className="nav-link" href="#reset" onClick={AddToLocalStorage}>Reset list</a>
            </li>
        </ul>    
        </nav>
    );
}
function AddToLocalStorage() {
    localStorage.clear();
    var arr = [
        { Name: "Fictional Phone 3000", EAN: "5165157459314", Type: "Phone", Weight: "100", Color: "Red", Active: "false" },
        { Name: "Fictional Phone 3001", EAN: "8214110681686", Type: "Phone", Weight: "127", Color: "Black", Active: "false" },
        { Name: "Fictional Phone 3001", EAN: "5787798767753", Type: "Phone", Weight: "127", Color: "Silver", Active: "true"},
        { Name: "Fictional Phone 3002", EAN: "3913406269384", Type: "Phone", Weight: "107", Color: "Gold", Active: "false"},
        { Name: "Fictional Phone 3003", EAN: "6976202303917", Type: "Phone", Weight: "106", Color: "Rose Gold", Active: "false"},
        { Name: "Tank toy", EAN: "7483869738297", Type: "Toy", Weight: "500", Color: "khaki", Active: "true"}
    ];
    for( var el of arr) {
        console.log(el);
        let myJSON = JSON.stringify(el);
        console.log("JSON:", myJSON)
        localStorage.setItem(el.EAN, myJSON);
    }
    // Reload the page to see the changes
    window.location.reload(false);
    return null;
}
export default Navbar;