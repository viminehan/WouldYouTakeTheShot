/*************************
  GLOBAL DECLARATIONS
 *************************/
let currentScenario = 0;
  
let scenarioTitle = "";
let scenarioText = "";
let gameImageSrc = "";

let gameImage = document.querySelector(".gameImage");
let loadingImage = document.querySelector(".loadingImage");

let gameBackground  = document.querySelector(".gameBody");

//Shot Selection Detection
let wasShotTaken = false;

//Tracked Game Statistics
let shotsTaken = 0;
let shotsHeld = 0;
let hostilesKilled = -1;
let innocentsKilled = 0;
let unknownsKilled = 0;

/*************************
 NAVIGATION
 ************************/
 //Home page to instructions
 document.querySelector(".indexPlayButton").addEventListener('click', playButtonClick);

 function playButtonClick() {
    document.querySelector(".homePageClass").style.display = 'none';
    document.querySelector(".scenariosPageClass").style.display = 'flex';
    loadNextScenario();
};

//Exit button to home
document.querySelector(".exitButton").addEventListener('click', returnHome);

function returnHome() { 
    if (confirm("Are you sure you want to exit? Note: This will reset your progress.")) { 
        location.reload();
    } else {};
};
/******************
 SCENARIO HANDLING
 ****************/
 document.querySelector(".scenarioTakeShotButton").addEventListener('click', runTakeShot);
 document.querySelector(".scenarioHoldFireButton").addEventListener('click', runHoldFire);

 //Take Shot
 function runTakeShot () {
    gameImage.style.display = "none";
    loadingImage.style.display = "flex";
    setTimeout(() => { 
        if (currentScenario >= 1) {
            incrementShotsTaken();
            if (currentScenario > 2 && currentScenario !== 9 && currentScenario !== 12 && currentScenario !== 13 && currentScenario !== 14) {
                randomIncrement();
            }
        }
        loadNextScenario();
        updateBackground();
        gameImage.style.display = "flex";
        loadingImage.style.display = "none";
    }, 600); 
 };

 //Hold Fire
 function runHoldFire() {
    gameImage.style.display = "none";
    loadingImage.style.display = "flex";
    setTimeout(() => { 
        incrementShotsHeld();
        loadNextScenario();
        gameImage.style.display = "flex";
        loadingImage.style.display = "none";
    }, 600);

 };

 //Load Next Scenario 
function loadNextScenario() {
    incrementScenario();
    selectNewScenario(currentScenario);
    document.querySelector('.scenarioTitle').innerText = scenarioTitle;
    document.querySelector('.scenarioText').innerText = scenarioText;
    document.querySelector('.gameImage').src = gameImageSrc;

    reportValues();
    resetChoiceSelection();
};

//Reseting Choise Selection
function resetChoiceSelection () {
    wasShotTaken = false;
}

//Report Values
function reportValues() {
    console.log(`------- VALUES AS OF STARTING: Scenario ${currentScenario} -------`);
    console.log(`Shots Taken: ${shotsTaken}`);
    console.log(`Shots Held: ${shotsHeld}`);
    console.log(`Known Hostiles Killed: ${hostilesKilled}`);
    console.log(`Known Innocents Killed: ${innocentsKilled}`);
    console.log(`Unknown Actors Killed: ${unknownsKilled}`);
;} 

