using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebTrader_Backend.Models.MarketDataManager
{
	public class MarketData
	{
		public string Product { get; set; }		// Product ID, like MSFT_US_USD_USD
		public string Ticker { get; set; }		// Ticker, like MSFT, AAPL etc.
		public string Exchange { get; set; }    // NASDAQ, NYSE etc.
		public string Currency { get; set; }    // USD, EUR, CNY
		public double Bid { get; set; }			// Bid price (someone wants to buy)
		public double BidSz { get; set; }		// Max. number of items someone wants to buy at this price
		public DateTime BidDt { get; set; }     // Timestamp of this bid
		public double Offer { get; set; }       // Offer price (someone wants to sell and offers the price)
		public double OfferSz { get; set; }     // Max. number of items someone wants to sell at this price
		public DateTime OfferDt { get; set; }   // Timestamp of this pffer
		public double TradePrice { get; set; }	// Last trade amount
		public double TradeSz { get; set; }     // Last trade price
		public DateTime TradeDt { get; set; }   // Last trade timestamp

		public MarketData Clone()
		{
			return (MarketData)this.MemberwiseClone();
		}
	}


}
