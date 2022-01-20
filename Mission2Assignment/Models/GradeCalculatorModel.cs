using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2Assignment.Models
{
    public class GradeCalculatorModel
    {
        [Range(0,100)]
        public float Assignments { get; set; }

        [Range(0, 100)]
        public float GroupProject { get; set; }

        [Range(0, 100)]
        public float Quizzes { get; set; }

        [Range(0, 100)]
        public float Exams { get; set; }

        [Range(0, 100)]
        public float Intex { get; set; }
    }
}
