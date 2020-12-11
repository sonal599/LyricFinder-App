import React from 'react'


 function Navbar() {
    return (
        <div className="sticky-top">
           
            <nav className="navbar navbar-dark "  style={{backgroundColor: '#10696f'}}>
                <span className="navbar-brand h1 m-auto">LyricsFinder{' '}
                <i class="fas fa-music"></i>
                </span>
            </nav> 
        </div>
    )
}

export default Navbar;
