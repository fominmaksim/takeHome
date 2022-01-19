export type contentResponse = {
  resultsCount: number;
  results: Results[];
};

export interface Results {
  wrapperType: string;
  kind: string;
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  trackViewUrl: string;
  previewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness: string;
  discCount: number;
  discNumber: number;
  trackCount: number;
  trackNumber: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  isStreamable: boolean;
}

// export interface Content {
//   wrapperType: string;
//   kind: string;
//   trackId: number;
//   artistName: string;
//   trackName: string;
//   trackCensoredName: string;
//   trackViewUrl: string;
//   previewUrl: string;
//   artworkUrl30: string;
//   artworkUrl60: string;
//   artworkUrl100: string;
//   collectionPrice: number;
//   trackPrice: number;
//   trackRentalPrice: number;
//   collectionHdPrice: number;
//   trackHdPrice: number;
//   trackHdRentalPrice: number;
//   releaseDate: string;
//   collectionExplicitness: string;
//   trackExplicitness: string;
//   trackTimeMillis: number;
//   country: string;
//   currency: string;
//   primaryGenreName: string;
//   contentAdvisoryRating: string;
//   shortDescription: string;
//   longDescription: string;
// }