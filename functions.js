		<script language="JavaScript">
			var x, y, xc, yc, c, ctx, t, timer, life, andimg, startimg, endimg;
			var eflag = 0, hflag = 0, cflag = 1, score = 0, xw = 50, yw = 50, xl = 1200, yl = 10;

			function resetFunction()
			{
				eflag = 0;
				score = 0;
				life  = 3;
				cflag = 1;
				c=document.getElementById("myCanvas");
				ctx=c.getContext("2d");
				ctx.clearRect(0, 0, c.width, c.height);
				ctx.fillStyle="#00FF00";
				ctx.fillRect(xl,yl,15,30);
				ctx.fillStyle="#00FF00";
				ctx.fillRect(xl+50,yl,15,30);
				ctx.fillStyle="#00FF00";
				ctx.fillRect(xl+100,yl,15,30);
				document.getElementById("text").innerHTML="You have hit " + score + " mosquitoes";
				timer = setInterval(myFunction,1000);

			}

			function gameover () 
			{
				if (eflag == 0)
				{
					eflag = 1;
					document.getElementById("text").innerHTML="You hit " + score + " mosquitoes";
					clearInterval(timer);
					ctx.clearRect(0, 0, c.width, c.height);
					endimg = new Image();
					endimg.onload = function() 
					{
	        	  		ctx.drawImage(endimg, 0, 0);
	        		};
	        		endimg.src = "Images/Gameover.png";
	        	}
			}

			function myFunction()
			{
				
				if (cflag != 1)
				{
					if (life == 0)
					{
						gameover();
					}
					else
					{
						life = life - 1;
						if (life == 0)
						{
							gameover();
						}
					}
				}
				else
				{	
					cflag = 0;
				}
				switch(life)
				{
					case 2:
							ctx.fillStyle="#FF0000";
							ctx.fillRect(xl,yl,15,30);
							break;
					case 1:
							ctx.fillStyle="#FF0000";
							ctx.fillRect(xl+50,yl,15,30);
							break;
				}
				ctx.clearRect(0, 40, c.width, c.height);
			    x = Math.floor((Math.random()*1000)+1);
				y = Math.floor((Math.random()*410)+40);
				andimg = new Image();
				andimg.onload = function() 
				{
        	  		ctx.drawImage(andimg, x, y);
        		};
        		andimg.src = "Images/Mosquito.png";
			}

			function show_coords(event)
			{
				hflag = 0;
				cflag = 1;
				xc=event.clientX;
				yc=event.clientY;
				if ( (xc>x) && (xc<(x+xw)) && (yc>y) && (yc<(y+yw)) && (eflag == 0)) 
					{ 
						score = score + 1; 
						hflag = 1; 
						document.getElementById("text").innerHTML="You have hit " + score + " mosquitoes";
					}
				if (hflag == 0)
				{
					if (life == 0)
					{
					    gameover();
					}	
					else
					{	
						life = life - 1;
						if (life == 0)
						{
			                gameover();
						}
					}
				}
				else
				{
					hflag = 0;
				}
			}
		</script>