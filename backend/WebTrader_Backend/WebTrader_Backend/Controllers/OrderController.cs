using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebTrader_Backend.Models.OrderManager;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebTrader_Backend.Controllers
{
	[Route("api/orders")]
	[ApiController]
	public class OrderController : ControllerBase
	{
		// GET: api/orders
		[HttpGet]
		public Task<IEnumerable<SingleOrder>> GetOrders()
		{
			OrderDBContext service = new OrderDBContext();
			var orders = service.GenerateOrdersAsync("user", "model");
			return orders;
		}
	}
}
