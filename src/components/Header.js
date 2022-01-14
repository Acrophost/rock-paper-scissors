import Logo from '../images/logo.svg';

const Header = ({ score }) => {
    return (
        <header className="header">
            <img src={Logo} alt="Rock paper scissors" />
            <div className="score">
                <h2 className="score__title">SCORE</h2>
                <p className="score__value">{score}</p>
            </div>
        </header>
    );
};

export default Header;