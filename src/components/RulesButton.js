const RulesButton = ({ setOpen }) => {
    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <button 
            className="rules-button" 
            onClick={handleOpen}
        >
            RULES
        </button>
    );
};

export default RulesButton;