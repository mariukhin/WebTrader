using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebTrader_Backend.Model
{
	public class BasketTrade
	{
		public string Product { get; set; }				// Product ID, like MSFT_US_USD_USD
		public string Ticker { get; set; }				// Ticker, like MSFT, AAPL etc.
		public string MarketDescription { get; set; }	// Market Description, like "Heavy Industry" or "Agriculture"
		public string Exchange { get; set; }			// NYSE, NASDAQ, LSE etc.
		public string Currency { get; set; }			// USD, EUR, CNY
		public double CurrentValue { get; set; }		// Current position, e.g. we have 10 MSFT shares
		public double TradedValue { get; set; }			// How much we are going to trade now, e.g. 2
		public double WantedValue { get; set; }			// Target postition, e.g 12
		public double Price { get; set; }               // Price. For LIMIT orders 
		public string Index { get; set; }               // Index (Trading strategy or model) Name
		public Dictionary<string, string> SystemValues { get; set; } // Reserverd for future usage. We don't know what additional parameters we will need 
	}
}
