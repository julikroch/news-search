const Header = (props: { title: string }) => (
    <nav className='nav-wrapper light-blue darken-3'>
        <a href='#!' className='brand-logo center'>{props.title}</a>
    </nav>
)

export default Header
