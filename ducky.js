window.onload = function() {
	const body = document.body;

	console.log(body);

	// 1. Create a <div> with the class "duck" and add it to the body.  Do this step by step
	// ( 1. create the element
	let duckDiv = document.createElement('div');

	//   2. add a class to the element
	duckDiv.classList.add('duck');

	//   3. append the element to the body )
	document.body.appendChild(duckDiv);

	// 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
	// https://www.w3schools.com/jsref/met_win_setinterval.asp
	setInterval(function() {
		duckDiv.classList.toggle('flap');
	}, 250);

	// 3. Now, let's move the duck using CSS "top" and "left". Create
	// a function `moveDuck` that takes a duck object as an argument and sets the
	// "top" and "left" CSS properties.
	// HINT: Use Math.random() * window.innerWidth    for "left"
	//       And Math.random() * window.innerHeight   for "top"
	duckDiv.style.left = Math.random() * window.innerWidth + 'px';
	duckDiv.style.top = Math.random() * window.innerHeight + 'px';

	setInterval(function() {
		let duckLeft = Math.random() * window.innerWidth;
		let duckTop = Math.random() * window.innerHeight;
		duckDiv.style.left = `${duckLeft}px`;
		duckDiv.style.top = `${duckTop}px`;

		let duckObj = {
			left: duckLeft,
			top: duckTop
		};

		moveDuck = (duck) => {
			duckDiv.style.left = duckObj.left + 'px';
			duckDiv.style.top = duckObj.top + 'px';
		};
		if (duckLeft < 720) {
			duckDiv.classList.add('left');
			duckDiv.classList.remove('right');
		} else {
			duckDiv.classList.add('right');
			duckDiv.classList.remove('left');
		}
		// 4. Try making the duck move to a different location every second (what did we use to do this several lines up??)
	}, 1000);

	// 5. Congratulations! Move on to part 2!

	// ---------------------------- PART 2 ---------------------------------

	// 6. Now we will organize this better. Let's create
	//    a "function" called createDuck() that does everything in 1-4
	//    and "returns" the duck object
	createDuck = () => {
		//Creates a new duck div
		let duckDiv = document.createElement('div');
		//adds duck class to duck div
		duckDiv.classList.add('duck');
		//adds duck div to document
		document.body.appendChild(duckDiv);

		//sets timer for flap class to be added and removed from duck div
		setInterval(function() {
			duckDiv.classList.toggle('flap');
		}, 250);

		// 8. The ducks are overlapping.  Modify createDuck so each time
		//     it creates a duck, it appears in a random location
		// HINT: You may want to create a `randomPosition()` function that you can use
		//       to set the ducks' initial locations and in your `moveDuck()` function;
		randomPosition = () => {
			duckDiv.style.left = Math.random() * window.innerWidth + 'px';
			duckDiv.style.top = Math.random() * window.innerHeight + 'px';
		};

		//call of randomPosition function
		randomPosition();

		//sets interval for running function that changes position of duckDiv every second
		setInterval(function() {
			duckLeft = Math.random() * window.innerWidth;
			duckTop = Math.random() * window.innerHeight;

			let duckObj = {
				left: duckLeft,
				top: duckTop
			};

			moveDuck = (duck) => {
				duckDiv.style.left = duckObj.left + 'px';
				duckDiv.style.top = duckObj.top + 'px';

				// 15. BONUS: Add the "left" and "right" class to the duck based on the
				//     direction the duck is flying and change the way the duck is facing
				if (duckLeft < 720) {
					duckDiv.classList.add('left');
					duckDiv.classList.remove('right');
				} else {
					duckDiv.classList.add('right');
					duckDiv.classList.remove('left');
				}
			};

			moveDuck(duckObj);
			return duckObj;
		}, 1000);

		// 11. BOOM. Attach a "click" handler that adds the "shot" class to
		//     the duck when you click on it!
		duckShot = () => {
			duckDiv.classList.add('shot');

			// 12. After a duck has been clicked on, remove it from the DOM after
			//     a short delay (1 second) Hint Hint...use setTimeout
			//     as for removing the element check out https://dzone.com/articles/removing-element-plain
			setTimeout(function() {
				duckDiv.remove();

				checkForWinner();
			}, 1000);
		};

		duckDiv.addEventListener('click', duckShot);
	};

	// 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
	//    using our fancy new createDuck() function
	for (let i = 0; i < 5; i++) {
		createDuck();
	}

	// 13. Create a new function named checkForWinner() that reads the DOM
	//     to see if there are any ducks left. (How can we check the DOM for more than one element?, and how can we see how many elements we get back) If not, alert "YOU WIN!"
	checkForWinner = () => {
		let duckLength = document.querySelectorAll('.duck').length;
		console.log(duckLength);
		if (duckLength <= 0) {
			alert('You Win!!!');
		}
	};

	// --------------------------- PART 3 ------------------------------------

	// 14. BONUS: The ducks are moving pretty erratically, can you think
	//     of a way to adjust the ducks speed based on how far needs to move?

	// Done, you have accomplish another level of skill

	duckShot = () => {
		duckDiv.classList.add('shot');
		setTimeout(function() {
			duckDiv.remove();

			checkForWinner();
		}, 1000);
	};

	duckDiv.addEventListener('click', duckShot);
};
