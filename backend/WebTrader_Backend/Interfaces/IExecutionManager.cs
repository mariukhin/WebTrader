using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebTrader_Backend.Models.OrderManager;

namespace WebTrader_Backend
{
    public interface IExecutionManager
    {
        //
        // Connection management 
        //
        // Tell the backend (buisiness logic) to connect/disconnect 
        //

        Task CreateAndConnectExecutionInterfaceAsync(string userName, string modelName);                    // Connect to Exchange/Broker
        Task DisconnectExecutionInterfaceAsync(string userName, string modelName);                          // Disconnect
        Task<bool> IsExecutionInterfaceConnectedAsync(string userName, string modelName);                   // Check, if execution interface connected

        //
        // Order generation
        //
        Task<IEnumerable<SingleOrder>> GenerateOrdersAsync(string userName, string modelName, bool closeout = false);    // Generate orders for a model. Business logic generates a set of orders and keep it until nexe generation

        //
        // Refresh orders/order statuses and market data
        //
        Task<IEnumerable<SingleOrder>> GetOrdersAsync(string userName, string modelName);                   // Get a list of previously generated ordes
        Task<IEnumerable<OrderStatusUpdate>> GetOrderStatusesAsync(string userName, string modelName);      // Refresh order statuses and Market data if present

        //
        // Order Execution
        //

        Task ExecuteOrderAsync(string userName, string modelName, OrderAmendArgs orderParams);                            // Execute a single order
        Task ExecuteAllGeneratedAsync(string userName, string modelName, Dictionary<string, OrderAmendArgs> orderParams); // Execute all generated orders with ajusted values (if any)
        Task CancelAllOrdersAsync(string userName, string modelName);                                                     // Cancel all orders sent to the market
    }
}
