using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace RoxosoftSample.Model
{
	public class OrderEntry
	{
		[Key]
		public int Id { get; set; }

		[Required]
		[MaxLength(200)]
		public string ProductName { get; set; }

		[Required]
		public int Quantity { get; set; }

		[Required]
		public float Price { get; set; }
	}
}
