import { Pipe, PipeTransform } from '@angular/core';
import {format, parse, parseISO} from "date-fns";

@Pipe({
  name: 'time',
  standalone: true
})
export class TimePipe implements PipeTransform {

  transform(value: string): string {

    const date = parse(value, "dd/MM/yyyy hh:mm", new Date())
    return format(date, "hh:mm");
  }

}
