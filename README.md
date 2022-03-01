
# _Maintenance Calculator_ (aka The Lunk-inator)


## Project Overview

### Project Name

Maintenance Calculator 

### Project Description
--- 
This project is a maintenance calculator which calculates the caloric intake needed to maintain an individual's current body weight indefinitely. The reasons for this project are Meal preps are not possible without knowing how the body react to a certain level of caloric intake. This tool uses the user's weight and caloric intake for a certain number of days to calculate their maintainance intake which can be used for the user to begin meal prep without wasting time readjusting to test maintenance or for reference purposes.  
### Deployment Link 
---
[Netlify App] https://maintenance-calculator.netlify.app/

References:
---

- [Maintenance/eucaloric diet/ energy balance - 1] https://jcdfitness.com/2017/09/maintenance-calories/

- [Maintenance/eucaloric diet/energy balance - 2] https://pubmed.ncbi.nlm.nih.gov/23671029/

- [Maintenance/eucaloric diet/energy balance - 3] https://en.wikipedia.org/wiki/Weight_management

## Wireframes 


### Desktop
--- 


![Wireframe - Maintenance Calculator-Home](https://user-images.githubusercontent.com/30008919/125366757-c0fcb400-e344-11eb-9ebd-a0ce8a7ff845.PNG)

![Wireframe - Maintenance Calculator](https://user-images.githubusercontent.com/30008919/125366237-b8f04480-e343-11eb-8e5e-17871f5d75fc.PNG)

<!-- 
### Tablet


![Wireframe - Maintenance Calculator- Calculator tblet](https://user-images.githubusercontent.com/30008919/125368753-f99e8c80-e348-11eb-8567-d54189572a41.PNG)


![Wireframe - Maintenance Calculator-Home-Tblt](https://user-images.githubusercontent.com/30008919/125368999-631e9b00-e349-11eb-998c-3898f9b4b72f.PNG)
 -->


### Mobile
--- 
![Wireframe - Maintenance Calculator-Home-Mobile](https://user-images.githubusercontent.com/30008919/125367320-ef2ec380-e345-11eb-8227-245299e20c8e.PNG)

![Wireframe - Maintenance Calculator- Mobile](https://user-images.githubusercontent.com/30008919/125368016-5305bc00-e347-11eb-846d-3248589c25df.PNG)



## Component Hierarchy
Show your component hierarchy here! Use this as an example. -> Use Whimsical.com

![Component Hierarchy - Calculator](https://user-images.githubusercontent.com/30008919/125457876-98067441-0c11-44a4-88c4-f0b443452d16.PNG)

## API and Data Sample

```[
     {
    "records": [
        {
            "id": "reczpTLdRCcDlllEB",
            "fields": {
                "days": 1,
                "weight(lbs)": 201,
                "kcal/d": 2000
            },
            "createdTime": "2021-07-13T13:59:49.000Z"
        },
        {
            "id": "recvY0mhObdGVIihb",
            "fields": {
                "days": 2,
                "weight(lbs)": 200,
                "kcal/d": 2000
            },
            "createdTime": "2021-07-13T13:59:49.000Z"
        },
        {
            "id": "recocoa9prF1BeBTe",
            "fields": {
                "days": 3,
                "weight(lbs)": 200,
                "kcal/d": 2000
            },
            "createdTime": "2021-07-13T14:30:00.000Z"
        }
    ],
    "offset": "recocoa9prF1BeBTe"
}
}
```
## MVP/PostMVP
--- 

### MVP


#### Planning & React
---

*  Completely write out the README.md

* Use CRA to make React App 

* NPM Install react-router-dom and axios

* Create 6 different components in react app

* Make an organize react folder that programmer can understand

* Use Axios to GET & POST data from/to airtable
 
* Use only react to chnage DOM (No HTML nor JS append methods)

* Remember have a minimum of 20 commits total (Save your game often)

#### Styling 
--- 

* Use some sort of styling (CSS, Styled Components, CSS-in-JS, or Component Library *tailwind?*)

* Use flexbox or CSS grid to style page (unless component library does this)

* Add responsive design for 2 screen sizes via media query (desktop and mobile - unless component library handles this too)

#### Linting 
---

* Indent properly 

* Use semantic variable names when appropriate

* use camelCase, kebab-case and PascalCase when necessary

* remove unneeded boilerplate react and code

* remove all console.log() and commented out code (functional notes and comments are ok to stay)

#### Post-MVP

*  Adv. CSS Styling (Be sure to leave sources just in case)
 
* NPMJS Shopping and Implementation (Because why not...)
 
* Experimental API implementation (from P1 and 1 more...)





Day |	Deliverable | Status       |
----|---------------|--------------|
July 13 | Prompt / Wireframes / Priority Matrix / Timeframes -> Project Approval -> Psuedo Code -> Component Creation -> Axios GET/POST Requests (*Commit on every step that increases progress even a bit*)  |[X]|
July 14 | Responsive Design (Desktop and Mobile), CSS, and npmjs shopping and implementation -> Airtable documentation surfing and implementation  |[X]|
July 15 | Debugging, Linting, Refactoring, MVP -> Use Issue Ticket on Specific Sticking Point (4/5) |[X]|
July 16 | Post-MVP: Heavy Customization(Experimental API) & Adv. Styling, Issue Ticket on Specific Sticking Point (3/5)|[X]|
July 17 | Post-MVP: Additional Customizations(Airtable, Axios patch...), Use Issue Ticket on Specific Sticking Point (2/5)|[X]|
July 18 | Post-MVP: Additional Customizations from P1 Project, Use Issue Ticket on Specific Sticking Point (1/5) |[X]|
July 19 | Complete README.md -> SWOT Analysis & Brag-worthy code, Use Issue Ticket on Specific Sticking Point (0/5), Practice Presentation| [X] |
July 20 | Presentations | [X]|


## Timeframes
<!--  Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly. -->

Component|Priority|Estimated Time|Time Invested | Actual Time |
---------|--------|--------------|--------------|-------------|
Complete README.md - project proposal| H |3hrs | 2hrs | 2hrs |
Clone down REPO + CRA + Install Deps(i, react-router-dom, axios)+ Psuedo-Code + Build Components  | H | 2hrs | 10+hrs | 10+hrs |
Building Custom AirTable + Read Docs| H |5hrs | 10hrs+ | 10hrs+ |
Make a get + form + post request | H |5hrs | 3hrs | 3hrs |
Form logic for calculator |H| 2HRS | 8HRS | 8HRS
Responsive Design | H |3hrs | 5hrs+ | 5hrs+ |
Debug/Refactoring| H |5hrs | 10hrs+ | 10hrs+ |
Post-MVP: Adv. Styling| M |5hrs | 1hrs | 1hrs |
Post-MVP: Experimental API| M |3hrs | 0hrs | 0hrs |
Post-MVP: AirTable Customization| M |3hrs | 0hrs | 0hrs |
Post-MVP: Axios.put or patch| M |3hrs | 2hrs | 2hrs |
Post-MVP: Add customizations from P1 Prjoect| M |3hrs | 3hrs | 3hrs |
Post-MVP: NPMJS Shopping & Implementation| M |5hrs | 2hrs | 2hrs |
Netilify Deployment | H |3hrs | 0hrs | 0hrs |
Total | H | 51hrs | 56hrs | 56hrs |

## SWOT Analysis

### Strengths:

* I was about to strengthen my CSS foundations during this project which helped during certain parts of the project week. 

* I experimented with some simple React Libraies such as React font, icons, materialize, and I have another to try and master: Storybooks. I may be doing additional research on them to improve the project post-project week.

* I did emphasize some visual design principles such as typography and even made a logo for the project. 
 
 * I learned some new errors, what causes them, and how to debug them.

### Weaknesses:

* I did not utilize props in an efficient way to create re-usable components the way that React was intended to be utilized so going forward I will practice making more efficient re-usable react components properly instead of hard-coding them so they can dynamically update when needed.

* My airtable was extremely simple and I do regret not learning more about it on my own like a linked tables in air table so I can make an extrememly customized lifestyle application - I would like to learn more about airtable.

* My organization for the CSS of each REACT component was lacking which lead to a very messy and disorienting CSS file moving forward it would be best to separate React components into individual folders with their corresponding CSS file 

* Strengthen my useEffect logic in React -> It could have been done in much less than what is here. 

* Responsive design - I still struggled with making the page responsive as I wanted so I will be reviewing and learning more on it soon.

* Psuedo-Coding: Do more of it

### Opportunities:

* I did have a chance to try out some simple react libraries such as react fonts, icons, materialize. I didn't master it yet but I am interested in learning storybooks for react since it can you to build very nice features to your website relatively quickly. I would also continue to build on the project utilizing other libraries like chartJS to add additional features to the website. I may need to update the air table.

* I will be learning more about CSS animation and other unique add-ons to polish this project

* I will be adding Voice Recognition API into this project as well or challenge myself utilizing about experimental API 


### Threats:

* I need to remember that this project is not where I would like it to be so don't worry about how the project looks now and focus on what I can do to make this project something I would use at any moment if I had the chance.

* Don't beat yourself up. You did a great job doing the first draft of this program so now we just need continue to build on it overtime.
 
