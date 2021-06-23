using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebTrader_Backend.Models.OrderManager;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebTrader_Backend.Controllers
{
	[ApiController]
	public class OrderController : ControllerBase
	{
		// GET: api/orders
		[HttpGet]
		[Route("api/orders")]
		public Task<IEnumerable<SingleOrder>> GetOrders()
		{
			OrderDBContext service = new OrderDBContext();
			var orders = service.GetOrdersAsync("user", "model");
			return orders;
		}

		// GET: api/execution
		[HttpGet]
		[Route("api/execution")]
		public Task<IEnumerable<SingleOrder>> GetExecution()
		{
			OrderDBContext service = new OrderDBContext();
			var orders = service.GenerateOrdersAsync("user", "model");
			return orders;
		}

		// POST: api/connect
		[HttpPost]
		[Route("api/connect")]
		public Task<bool> Connect()
		{
			OrderDBContext service = new OrderDBContext();
			service.CreateAndConnectExecutionInterfaceAsync("user", "model");
			var connected = service.IsExecutionInterfaceConnectedAsync("user", "model");
			return connected;
		}

		// POST: api/disconnect
		[HttpPost]
		[Route("api/disconnect")]
		public Task<bool> Disconnect()
		{
			OrderDBContext service = new OrderDBContext();
			service.DisconnectExecutionInterfaceAsync("user", "model");
			var connected = service.IsExecutionInterfaceConnectedAsync("user", "model");
			return connected;
		}
	}
}
