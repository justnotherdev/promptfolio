import * as bin from './bin';

export const handleTabCompletion = (command: string, setCommandValue: Function) => {
    const commands = Object.keys(bin).filter(entry => entry.startsWith(command));
    if (commands.length === 1) {
        setCommandValue(commands[0]);
    }
};