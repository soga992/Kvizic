import { Component, inject, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';  // Importuj servis
import { HttpClientModule } from '@angular/common/http';  // Importuj HttpClientModule
import { CommonModule } from '@angular/common';  // Importuj CommonModule za *ngFor

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [HttpClientModule, CommonModule],  // Dodaj CommonModule
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  questions: any[] = [];
  category: string = '';  // Definiši sve promenljive koje se koriste u templateu
  difficulty: string = '';
  numOfQuestions: number = 0;
  private quizService = inject(QuizService);  // Injektuj servis

  ngOnInit(): void {
    this.quizService.getQuestions().subscribe(data => {
      this.questions = data;
    });
  }
}
