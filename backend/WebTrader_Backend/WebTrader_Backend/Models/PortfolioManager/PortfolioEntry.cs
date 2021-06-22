using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebTrader_Backend.Models.PortfolioManager
{
    public class PortfolioEntry
    {
        public string Product { get; set; }         // Product ID, like MSFT_US_USD_USD
        public string Ticker { get; set; }          // Ticker, like MSFT, AAPL etc.
        public double Amount { get; set; }          // How many shares do we have. Can be negative!
        public double AvgPrice { get; set; }        // What is average price of all 
        public double BrokerAmount { get; set; }    // Should be exactly as our Amount. If there is a difference more data provided in SystemValues!
        public double BrokerAvgPrice { get; set; }  // Should be exactly as our AvgPrice but may differ a little
        public double PL { get; set; }              // Profit and loss. Are we making money or loosing them
        public Dictionary<string, string> SystemValues { get; set; } = new Dictionary<string, string>(); // If positions are different, additional info comes as a set of SystemValues 
    }
}
