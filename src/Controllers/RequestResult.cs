namespace RoxosoftSample.Controllers
{
	public class SuccessRequestResult
	{
		public string Status { get; set; } = "ok";

		public object Result { get; set; }
	}

	public class ErrorRequestResult
	{
		public string Status { get; set; } = "error";

		public object Message { get; set; }
	}
}
