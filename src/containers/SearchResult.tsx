/* eslint-disable array-callback-return */
import React from "react";
import styled from "styled-components";
import { Results } from "../services/types";

const Title = styled.h3`
  color: white;
  margin-bottom: 1rem;
  margin-top: 3rem;
  font-size: 20px;
`;
const ItemTitle = styled.p`
  color: white;
  margin-bottom: 0.5rem;
  font-size: 18px;
`;
const ItemDescription = styled.p`
  color: #b4b4b4;
  font-size: 14px;
`;
const Dot = styled.span`
  @media (max-width: 1200px) {
    display: none;
  }
`;
const Item = styled.div`
  display: flex;
  border-bottom: 1px solid #252525;
  padding: 1rem 0.5rem;
  &:last-of-type {
    border-bottom: none;
  }
`;
const Cover = styled.img`
  margin-right: 1rem;
  border-radius: 2px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const SubDescription = styled.div`
  display: flex;
  @media (max-width: 1200px) {
    width: 100%;
    display: block;
  }
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
        return (
          <Item key={el.artistName}>
            <Cover src={el.artworkUrl60} alt="cover" />
            <Description>
              <ItemTitle>{el.trackCensoredName}</ItemTitle>
              <SubDescription>
                <ItemDescription>
                  {el.artistName}&nbsp;<Dot>&#8226;</Dot>&nbsp;
                </ItemDescription>
                <ItemDescription>
                  {` `}
                  {el.collectionCensoredName}
                </ItemDescription>
              </SubDescription>
            </Description>
          </Item>
        );
      })}
    </>
  );
};

export default SearchResult;
