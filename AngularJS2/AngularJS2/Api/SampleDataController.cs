using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AngularJS2.Models;

namespace AngularJS2.Api
{
    public class SampleDataController : ApiController
    {
        private static StudentMasters[] Summaries = new StudentMasters[2]
        {
          new  StudentMasters { StdID= 1, StdName= "Raju", Email= "Raju@gmail.com" },
          new  StudentMasters { StdID= 2, StdName= "Krishna", Email= "Krishna@gmail.com" }
        };


        public IHttpActionResult Get()
        {
            return Ok(Summaries);

        }

       
       
        public IHttpActionResult Get(int id)
        {
            return Ok( Summaries.Where(i => i.StdID == id).Single()) ;
        }

    }
}
