import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private apiUrl = 'https://quizapi.io/api/v1/questions';
  private apiKey = 'thOR1NfQxGsr9QXYGIDAGo2h4WVqs8ZdKBAsaTgX';

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<any> {
    const headers = { 'X-Api-Key': this.apiKey };
    return this.http.get(this.apiUrl, { headers });
  }
}
