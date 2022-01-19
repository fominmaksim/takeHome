/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../redux/store";
import { ItunesStore } from "../redux/videos/reducer";
import { loadItunesContent } from "../redux/videos/actions";

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
  

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(loadItunesContent(input));
  };

  const dispatch = useDispatch();
  const iTunesData = useSelector<RootStore, ItunesStore["iTunes"]>(
    (store) => store.app.iTunes
  );
 
  console.log(iTunesData);
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Label>
        Search for music and viedo here
        <Input type="text" onChange={handleInputChange} value={input} />
        <SearchSubmitButton type="submit" value="search" />
      </Label>
    </form>
  );
};

export default SearchPanel;
