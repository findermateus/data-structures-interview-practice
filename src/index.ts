import * as readline from "readline";
import executeThreeSum from "./array/3Sum/index.ts";

interface MenuOption {
    name: string;
    execute: () => void;
}

const challenges: MenuOption[] = [
    { name: "3Sum", execute: executeThreeSum },
];

function displayMenu(): void {
    console.log("DATA-STRUCTURES-INTERVIEW-PRACTICE - Selecione uma opção:");

    challenges.forEach((challenge, index) => {
        console.log(`  ${index + 1}. ${challenge.name}`);
    });

    console.log(`  0. Sair\n`);
}

function main(): void {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const selectAnswer = (answer: string): void => {
        const choice = parseInt(answer, 10);

        if (choice === 0) {
            console.log("\nCabô\n");
            rl.close();

            return;
        }

        if (choice >= 1 && choice <= challenges.length) {
            console.log("\n");
            challenges[choice - 1].execute();
            askQuestion();

            return;
        }

        console.log("\nOpção inválida. Tente novamente.");
        askQuestion();
    }

    const askQuestion = (): void => {
        displayMenu();
        rl.question("Escolha uma opção: ", selectAnswer);
    };

    askQuestion();
}

main();

