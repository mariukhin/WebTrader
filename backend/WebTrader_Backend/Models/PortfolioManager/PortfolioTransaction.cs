using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebTrader_Backend.Models.PortfolioManager
{
    public class PortfolioTransaction
    {
        public string Id { get; set; }                  // Unique TransactionID. Can be long, GUID or any sort of string
        public DateTime TimeStamp { get; set; }           // UTC Date-Time stamp when order created.
        public string Product { get; set; }             // Product ID, like MSFT_US_USD_USD
        public string Ticker { get; set; }              // Ticker, like MSFT, AAPL etc.
        public string Exchange { get; set; }            // NYSE, NASDAQ, LSE etc.
        public string Currency { get; set; }            // USD, EUR, CNY
        public string Side { get; set; }                // BUY, SELL
        public double Qty { get; set; }                 // How many shares have we bought or sold
        public double Price { get; set; }               // Actual transaction price 
    }
}
