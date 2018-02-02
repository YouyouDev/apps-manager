import {Injectable} from '@angular/core';

let child = require('child_process').execFile;

@Injectable()
export class UtilsService {

    constructor() {
    }

    runExeFile(path: String) {
        child(path, function (err, data) {
            if (err) {
                console.error(err);
                return;
            }
        });
    }
}