//Selecting New Scenario
function selectNewScenario() {
    if (currentScenario == 1) {
        scenarioTitle = 'Scenario One';
        scenarioText = 'You are perched on the roof of a 10-story building, tasked with providing cover for a squad of soldiers on the ground. They get into a firefight and you target an enemy combatant who is firing on your allies.';
        gameImageSrc = "";
        hostilesKilled++;
    } if (currentScenario == 2) {
        scenarioTitle = 'Scenario Two';
        scenarioText = 'You move your scope to search for a new target and pass over a friendly solider that you are charged with protecting. ';
        gameImageSrc = "";  
        innocentsKilled++;
    } if (currentScenario == 3) { 
        scenarioTitle = 'Scenario Three';
        scenarioText = 'You notice an enemy combatant and line them up in your sights, but notice that they are cowering behind cover and are not actively shooting at your allies.';
        gameImageSrc = "";
    } if (currentScenario == 4) { 
        scenarioTitle = 'Scenario Four';
        scenarioText = 'An explosion kicks up a massive cloud of dust and it is hard to see the battlefield. You can make out the outline of a solider, but you are only about eighty-percent (80%) certain that it is an enemy combatant.';
        gameImageSrc = "";
    } if (currentScenario == 5) { 
        scenarioTitle = 'Scenario Five';
        scenarioText = 'The dust settles and the battle is over. The enemy has been eliminated and your forces suffered minimal casualties. You see a lone military-aged male watching from a 5th-story balcony. He makes a phone call.';
        gameImageSrc = "";
    } if (currentScenario == 6) {
        scenarioTitle = 'Scenario Six';
        scenarioText = "Your team advances through the city and you move to a new building. When you kick down the door of an apartment, a young woman in a floral dress screams at you in a language you don't understand. She is holding a knife.";
        gameImageSrc = "";
    } if (currentScenario == 7) {
        scenarioTitle = 'Scenario Seven';
        scenarioText = "You take up your new position in the apartment. Your allies are moving up the street. You spot a military-aged male in a sidestreet, holding an assault rifle.";
        gameImageSrc = "";
    } if (currentScenario == 8) {
        scenarioTitle = 'Scenario Eight';
        scenarioText = "Your presence in this place is not welcome. Civilians in second-floor apartments hurl curse words and stones at your allies.";
        gameImageSrc = "";
    } if (currentScenario == 9) {
        scenarioTitle = 'Scenario Nine';
        scenarioText = "You spot movement on the roof of another building, an enemy combatant wielding a rocket launcher is taking aim at your troops.";
        gameImageSrc = "";
        hostilesKilled++;
    } if (currentScenario == 10) {
        scenarioTitle = 'Scenario Ten';
        scenarioText = "The team creeps up the main street. A women with a child close by, approaches your allies - it appears she is saying something. Her hand is closed around something.";
        gameImageSrc = "";
    } if (currentScenario == 11) {
        scenarioTitle = 'Scenario Eleven';
        scenarioText = "Your team reaches the target location and starts to assemble cover. Outside an old car carrying two passengers, travels at speed down the road towards the building.";
        gameImageSrc = "";
    } if (currentScenario == 12) {
        scenarioTitle = 'Scenario Twelve';
        scenarioText = "You spot an enemy sniper who has lined you up in their sights. Taking the shot would risk being fired upon yourself, but holding your fire and taking cover could mean that the sniper repositions and targets your team.";
        gameImageSrc = "";
        hostilesKilled++;
    } if (currentScenario == 13) {
        scenarioTitle = 'Scenario Thirteen';
        scenarioText = "A crowd of civilian protestors marches down the street towards the target location.. Amongst their ranks you spot a man obscuring an explosive. Taking the shot may result in the death of a civilian if they get in the way.";
        gameImageSrc = "";
        hostilesKilled++;
    } if (currentScenario == 14) {
        scenarioTitle = 'Scenario Fourteen';
        scenarioText = "A woman in the crowd draws a rifle and starts firing at your perch. She is using another woman as a bodyshield. Taking the shot would mean killing both the combatant and the innocent woman.";
        gameImageSrc = "";
        hostilesKilled++;
        innocentsKilled++;
    } if (currentScenario == 15) { 
        scenarioTitle = 'Scenario Fifteen';
        scenarioText = "The mission is almost complete. On the ground level, of a home reduced to rubble - you spot a young man, clutching the body of his bride.";
        gameImageSrc = "";
    } if (currentScenario == 16) {
        console.log('End of Scenarios...');
        moveToResults();
    } else {};
};

function moveToResults() {
    console.log('Moved to results.');
    document.querySelector(".scenariosPageClass").style.display = 'none';
    document.querySelector("#resultsPage").style.display = 'flex';
    showResults();
};

