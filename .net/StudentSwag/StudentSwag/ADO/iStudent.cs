using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using StudentSwag.models;
using Microsoft.AspNetCore.Mvc;


namespace StudentSwag.ADO
{
    interface iStudent
    {
        public List<Student> Get();

        public void CreateStudent(Student student)
;

        public void UpdateStudent(Student student);


        public void DeleteStudent(int studentId);

    }
}
