/*************************
  GLOBAL DECLARATIONS
 *************************/
let currentScenario = 0;
  
let scenarioTitle = "";
let scenarioText = "";
let gameImageSrc = "";

let shotsTaken = 0;
let shotsHeld = 0;

let gameImage = document.querySelector(".gameImage");
let loadingImage = document.querySelector(".loadingImage");

/*************************
 NAVIGATION
 ************************/
 //Home page to instructions
 document.querySelector(".indexPlayButton").addEventListener('click', playButtonClick);

 function playButtonClick() {
    document.querySelector(".homePageClass").style.display = 'none';
    document.querySelector(".scenariosPageClass").style.display = 'flex';
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
        incrementShotsTaken();
        loadNextScenario();
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
};

//Report Values
function reportValues() {
    console.log(`------- VALUES AS OF STARTING: Scenario ${currentScenario} -------`);
    console.log(`Shots Taken: ${shotsTaken}`);
    console.log(`Shots Held: ${shotsHeld}`);
;} 

//Selecting New Scenario
function selectNewScenario() {
    if (currentScenario == 1) {
        scenarioTitle = 'Scenario One';
        scenarioText = 'You are perched on the roof of a 10-story building, tasked with providing cover for a squad of soldiers on the ground. They get into a firefight and you target an enemy combatant who is firing on your allies.';
        gameImageSrc = ""; 
    } if (currentScenario == 2) {
        scenarioTitle = 'Scenario Two';
        scenarioText = 'You move your scope to search for a new target and pass over a friendly solider that you are charged with protecting. ';
        gameImageSrc = "";  
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
    } if (currentScenario == 10) {
        scenarioTitle == 'Scenario Ten';
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
    } if (currentScenario == 13) {
        scenarioTitle = 'Scenario Thirteen';
        scenarioText = "A crowd of civilian protestors marches down the street towards the target location.. Amongst their ranks you spot a man obscuring an explosive. Taking the shot may result in the death of a civilian if they get in the way.";
        gameImageSrc = "";
    } if (currentScenario == 14) {
        scenarioTitle = 'Scenario Fourteen';
        scenarioText = "A woman in the crowd draws a rifle and starts firing at your perch. She is using another woman as a bodyshield. Taking the shot would mean killing both the combatant and the innocent woman.";
        gameImageSrc = "";
    } if (currentScenario == 15) { 
        scenarioTitle = 'Scenario Fifteen';
        scenarioText = "The mission is almost complete. On the ground level, of a home reduced to rubble - you spot a young man, clutching the body of his bride.";
        gameImageSrc = "";
    } if (currentScenario == 16) {
        console.log('End of Scenarios...');
        moveToResults();
    } else {
        console.log('selectNewScenario() Error');
    };
};

function moveToResults() {
    console.log('Moved to results.');
}

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
