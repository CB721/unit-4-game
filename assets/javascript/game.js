$(document).ready(function () {

    //Define audio clips



    //Create array of characters
    var characters = [
        {
            name: 'Luke Skywalker',
            profile: "assets/images/lukeskywalker.jpg",
            health: 120,
            attack: 20
        },
        {
            name: 'R2-D2',
            profile: "assets/images/r2d2.jpg",
            health: 200,
            attack: 5
        },
        {
            name: 'Darth Vader',
            profile: "assets/images/darthvade.gif",
            health: 100,
            attack: 20
        },
        {
            name: 'Kylo Ren',
            profile: "assets/images/kyloren.jpg",
            health: 150,
            attack: 15
        }
    ];

//     var displayCharacters = function () {

//         for (var i = 0; i < characters.length; i++) {

//             var charName = $("<h5></h5>");
//             charName.append(characters[i].name);
//             $("#players-profile").append(charName);

//             var charProfile = $("<img>");
//             charProfile.attr("src", characters[i].profile);
//             charProfile.append(characters[i].profile);
//             $("#players-profile").append(charProfile);

//             var charHealth = $("<h6></h6>");
//             charHealth.append(characters[i].health);
//             $("#players-profile").append(charHealth);

//         };

//     };

//     displayCharacters();

//     var selectedChar;
//     var selectedDefender;
//     var waitingDefenders;


// });

var displayCharacters = function () {

        var createLuke = $("#luke");
        createLuke.append(characters[0].name);
        $("#luke").append(createLuke);
        var lukePicture = $("<img>");
        lukePicture.attr("src", characters[0].profile);
        $("#luke").append(lukePicture);
        var lukeHealth = $("luke-health");
        lukeHealth.attr("src", characters[0].health);
        $("#luke-health").append(lukeHealth);


};

displayCharacters();


$("#luke").on("click", function () {
    var userPick;
    console.log(userPick);
    $("#players-profile").appendTo("#players-selection");
});

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

// $("#attack-button").on("click", function () {
    //attack defender
    //increase attack by base number (6, 12, 18 etc.)
// });

//user must be able to win with each player

//characters start in selection area


//user selects character by selecting the image

// $("#players-profile").on("click", function () {
//     var userPick;
//     console.log(userPick);
//     $("#players-profile").appendTo("#players-selection");
// });
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