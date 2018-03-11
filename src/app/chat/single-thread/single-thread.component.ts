import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { bufferTime } from 'rxjs/operators';

import { DataService } from '../../data.service';
import { SmsContentType, SmsMessage } from '../../message';
import { Thread } from '../../thread';

@Component({
  selector: 'app-single-thread',
  templateUrl: './single-thread.component.html',
  styleUrls: ['./single-thread.component.scss'],
})
export class SingleThreadComponent implements OnInit {
  messages: SmsMessage[];
  _thread: Thread;

  get thread() {
    return this._thread;
  }

  @Input()
  set thread(t: Thread) {
    if (!t) { return; }
    this._thread = t;
    this.messages = this.dataService.getMessages(t.id);
  }

  constructor(private dataService: DataService) {
    if (this._thread) {
      this.messages = dataService.getMessages(this._thread.id);
    }
  }

  ngOnInit() { }
}