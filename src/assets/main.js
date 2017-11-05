let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    i = input.value;


    setHiddenFields();

    if ( !validateInput(i) ){
    	return false;
    }
    attempt.value = 1 + parseInt(attempt.value);

    if (getResults(i)) {
    	setMessage("You win :)!");
    	showAnswer(true);
    	showReplay();
    	return true;
    }
    else {
    	if (attempt.value >= 10) {
    		setMessage("You Lose! :(");
    		showAnswer(false);
    		showReplay();
    	}
    	else{
    		setMessage("Incorrect, try again.")
    	}
    	return false;
    }

}

function showAnswer(isWon){

	c = document.getElementById('code');

	c.innerHTML = answer.value;

	if (isWon) {
		c.class += " success";
	}
	else {
		c.class += " failure";
	}
}

function showReplay(){
	g = document.getElementById('guessing-div');
	g.style.display = "none";

	r = document.getElementById('replay-div');
	r.style.display = "block";
}

//implement new functions here

function setHiddenFields() {
	if (answer.value == "") {
		a = Math.floor(Math.random()*1000).toString();
		while (a.length < 4) {
			a = "0" + a;
		}

		answer.value = a;
	}

	if (attempt.value == "") {
		attempt.value = 0;
	}
}

function setMessage(lbl) {
	document.getElementById('message').innerHTML = lbl;
}

function validateInput(input) {
	if ( input.length == 4 ) {
		return true;
	}

	setMessage("Guesses must be exactly 4 characters long.");
	return false;
}

function getResults(input) {
	p = "";
	toAdd = "";
	rights = 0;

	for (i = 0; i < answer.value.length; i++) {
		if ( answer.value[i] == input[i] ){
			rights++;
			toAdd += '<span class="glyphicon glyphicon-ok">'+input[i]+'</span>';
		}
		else {
			toAdd += '<span class="glyphicon glyphicon-remove">'+input[i]+'</span>';
		}
	}

	r = document.getElementById('results');
	r.innerHTML += '<div class="row"><span class="col-md-6">' + toAdd + '</span><div class="col-md-6">'

	if ( rights == 4 ) {
		return true;
	}
	else {
		return false;
	}
}










