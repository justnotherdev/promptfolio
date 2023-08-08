import { Component, DoCheck, ElementRef, Input, ViewChild } from '@angular/core';
import { commandExists } from '../../utils/command-exists';
import { handleTabCompletion } from '../../utils/tab-completion';
import { HistoryService } from 'src/app/services/history.service';
import { date } from 'src/app/utils/bin';

@Component({
    selector: 'command-line',
    templateUrl: './command-line.component.html',
    //   styleUrls: ['./command-line.component.scss']
})
export class CommandLineComponent implements DoCheck {

    @ViewChild('input', { static: false }) input?: ElementRef;

    command: string = '';

    constructor(private _service: HistoryService) { }

    ngDoCheck(): void {
        let term = document.getElementsByClassName("terminal")[0];
        term.scrollTo(0, term.scrollHeight);
    }

    setValue = (command: string): void => {
        this.command = command;
    }

    onSubmit = async (event: KeyboardEvent): Promise<void> => {

        const history: string[] = this._service.getHistory()
            .map(({ command }) => command)
            .filter((value: string) => value);

        if (event.key === 'c' && event.ctrlKey) {
            event.preventDefault();
            this.setValue('');
            this.input
            this._service.updateHistory('');
            this._service.setLastCommandIndex(0);
        }

        if (event.key === 'l' && event.ctrlKey) {
            event.preventDefault();
            this._service.clearHistory();
        }

        if (event.key === 'Tab') {
            event.preventDefault();
            handleTabCompletion(this.command, this.setValue);
        }

        if (event.key === 'Enter' || event.code === '13') {
            event.preventDefault();
            this._service.setLastCommandIndex(0);
            this._service.setRecord(this.command);
            this.setValue('');
        }

        if (event.key === 'ArrowUp') {
            event.preventDefault();
            if (!history.length) return;
            const index: number = this._service.getLastCommandIndex() + 1;
            if (index <= history.length) {
                this._service.setLastCommandIndex(index);
                this.setValue(history[history.length - index]);
            }
        }

        if (event.key === 'ArrowDown') {
            event.preventDefault();

            if (!history.length) return;
            const index: number = this._service.getLastCommandIndex() - 1;

            if (index > 0) {
                this._service.setLastCommandIndex(index);
                this.setValue(history[history.length - index]);
            } else {
                this._service.setLastCommandIndex(0);
                this.setValue('');
            }
        }
    }

    commandExits = commandExists;

}
