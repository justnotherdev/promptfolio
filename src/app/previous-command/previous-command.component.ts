import { Component, Input, OnInit } from "@angular/core";
import { PrevCommand } from "src/app/model/prev-command";

@Component({
    selector: 'app-prev-cmd',
    templateUrl: './previous-command.component.html',
    styleUrls: ['./previous-command.component.scss']
})
export class PreviousCommandComponent {
    @Input({ required: true }) prevCommand!: PrevCommand;
}
