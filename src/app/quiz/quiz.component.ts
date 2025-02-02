import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../quiz.component.html',
  styleUrls: ['../quiz.component.css']
})
export class QuizComponent {
  private quizService = inject(QuizService);
  questions: any[] = [];  // ✅ Osigurava da `questions` ne bude `undefined`
  currentQuestionIndex = 0;
  isLoading = true; // Dodato kako bi se bolje upravljalo stanjem

  constructor() {
    this.loadQuestions();
  }

  loadQuestions() {
    console.log("Loading questions...");  // Debug output u konzoli

    this.quizService.getQuizQuestions('Linux', 'Easy').subscribe({
      next: (questions) => {
        this.questions = questions;  // ✅ Dodeli podatke iz API-ja
        this.isLoading = false;      // ✅ Skloni "Loading" kad podaci stignu
        console.log("Questions loaded:", this.questions); // Provera
      },
      error: (err) => {
        console.error('Error fetching quiz questions:', err);
        this.isLoading = false;  // Da sprečimo beskonačno "Loading..."
      },
    });
  }

  getAnswers(index: number) {
    if (!this.questions[index] || !this.questions[index].answers) return [];
    return Object.values(this.questions[index].answers).filter(a => a); // Uklanja null vrednosti
  }

  checkAnswer(answer: string) {
    console.log("Selected answer:", answer);  // Debug output
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      console.log("Quiz finished!");
    }
  }
}
