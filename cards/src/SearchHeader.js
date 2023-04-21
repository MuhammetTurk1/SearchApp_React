import {useState} from "react";

function SearcHeader({search}) {

const [valueInput, setValue] = useState('')
const handleChange=(event)=>{
    setValue(event.target.value)

}
const handleFormSubmit =(event) =>{
    event.preventDefault();

    search(valueInput);
}

    return ( 
    <div className="searchDiv">

    <form onSubmit={handleFormSubmit}> 
        <label>Ne Ariyorsunuz</label>
        <input value={valueInput} onChange={handleChange}/>
        {/* <div>{valueInput} </div> */}
    </form>

    </div> 
    );
}

export default SearcHeader;