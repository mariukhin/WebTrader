using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebTrader_Backend.Models.OrderManager
{
	public class OrderDBContext : DbContext, IExecutionManager
    {
        bool isConnected = false;
        List<SingleOrder> orders = new List<SingleOrder>();

        public OrderDBContext()
        {
            GenerateOrders();
        }

        public async Task CreateAndConnectExecutionInterfaceAsync(string userName, string modelName)
        {
            await Task.Run(() =>
            {
                isConnected = true;
            });
        }

        public async Task DisconnectExecutionInterfaceAsync(string userName, string modelName)
        {
            await Task.Run(() =>
            {
                isConnected = false;
            });
        }

        public async Task<bool> IsExecutionInterfaceConnectedAsync(string userName, string modelName)
        {
            return await Task.Run(() =>
            {
                return isConnected;
            });
        }




        public async Task CancelAllOrdersAsync(string userName, string modelName)
        {
            await Task.Run(() =>
            {
                orders.ForEach(order => {
                    if ((order.OrderStatus != "CANCELLED") && (order.OrderStatus != "FILLED") && (order.OrderStatus != "REJECTED") && (order.OrderStatus != "UNKNOWN"))
                    {
                        order.OrderStatus = "CANCELLED";
                        order.OrderText = "Cancelled by user";
                    }
                });
            });
        }


        public async Task ExecuteAllGeneratedAsync(string userName, string modelName, Dictionary<string, OrderAmendArgs> orderParams)
        {
            await Task.Run(() =>
            {
                if (orders.Count == 10)
                {
                    if ((orderParams == null) || (orderParams.Count == 0))
                    {
                        orders[0].OrderStatus = "UNKNOWN"; orders[0].OrderText = "Not in market";
                        orders[1].OrderStatus = "PARTIALLY FILLED"; orders[1].OrderText = "Order partially filled";
                        orders[2].OrderStatus = "FILLED"; orders[2].OrderText = "All Done";
                        orders[3].OrderStatus = "NEW"; orders[3].OrderText = "Order sent top the market";
                        orders[4].OrderStatus = "CANCELLED"; orders[4].OrderText = "Cancelled by broker";
                        orders[5].OrderStatus = "REJECTED"; orders[5].OrderText = "Not enough funds to perform transaction";
                        orders[6].OrderStatus = "PARTIALLY FILLED"; orders[6].OrderText = "Order partially filled";
                        orders[7].OrderStatus = "PARTIALLY FILLED"; orders[7].OrderText = "Order partially filled";
                        orders[8].OrderStatus = "FILLED"; orders[8].OrderText = "All Done";
                        orders[9].OrderStatus = "FILLED"; orders[9].OrderText = "All Done";
                    }
                    else
                    {
                        //TODO: Execute only SELECTED orders!!!!
                    }
                }
            });
        }

        public async Task ExecuteOrderAsync(string userName, string modelName, OrderAmendArgs orderParams)
        {
            await Task.Run(() =>
            {
                if (orders.Count == 10)
                {
                    var ord = orders.SingleOrDefault(order => order.Id == orderParams.Id);

                    if (ord != null)
                    {
                        ord.OrderStatus = "FILLED";
                        ord.OrderText = "Filled Succesfully";
                    }
                }
            });
        }

        public async Task<IEnumerable<SingleOrder>> GenerateOrdersAsync(string userName, string modelName, bool closeout = false)
        {
            return await Task.Run(() =>
            {
                GenerateOrders();
                return orders;
            });
        }

        public async Task<IEnumerable<SingleOrder>> GetOrdersAsync(string userName, string modelName)
        {
            return await Task.Run(() =>
            {
                return orders;
            });
        }

        public async Task<IEnumerable<OrderStatusUpdate>> GetOrderStatusesAsync(string userName, string modelName)
        {
            return await Task.Run(() =>
            {
                List<OrderStatusUpdate> result = new List<OrderStatusUpdate>();
                orders.ForEach(order => { result.Add(new OrderStatusUpdate(order)); });
                return result;
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
