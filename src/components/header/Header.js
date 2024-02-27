import './style.css'

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, we are a startup team from <em>Canada</em></strong><br />
                    !Our Names!
                </h1>
                <div className="header__text">
                    <p>"With a passion for business and development."</p>
                </div>
                <a href="#!" className="btn">Download CV</a>
            </div>
        </header>
    );
}

export default Header;