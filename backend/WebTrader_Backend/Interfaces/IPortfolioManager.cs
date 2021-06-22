using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebTrader_Backend.Models.PortfolioManager;

namespace WebTrader_Backend
{
    interface IPortfolioManager
    {
        //
        // Get a list of portfolio entries
        //
        Task<IEnumerable<PortfolioEntry>> GetPortfolioEntriesAsync(string userName, string modelName, bool brokerPositions = false);  // Returns a list of current portfolio positions

        //
        // A list of transactions can be very long
        //
        Task<long> GetPortfolioTransactionsCountAsync(string userName, string modelName);
        Task<IEnumerable<PortfolioTransaction>> GetPortfolioTransactionsAsync(string userName, string modelName, long startIndex = 0, long endIndex = Int64.MaxValue);  // Returns a list of portfolio transactions

        //
        // Portfolio position ajustment
        //
        Task AmendPortfolioPositionsAsync(string userName, string modelName, List<PortfolioEntryAmendArgs> newValues);                                     // Adjust position in a case of corporate actions
    }
}
