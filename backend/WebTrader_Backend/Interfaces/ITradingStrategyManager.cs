using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebTrader_Backend.Model;

namespace WebTraderSpec
{
    public interface ITradingStrategyManager
    {
        Task<IEnumerable<BasketTrade>> GetTradesAsync(string userName, string modelName, bool closeout = false);    // Receive a list of trades
    }
}
