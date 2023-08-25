import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-prompt',
    templateUrl: './prompt.component.html',
    styleUrls: ['./prompt.component.scss']
})
export class PromptComponent {
    user = 'root';
    hostname = 'coruscant';
}
