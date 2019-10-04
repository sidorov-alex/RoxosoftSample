using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RoxosoftSample.Model
{
	public enum OrderStatus : byte
	{
		Accepted = 0,
		AwaitingShipment = 1,
		Shipped = 2,
		Completed = 3
	}
}
