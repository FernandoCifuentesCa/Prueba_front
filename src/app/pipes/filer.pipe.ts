import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filer'
})
export class FilerPipe implements PipeTransform {

  transform(value: any  ,arg: any): any {
    const resultPosts = [];
    for(const post of value){
      if(post.title.toLowerCase().indexOf(arg.toLowerCase())> -1){
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }

}
