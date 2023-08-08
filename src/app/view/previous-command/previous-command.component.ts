import { Component, Input, OnInit } from "@angular/core";
import { PrevCommand } from "src/app/model/prev-command";

@Component({
    selector: 'previous-command',
    templateUrl: './previous-command.component.html',
    //   styleUrls: ['./command-line.component.scss']
})
export class PreviousCommandComponent implements OnInit {

    @Input({ required: true }) prevCommand!: PrevCommand;


    ngOnInit(): void {
        console.log("init called");
        console.log(this.prevCommand.output);
    }

}
