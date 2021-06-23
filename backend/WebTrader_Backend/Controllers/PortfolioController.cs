using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebTrader_Backend.Models.PortfolioManager;


namespace WebTrader_Backend.Controllers
{
	[Route("api/portfolio")]
	[ApiController]
	public class PortfolioController : ControllerBase
	{
		// GET: api/portfolio
		[HttpGet]
		public Task<IEnumerable<PortfolioEntry>> GetPorfolio()
		{
			PortfolioDBContext service = new PortfolioDBContext();
			var portfolios = service.GeneratePortfoliosAsync("user", "model");
			return portfolios;
		}
	}
}
