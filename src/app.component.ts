import {Component, OnInit} from '@angular/core';
import {UploadEvent, UploadFile} from 'ngx-file-drop';
import {UtilsService} from './utils.service';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.tpl.html'
})
export class AppComponent implements OnInit {

    public files: UploadFile[] = [];

    constructor(private UtilsService: UtilsService) {

    }

    ngOnInit(): void {
        console.log('component initialized');
    }

    public dropped(event: UploadEvent) {
        this.files = event.files;
        console.log('event.files', event.files);
        for (const file of event.files) {
            file.fileEntry.file(info => {
                console.log(info);
                this.UtilsService.runExeFile(info.path);
            });
        }
    }

    public fileOver(event) {
    }

    public fileLeave(event) {
    }
}
