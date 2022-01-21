import Logo from '../images/logo.svg';
import BonusLogo from '../images/logo-bonus.svg';

const Header = ({ score, bonus, setBonus, setScore }) => {
    const handleLogoClick = () => {
        setBonus(!bonus);
    };

    const handleScoreClick = () => {
        localStorage.setItem('score', '0');
        setScore(0);
    };

    return (
        <header className="header">
            <img src={bonus ? BonusLogo : Logo} alt="Rock paper scissors" onClick={handleLogoClick} />
            <div className="score" onClick={handleScoreClick}>
                <h2 className="score__title">SCORE</h2>
                <p className="score__value">{score}</p>
            </div>
        </header>
    );
};

export default Header;