import  './Dice.css';


function Dice({ value,id, onClick, lock }) {
   
    // This function is called when the button is clicked. It logs "clicked" to the console.
    return(
        <button className="dice" onClick={onClick} style={{ backgroundColor: lock ? "#59E391" : "#FFFFFF" }}>
            {value}
            </button>
    )
}
export default Dice;
// This code defines a functional component called `Dice` that takes a prop called `value`.