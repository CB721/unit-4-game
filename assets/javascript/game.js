$(document).ready(function () {

    //dfine characters
    let characters = {

        Luke: {
            name: "Luke Skywalker",
            profile: "assets/images/lukeskywalker.jpg",
            health: 120,
            attack: 20,
            enemyAttack: 25
        },
        R2D2: {
            name: "R2-D2",
            profile: "assets/images/r2d2.jpg",
            health: 200,
            attack: 5,
            enemyAttack: 15
        },
        Darth: {
            name: "Darth Vader",
            profile: "assets/images/darthvade.gif",
            health: 100,
            attack: 20,
            enemyAttack: 23
        },
        Kylo: {
            name: "Kylo Ren",
            profile: "assets/images/kyloren.jpg",
            health: 150,
            attack: 15,
            enemyAttack: 20
        }

    };

    //define variables
    var selectedChar;
    var enemies = [];
    var currDefender;
    var turnCounter = 1;
    var killCount = 0;


    //reset game
    var restart = function (endGame) {
        var reset = $("<button>Restart</button>").click(function () {
            location.reload();
        });
        var gameStatus = $("<div>").text(endGame);
        $("body").append(gameStatus);
        $("body").append(reset);
    };


    //display characters
    var displayA = function (character, displayArea, charStatus) {
        var charDiv = $("<div class='character'.(data-name='" + character.name + "')>");
        var charName = $("<div class='character-name'>").text(character.name);
        var charImage = $("<img class='character-image'>").attr("src", character.profile);
        var charHealth = $("<div class='character-health'>").text(character.health);
        charDiv.append(charName).append(charImage).append(charHealth);
        $(displayArea).append(charDiv);

        if (charStatus == 'enemy') {
            $(charDiv).addClass('enemy');
        }
        else if (charStatus === 'defender') {
            currDefender = character;
            $(charDiv).addClass('target-enemy');
        }
    };

    //create game messages
    var showGameMessage = function (message) {
        var gameMessages = $("#game-messages");
        var newMessage = $("<div>").text(message);
        gameMessages.append(newMessage);

        if (message == 'clearMessage') {
            gameMessages.text('');
        }
    };


    //place characters in divs
    var createCharacters = function (charObj, areaRender) {

        //section for player to select character
        if (areaRender == '#characters-section') {
            $(areaRender).empty();

            for (var key in charObj) {

                if (charObj.hasOwnProperty(key)) {
                    displayA(charObj[key], areaRender, '');
                }
            }
        }

        //selected character goes here
        if (areaRender === "#selected-character-section") {
            displayA(charObj, areaRender, '');
        }

        //all other characters go here
        if (areaRender == "#available-enemies") {

            for (var i = 0; i < charObj.length; i++) {
                displayA(charObj[i], areaRender, 'enemy');
            }
            //when character is clicked, they are redefined as an enemy and moved to defender section
            $(document).on('click', '.enemy', function () {
                name = ($(this).attr('data-name'));

                if ($('#defender-section').children().length === 0) {
                    createCharacters(name, '#defender-section');
                    $(this).hide();
                    showGameMessage('#clearMessage');
                }
            });
        }

        //place selected enemmy in defender section div
        if (areaRender == '#defender-section') {
            $(areaRender).empty();

            for (var i = 0; i < enemies.length; i++) {

                if (enemies[i].name == charObj) {
                    displayA(enemies[i], areaRender, 'defender');
                }
            }
        }

        if (areaRender == 'playerDamage') {
            $('#defender-section').empty();
            displayA(charObj, '#defender-section', 'defender');
        }

        if (areaRender == 'enemyDamage') {
            $('#selected-character-section').empty();
            displayA(charObj, '#selected-character-section', '');
        }

        //when player defeates an enemy
        if (areaRender == 'enemyDefeated') {
            $('#defender').empty();
            var gameMessages = "You have defeated " + charObj.name + ", you can choose another fighter."
            showGameMessage(gameMessages);
        }
    };

    //inital character placement
    createCharacters(characters, "#characters-section");


    //character/enemy seletion when clicked
    //selected character should go to selected character section div
    //other characters should go to available enemies div
    $(document).on('click', '.character', function () {
        name = $(this).data('name');
        if (!selectedChar) {
            selectedChar = characters[name];
            for (var key in characters) {
                if (key != name) {
                    enemies.push(characters[key]);
                }
            }
            $("#characters-section").hide();
            createCharacters(selectedChar, '#selected-character-section');
            createCharacters(enemies, '#available-enemies');
        }
    });

    //attack sequence
    $('#attack-button').on('click', function () {
        if ($('#defender').children().length !== 0) {

            //game messages for attacks
            var attackMessage = "You attacked " + currDefender.name + " for " + (selectedChar.attack + turnCounter) + " damage!";
            var counterAttack = currDefender.name + " attacked you for " + currDefender.enemyAttack + " damage!";
            showGameMessage('clearMessage');
            currDefender.health = currDefender.health - (selectedChar.attack * turnCounter);

            //defender sequence
            if (currDefender.health > 0) {
                createCharacters(currDefender, 'playerDamage');
                showGameMessage(attackMessage);
                selectedChar.health = selectedChar.health - currDefender.enemyAttack;
                showGameMessage(counterAttack);
                createCharacters(selectedChar, 'enemyDamage');

                //if player loses
                if (selectedChar.health <= 0) {
                    showGameMessage("clearMessage");
                    restart("You have been defeate...");
                    $("#attack-button").unbind("click");
                }
            }
            //if player wins
            else {
                createCharacters(currDefender, 'enemyDefeated');
                killCount++;

                //if player defeates all other characters
                if (killCount >= 3) {
                    showGameMessage("clearMessage");
                    restart("You defeated all the enemies!");
                }
            }
        }
        turnCounter++;
    });

});