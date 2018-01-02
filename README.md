# Crypto Sheets
Google Sheets script editor code for managing a cryptocurrency tracking spreadsheet

## Instructions

This is a template for creating your own spreadsheet to track your cryptocurrency balances and current prices.  It assumes the use of Google Sheets and the built in script editor (Tools > Script editor...).

1. Click "Tools > Script editor..." on the menu bar
1. Select all of the text in the right pane and delete it (unless you have already written your own functions)
1. Paste the contents of scripteditor.js into the pane on the right
1. Add in as many currencies that you want to track
1. Add triggers "Edit > Current project's triggers..."
   1. Click "Add a new trigger"
   1. In the "Run" dropdown, choose "getData" and choose which triggers you'd like.  I use "Time-driven/Minutes/Every 15", and "From spreadsheet/On open".

## To Do

1. Add detailed instructions for configuring your own Google Sheets crypto tracker
1. Templatize the script to pull in lists of cryptos to track, and account balances to track
1. Historical data

## License

This project is licensed under the GNU General Public License v3.0
