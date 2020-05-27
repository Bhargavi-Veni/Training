using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using StudentSwag.ADO;
using StudentSwag.models;

namespace StudentSwag.Controllers
{
    [Route("api/Student")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        studentAdo studentAdoG = new studentAdo();
        //string connection = "SIKHAKOLLI7040\\BSIKHAKOLLI";
        [HttpGet]
        public List<Student> Get()
        {
            return studentAdoG.Get();
        }

        studentAdo studentAdoC = new studentAdo();
        [HttpPost]
        public void CreateStudent(Student student)
        {
            studentAdoC.CreateStudent(student);
        }

        studentAdo studentAdoU= new studentAdo();
        [HttpPut]
        public void UpdateStudent(Student student)
        {
            
            studentAdoU.UpdateStudent(student);
        }

        studentAdo studentAdoD = new studentAdo();
        [HttpDelete]
        public void DeleteStudent(int studentId)
        {
            studentAdoD.DeleteStudent(studentId);
        }
    }

   /* public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public string Subject { get; set; }
    }*/
}