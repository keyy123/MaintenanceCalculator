
# _Maintenance Calculator_ (aka The Lunk-inator)


## Project Overview

### Project Name

Maintenance Calculator 

### Project Description
--- 
This project is a maintenance calculator which calculates the caloric intake needed to maintain an individual's current body weight indefinitely. The reasons for this project are Meal preps are not possible without knowing how the body react to a certain level of caloric intake. This tool uses the user's weight and caloric intake for a certain number of days to calculate their maintainance intake which can be used for the user to begin meal prep or reference.  

References:
---

- [Maintenance/eucaloric diet/ energy balance - 1] https://jcdfitness.com/2017/09/maintenance-calories/

- [Maintenance/eucaloric diet/energy balance - 2] https://pubmed.ncbi.nlm.nih.gov/23671029/

- [Maintenance/eucaloric diet/energy balance - 3] https://en.wikipedia.org/wiki/Weight_management

## Wireframes 
Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe. -> use wireframe.cc or io

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
Show us a snippet of JSON returned by your Airtable (you can find it under the API documentation) so we know you can access it and get the info you need. This must be properly formatted. An example is below:

```[
        {
            "id": "recONRzIUTuZ5lXaF",
            "fields": {
                "author": "Liz Yrineo",
                "setup": "Why did the tomato turn red?",
                "punchline": "Because it saw the salad dressing!"
            },
            "createdTime": "2020-11-30T16:03:09.000Z"
        },
        {
            "id": "rec3oYZ5Tp0AIDsKe",
            "fields": {
                "author": "Rachel Moskowitz",
                "setup": "What did the green grape say to the red grape?",
                "punchline": "Breathe, idiot, breathe!"
            },
            "createdTime": "2020-11-30T16:03:09.000Z"
        },
        {
            "id": "recA34tOaoE1IVeC1",
            "fields": {
                "author": "Gary Grant",
                "setup": "How do you make holy water?",
                "punchline": "You boil the hell out of it!"
            },
            "createdTime": "2020-11-30T16:03:09.000Z"
        }
    ],
    "offset": "recA34tOaoE1IVeC1"
}
```
## MVP/PostMVP
--- 

### MVP
These are examples only. Replace with your own MVP features.

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

* use camelCase, kebab-case adn PascalCase when necessary

* remove unneeded boilerplate react and code

* remove all console.log() and commented out code (functional notes and comments are ok to stay)

#### Post-MVP

*  Adv. CSS Styling (Be sure to leave sources just in case)
 
* NPMJS Shopping and Implementation (Because why not...)
 
* Experimental API implementation (from P1 and 1 more...)





Day |	Deliverable | Status       |
----|---------------|--------------|
July 13 | Prompt / Wireframes / Priority Matrix / Timeframes -> Project Approval -> Psuedo Code -> Component Creation -> Axios GET/POST Requests (*Commit on every step that increases progress even a bit*)  |[]|
July 14 | Responsive Design (Desktop and Mobile), CSS, and npmjs shopping and implementation -> Airtable documentation surfing and implementation  |[]|
July 15 | Debugging, Linting, Refactoring, MVP -> Use Issue Ticket on Specific Sticking Point (4/5) |[]|
July 16 | Post-MVP: Heavy Customization(Experimental API) & Adv. Styling, Issue Ticket on Specific Sticking Point (3/5)|[]|
July 17 | Post-MVP: Additional Customizations(Airtable, Axios patch...), Use Issue Ticket on Specific Sticking Point (2/5)|[]|
July 18 | Post-MVP: Additional Customizations from P1 Project, Use Issue Ticket on Specific Sticking Point (1/5) |[]|
July 19 | Complete README.md -> SWOT Analysis & Brag-worthy code, Use Issue Ticket on Specific Sticking Point (0/5), Practice Presentation| [] |
July 20 | Presentations | []|


## Timeframes
<!--  Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly. -->

Component|Priority|Estimated Time|Time Invested | Actual Time |
---------|--------|--------------|--------------|-------------|
Complete README.md - project proposal| H |3hrs | 2hrs | 2hrs |
Clone down REPO + CRA + Install Deps(i, react-router-dom, axios)+ Psuedo-Code + Build Components  | H | 2hrs | 0hrs | 0hrs |
Building Custom AirTable + Read Docs| H |5hrs | 0hrs | 0hrs |
Make a get + form + post request | H |5hrs | 0hrs | 0hrs |
Responsive Design | H |3hrs | 0hrs | 0hrs |
Debug/Refactoring| H |5hrs | 0hrs | 0hrs |
Post-MVP: Adv. Styling| M |5hrs | 1hrs | 1hrs |
Post-MVP: Experimental API| M |3hrs | 0hrs | 0hrs |
Post-MVP: AirTable Customization| M |3hrs | 0hrs | 0hrs |
Post-MVP: Axios.put or patch| M |3hrs | 0hrs | 0hrs |
Post-MVP: Add customizations from P1 Prjoect| M |3hrs | 0hrs | 0hrs |
Post-MVP: NPMJS Shopping & Implementation| M |5hrs | 0hrs | 0hrs |
Netilify Deployment | H |3hrs | 0hrs | 0hrs |
Total | H | 51hrs | 2hrs | 2hrs |

## SWOT Analysis
### Strengths:
### Weaknesses:
### Opportunities:
### Threats:
