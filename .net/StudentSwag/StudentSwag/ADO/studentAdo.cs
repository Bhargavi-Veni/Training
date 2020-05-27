using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using StudentSwag.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;

namespace StudentSwag.ADO
{
    public class studentAdo : iStudent
    {
        SqlConnection dbConnection = new SqlConnection("server=SIKHAKOLLI7040\\sqlserver2019;Integrated Security=true;Initial Catalog=practice");
        public void CreateStudent(Student student)
        {
            //SqlConnection dbConnection = new SqlConnection("server=SIKHAKOLLI7040\\BSIKHAKOLLI;Integrated Security=true;Initial Catalog=practice");
            try
            {
                dbConnection.Open();
                string insertStatement = " insert into student(name,subject,gender) values (" + "'" + student.Name + "'," + "'" + student.Subject + "'," + "'" + student.Gender + "')";
                SqlCommand dbCommand = new SqlCommand(insertStatement, dbConnection);
                dbCommand.ExecuteNonQuery();
                dbConnection.Close();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
           // return Ok();
            // throw new NotImplementedException();
        }

        public void DeleteStudent(int studentId)
        {
            //SqlConnection dbConnection = new SqlConnection("server=SIKHAKOLLI7040\\BSIKHAKOLLI;Integrated Security=true;Initial Catalog=practice");
            try
            {
                dbConnection.Open();
                string deleteStatement = " delete student where id = " + studentId;
                SqlCommand dbCommand = new SqlCommand(deleteStatement, dbConnection);
                dbCommand.ExecuteNonQuery();
                dbConnection.Close();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
           // return Ok();

            //throw new NotImplementedException();
        }

        public List<Student> Get()
        {
            List<Student> students = new List<Student>();
            //SqlConnection dbConnection = new SqlConnection("server=SIKHAKOLLI7040\\sqlserver2019;Integrated Security=true;Initial Catalog=practice");
            try
            {
                dbConnection.Open();
                SqlCommand dbCommand = new SqlCommand("Select * from student", dbConnection);
                SqlDataReader sqlDataReader = dbCommand.ExecuteReader();

                while (sqlDataReader.Read())
                {
                    Student student = new Student();
                    student.Id = sqlDataReader.GetInt32(0);
                    student.Name = sqlDataReader.GetString(1);
                    student.Gender = sqlDataReader.GetString(2);
                    //student.Subject = sqlDataReader.GetString(3);
                    students.Add(student);
                }

                dbConnection.Close();
                //return students;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            return students;
            //throw new NotImplementedException();
        }

        public void UpdateStudent(Student student)
        {
            //SqlConnection dbConnection = new SqlConnection("server=SIKHAKOLLI7040\\BSIKHAKOLLI;Integrated Security=true;Initial Catalog=practice");
            try
            {
                dbConnection.Open();
                string updateStatement = " update student set name = '" + student.Name + "', gender = '" + student.Gender + "', subject = '" + student.Subject + "' where id = " + student.Id;
                SqlCommand dbCommand = new SqlCommand(updateStatement, dbConnection);
                dbCommand.ExecuteNonQuery();
                dbConnection.Close();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
           // return Ok();
            //throw new NotImplementedException();
        }
    }
}