//Increment random value
function randomIncrement() { 
let randInc = 0;
randInc = Math.random();
console.log(`This Random Inc is: ${randInc}`);

unknownsKilled++;

    if (randInc > 0.5) {
        hostilesKilled++;
        console.log(`A new hostile was killed.`);
    } else if (randInc < 0.5) { 
        innocentsKilled++;
        console.log(`A new innocent was killed.`);
    } else {
        console.log('ERROR: randomIncrement() Broke.');
    };


};

function showResults() {
    document.querySelector('.span1').innerText = `You fired your sniper ${shotsTaken} times.`;
    document.querySelector('.span2').innerText = `You slaughtered ${hostilesKilled} hostile combatants.`;
    document.querySelector('.span3').innerText = `You ended the lives of ${innocentsKilled} innocent civilians.`
};

/***********************
 INCREMENTING VALUES
 ************************/

//Increment Scenario
function incrementScenario() { 
    currentScenario++;
    return currentScenario;
};

//Increment Shots Taken
function incrementShotsTaken() {
    if (currentScenario > 0) { 
        shotsTaken++; } else {};
};

//Increment Shots Held
function incrementShotsHeld() { 
    if (currentScenario > 0) { 
        shotsHeld++; } else {}; 
};

/**************************************************
 BACKGROUND HANDLING
***************************************************/
function updateBackground () {
    //Update background on shot taken.
    console.log('Updating Background..')
    if (shotsTaken == 1) {
        gameBackground.style.background = "radial-gradient(circle, rgba(255,255,255,0) 100%, rgba(111,16,16,1) 100%)";
    } else if (shotsTaken == 2) {
        gameBackground.style.background = "radial-gradient(circle, rgba(255,255,255,0) 92%, rgba(111,16,16,1) 100%)";
    } else if (shotsTaken == 3) {
        gameBackground.style.background = "radial-gradient(circle, rgba(255,255,255,0) 85%, rgba(111,16,16,1) 100%)";
    } else if (shotsTaken == 4) { 
        gameBackground.style.background = "radial-gradient(circle, rgba(255,255,255,0) 78%, rgba(111,16,16,1) 100%)";
    } else if (shotsTaken == 5) {
        gameBackground.style.background = "radial-gradient(circle, rgba(255,255,255,0) 71%, rgba(111,16,16,1) 100%)";
    } else if (shotsTaken == 6) {
        gameBackground.style.background = "radial-gradient(circle, rgba(255,255,255,0) 64%, rgba(111,16,16,1) 100%)";
    } else if (shotsTaken == 7) {
        gameBackground.style.background = "radial-gradient(circle, rgba(255,255,255,0) 57%, rgba(111,16,16,1) 100%)";
    } else if (shotsTaken == 8) {
        gameBackground.style.background = "radial-gradient(circle, rgba(255,255,255,0) 50%, rgba(111,16,16,1) 100%)";
    } else if (shotsTaken == 9) {
        gameBackground.style.background = "radial-gradient(circle, rgba(255,255,255,0) 43%, rgba(111,16,16,1) 100%)";
    } else if (shotsTaken == 10) {
        gameBackground.style.background = "radial-gradient(circle, rgba(255,255,255,0) 35%, rgba(111,16,16,1) 100%)";
    } else if (shotsTaken == 11) {
        gameBackground.style.background = "radial-gradient(circle, rgba(255,255,255,0) 28%, rgba(111,16,16,1) 100%)";
    } else if (shotsTaken == 12) {
        gameBackground.style.background = "radial-gradient(circle, rgba(255,255,255,0) 21%, rgba(111,16,16,1) 100%)";
    } else if (shotsTaken == 13) {
        gameBackground.style.background = "radial-gradient(circle, rgba(255,255,255,0) 14%, rgba(111,16,16,1) 100%)";
    } else if (shotsTaken == 14) {
        gameBackground.style.background = "radial-gradient(circle, rgba(255,255,255,0) 7%, rgba(111,16,16,1) 100%)";
    } else if (shotsTaken == 15) { 
        gameBackground.style.background = "radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(111,16,16,1) 100%)";
    } else {};
};