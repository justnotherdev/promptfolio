import { Component, OnInit } from "@angular/core";
import { PrevCommand } from "src/app/model/prev-command";
import { HistoryService } from "src/app/services/history.service";

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    //   styleUrls: ['./command-line.component.scss']
})
export class HistoryComponent {
    history: Array<PrevCommand> = [];

    constructor(private _historyService: HistoryService) {
        this.history = this._historyService.getHistory();
    }


    // ngOnInit(): void {
    //     console.log("init called");
    //     this._historyService.updateHistory({ id: 1, command: "sudo", date: new Date(), output: 'error' });
    //     this._historyService.updateHistory({ id: 2, command: "echo", date: new Date(), output: 'xd' });
    //     this._historyService.updateHistory({ id: 3, command: "whoami", date: new Date(), output: 'takeo' });
    //     console.log(this.history);
    // }

}