import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';  // Importuj servis

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: any[] = [];
  errorMessage: string = '';

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    // Poziv servisa za dobijanje pitanja
    this.quizService.getQuizQuestions('Linux', 'Easy').subscribe({
      next: (data) => {
        this.questions = data;
      },
      error: (error) => {
        this.errorMessage = error.message;
      }
    });
  }
}
