import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article';
import { ArticleCard } from '../../components/article-card/article-card';

@Component({
  selector: 'app-article-detail',
  imports: [CommonModule, RouterLink, DatePipe, ArticleCard],
  templateUrl: './article-detail.html',
  styleUrl: './article-detail.css'
})
export class ArticleDetail implements OnInit {
  article: Article | undefined;
  articlesSimilaires: Article[] = [];

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.article = this.articleService.getArticleById(id);

      if (this.article) {
        this.articlesSimilaires = this.articleService
          .getArticles()
          .filter(a => a.categorie === this.article!.categorie && 
                       a.id !== this.article!.id)
          .slice(0, 2);
      }
    });
  }
}