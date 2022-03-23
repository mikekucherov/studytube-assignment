## Studytube Users/Learnings lists app
#### 🪛 Tools: Angular, RxJs, Akita, SCSS
#### ⌚ Time spent: ~16h
#### 📆 Recieved: 16 March 2022, Applied: 23 March 2022

### Description

The application contains of two pages with users and learnings lists. Each page has tables with pagination, search and possibility to create, delete or change specific user or learning via multiple modal dialogs.

### Application structure

Data is mocked but application immitates server requests to display preloaders and notification messages. Each page has its own state based on Akita state manager.

Besides two lazy modules for pages, application has three feature modules for creating/editing user or learning and for display user's list of learnings.

For "dumb" components there's a Components module wich could easily migrate to an external library.

Shared module is responsible for utility tools such as:
- `call` pipe - pure pipe which prevents function call from template from triggering on every change detection cycle
- `*init` structural directive - syntactic sugar for declaring template variables. Both of these tools "stolen" from @AngularFox'es library with his permission 🦊
- `highlight` pipe - to highlight matches with search query in titles
- `destroy` service - for automatic unsubscribing from Observables on components destroy

Test coverage focused mostly on Learnings module.

### Installation

First you have to install dependencies with: `npm install`

To run application in a development mode run: `ng serve` or `npm run start`

To execute tests use `ng test` command `npm run test`

### TODO
To polish this application I'm planning to do next steps:
- Develop API to replace mocks
- Create a better NotificationService with built-in undo logic and timers on top of Angular Material one
- Increase test coverage

### P.S
Doing this assginment was a pleasure yet torture sometimes. Due to lack of many ristrictions I wanted to implement a lot of stuff and deffinately got overwhelmed at some point. A lot of things happenning nowadays and it deffinately caused impact. And just as a reminder to myself and to whoever read this - never underestimate evil and fight with it as much as you can. Glory to Ukraine!

[![Twitter Handle](https://img.shields.io/twitter/follow/mikekucherov?style=social)](https://twitter.com/mikekucherov)

