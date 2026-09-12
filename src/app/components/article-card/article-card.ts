import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-card',
  imports: [ RouterLink, DatePipe],
  styleUrl: './article-card.css',
  templateUrl: './article-card.html',
})
export class ArticleCard {
  @Input() article!: Article;
}
