

export const echo = async (args: string[]): Promise<string> => {
    return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
    return 'takeo';
};

export const date = async (args: string[]): Promise<string> => {
    return new Date().toString();
};

export const gui = async (args: string[]): Promise<string> => {
    setTimeout(() => window.open('https://facebook.com', '_self'), 1000);
    return 'opening GUI version...';
};

export const sudo = async (args?: string[]): Promise<string> => {
    setTimeout(() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ'), 1000);

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

    return 'opening repository...';
};
