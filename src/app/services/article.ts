import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { ARTICLES } from '../data/articles.data';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articles: Article[] = ARTICLES;

  getArticles(): Article[] {
    return this.articles;
  }

  getArticleById(id: number): Article | undefined {
    return this.articles.find(article => article.id === id);
  }

  getCategories(): string[] {
    const toutesCategories = this.articles.map(a => a.categorie);
    return Array.from(new Set(toutesCategories));
  }
}
