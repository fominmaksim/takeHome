import React from "react";
import styled from "styled-components";
import SearchItem from "../components/SearchItem";
import { Results } from "../services/types";

const Title = styled.h3`
  color: white;
  margin-bottom: 1rem;
  margin-top: 3rem;
  font-size: 20px;
`;

interface SearchResultProps {
  label: string;
  data: Results[];
}
const SearchResult: React.FunctionComponent<SearchResultProps> = ({
  label,
  data,
}) => {
  return (
    <>
      <Title>{label[0].toUpperCase() + label.substring(1)}</Title>
      {data.map((el: Results) => {
        return <SearchItem key={el.trackId} content={{ el }} />;
      })}
    </>
  );
};

export default SearchResult;
