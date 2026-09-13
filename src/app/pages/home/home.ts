import { Component, OnInit } from '@angular/core';
import { ArticleCard } from '../../components/article-card/article-card';
import { ARTICLES } from '../../data/articles.data';
import { CommonModule } from '@angular/common';
import { Article } from '../../models/article.model';

@Component({
  imports: [CommonModule, ArticleCard],
  selector: 'app-home',
  standalone:true,
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home implements OnInit {
articles: Article[] = [];
categories: string[] = [];
categoriesSelectionnee: string = 'Toutes';
articlesFiltres:Article[] = [];

ngOnInit(): void{
  this.articles = ARTICLES;
  this.categories=['Toutes', ...new 
   Set(ARTICLES.map(a => a.categorie))];
   this.articlesFiltres = ARTICLES;
    
  }
   filtrerParCategorie(categorie:string): void {
     this.categoriesSelectionnee = categorie;
     if (categorie ==='Toutes'){
      this.articlesFiltres = this.articles;
     }else{
      this.articlesFiltres = this.articles.filter(a => a.categorie === categorie);
     }
   }
} 

  

