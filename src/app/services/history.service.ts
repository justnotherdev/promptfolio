import { Injectable, OnInit } from '@angular/core';
import * as bin from '../utils/bin';
import { PrevCommand } from '../model/prev-command';

@Injectable()
export class HistoryService implements OnInit {
    history: Array<PrevCommand> = [];
    record: string = '';
    lastCommandIndex: number = 0;

    ngOnInit(): void {
        console.log("ESTO ES DEL SERVICE");
    }

    getLastCommandIndex() {
        return this.lastCommandIndex;
    }

    setLastCommandIndex(index: number) {
        this.lastCommandIndex = index;
    }

    getHistory() {
        return this.history;
    }

    updateHistory(output: string) {
        this.history.push({
            id: this.history.length,
            date: new Date(),
            command: this.record.split(' ').slice(1).join(' '),
            output,
        });
    }

    clearHistory() {
        this.history.length = 0;
    }

    setRecord(command: string) {
        this.record = [Date.now(), command].join(' ');
        this.executeCommand(this.record);
    }

    async executeCommand(fullCommand: string) {

        const [cmd, ...args] = fullCommand.split(' ').slice(1);

        switch (cmd) {
            case 'clear':
                this.clearHistory();
                break;
            case '':
                this.updateHistory('');
                break;
            default:
                if (Object.keys(bin).indexOf(cmd) === -1) {
                    this.updateHistory(`Command not found: ${cmd}. Try 'help' to get started.`);

                } else {
                    try {
                        const output = await Object.create(bin)[cmd](args);
                        console.log(output);
                        this.updateHistory(output);
                    } catch (error) {
                        this.updateHistory('paso un error');
                    }
                }
        }



    }


}
