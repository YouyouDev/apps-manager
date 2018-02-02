import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FileDropModule} from "ngx-file-drop";
import {AppComponent} from "./app.component";
import { UtilsService } from './utils.service';

@NgModule({
    imports: [BrowserModule, FileDropModule],
    providers: [UtilsService],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}