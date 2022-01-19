const Message = ({ gameResult, setClicked }) => {
    const handleBack = () => {
        setClicked('');
    };

    return (
        <div className="result-message">
            <h3 className="message-text">
                YOU {gameResult > 0 ? 'WIN' : (gameResult === 0 ? 'DRAW' : 'LOSE')}
            </h3>
            <button 
                onClick={handleBack}
                className="back-button"
            >
                PLAY AGAIN
            </button>
        </div>
    )
};

export default Message;