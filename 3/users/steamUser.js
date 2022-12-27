const gameCatalog = require("../games/gameCatalog");

class SteamUser {
  constructor(balance) {
    this.balance = balance;
    this.games = [];
    this.wishlist = [];
  }

  // Purchase a game if the user has enough balance
  buyGame(gameName) {
    const game = gameCatalog.find(g => g.name === gameName);
  
    if (!game) {
      throw new Error('Game not found in gameCatalog.');
    }
  
    if (this.balance < game.price) {
      throw new Error('Insufficient balance to purchase game.');
    }
  
    this.balance -= game.price;
    this.games.push(game);
  }

  // Add a game to the user's wishlist if they don't already own it
  wishlistGame(gameName) {
    // Find the game object in the gameCatalog array using the game name
    const game = gameCatalog.find(g => g.name === gameName);
  
    if (!game) {
      throw new Error('Game not found in gameCatalog.');
    }
  
    if (this.games.includes(game)) {
      throw new Error('You already own this game.');
    }
  
    this.wishlist.push(game);
    console.log("Game added to Wishlist", game.name);
  }

  // Sort the user's games alphabetically
  sortGames(sortType) {
    if (sortType === 'name') {
      this.games.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === 'price') {
      this.games.sort((a, b) => a.price - b.price);
    }
  } 
}

console.log(SteamUser.games);

module.exports = SteamUser;
module.exports.buyGame = SteamUser.prototype.buyGame;
module.exports.wishlistGame = SteamUser.prototype.wishlistGame;
module.exports.sortGames = SteamUser.prototype.sortGames;


