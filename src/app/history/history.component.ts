import { Component, OnInit } from "@angular/core";
import { PrevCommand } from "src/app/model/prev-command";
import { HistoryService } from "src/app/services/history.service";

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
        this._historyService.setRecord("help");
    }

}