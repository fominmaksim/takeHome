import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../redux/store";
import { ItunesStore } from "../redux/iTunes/reducer";
import { loadItunesContent } from "../redux/iTunes/actions";
import { FeatureMovie, Podcast, Song, TvEpisode } from "../services/types";
import SearchResult from "./SearchResult";
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
  border-radius: 5px;
  height: 3rem;
  color: #818181;
  font-size: 20px;
  width: 100%;
  padding-left: 1rem;
`;

const SearchResultWrapper = styled.div``;
const Spinner = styled.p`
  color: white;
  font-size: 22px;
  text-align: center;
  margin-top: 10rem;
`;
const Fragment = styled.div``;
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
        
        </Label>
      </form>
      <SearchResultWrapper>
        {iTunesData?.length ? (
          Object.entries(groupedData).map(([key, val]) => {
            const data = val.slice(0, 3);
            return (
              <Fragment key={key}>
                <SearchResult label={key} data={data} />
              </Fragment>
            );
          })
        ) : (
          <Spinner>Find music, video and podcasts</Spinner>
        )}
      </SearchResultWrapper>
    </Wrapper>
  );
};

export default SearchPanel;
