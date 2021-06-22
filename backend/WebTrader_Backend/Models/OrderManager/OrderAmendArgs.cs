using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebTrader_Backend.Models.OrderManager
{
    public class OrderAmendArgs
    {
        public string Id { get; set; }                  // Unique OrderID. Can be long, GUID or any sort of string
        public bool Execute { get; set; }               // Indicates weather order is needed to be executed or not
        public string OrderType { get; set; }           // MARKET, LIMIT, 
        public string AlgoStrategy { get; set; }		// NONE, VWAP, TWAP etc.
        public string Side { get; set; }                // BUY, SELL
        public string TimeInForce { get; set; }         // Valid until the end of the day, until cancelled, fill or kill, etc.
        public double Qty { get; set; }                 // Order Quantity. How much we are going to trade now, e.g. 2
        public string Price { get; set; }               // Order price for limit orders
    }
}
