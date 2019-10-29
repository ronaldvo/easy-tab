import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanUrl'
})
export class CleanUrlPipe implements PipeTransform {

  cleanUrl: any;

  transform(value: string): string {
    this.cleanUrl = value;

    const regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

    try {
        const hostname = new URL(value).hostname;

        hostname.replace(regex, '');
        return hostname;
    } catch {
        return this.cleanUrl;
    }
  }

}
