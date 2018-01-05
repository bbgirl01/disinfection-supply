import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekdayCN',
})
export class WeekdayCnPipe implements PipeTransform {
  // weekdays = {
  //   Monday: '周一',
  //   Tuesday: '周二',
  //   Wednesday: '周三',
  //   Thursday: '周四',
  //   Friday: '周五',
  //   Saturday: '周六',
  //   Sunday: '周日'
  // };
  weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  transform(value: string, ...args) {
    let date =  new Date(value),
      dayOfWeekday = date.getDay();
    return this.weekdays[dayOfWeekday];
  }
}
