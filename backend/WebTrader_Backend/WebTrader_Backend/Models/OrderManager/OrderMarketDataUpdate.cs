using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebTrader_Backend.Models.MarketDataManager;

namespace WebTrader_Backend.Models.OrderManager
{
    public class OrderMarketDataUpdate
    {
        public string Id { get; set; }                                     // Unique OrderID. Can be long, GUID or any sort of string
        public MarketData MarketData { get; set; } = new MarketData();     // An order Market Data Update
    }
}
