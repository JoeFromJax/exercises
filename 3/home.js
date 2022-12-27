const joe = require("./users/joe");

joe.buyGame('Buddy goes to Jail', 29.99);
joe.buyGame('Diply leaves the discord...again', 39.99);
joe.buyGame('Duke nukes the DCC', 59.99);
joe.buyGame('Horsey goes to get us milk', 49.99);
joe.wishlistGame('Hot Dog Revenge', 19.99);

joe.sortGames("name");
joe.sortGames("price");