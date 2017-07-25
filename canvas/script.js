function draw() {
        var canvas = document.getElementById('tutorial');
        var own = document.getElementById('own');
        if (canvas.getContext) {
        	var shift = 0;
          var ctx = canvas.getContext('2d');
          	ctx.fillStyle = 'rgb(200, 0, 0)';
        	ctx.fillRect(10, 10+shift, 50, 50);
        	ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        	ctx.fillRect(30, 30+shift, 50, 50);
        		shift+=100;

			ctx.fillStyle = 'rgb(0,0,0)';
        	ctx.fillRect(25, 25+shift, 100, 100);
    		ctx.clearRect(45, 45+shift, 60, 60);
    		ctx.strokeRect(50, 50+shift, 50, 50);
    			shift+=150;
    		    
    		ctx.beginPath();
    		ctx.moveTo(75, 50+shift);
    		ctx.lineTo(100, 75+shift);
    		ctx.lineTo(100, 25+shift);
    		ctx.fill();
    			shift+=100;

    		ctx.beginPath();
    		ctx.arc(75, 75+shift, 50, 0, Math.PI * 2, true); // Outer circle
    		ctx.moveTo(110, 75+shift);
    		ctx.arc(75, 75+shift, 35, 0, Math.PI, false);  // Mouth (clockwise)
    		ctx.moveTo(65, 65+shift);
    		ctx.arc(60, 65+shift, 5, 0, Math.PI * 2, true);  // Left eye
    		ctx.moveTo(95, 65+shift);
    		ctx.arc(90, 65+shift, 5, 0, Math.PI * 2, true);  // Right eye
    		ctx.stroke();
    			shift+=150;

    		// Filled triangle
    		ctx.beginPath();
    		ctx.moveTo(25, 25+shift);
    		ctx.lineTo(105, 25+shift);
    		ctx.lineTo(25, 105+shift);
   			ctx.fill();
		    // Stroked triangle
    		ctx.beginPath();
    		ctx.moveTo(125, 125+shift);
    		ctx.lineTo(125, 45+shift);
    		ctx.lineTo(45, 125+shift);
    		ctx.closePath();
    		ctx.stroke();
    			shift+=175;

    		for (var i = 0; i < 6; i++) {
    			for (var j = 0; j < 6; j++) {
      				ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' +
                       	Math.floor(255 - 42.5 * j) + ', 0)';
      					ctx.fillRect(j * 25, i * 25+shift, 25, 25);
      			}
      		}
      			shift+=175;

      		for (var i = 0; i < 6; i++) {
      			for (var j = 0; j < 6; j++) {
        			ctx.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * i) + ', ' + 
                        Math.floor(255 - 42.5 * j) + ')';
        			ctx.beginPath();
        			ctx.arc(12.5 + j * 25, 12.5 + i * 25+shift, 10, 0, Math.PI * 2, true);
        			ctx.stroke();
      			}
    		}
    			shift+=175;

    		// draw background
  			ctx.fillStyle = '#FD0';
  			ctx.fillRect(0, 0+shift, 75, 75);
  			ctx.fillStyle = '#6C0';
  			ctx.fillRect(75, 0+shift, 75, 75);
  			ctx.fillStyle = '#09F';
  			ctx.fillRect(0, 75+shift, 75, 75);
  			ctx.fillStyle = '#F30';
 			  ctx.fillRect(75, 75+shift, 75, 75);
  			ctx.fillStyle = '#FFF';
  			// set transparency value
  			ctx.globalAlpha = 0.2;
		  	// Draw semi transparent circles
  				for (i = 0; i < 7; i++) {
    				ctx.beginPath();
    				ctx.arc(75, 75+shift, 10 + 10 * i, 0, Math.PI * 2, true);
    				ctx.fill();
  				}
  					shift+=175;

        ctx.strokeStyle = 'rgb(0,0,0)';
        ctx.globalAlpha = '1';

        var lineJoin = ['round', 'bevel', 'miter'];
        ctx.lineWidth = 10;
          for (var i = 0; i < lineJoin.length; i++) {
            ctx.lineJoin = lineJoin[i];
            ctx.beginPath();
            ctx.moveTo(-5, 5 + i * 40+shift);
            ctx.lineTo(35, 45 + i * 40+shift);
            ctx.lineTo(75, 5 + i * 40+shift);
            ctx.lineTo(115, 45 + i * 40+shift);
            ctx.lineTo(155, 5 + i * 40+shift);
            ctx.stroke();
          }
        }

