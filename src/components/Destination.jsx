import React from 'react';

const Destination = ({ handleFrom, handleTo }) => (
    <>  
        <select name="from" onChange={handleFrom}> 
            <option value="VLC">Valencia</option>
            <option value="BCN">Barcelona</option>
            <option value="MAD">Madrid</option>
            <option value="MXP">Milano</option>
            <option value="ATH">Athens</option>
        </select>
        <select name="to" onChange={handleTo}>
            <option value="PRG">Prague</option>
            <option value="BER">Berlin</option>
            <option value="WAW">Warsaw</option>
            <option value="PED">Pardubice</option>
        </select>
        <button>Submit</button>
    </>
)


export default Destination