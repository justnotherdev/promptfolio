import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'prompt',
    templateUrl: './prompt.component.html',
    //   styleUrls: ['./command-line.component.scss']
})
export class PromptComponent implements OnInit {
    user = 'takeo';
    hostname = 'promptfolio';
    command = 'ls';

    ngOnInit = (): void => {
        console.log("init called");
    }

}
