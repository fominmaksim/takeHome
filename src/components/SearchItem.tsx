import styled from "styled-components";
import "react-responsive-modal/styles.css";
import "../modalStyles.css";
import InfoModal from "../components/Modal";
import { Results } from "../services/types";

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
  width: 100%;
`;
const SubDescription = styled.div`
  display: flex;
  @media (max-width: 1200px) {
    width: 100%;
    display: block;
  }
`;
const Info = styled.div`
  align-self: center;
  justify-self: flex-end;
`;

const LinkExternal = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

interface SearchItemProps {
  content: {
    el: Results;
  };
}
const SearchItem: React.FunctionComponent<SearchItemProps> = ({
  content: { el },
}) => {
  const getArtistUrl = (el: any): string => {
    return el.collectionArtistViewUrl || el.artistViewUrl || "";
  };
  return (
    <Item key={el.trackId}>
      <Cover src={el.artworkUrl60} alt="cover" />
      <Description>
        <ItemTitle>
          <LinkExternal href={el.trackViewUrl} target="_blank">
            {el.trackCensoredName}
          </LinkExternal>
        </ItemTitle>
        <SubDescription>
          <ItemDescription>
            {getArtistUrl(el) ? (
              <LinkExternal href={getArtistUrl(el)} target="_blank">
                {el.artistName}
              </LinkExternal>
            ) : (
              el.artistName
            )}
            &nbsp;
            <Dot>&#8226;</Dot>&nbsp;
          </ItemDescription>
          <ItemDescription>
            {` `}
            <LinkExternal href={el.collectionViewUrl} target="_blank">
              {el.collectionCensoredName}
            </LinkExternal>
          </ItemDescription>
        </SubDescription>
      </Description>
      <Info>
        <InfoModal content={{ el }} />
      </Info>
    </Item>
  );
};

export default SearchItem;
