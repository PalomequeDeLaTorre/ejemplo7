import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {

  //Propiedad para almacenar los datos externos (posts)
  data:any[]=[];

  constructor(private postsService:PostsService){}

  ngOnInit(): void {
    this.postsService.getPost().subscribe((posts:any['']) => {
    this.data = posts;
  })
 }

}
