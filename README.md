# Quiz App

## Overview
Quiz App is a mobile application built using React Native. It allows users to post and answer questions, fostering a community-driven knowledge-sharing platform. The app provides features like user authentication, a feed of questions, a scoreboard, and a personalized profile page.

## Features

- **User Authentication:** Secure login and signup using Firebase authentication.
- **Question Feed:** A centralized feed displaying all questions posted by users.
- **Post Questions:** Users can add their own questions to the app for others to answer.
- **Answer Questions:** Users can respond to questions posted by themselves or other users.
- **Scoreboard:** A leaderboard showcasing top participants based on their activity.
- **Profile Page:** A customizable profile section for each user.

## Technologies Used

- **Frontend:** React Native
- **Backend:** Firebase Authentication
- **Database:** Firebase Firestore (for storing questions and answers)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mihretthe/MCP.git
   ```

2. Navigate to the project directory:
   ```bash
   cd MCP
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the app:
   ```bash
   npm start
   ```

## Usage

1. Open the app on your mobile device or emulator.
2. Sign up or log in using Firebase authentication.
3. Navigate through the tabs:
   - **Feed Tab:** View all the questions posted by users.
   - **Add Question Tab:** Post your own questions.
   - **Scoreboard Tab:** Check the top participants.
   - **Profile Tab:** View and manage your profile.

## Project Structure

```
MCP/
├── components/     # Reusable components
├── containers/     # Containers
├── screens/        # App screens (Feed, Add Question, Scoreboard, Profile)
        # Utility functions
├── App.js              # Entry point
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
```

## Future Enhancements

- Implement notifications for new questions and answers.
- Add filtering and sorting options in the question feed.
- Enhance the scoreboard with more detailed statistics.
- Include multimedia support (images/videos) in questions.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

Feel free to contribute to the project by submitting issues or pull requests!

