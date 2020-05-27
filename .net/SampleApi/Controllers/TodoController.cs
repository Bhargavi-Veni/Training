using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.IO;
using Newtonsoft.Json;

namespace SampleApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TodosController : ControllerBase
    {
        const string jsonfilePath = @"C:\Users\roomhydkrishna\Documents\DotnetTraing\SampleApi\todos.json";
        //@"D:\training\dotnettraining\sampleapi\todos.json";
        private readonly ILogger<TodosController> _logger;

        public TodosController(ILogger<TodosController> logger)
        {
            _logger = logger;
        }

        private IEnumerable<Todo> ReadJsonFile()
        {
            string json = System.IO.File.ReadAllText(jsonfilePath);
            return JsonConvert.DeserializeObject<IEnumerable<Todo>>(json);
        }

        private void WriteToJsonFile(IEnumerable<Todo> todos)
        {
            string json = JsonConvert.SerializeObject(todos, Formatting.Indented);
            System.IO.File.WriteAllText(jsonfilePath, json);
        }

        [HttpGet]
        public IEnumerable<Todo> Get()
        {
            return ReadJsonFile();
        }

        [HttpGet]
        [Route("todos/{id}")]
        public Todo GetById(int id)
        {
            var todos = ReadJsonFile();

            return todos.Where(todo => todo.Id == id).First();
        }

        [HttpPost]
        public Todo Post(Todo todo)
        {
            var todos = ReadJsonFile().ToList();
            todos.Add(todo);
            WriteToJsonFile(todos);
            return todo;
        }

        [HttpPut]
        public IEnumerable<Todo> Put(IEnumerable<Todo> todos)
        {
            // var todos = ReadJsonFile().ToList();
            // todos.Add(todo);
            WriteToJsonFile(todos);
            return todos;
        }


        [HttpPatch]
        [Route("{id}")]
        public Todo Patch(int id, Todo todo)
        {
            var todos = ReadJsonFile().ToList();
            var matchedTodo = todos.Where(todo => todo.Id == id).First();
            matchedTodo.Text = todo.Text;
            matchedTodo.CreatedDate = todo.CreatedDate;
            // todos.Add(todo);
            WriteToJsonFile(todos);
            return matchedTodo;
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete(int id)
        {
            var todos = ReadJsonFile().ToList();
            var matchedTodo = todos.Where(todo => todo.Id == id).First();
            matchedTodo.IsDeleted = true;
            // todos.Add(todo);
            WriteToJsonFile(todos);
        }
    }
}
