using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace AngularJS2.Models
{
    public class StudentMasters
    {
	
		public int StdID { get; set; }

		
		[Display(Name = "Name")]
		public string StdName { get; set; }

	
		[Display(Name = "Email")]
		public string Email { get; set; }

		
	}
}
