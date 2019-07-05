import React from "react";

const Destination = ({ handleSelectionChange }) => (
  <>
    <select name="from" onChange={handleSelectionChange}>
      <option value="VLC">Valencia</option>
      <option value="BCN">Barcelona</option>
      <option value="MAD">Madrid</option>
      <option value="MXP">Milano</option>
      <option value="ATH">Athens</option>
    </select>
    <select name="to" onChange={handleSelectionChange}>
      <option value="PRG">Prague</option>
      <option value="BER">Berlin</option>
      <option value="WAW">Warsaw</option>
      <option value="PED">Pardubice</option>
    </select>
  </>
);

export default Destination;
