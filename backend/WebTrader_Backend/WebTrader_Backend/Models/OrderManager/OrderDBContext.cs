using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebTrader_Backend.Models.OrderManager
{
	public class OrderDBContext : DbContext
    {
        List<SingleOrder> orders = new List<SingleOrder>();

        public async Task<IEnumerable<SingleOrder>> GenerateOrdersAsync(string userName, string modelName, bool closeout = false)
        {
            return await Task.Run(() =>
            {
                GenerateOrders();
                return orders;
            });
        }

        protected void GenerateOrders() {
            orders.Clear();
            orders.Add(new SingleOrder() { Id = "1" , TimeStamp = DateTime.UtcNow, Execute = true, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", OrderType = "LIMIT",    Side = "BUY",   TimeInForce = "GTC", Qty = 1, Price = 284.1,    OrderStatus = "UNKNOWN", OrderText = "Not in market", AlgoStrategy="NONE" });
            orders.Add(new SingleOrder() { Id = "2" , TimeStamp = DateTime.UtcNow, Execute = true, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", OrderType = "MARKET",   Side = "SELL",  TimeInForce = "GTC", Qty = 1, Price = 0,        OrderStatus = "UNKNOWN", OrderText = "Not in market", AlgoStrategy = "NONE" });
            orders.Add(new SingleOrder() { Id = "3" , TimeStamp = DateTime.UtcNow, Execute = true, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", OrderType = "LIMIT",    Side = "SELL",  TimeInForce = "GTC", Qty = 1, Price = 284.1,    OrderStatus = "UNKNOWN", OrderText = "Not in market", AlgoStrategy = "NONE" });
            orders.Add(new SingleOrder() { Id = "4" , TimeStamp = DateTime.UtcNow, Execute = true, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", OrderType = "MARKET",   Side = "BUY",   TimeInForce = "GTC", Qty = 1, Price = 0,        OrderStatus = "UNKNOWN", OrderText = "Not in market", AlgoStrategy = "NONE" });
            orders.Add(new SingleOrder() { Id = "5" , TimeStamp = DateTime.UtcNow, Execute = true, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", OrderType = "LIMIT",    Side = "BUY",   TimeInForce = "GTC", Qty = 1, Price = 284.1,    OrderStatus = "UNKNOWN", OrderText = "Not in market", AlgoStrategy = "NONE" });
            orders.Add(new SingleOrder() { Id = "6" , TimeStamp = DateTime.UtcNow, Execute = true, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", OrderType = "LIMIT",    Side = "BUY",   TimeInForce = "GTC", Qty = 1, Price = 284.1,    OrderStatus = "UNKNOWN", OrderText = "Not in market", AlgoStrategy = "NONE" });
            orders.Add(new SingleOrder() { Id = "7" , TimeStamp = DateTime.UtcNow, Execute = true, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", OrderType = "LIMIT",    Side = "SELL",  TimeInForce = "GTC", Qty = 1, Price = 284.1,    OrderStatus = "UNKNOWN", OrderText = "Not in market", AlgoStrategy = "NONE" });
            orders.Add(new SingleOrder() { Id = "8" , TimeStamp = DateTime.UtcNow, Execute = true, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", OrderType = "MARKET",   Side = "SELL",  TimeInForce = "GTC", Qty = 1, Price = 0,        OrderStatus = "UNKNOWN", OrderText = "Not in market", AlgoStrategy = "NONE" });
            orders.Add(new SingleOrder() { Id = "9" , TimeStamp = DateTime.UtcNow, Execute = true, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", OrderType = "LIMIT",    Side = "BUY",   TimeInForce = "GTC", Qty = 1, Price = 284.1,    OrderStatus = "UNKNOWN", OrderText = "Not in market", AlgoStrategy = "NONE" });
            orders.Add(new SingleOrder() { Id = "10", TimeStamp = DateTime.UtcNow, Execute = true, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", OrderType = "LIMIT",    Side = "BUY",   TimeInForce = "GTC", Qty = 1, Price = 284.1,    OrderStatus = "UNKNOWN", OrderText = "Not in market", AlgoStrategy = "NONE" });
        }

        public DbSet<SingleOrder> Orders { get; set; }
    }
}
