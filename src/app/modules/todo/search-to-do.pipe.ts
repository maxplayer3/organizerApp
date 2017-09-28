import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchToDo'
})
export class SearchToDoPipe implements PipeTransform {

 transform(todos: any, name: any, caseSensitive: boolean): any {
  
        if (name !== undefined && name !== "") {
            // filter users, users which match and return true will be kept, false will be filtered out
            return todos.filter((user) => {
                if (caseSensitive) {
                    return (user.title.indexOf(name) !== -1);
                } else {
                    return (user.title.toLowerCase().indexOf(name.toLowerCase()) !== -1);
                }
            });
        }
        return todos;
    }

}
