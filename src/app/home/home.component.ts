import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories = ['Linux', 'DevOps', 'Docker'];
  difficulties = ['Easy', 'Medium', 'Hard'];
  numOfQuestions = [5, 10, 15, 20];

  selectedCategory = this.categories[0];
  selectedDifficulty = this.difficulties[0];
  selectedNumOfQuestions = this.numOfQuestions[0];

  constructor(private router: Router) {}

  startQuiz(): void {
    console.log("Starting quiz..."); // Debug poruka
    this.router.navigate(['/quiz'], {
      queryParams: {
        category: this.selectedCategory,
        difficulty: this.selectedDifficulty
      }
    });
  }
}
