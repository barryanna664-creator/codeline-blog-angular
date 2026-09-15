import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ArticleDetail } from './pages/article-detail/article-detail';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'articles/:id', component: ArticleDetail },
  { path: 'a-propos', component: About },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
