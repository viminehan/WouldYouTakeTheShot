/*************************
 *** GLOBAL DECLARATIONS **
 *************************/
 gameImage = document.querySelector(".gameImage");
 loadingImage = document.querySelector(".loadingImage");
 let page = 0;

let intelFollowed = 0;
let commandsFollowed = 0;
 
let intelDisobeyed = 0;
let commandsDisobeyed = 0;

/******************************
 ***** INCREMENTING VALUES*****
 *****************************/

 function increaseIntelFollowed() {
    intelFollowed++;
    return intelFollowed;
 }

 function increaseIntelDisobeyed() {
    intelDisobeyed++;
    return intelDisobeyed;
 }

 function increaseCommandsFollowed() {
    commandsFollowed++;
    return commandsFollowed
 };

 function increaseCommandsDisobeyed(){
    commandsDisobeyed++;
    return commandsDisobeyed;
 }

/*****************************
 ***** PAGE NAVIGATION ******
 ****************************/

//Loading Page Functionality
function loadNextPage(page) {
    console.log(page);
    gameImage.style.display = "none";
    loadingImage.style.display = "block";
    setTimeout(() => { 
        window.location = page;
    }, 600);
}
 //Move from index.html to instructions.html
if (document.URL.includes("index.html")) {
    document.querySelector(".indexPlayButton").addEventListener('click', playButtonClick);

    function playButtonClick () {
        console.log('Loading Instructions Page...');
        window.location = "instructions.html";
    }
}

//Exit Button moves user from any page to index.html
document.querySelector(".exitButton").addEventListener('click', exitButtonClick);

function exitButtonClick() {
    console.log('Exiting Game...');
    window.location = "index.html";
    intelDisobeyed = 0;
    intelFollowed = 0;
    commandsDisobeyed = 0;
    commandsFollowed = 0; 
}

//Move from instructions.html to scenarioone.html
if (document.URL.includes("instructions.html")) {
    document.querySelector(".takeShotInstructions").addEventListener('click', takeShotInstructionsClick);
    document.querySelector(".holdFireInstructions").addEventListener('click', holdFireInstructionsClick);

     function takeShotInstructionsClick () {
        page = "scenarioone.html";
        loadNextPage(page);
    };

    function holdFireInstructionsClick() {
        alert("to continue, please click 'Take Shot '");
    };
}

//Move from scenarioone.html to scenariotwo.html
if (document.URL.includes("scenarioone.html")) {
    document.querySelector(".takeShot").addEventListener('click', takeShot);
    document.querySelector(".holdFire").addEventListener('click', holdFire);

    function takeShot() { 
        increaseIntelFollowed();
        increaseCommandsFollowed();
        advanceToNextPage();
    };

    function holdFire() {
        increaseIntelDisobeyed();
        increaseCommandsDisobeyed();
        advanceToNextPage();
    };

    function advanceToNextPage() {
        page = "scenariotwo.html";
        loadNextPage(page);
     };
};

//Move from scenariotwo.html to scenariothree.html
if (document.URL.includes("scenariotwo.html")) {
    document.querySelector(".takeShot").addEventListener('click', takeShot);
    document.querySelector(".holdFire").addEventListener('click', holdFire);

    function takeShot() { 
        increaseIntelDisobeyed();
        increaseCommandsDisobeyed();
        advanceToNextPage();
    };

    function holdFire() {
        increaseIntelFollowed();
        increaseCommandsFollowed();
        advanceToNextPage();
    };

    function advanceToNextPage() {
        page = "scenariothree.html";
        loadNextPage(page);
     };
};

//Move from scneariothree.html to scenariofour.html
if (document.URL.includes("scenariothree.html")) {
    document.querySelector(".takeShot").addEventListener('click', takeShot);
    document.querySelector(".holdFire").addEventListener('click', holdFire);

    function takeShot() { 
        increaseIntelFollowed();
        increaseCommandsFollowed();
        advanceToNextPage();
    };

    function holdFire() {
        increaseIntelDisobeyed();
        increaseCommandsDisobeyed();
        advanceToNextPage();
    };

    function advanceToNextPage() {
        page = "scenariofour.html";
        loadNextPage(page);
     };
};

//Move from scneariofour.html to scenariofive.html
if (document.URL.includes("scenariofour.html")) {
    document.querySelector(".takeShot").addEventListener('click', takeShot);
    document.querySelector(".holdFire").addEventListener('click', holdFire);

    function takeShot() { 
        increaseCommandsFollowed();
        increaseIntelDisobeyed();
        advanceToNextPage();
    };

    function holdFire() {
        increaseIntelFollowed();
        increaseCommandsDisobeyed();
        advanceToNextPage();
    };

    function advanceToNextPage() {
        page = "scenariofive.html";
        loadNextPage(page);
     };
};

//Move from scenariofive.html to scenariosix.html
if (document.URL.includes("scenariofive.html")) {
    document.querySelector(".takeShot").addEventListener('click', takeShot);
    document.querySelector(".holdFire").addEventListener('click', holdFire);

    function takeShot() { 
        increaseIntelFollowed();
        increaseCommandsDisobeyed();
        advanceToNextPage();
    };

    function holdFire() {
        increaseCommandsFollowed();
        increaseIntelDisobeyed();
        advanceToNextPage();
    };

    function advanceToNextPage() {
        page = "scenariosix.html";
        loadNextPage(page);
     };
};

//Move from scenariosix.html to scenarioseven.html
if (document.URL.includes("scenariosix.html")) {
    document.querySelector(".takeShot").addEventListener('click', takeShot);
    document.querySelector(".holdFire").addEventListener('click', holdFire);

    function takeShot() { 
        increaseIntelFollowed();
        increaseCommandsFollowed();
        advanceToNextPage();
    };

    function holdFire() {
        increaseIntelDisobeyed();
        increaseCommandsDisobeyed();
        advanceToNextPage();
    };

    function advanceToNextPage() {
        page = "scenarioseven.html";
        loadNextPage(page);
     };
};

//Move from scenarioseven.html to results.html
if (document.URL.includes("scenarioseven.html")) {
    document.querySelector(".takeShot").addEventListener('click', takeShot);
    document.querySelector(".holdFire").addEventListener('click', holdFire);

    function takeShot() { 
        increaseCommandsDisobeyed();
        advanceToNextPage();
    };

    function holdFire() {
        increaseCommandsFollowed();
        advanceToNextPage();
    };

    function advanceToNextPage() {
        page = "results.html";
        loadNextPage(page);
     };
};

//Results Page
if (document.URL.includes("results.html")) {
 console.log(`Commands Followed: ${commandsFollowed}, Commands Disobeyed: ${commandsDisobeyed}, Intel Followed: ${intelFollowed}, Intel Disobeyed: ${intelDisobeyed}`);
}
