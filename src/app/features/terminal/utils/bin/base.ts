
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
    const commands = Object.keys(bin).sort().join(',  ');

    return '\nAvailable commands:\n\n' +
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

export const ls = async (args: string[]): Promise<string> => {
    return 'drwxr-xr-x@    1   root  root       192 Jul 18 14:30    all\n' +
        'drwxr-xr-x@    1   root  root       192 Jul 18 14:30    this\n' +
        'drwxr-xr-x@    1   root  root       192 Jul 18 14:30    files\n' +
        '-rwxr-xr-x@    1   root  root       192 Jul 18 14:30    are\n' +
        '-rwxr-x--x@    1   root  root       192 Jul 18 14:30    fake\n' +
        '-rwxr-x--x@    1   root  root       192 Jul 18 14:30    what\n' +
        '-rw-r-xr-x@    1   root  root       192 Jul 18 14:30    are\n' +
        '-rwxr-xr-x@    1   root  root       192 Jul 18 14:30    you\n' +
        '-rw-r-xr-x@    1   root  root       192 Jul 18 14:30    looking_for\n';
};

export const motd = async (args: string[]): Promise<string> => {



    return '\n#               #    #######    #                       #####     #######    #         #     #######\n' +
        '#      #      #    #                      #                     #            #   #               #    ##   ##     #       \n' +
        '#      #      #    #                      #                     #                  #               #    # # # #     #       \n' +
        '#      #      #    #####          #                     #                  #               #    #   #   #     #####   \n' +
        '#      #      #    #                      #                     #                  #               #    #         #     #       \n' +
        '#      #      #    #                      #                     #             #  #               #    #         #     #       \n' +
        '    ## ##        #######     #######     #####    #######    #         #     ####### \n\n\n\n' +
        "Type 'help' to see the available commands.\n\n" +
        "Type 'launch' to go to the GUI (Graphic User Interface) version of this website.\n\n" +
        '-------\n' +
        "This project is Open-Source 📖 , type 'repo' to be redirected to my GitHub and feel free to use it at your convenience ✌🏻.\n" +
        '-------\n';
}

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
        return "Yeah well, I can't let you run sudo commands here buddy, sorry 🫤.";
        // `permission denied: unable to run the command '${(args) ? args[0] : ""}' as root.`;
    } else {
        return 'usage: sudo [command]\n' +
            'usage: sudo -v [-AknS] [-g group] [-h host] [-p prompt] [-u user] \n' +
            'usage: sudo -l [-AknS] [-g group] [-h host] [-p prompt] [-U user] [-u user] [command] \n';
    }
};

export const repo = async (args?: string[]): Promise<string> => {
    setTimeout(() => window.open('https://github.com/justnotherdev', '_blank'), 3000);

    return 'bin/GHRRedirectControl -ok 1\n' +
        '* Loading repository address ...\n' +
        '* Network online\n' +
        '* Finding GitHub account ... OK!\n' +
        "* Redirecting to GitHub account ...\n";
};

// export const banner = (args?: string[]): string => {
//     return '\nType \'help\' to see list of available commands. \n\n\n' +
//         '* This project is open-source type, fill free to clone it.\n';
// };
