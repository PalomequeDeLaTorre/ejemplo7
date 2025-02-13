import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-comments',
  imports: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit {

  //Propiedad para almacenar los datos externos (comments)
  data:any[]=[];

  constructor(private commentsService:CommentsService){}

  ngOnInit(): void {
    this.commentsService.getComments().subscribe((comments:any['']) => {
      this.data = comments;
    })
  }

}
