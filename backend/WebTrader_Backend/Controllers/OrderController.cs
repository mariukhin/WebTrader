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
		string name = "user";
		string model = "model";

		// GET: api/orders
		[HttpGet]
		[Route("api/orders")]
		public Task<IEnumerable<SingleOrder>> GetOrders()
		{
			OrderDBContext service = new OrderDBContext();
			var orders = service.GetOrdersAsync(name, model);
			return orders;
		}

		// GET: api/execution
		[HttpGet]
		[Route("api/execution")]
		public Task<IEnumerable<SingleOrder>> GetExecution()
		{
			OrderDBContext service = new OrderDBContext();
			var orders = service.GenerateOrdersAsync(name, model);
			return orders;
		}

		// POST: api/connect
		[HttpPost]
		[Route("api/connect")]
		public Task<bool> Connect()
		{
			OrderDBContext service = new OrderDBContext();
			service.CreateAndConnectExecutionInterfaceAsync(name, model);
			var connected = service.IsExecutionInterfaceConnectedAsync(name, model);
			return connected;
		}

		// POST: api/disconnect
		[HttpPost]
		[Route("api/disconnect")]
		public Task<bool> Disconnect()
		{
			OrderDBContext service = new OrderDBContext();
			service.DisconnectExecutionInterfaceAsync(name, model);
			var connected = service.IsExecutionInterfaceConnectedAsync(name, model);
			return connected;
		}
	}
}
