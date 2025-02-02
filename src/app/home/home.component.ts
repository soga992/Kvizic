import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Za *ngFor
import { FormsModule } from '@angular/forms';   // Za ngModel

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule], // Dodaj CommonModule i FormsModule
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories = ['General Knowledge', 'Science', 'History', 'Sports'];
  difficulties = ['Easy', 'Medium', 'Hard'];
  numOfQuestions = [5, 10, 15, 20];

  selectedCategory = this.categories[0];
  selectedDifficulty = this.difficulties[0];
  selectedNumOfQuestions = this.numOfQuestions[0];

  startQuiz() {
    // Logika za početak kviza
  }
}
