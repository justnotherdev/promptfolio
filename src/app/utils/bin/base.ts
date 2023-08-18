
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
    const commands = Object.keys(bin).sort().join(',  ');

    return 'Available commands:\n\n' +
        `${commands}\n\n` +
        '[ ctrl + l ]\t\t clear terminal.\n' +
        '[ ctrl + c ]\t\t cancel command.\n' +
        '[ tab ]\t\t\t trigger command completion.\n\n\n' +
        '------\n' +
        '* type the command \'launch\' to go to the graphic version of this site.\n\n';
};

export const echo = async (args: string[]): Promise<string> => {
    return args.join(' ');
};

export const about = async (args: string[]): Promise<string> => {
    return 'FullStack Dev training for DevOps.';
};

export const whoami = async (args: string[]): Promise<string> => {
    return 'root';
};

export const uname = async (args: string[]): Promise<string> => {
    return 'SebFOS Coruscant 1.0.0 Linux Kernel Version 12.3.5: Wed Jul  5 15:10:07; arm64';
};

export const date = async (args: string[]): Promise<string> => {
    return new Date().toString();
};

export const launch = async (args: string[]): Promise<string> => {

    const screen = document.querySelector('.screen') as HTMLInputElement;
    setTimeout(() => screen.classList.toggle('shutdown-terminal'), 2000);

    return 'bin/LLLPBTransportControl -ok 2\n' +
        '* Starting up ...\n' +
        '* PSU online\n' +
        '* HV online\n' +
        '* Digital core memory ... OK!\n' +
        '* Booting routing systems\n' +
        '* Validating current data model\n' +
        '* Starting transportation\n' +
        '* Binary transport tests OK!\n' +
        '* Calibrating portal with binary transport\n';
};

export const sudo = async (args?: string[]): Promise<string> => {
    // setTimeout(() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ'), 1000);

    if (args && args[0]) {
        return `permission denied: unable to run the command '${(args) ? args[0] : ""}' as root.`;
    } else {
        return 'usage: sudo -h | -K | -k | -V \n' +
            'usage: sudo -v [-AknS] [-g group] [-h host] [-p prompt] [-u user] \n' +
            'usage: sudo -l [-AknS] [-g group] [-h host] [-p prompt] [-U user] [-u user] [command] \n';
    }
};

export const repo = async (args?: string[]): Promise<string> => {
    setTimeout(() => window.open('https://github.com/justnotherdev', '_blank'), 1000);

    return '* Opening repository...';
};

// export const banner = (args?: string[]): string => {
//     return '\nType \'help\' to see list of available commands. \n\n\n' +
//         '* This project is open-source type, fill free to clone it.\n';
// };
