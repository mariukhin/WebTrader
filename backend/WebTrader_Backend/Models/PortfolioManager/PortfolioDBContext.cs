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
        List<PortfolioTransaction> portfolioTransactions = new List<PortfolioTransaction>();

        public PortfolioDBContext()
        {
            portfolioEntries.Add(new PortfolioEntry() { Product = "APD US Equity_US_USD_USD", Ticker = "APD", Amount = 1, AvgPrice = 0, BrokerAmount = 0, BrokerAvgPrice = 0, PL = 0.0 });
            portfolioEntries.Add(new PortfolioEntry() { Product = "AXP US Equity_US_USD_USD", Ticker = "AXP", Amount = 3, AvgPrice = 0, BrokerAmount = 0, BrokerAvgPrice = 0, PL = 0.0 });
            portfolioEntries.Add(new PortfolioEntry() { Product = "APH US Equity_US_USD_USD", Ticker = "APH", Amount = 14, AvgPrice = 0, BrokerAmount = 0, BrokerAvgPrice = 0, PL = 0.0 });
            portfolioEntries.Add(new PortfolioEntry() { Product = "ADI US Equity_US_USD_USD", Ticker = "ADI", Amount = 12, AvgPrice = 0, BrokerAmount = 0, BrokerAvgPrice = 0, PL = 0.0 });
            portfolioEntries.Add(new PortfolioEntry() { Product = "AMA US Equity_US_USD_USD", Ticker = "AMA", Amount = 10, AvgPrice = 0, BrokerAmount = 0, BrokerAvgPrice = 0, PL = 0.0 });

            portfolioTransactions.Add(new PortfolioTransaction() { Id = "1", TimeStamp = DateTime.UtcNow, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", Side = "BUY", Qty = 1, Price = 284.1 });
            portfolioTransactions.Add(new PortfolioTransaction() { Id = "2", TimeStamp = DateTime.UtcNow, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", Side = "BUY", Qty = 4, Price = 147.145 });
            portfolioTransactions.Add(new PortfolioTransaction() { Id = "3", TimeStamp = DateTime.UtcNow, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", Side = "SELL", Qty = 20, Price = 67.8983 });
            portfolioTransactions.Add(new PortfolioTransaction() { Id = "4", TimeStamp = DateTime.UtcNow, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", Side = "BUY", Qty = 10, Price = 159.3447 });
            portfolioTransactions.Add(new PortfolioTransaction() { Id = "5", TimeStamp = DateTime.UtcNow, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", Side = "SELL", Qty = 28, Price = 135.1779 });
            portfolioTransactions.Add(new PortfolioTransaction() { Id = "6", TimeStamp = DateTime.UtcNow, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", Side = "BUY", Qty = 13, Price = 189.345 });
            portfolioTransactions.Add(new PortfolioTransaction() { Id = "7", TimeStamp = DateTime.UtcNow, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", Side = "BUY", Qty = 1, Price = 803.8405 });
            portfolioTransactions.Add(new PortfolioTransaction() { Id = "8", TimeStamp = DateTime.UtcNow, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", Side = "BUY", Qty = 28, Price = 39.285 });
            portfolioTransactions.Add(new PortfolioTransaction() { Id = "9", TimeStamp = DateTime.UtcNow, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", Side = "BUY", Qty = 14, Price = 481.8249 });
            portfolioTransactions.Add(new PortfolioTransaction() { Id = "10", TimeStamp = DateTime.UtcNow, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", Side = "BUY", Qty = 17, Price = 102.6182 });
            portfolioTransactions.Add(new PortfolioTransaction() { Id = "11", TimeStamp = DateTime.UtcNow, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", Side = "BUY", Qty = 3, Price = 161.3524 });
            portfolioTransactions.Add(new PortfolioTransaction() { Id = "12", TimeStamp = DateTime.UtcNow, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", Side = "SELL", Qty = 127, Price = 51.795 });
            portfolioTransactions.Add(new PortfolioTransaction() { Id = "13", TimeStamp = DateTime.UtcNow, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", Side = "BUY", Qty = 18, Price = 72.4332 });
            portfolioTransactions.Add(new PortfolioTransaction() { Id = "14", TimeStamp = DateTime.UtcNow, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", Side = "SELL", Qty = 12, Price = 80.2084 });
            portfolioTransactions.Add(new PortfolioTransaction() { Id = "15", TimeStamp = DateTime.UtcNow, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", Side = "BUY", Qty = 9, Price = 141.88 });
            portfolioTransactions.Add(new PortfolioTransaction() { Id = "16", TimeStamp = DateTime.UtcNow, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", Side = "BUY", Qty = 14, Price = 76.4212 });
            portfolioTransactions.Add(new PortfolioTransaction() { Id = "17", TimeStamp = DateTime.UtcNow, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", Side = "BUY", Qty = 6, Price = 91.8699 });
            portfolioTransactions.Add(new PortfolioTransaction() { Id = "18", TimeStamp = DateTime.UtcNow, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", Side = "BUY", Qty = 16, Price = 44.7896 });
            portfolioTransactions.Add(new PortfolioTransaction() { Id = "19", TimeStamp = DateTime.UtcNow, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", Side = "SELL", Qty = 25, Price = 64.675 });
            portfolioTransactions.Add(new PortfolioTransaction() { Id = "20", TimeStamp = DateTime.UtcNow, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", Side = "BUY", Qty = 28, Price = 319.3699 });
            portfolioTransactions.Add(new PortfolioTransaction() { Id = "21", TimeStamp = DateTime.UtcNow, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", Side = "BUY", Qty = 2, Price = 415.985 });
            portfolioTransactions.Add(new PortfolioTransaction() { Id = "22", TimeStamp = DateTime.UtcNow, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", Side = "BUY", Qty = 4, Price = 222.83 });
            portfolioTransactions.Add(new PortfolioTransaction() { Id = "23", TimeStamp = DateTime.UtcNow, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", Side = "SELL", Qty = 108, Price = 67.02 });
            portfolioTransactions.Add(new PortfolioTransaction() { Id = "24", TimeStamp = DateTime.UtcNow, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", Side = "BUY", Qty = 4, Price = 117.4118 });
            portfolioTransactions.Add(new PortfolioTransaction() { Id = "25", TimeStamp = DateTime.UtcNow, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", Side = "BUY", Qty = 26, Price = 156.19 });
            portfolioTransactions.Add(new PortfolioTransaction() { Id = "26", TimeStamp = DateTime.UtcNow, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", Side = "SELL", Qty = 13, Price = 61.505 });
            portfolioTransactions.Add(new PortfolioTransaction() { Id = "27", TimeStamp = DateTime.UtcNow, Product = "APD US Equity_US_USD_USD", Ticker = "APD", Exchange = "US", Currency = "USD", Side = "BUY", Qty = 3, Price = 285.44 });
        }

        public async Task<IEnumerable<PortfolioEntry>> GeneratePortfoliosAsync(string userName, string modelName, bool closeout = false)
        {
            return await Task.Run(() =>
            {
                return portfolioEntries;
            });
        }

        public async Task<IEnumerable<PortfolioTransaction>> GetPortfolioTransactionsAsync(string userName, string modelName, long startIndex = 0, long endIndex = long.MaxValue)
        {
            return await Task.Run(() =>
            {
                return portfolioTransactions;
            });
        }

        public DbSet<PortfolioEntry> Portfolios { get; set; }
        public DbSet<PortfolioTransaction> Transactions { get; set; }
    }
}
