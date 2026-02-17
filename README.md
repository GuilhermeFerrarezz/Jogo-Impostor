Impostor Game (Jogo do Impostor)
A dynamic social deduction mobile game built with React Native. Inspired by classic party games, it challenges players' creativity, vocabulary, and deception skills.

About the Project
In this game, a group of players is given a secret word, but one of them is the Impostor and has no idea what the word is.

How it works:
The Setup: If there are 5 players, 4 receive the "Secret Word" and 1 is designated as the "Impostor".

The Gameplay: Each round, players must provide a one-word characteristic or hint about the secret word.

The Goal: * Players: Identify and vote out the Impostor by giving hints that are specific enough to prove they know the word, but vague enough not to give it away.

Impostor: Blend in by listening to others' hints and guessing the context to avoid being caught.

 Tech Stack & Concepts Applied
Framework: React Native (Cross-platform iOS/Android)

State Management: React Hooks (useState, useEffect)

Navigation: React Navigation (Stack & Tab navigation)

Logic & Algorithms:

Randomized role assignment logic.

Dynamic array shuffling for player turns.

Game state flow management (Setup -> Role Reveal -> Rounds -> Voting).

UI/UX: Responsive layouts using Flexbox and Custom Components.

Key Features
Player Management: Add/Remove players before starting.

Role Reveal: "Tap to reveal" mechanics to ensure privacy between players.

Game Logic: Automated turn-based system.

Various themes: Food, Clash Royale, Anime characters (with the option to add and remove animes), Formula 1 teams, Heroes, and Countries..

Screenshots
<img width="769" height="1600" alt="image" src="https://github.com/user-attachments/assets/b1ba8ff8-a697-4ec4-a013-faa6dc6b19a4" />
<img width="759" height="1600" alt="image" src="https://github.com/user-attachments/assets/cb8ac25f-e589-4d07-91c6-5ffc5e082a52" />
<img width="766" height="1600" alt="image" src="https://github.com/user-attachments/assets/32794ce3-da76-4182-adc1-e63bca4214c3" />
<img width="764" height="1600" alt="image" src="https://github.com/user-attachments/assets/9fcfd7c1-dac1-4526-91a6-61316b7e0051" />
<img width="762" height="1600" alt="image" src="https://github.com/user-attachments/assets/a2da8c48-43dc-4360-bfb2-335955549609" />
<img width="761" height="1600" alt="image" src="https://github.com/user-attachments/assets/0edeba29-4ff2-430d-946c-68974e029dc3" />
<img width="761" height="1600" alt="image" src="https://github.com/user-attachments/assets/1fc09b8e-c930-4086-8290-dc1a8e45dfaa" />
<img width="762" height="1600" alt="image" src="https://github.com/user-attachments/assets/7aa4ffc2-bc65-433f-9a8f-1896990a451a" />



How to Run
Clone this repository:

Bash
git clone https://github.com/your-user/impostor-game.git
Install dependencies:

Bash
npm install
Run the project:

Bash
npx react-native run-android # for Android
# or
npx react-native run-ios # for iOS
# or
npx react-native run-web # for web
Author
Guilherme Ferrarez
