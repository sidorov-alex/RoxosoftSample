using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RoxosoftSample.Model
{
	public class RoxosoftDbContext : DbContext
	{
		public DbSet<Order> Orders { get; set; }

		public DbSet<OrderEntry> OrderEntries { get; set; }

		public RoxosoftDbContext(DbContextOptions<RoxosoftDbContext> options)
			: base(options)
		{
		}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<OrderEntry>()
				.HasOne(x => x.Order)
				.WithMany()
				.IsRequired();
		}
	}
}
