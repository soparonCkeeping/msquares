var distances;
let rez = 20;
let cols, rows;

function setup() {
	createCanvas(720, 360);
	cols =  1 + width / rez;
	rows =  1 + height / rez;
	distances = Array.from(Array(cols), () => new Array(rows));
	for (let x = 0; x < cols; x++) {
		for (let y = 0; y < rows; y++) {
			distances[x][y] = floor(random(2));
		}
	}
}

function draw() {
  background(127);
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      //  console.log(distances[x][y]);
       stroke(distances[x][y]*255);
       strokeWeight(rez*0.4);
       point(x*rez, y*rez);
    }
  }

  for (let i = 0; i < cols-1; i++) {
    for (let j = 0; j < rows-1; j++) {
		let x = float(i * rez);
		let y = float(j * rez);
		let a = createVector(x + 0.5 * rez,	y			 );
		let b = createVector(x + rez	  , y + rez * 0.5);
		let c = createVector(x + 0.5 * rez, y + rez      );
		let d = createVector(x 			  , y + rez * 0.5);

		var state = distances[i][j] * 8 + distances[i+1][j] * 4 + distances[i+1][j+1] * 2 + distances[i][j+1];
		
		switch(state) {
			case 1:
				// drawLine(c, d);
				line(c.x, c.y, d.x, d.y);
				break;
			case 2:
				line(b.x, b.y, c.x, c.y);
				break;
			case 3:
				line(b.x, b.y, d.x, d.y);
				break;
			case 4:
				// drawLine(a, b);
				line(a.x, a.y, b.x, b.y);
				break;
			case 5:
				// drawLine(a, b);
				line(a.x, a.y, d.x, d.y);
				line(b.x, b.y, c.x, c.y);
				// drawLine(b, c);
				break;
			case 6:
				line(a.x, a.y, c.x, c.y);
				break;
			case 7:
				line(a.x, a.y, d.x, d.y);
				break;
			case 8:
				line(a.x, a.y, d.x, d.y);
				break;
			case 9:
				line(a.x, a.y, c.x, c.y);
				break;																																																
			case 10:
				line(a.x, a.y, b.x, b.y);
				line(c.x, c.y, d.x, d.y);
				break;
			case 11:
				line(a.x, a.y, b.x, b.y);
				break;
			case 12:
				line(b.x, b.y, d.x, d.y);
				break;
			case 13:
				line(b.x, b.y, c.x, c.y);
				break;
			case 14:
				line(c.x, c.y, d.x, d.y);
				break;
		}
		stroke(255);
		strokeWeight(1);
		// line(a.x, a.y, b.x, b.y)
    }
  }
}

// function drawLine(v1, v2) {
// 	console.log('draw');
// 	line(v1.x, v1.y, v2.x, v2.y);
// }

// function getState(a, b, c, d) {
// 	console.log('getstate')
// 	return (a*8, b*4, c*2, d*1);
// }


