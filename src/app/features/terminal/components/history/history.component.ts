import { Component, OnInit } from "@angular/core";
import { PrevCommand } from "src/app/features/terminal/model/prev-command";
import { HistoryService } from "src/app/features/terminal/services/history.service";

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
})
export class HistoryComponent implements OnInit {
    history: Array<PrevCommand> = [];

    constructor(private _historyService: HistoryService) {
        this.history = this._historyService.getHistory();
    }


    ngOnInit(): void {
        this._historyService.setRecord("motd");
    }

}