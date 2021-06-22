using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebTrader_Backend.Models.PortfolioManager
{
	public class PortfolioDBContext : DbContext
    {
        List<PortfolioEntry> portfolioEntries = new List<PortfolioEntry>();

        public PortfolioDBContext()
        {
            portfolioEntries.Add(new PortfolioEntry() { Product = "APD US Equity_US_USD_USD", Ticker = "APD", Amount = 1, AvgPrice = 0, BrokerAmount = 0, BrokerAvgPrice = 0, PL = 0.0 });
            portfolioEntries.Add(new PortfolioEntry() { Product = "AXP US Equity_US_USD_USD", Ticker = "AXP", Amount = 3, AvgPrice = 0, BrokerAmount = 0, BrokerAvgPrice = 0, PL = 0.0 });
            portfolioEntries.Add(new PortfolioEntry() { Product = "APH US Equity_US_USD_USD", Ticker = "APH", Amount = 14, AvgPrice = 0, BrokerAmount = 0, BrokerAvgPrice = 0, PL = 0.0 });
            portfolioEntries.Add(new PortfolioEntry() { Product = "ADI US Equity_US_USD_USD", Ticker = "ADI", Amount = 12, AvgPrice = 0, BrokerAmount = 0, BrokerAvgPrice = 0, PL = 0.0 });
            portfolioEntries.Add(new PortfolioEntry() { Product = "AMA US Equity_US_USD_USD", Ticker = "AMA", Amount = 10, AvgPrice = 0, BrokerAmount = 0, BrokerAvgPrice = 0, PL = 0.0 });
        }

        public async Task<IEnumerable<PortfolioEntry>> GeneratePortfoliosAsync(string userName, string modelName, bool closeout = false)
        {
            return await Task.Run(() =>
            {
                return portfolioEntries;
            });
        }

        public DbSet<PortfolioEntry> Portfolios { get; set; }
    }
}