//next object

        if (own.getContext) {
        	var shift = 0;
          var ctx = own.getContext('2d');
          ctx.fillStyle = 'rgb(200, 120, 0, 0.4)';
          ctx.fillRect(17, 27+shift, 70, 50);
          ctx.fillStyle = 'rgb(200, 100, 0, 0.6)';
          ctx.fillRect(25, 38+shift, 30, 30);
         	 shift+=115;

          ctx.fillStyle = 'rgba(0, 100, 200, 0.75)';
          ctx.fillRect(10, 50+shift, 80, 25);
          ctx.clearRect(30, 65+shift, 20, 20);
          ctx.strokeRect(35, 70+shift, 10, 10);
          	shift+=155;

          ctx.fillStyle = 'rgb(153,0,204)';
          ctx.beginPath();
          ctx.moveTo(25, 10+shift);
          ctx.lineTo(25, 40+shift);
          ctx.lineTo(75, 10+shift);
          ctx.lineTo(75, 60+shift);
          ctx.fill();
          	shift+=90;

          ctx.beginPath();
          ctx.arc(50, 80+shift, 5, 0, Math.PI*2, true);
          ctx.moveTo(63, 73+shift);
          ctx.arc(50, 80+shift, 15, -30*Math.PI/180, -150*Math.PI/180, true);
          ctx.moveTo(29, 68+shift);
          ctx.arc(50, 80+shift, 25, -150*Math.PI/180, -30*Math.PI/180, false);
          ctx.moveTo(80, 62+shift);
          ctx.arc(50, 80+shift, 35, -30*Math.PI/180, -150*Math.PI/180, true);
          ctx.stroke();
          	shift+=180;

          ctx.fillStyle = 'rgba(179, 179, 0, 1)';
          ctx.beginPath();
          ctx.moveTo(50, 0+shift);
          ctx.lineTo(20, 75+shift);
          ctx.lineTo(80, 75+shift);
          ctx.closePath();
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(50, 10+shift);
          ctx.lineTo(25, 71+shift);
          ctx.lineTo(75, 71+shift);
          ctx.closePath();
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(35, 65+shift);
          ctx.lineTo(65, 65+shift);
          ctx.lineTo(50, 35+shift);
          ctx.fill();
          	shift+=155;


          for (var i = 0; i < 8; i++) {
          	ctx.fillStyle = 'rgb('+255*Math.floor(10*Math.random()*i)/10+', '+200+', '+206+')';
          	ctx.fillRect(10, 60*i+shift, 80, 40-5*i);
            ctx.lineWidth = 1 + i;
            ctx.lineCap='round';
          	ctx.strokeStyle = 'rgb('+Math.floor(255-255/8*i)+', 0, 0)';
            ctx.beginPath();
            ctx.moveTo(20, 450-57*i+shift);
            ctx.lineTo(80, 450-57*i+shift);
            ctx.stroke();
          	//ctx.strokeRect(20, 450-57*i+shift, 60, 0);
          }
          	ctx.globalAlpha = 0.02;
          	ctx.fillStyle = '#FFF';
          		for (var i = 0; i < 100; i++) {
          			ctx.fillRect(0, shift, i, 500);
          		}
                shift+=510;

            ctx.globalAlpha = "0.65";
            var lineJoin = ['round', 'bevel', 'miter'];
            ctx.lineWidth = 15;
            for (var i = 0; i < lineJoin.length; i++) {
              ctx.strokeStyle = 'rgb('+255/3*i+', 100,100)';
              ctx.lineJoin = lineJoin[i];
              ctx.beginPath();
              ctx.moveTo(40, 50*i+shift); 
              ctx.lineTo(60, 50*i+shift);
              ctx.lineTo(10, 50*i+50+shift);
              ctx.stroke();
              ctx.clearRect(0, shift, 32, 150);
          }

        }
      }