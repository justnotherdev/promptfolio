import { Component, Input, OnInit } from "@angular/core";
import { PrevCommand } from "src/app/features/terminal/model/prev-command";

@Component({
    selector: 'app-prev-cmd',
    templateUrl: './previous-command.component.html',
    styleUrls: ['./previous-command.component.scss']
})
export class PreviousCommandComponent {
    @Input({ required: true }) prevCommand!: PrevCommand;
}
