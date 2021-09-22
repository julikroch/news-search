import React from 'react'

const Header = (props: { title: string }) => {
    return (
        <nav className='nav-wrapper light-blue darken-3'>
            <a href='#!' className='brand-logo center'>{props.title}</a>
        </nav>
    )
}

export default Header
