/* eslint-disable array-callback-return */
import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../redux/store";
import { ItunesStore } from "../redux/videos/reducer";
import { loadItunesContent } from "../redux/videos/actions";
import {
  FeatureMovie,
  Podcast,
  Results,
  Song,
  TvEpisode,
} from "../services/types";
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Label = styled.label`
  display: flex;
  flex-direction: row;
`;
const Input = styled.input`
  background-color: #212121;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  height: 3rem;
  color: #818181;
  font-size: 20px;
  width: 100%;
  padding-left: 1rem;
`;
const SearchSubmitButton = styled.input`
  color: #818181;
  background-color: #212121;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-left: 0.1rem;
  padding: 0 1rem;
  cursor: pointer;
`;

const SearchResult = styled.div``;
const Spinner = styled.p`
  color: white;
  font-size: 22px;
  text-align: center;
  margin-top: 93px;
`;
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
`
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
interface GroupedData {
  featureMovie?: FeatureMovie[];
  podcast?: Podcast[];
  song?: Song[];
  tvEpisode?: TvEpisode[];
}
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
  
  const groupedData: GroupedData = {};

  iTunesData?.forEach((el) => {
    const keyName = el.kind as keyof GroupedData;
    if (keyName) {
      groupedData[keyName] = [...(groupedData[keyName] || []), el as any];
    }
  });

  console.log(iTunesData);
  return (
    <Wrapper>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Label>
          <Input
            placeholder="Search"
            type="text"
            onChange={handleInputChange}
            value={input}
          />
          <SearchSubmitButton type="submit" value="→" />
        </Label>
      </form>
      <SearchResult>
        {input?.length && iTunesData?.length ? (
          Object.entries(groupedData).map(([key, val]) => {
            const data = val.slice(0, 3);

            return (
              <div>
                <Title>{key[0].toUpperCase() + key.substring(1)}</Title>
                {data.map((el: Results) => {
                  return (
                    <Item>
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
              </div>
            );
          })
        ) : (
          <Spinner>Find music, video and podcasts</Spinner>
        )}
      </SearchResult>
    </Wrapper>
  );
};

export default SearchPanel;
