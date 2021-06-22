using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebTrader_Backend.Models.MarketDataManager;


namespace WebTrader_Backend.Models.OrderManager
{
    public class OrderStatusUpdate
    {
        public OrderStatusUpdate() { 
        }

        public OrderStatusUpdate(SingleOrder order)
        {
            this.Id = order.Id;
            this.OrderStatus = order.OrderStatus;
            this.OrderText = order.OrderText;
            this.MarketData = order.MarketData.Clone();
            this.SystemValues = order.SystemValues.ToDictionary(entry => entry.Key, entry => entry.Value);
        }

        public string Id { get; set; }                                                                   // Unique OrderID. Can be long, GUID or any sort of string
        public string OrderStatus { get; set; }                                                          // Order Status: UNKNOWN, NEW, PARTIALLY FILLED, FILLED, CANCELLED, REJECTED, EXPIRED
        public string OrderText { get; set; }                                                            // An explanation of order status especially when order rejected
        public MarketData MarketData { get; set; } = new MarketData();                                   // Market Data for an Order. Can be null
        public Dictionary<string, string> SystemValues { get; set; } = new Dictionary<string, string>(); // Reserverd for future usage. We don't know what can be tere yet. Can be nul.
    }
}

