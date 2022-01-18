import React, { useState } from "react";
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 5rem auto;
`;
const Input = styled.input``;
const SearchSubmitButton = styled.input``;

const SearchPanel: React.FunctionComponent = () => {
  const [input, onInputChange] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };

  const submit = (e: React.SyntheticEvent) => {
    console.log(input);
    e.preventDefault();
  };
  return (
    <form onSubmit={(e) => submit(e)}>
      <Label>
        Search for music and viedo here
        <Input type="text" onChange={handleInputChange} value={input} />
        <SearchSubmitButton type="submit" />
      </Label>
    </form>
  );
};

export default SearchPanel;
