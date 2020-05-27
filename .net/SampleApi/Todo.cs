using System;

namespace SampleApi
{
    public class Todo
    {
        public DateTime CreatedDate { get; set; }

        public string Text { get; set; }

        public int Id { get; set; }

        public bool IsDeleted { get; set; }
    }
}
