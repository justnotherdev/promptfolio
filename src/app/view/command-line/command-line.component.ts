import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { commandExists } from '../../utils/command-exists';
import { handleTabCompletion } from '../../utils/tab-completion';
import { HistoryService } from 'src/app/services/history.service';
import { date } from 'src/app/utils/bin';

@Component({
    selector: 'command-line',
    templateUrl: './command-line.component.html',
    //   styleUrls: ['./command-line.component.scss']
})
export class CommandLineComponent {

    @ViewChild('input', { static: false }) input?: ElementRef;

    command: string = '';

    constructor(private _historyService: HistoryService) { }

    setValue = (command: string): void => {
        this.command = command
    }

    executeCommand = (command: string) => {
        // let record = { command: command, date: new Date() };
        this._historyService.setRecord(command);
    }

    onSubmit = async (event: KeyboardEvent): Promise<void> => {

        if (event.key === 'Tab') {
            event.preventDefault();
            handleTabCompletion(this.command, this.setValue);
        }

        if (event.key === 'Enter' || event.code === '13') {
            event.preventDefault();
            this.executeCommand(this.command);
            this.setValue('');
        }


    }

    commandExits = commandExists;

}
