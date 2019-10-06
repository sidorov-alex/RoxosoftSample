using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RoxosoftSample.Model
{
	public class Order
	{
		[Key]
		public int Id { get; set; }

		[Required]
		public DateTime DateTime { get; set; }

		[Required]
		public OrderStatus Status { get; set; }
	}
}
