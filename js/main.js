/*************************
 *** GLOBAL DECLARATIONS **
 *************************/
 gameImage = document.querySelector(".gameImage");
 loadingImage = document.querySelector(".loadingImage");
 let page = 0;

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
}

//Move from instructions.html to scenarioone.html
if (document.URL.includes("instructions.html")) {
    document.querySelector(".takeShotInstructions").addEventListener('click', takeShotInstructionsClick);

     function takeShotInstructionsClick () {
        page = "scenarioone.html";
        loadNextPage(page);
    };
}




/*******************
 ***** BACKGROUND ****
********************/

/* html { 
  background: rgb(111,16,16);
background: radial-gradient(circle, rgba(111,16,16,1) 0%, rgba(255,255,255,0) 100%);
}
*/ 