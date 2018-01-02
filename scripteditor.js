var queryString = Math.random();
var ss = SpreadsheetApp.getActiveSpreadsheet();

// ======
// !!!
// IMPORTANT: Create a sheet called 'Rates'.  This is where the values will be written
// !!!
// ======
var ssRates = ss.getSheetByName('Rates');

// ====== Set the target currency =======
// Don't change if using USD
// Possible values:
  // "aud", "brl", "cad", "chf", "clp", "cny", "czk", "dkk", "eur", "gbp", "hkd", "huf",
  // "idr", "ils", "inr", "jpy", "krw", "mxn", "myr", "nok", "nzd", "php", "pkr", "pln",
  // "rub", "sek", "sgd", "thb", "try", "twd", "usd", "zar"
// ======================================
var targetCurrency = 'usd'

// Grabs all CoinMarketCap data
if (typeof targetCurrency == 'undefined' || targetCurrency == '') {targetCurrency = 'usd'};
var coins = getCoins();

function getData() {

  // ===== Coins to Track ======
  // Enter the coins you want tracked, each one on a new line, in single quotes, followed by a comma
  // Use the value in the 'symbol' field here: https://api.coinmarketcap.com/v1/ticker/?limit=0
  // ===========================
  var myCoins = [
    'SALT',
    'ADA',
    'MIOTA',
    'LTC',
    'ETH',
    'XRP',
    'XMR',
  ]

  // Set column headers
  var myColumns = [
    ['Currency','symbol'],
    ['Name', 'name'],
    ['Quantity',''],
    ['Book Price(USD)',''],
    ['Market Price(USD)', 'price_usd'],
    ['Value(USD)',''],
    ['Value(DKK)',''],
    ['% Allocation',''],
    ['Profit(USD)',''],
    ['Profit(DKK)',''],
    ['% Change 1H', 'percent_change_1h'],
    ['% Change 24H', 'percent_change_24h'],
    ['% Change 7D', 'percent_change_7d'],
    ['Rank', 'rank'],
    ['Market Cap USD', 'market_cap_usd'],
    ['Last Updated', 'last_updated']
  ]

  // Creating new Object with our coins for later use.
  // Each Object's key is the coin symbol
  var myCoinsObj = {};
  var myCoinsCount = myCoins.length;

  for (c in myColumns) {
    ssRates.getRange(1, parseInt(c)+1).setValue(myColumns[c][0]);
    if (myColumns[c][1]){
      for (r in myCoins){
        var n = 0;
        while (coins[n]['symbol'] !== myCoins[r]) {
          n++;
        }
        myCoinsObj[coins[n]['symbol']] = coins[n];

        ssRates.getRange(parseInt(r)+2, parseInt(c)+1).setValue(myCoinsObj[myCoins[r]][myColumns[c][1]]);
      }
    }
  }
}

  // ===== VTC wallet balances =======
  // Add more as needed with different variable names
  // Change the value in getRange() to match the cell in spreadsheet
  // Change the value in setValue() to match the variable above
  // =================================

  //
  // Uncomment variables to use
  //

  //var VtcWallet = getVtcBalance("yourAddressHere");
  //ssRates.getRange('E3').setValue(VtcWallet);

  // ===== Ethereum Wallet Balances =====
  //Create an account on Etherscan.io
  // Create an API key at https://etherscan.io/myapikey
  // Put your API key in below, replacing yourEtherscanApiKey
  // Add Ethereum address, replacing yourEthAddress
  // Change the value in setValue() to match the variable above
  // ====================================

  //
  // Uncomment variables and follow instructions above to use
  //

  //var EthApiKey = "yourEtherscanApiKey";
  //var EthWallet = getEthBalance(EthApiKey,"yourEthAddress");
  //ssRates.getRange('E1').setValue(EthWallet);

  //
  // DON'T TOUCH ANYTHING BELOW
  // IT MAKES THE MAGIC HAPPEN
  //

function getCoins() {

  var url = 'https://api.coinmarketcap.com/v1/ticker/?convert=' + targetCurrency + '&limit=0?';
  var response = UrlFetchApp.fetch(url, {'muteHttpExceptions': true});
  var json = response.getContentText();
  var data = JSON.parse(json);

  return data;
}

function flatten(arrayOfArrays){
  return [].concat.apply([], arrayOfArrays);
}
