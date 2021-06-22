using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebTrader_Backend.Models.MarketDataManager;

namespace WebTrader_Backend.Models.OrderManager
{
    public class SingleOrder
    {
        [Key]
        public string Id { get; set; }                  // Unique OrderID. Can be long, GUID or any sort of string
        public DateTime TimeStamp { get; set; }         // UTC Date-Time stamp when order created.
        public bool Execute { get; set; }               // Indicates weather order is ready to be executed or not

        [Column(TypeName = "nvarchar(100)")]
        public string Product { get; set; }             // Product ID, like MSFT_US_USD_USD

        [Column(TypeName = "nvarchar(16)")]
        public string Ticker { get; set; }              // Ticker, like MSFT, AAPL etc.

        [Column(TypeName = "nvarchar(16)")]
        public string Exchange { get; set; }            // NYSE, NASDAQ, LSE etc.

        [Column(TypeName = "nvarchar(16)")]
        public string Currency { get; set; }            // USD, EUR, CNY

        [Column(TypeName = "nvarchar(16)")]
        public string OrderType { get; set; }           // MARKET, LIMIT, 

        [Column(TypeName = "nvarchar(16)")]
        public string AlgoStrategy { get; set; }        // NONE, VWAP, TWAP etc.

        [Column(TypeName = "nvarchar(16)")]
        public string AlgoParameter { get; set; }       // Additional algo parameters

        [Column(TypeName = "nvarchar(16)")]
        public string Side { get; set; }                // BUY, SELL

        [Column(TypeName = "nvarchar(16)")]
        public string TimeInForce { get; set; }         // Valid until the end of the day, until cancelled, fill or kill, etc.
        public double Qty { get; set; }                 // Order Quantity. How much we are going to trade now, e.g. 2
        public double Price { get; set; }               // Order price for limit orders

        [Column(TypeName = "nvarchar(16)")]
        public string OrderStatus { get; set; }         // Order Status: UNKNOWN, NEW, PARTIALLY FILLED, FILLED, CANCELLED, REJECTED, EXPIRED

        [Column(TypeName = "nvarchar(16)")]
        public string OrderText { get; set; }           // An explanation of order status especially when order rejected
        public MarketData MarketData { get; set; } = new MarketData();                                   // Market Data for an Order. Can be null
        public Dictionary<string, string> SystemValues { get; set; } = new Dictionary<string, string>(); // Reserverd for future usage. We don't know what additional parameters we will need 
    }
}
