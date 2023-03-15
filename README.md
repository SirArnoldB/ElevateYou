# Web Development Project 2 - _ElevateYou_

Submitted by: **Arnold Bhebhe**

This web app: **Helps you _Empower Yourself, One Card At A Time! It provides two types of flashacrds, Self-Discovery Flashcards, and Numbers Flashcards_**

Time spent: **12** hours spent in total

## Required Features

1.  Numbers Flashcards

    The following **required** functionality is completed:

    - [x] **The user can enter their guess in a box before seeing the flipside of the card**
    - [x] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
    - [x] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
    - [x] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

    The following **optional** features are implemented:

    - [x] A shuffle button is used to randomize the order of the cards
    - [x] A counter displays the user's current and longest streak of correct responses

    The following **additional** features are implemented:

    - [x] API Calls: Make API calls to get Facts about Numbers from NumbersAPI
    - [x] Allow users to specify the number of questions, and the type of range the need - random or custom
    - [x] User can only flip card once they enter an answer
    - [x] User can choose to restart the current set of cards, or start a new set

    ## Video Walkthrough

    Here's a walkthrough of implemented required features:

      <img src='https://github.com/SirArnoldB/ElevateYou/blob/main/elevateyou/ElevateYou2.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

      <!-- GIF tool used! -->

    GIF created with [LiceCap](http://www.cockos.com/licecap/).

2.  Self-Discovery Flashcards

    The following **required** functionality is completed:

    - [x] **The title of the card set and some information about it, such as a short description and the total number of cards are displayed**
    - [x] **A single card at a time is displayed, only showing one of the components of the information pair**
    - [x] **A list of card pairs is created**
    - [x] **Clicking on the card shows the corresponding component of the information pair**
    - [ ] **Clicking the next button displays a random new card**
      - [x] **App has different sections grouped by categories. Each category has a different background color on the card.**

    The following **optional** features are implemented:

    - [x] Cards contains images in addition to or in place of text
    - [x] Cards have different visual styles such as color based on their category

    The following **additional** features are implemented:

    - [x] Cards are stored in a Firebase database, and accessed in realtime!

    ## Video Walkthrough

    Here's a walkthrough of implemented required features:

     <img src='https://github.com/SirArnoldB/ElevateYou/blob/main/elevateyou/ElevateYou.gif' title='ElevateYou Walkthrough' width='' alt='ElevateYou Walkthrough' />

     <!-- GIF tool used! -->

    GIF created with [LiceCap](http://www.cockos.com/licecap/).

## Notes

### Challenges encountered:

- Infinite Renders
  - Component was repeatedly rendering, causing an endless loop of updates and re-renders.

### Lessons learned:

- React Modularization
  - Breaking down a React application into smaller, reusable components.
- Axios
  - Sending asynchronous HTTP requests and handling responses using promises or async/await syntax.

## License

    Copyright [2023] [Arnold Bhebhe]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
