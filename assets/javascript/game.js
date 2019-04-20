$(document).ready(function () {

    //Create array of characters
    let characters = {

        "Luke": {
            name: "Luke Skywalker",
            profile: "assets/images/lukeskywalker.jpg",
            health: 120,
            attack: 20,
            enemyAttack: 25
        },
        "R2D2": {
            name: "R2-D2",
            profile: "assets/images/r2d2.jpg",
            health: 200,
            attack: 5,
            enemyAttack: 15
        },
        "Darth": {
            name: "Darth Vader",
            profile: "assets/images/darthvade.gif",
            health: 100,
            attack: 20,
            enemyAttack: 23
        },
        "Kylo": {
            name: "Kylo Ren",
            profile: "assets/images/kyloren.jpg",
            health: 150,
            attack: 15,
            enemyAttack: 20
        }

    };

    console.log(characters);

    var renderOne = function (character, renderArea) {
        var charDiv = $("<div class='character' data-name=' " + character.name + " '>");
        var charName = $("<div class='character-name'>").text(character.name);
        var charImage = $("<img class='character-image'>").attr("src", character.profile);
        var charHealth = $("<div class='character-health'>").text(character.health);
        charDiv.append(charName).append(charImage).append(charHealth);
        $(renderArea).append(charDiv);
    }

    var renderCharacters = function (charObj, areaRender) {
        if (areaRender === "#characters-section") {
            $(areaRender).empty();
            for (var key in charObj) {
                if (charObj.hasOwnProperty(key)) {
                    renderOne(charObj[key], areaRender);
                }
            }
        }
    }
    renderCharacters(characters, "#characters-section");














    // for (let charName in characters.players) {
    //     (`${charName}: ${characters.players[charName].name}`);
    //     return charName;
    // };

    // for each character create a image and button (on click event)
    //place inside characters-section div



    //Define audio clips


    //Push characters to html


    //     console.log(charName);
    // console.log(charImage);
    // console.log(charHealth);
    // console.log(characters.length);

    // var displayCharacters = function () {

    //     for (var i = 0; i < characters.length; i++) {
    //         console.log('hi');
    //         var charDiv = $("#characters-section");
    //         charDiv.append(charName);
    //         charDiv.append(charImage);
    //         charDiv.append(charHealth);
    //         charDiv.append(characters.Luke.name);
    //         charDiv.append(characters.Luke.profile);
    //         charDiv.append(characters.Luke.health);
    //     };
    // };

    // displayCharacters();


    // var createCharacters = (charObj, areaDisplay) => {
    //     if (areaDisplay === "#characters-section") {
    //         $(areaDisplay).empty();
    //         for (var key in charObj) {
    //             if (charObj.hasOwnProperty(key)) {
    //                 displayCharacters(charObj[key], displayCharacters);
    //             }
    //         }
    //     }
    // }

    // createCharacters(characters, "#characters-section");



    //     displayCharacters();

    //     var selectedChar;
    //     var selectedDefender;
    //     var waitingDefenders;


    // });

    // var displayCharacters = function () {

    //         var createLuke = $("#luke");
    //         createLuke.append(characters[0].name);
    //         $("#luke").append(createLuke);
    //         var lukePicture = $("<img>");
    //         lukePicture.attr("src", characters[0].profile);
    //         $("#luke").append(lukePicture);
    //         var lukeHealth = $("luke-health");
    //         lukeHealth.attr("src", characters[0].health);
    //         $("#luke-health").append(lukeHealth);


    // };

    // displayCharacters();


    // $("#luke").on("click", function () {
    //     var userPick;
    //     console.log(userPick);
    //     $("#players-profile").appendTo("#players-selection");
    // });

    //characters have 3 variables
    //Health Points
    //each character must be different
    //Attack Power
    //each character must be different
    //Each attack, character's Attack Power increases by its base Attack Power
    //ex. if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30)
    //Counter Attack Power
    //is the same as starting 'Attack Power'
    //never changes

    //each character needs to be its own variable


    //when that character is clicked, it is moved to player selection
    //other characters are moved to enemies
    //user clicks enemy to move to defender area



    //user must be able to win with each player

    //characters start in selection area


    //user selects character by selecting the image


    //sound is played on selection
    //character goes to 'Your Character' section
    //other characters go to 'Enemies Available to Attack' section

    //user selects first enemy

    //selected enemy goes to 'Fight Section'

    //user hits attack button (on.click)
    //attack sound triggered based on character
    //damages enemy character
    //enemy damages character
    //user continues to keep hitting attack button
    //if character's health points are >= 0
    //you lose alert
    //reset button appears
    //if enemy's health points are >=0, 
    //alert on defeating that character
    //user will select the next enemy

    //once all enemies are defeated
    //win sound is triggered
    //you win alert
});