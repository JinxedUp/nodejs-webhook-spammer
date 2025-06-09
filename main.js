const axios = require('axios');
const readline = require('readline');
const chalk = require('chalk').default;
const ascii = `
███████╗██╗  ██╗██╗████████╗
██╔════╝██║  ██║██║╚══██╔══╝
███████╗███████║██║   ██║   
╚════██║██╔══██║██║   ██║   
███████║██║  ██║██║   ██║   
╚══════╝╚═╝  ╚═╝╚═╝   ╚═╝   
                            `

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.clear();
console.log(chalk.red(ascii));
console.log(chalk.red("welcome to nodejs's shittiest webhook spammer!"));
process.stdout.write('\x1b]2;shitty fucking spammer\x07');

rl.question('Enter discord webhook url: ', (webhookURL) => {
    rl.question('Enter message to send: ', (message) => {
        console.log(chalk.magenta(`Starting to send messages to ${webhookURL} :3`));

        async function sendWebhook() {
            try {
                await axios.post(webhookURL, { content: message });
                console.log(chalk.green('Message sent!'));
            } catch (error) {
                console.error(chalk.red('Error sending message: ' + JSON.stringify(error.response?.data || error.message)));
            }
        }

        setInterval(sendWebhook, 750);

        rl.close();
    });
});

// i have no fucking idea what im doing in here why am i even trying nodejs what the fuck is wrong with me and why is a webhook spammer the first thing i wanted to make and why did i want chalk and ascii i gotta upload this before i start wondering how to change the window name :sob:
// UPDATE: i didnt upload it in time and i started wondering about the window name and holy shit that was easy
