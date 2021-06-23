using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebTrader_Backend.Models.PortfolioManager;


namespace WebTrader_Backend.Controllers
{
	[ApiController]
	public class PortfolioController : ControllerBase
	{
		string name = "user";
		string model = "model";

		// GET: api/portfolio
		[HttpGet]
		[Route("api/portfolio")]
		public Task<IEnumerable<PortfolioEntry>> GetPorfolio()
		{
			PortfolioDBContext service = new PortfolioDBContext();
			var portfolios = service.GeneratePortfoliosAsync(name, model);
			return portfolios;
		}

		// GET: api/transactions
		[HttpGet]
		[Route("api/transactions")]
		public Task<IEnumerable<PortfolioTransaction>> GetTransactionsList()
		{
			PortfolioDBContext service = new PortfolioDBContext();
			var transactions = service.GetPortfolioTransactionsAsync(name, model);
			return transactions;
		}
	}
}
