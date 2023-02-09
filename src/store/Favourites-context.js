import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavorite: (favoriteAstronomy) => {},
  removeFavorite: (astronomyId) => {},
  isItemFavorite: (astronomyId) => {},
});

export function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);

  function addFavoriteHandler(favoriteAstronomy) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.concat(favoriteAstronomy);
    });
    console.log(favoriteAstronomy.id);
  }

  function removeFavoriteHandler(astronomyId) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.filter(
        (astronomy) => astronomy.id !== astronomyId
      );
    });
    console.log(astronomyId);
  }

  function itemIsFavoriteHandler(astronomyId) {
    return userFavourites.some((astronomy) => astronomy.id === astronomyId);
  }

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isItemFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;
