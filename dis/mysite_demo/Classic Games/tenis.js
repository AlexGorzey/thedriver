var tenis = {};
window.onload = function() {
    tenis.game = (function() {
        var canvas2 = document.getElementById("canvas2");
        var ctx = canvas2.getContext("2d");
        var scoreboard = document.getElementById('scoreboard');
        var control = document.getElementById('controls');
        var status = false;
        var score = 0;

        //Ball
        var x = canvas2.width / 2;
        var y = canvas2.height - 30;
        var dx = 2;
        var dy = -2;
        var ballRadius = 10;

        //Paddle
        var paddleHeight = 10;
        var paddleWidth = 75;
        var paddleX = (canvas2.width - paddleWidth) / 2;
        var rightPressed = false;
        var leftPressed = false;

        //Bricks
        var brickRowCount = 7;
        var brickColumnCount = 5;
        var brickWidth = 75;
        var brickHeight = 20;
        var brickPadding = 10;
        var brickOffsetTop = 30;
        var brickOffsetLeft = 30;
        var bricks = [];
        for (var i = 0; i < brickColumnCount; i++) {
            bricks[i] = [];
            for (var j = 0; j < brickRowCount; j++) {
                bricks[i][j] = { x: 0, y: 0, visible: 1 };
            }
        }

        //Conduct paddle
        function keyDownHandler(e) {
            if (e.keyCode == 39) {
                rightPressed = true;
            } else if (e.keyCode == 37) {
                leftPressed = true;
            }
        }

        function keyUpHandler(e) {
            if (e.keyCode == 39) {
                rightPressed = false;
            } else if (e.keyCode == 37) {
                leftPressed = false;
            }
        }
        /*
                function mouseMoveHandler(e) {
                    var relativeX = e.clientX - canvas.offsetLeft;
                    if (relativeX > 0 && relativeX < canvas.width) {
                        paddleX = relativeX - paddleWidth / 2;
                    }
                }
        */
        function collisionDetection() {
            for (var i = 0; i < brickColumnCount; i++) {
                for (var j = 0; j < brickRowCount; j++) {
                    var crash = bricks[i][j];
                    if (crash.visible == 1) {
                        if (x > crash.x && x < crash.x + brickWidth && y > crash.y && y < crash.y + brickHeight) {
                            dy = -dy;
                            crash.visible = 0;
                            score += 10;
                            if (score == brickRowCount * brickColumnCount) {
                                ctx.beginPath();
                                ctx.font = '40px san-serif';
                                ctx.fillText('CONGRATULATIONS!', 240, 160);
                                ctx.font = '40px san-serif';
                                ctx.fillStyle = '#000000';
                                ctx.fillText('YOU WIN', 240, 260);
                                ctx.fill();
                                ctx.closePath();

                                //document.location.reload();
                            }
                        }
                    }
                }
            }
        }

        function drawScore() {
            scoreboard.innerHTML = score;
        }

        function drawEdge() {
            ctx.beginPath();
            ctx.rect(0, 0, canvas2.width, canvas2.height);
            ctx.fillStyle = "rgb(75, 177, 245)";
            ctx.fill();
            ctx.closePath();
        }

        function drawBall() {
            ctx.beginPath();
            ctx.arc(x, y, ballRadius, 0, Math.PI * 2, false);
            ctx.fillStyle = "black";
            ctx.fill();
            ctx.closePath();
        }

        function drawPaddle() {
            ctx.beginPath();
            ctx.rect(paddleX, canvas2.height - paddleHeight - 10, paddleWidth, paddleHeight);
            ctx.fillStyle = "white";
            ctx.fill();
            ctx.closePath();
        }

        function drawBricks() {
            for (var i = 0; i < brickColumnCount; i++) {
                for (var j = 0; j < brickRowCount; j++) {
                    if (bricks[i][j].visible == 1) {
                        var brickX = (j * (brickWidth + brickPadding)) + brickOffsetLeft;
                        var brickY = (i * (brickHeight + brickPadding)) + brickOffsetTop;
                        bricks[i][j].x = brickX;
                        bricks[i][j].y = brickY;
                        ctx.beginPath();
                        ctx.rect(brickX, brickY, brickWidth, brickHeight);
                        ctx.strokeStyle = "rgb(0, 0, 255)";
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
            }
        }

        function draw() {
            ctx.clearRect(2, 2, canvas2.width, canvas2.height);
            drawEdge();
            drawBricks();
            drawBall();
            drawPaddle();
            collisionDetection();
            drawScore();
            x += dx;
            y += dy;

            //move paddle
            if (rightPressed && paddleX < canvas2.width - paddleWidth) {
                paddleX += 7;
            } else if (leftPressed && paddleX > 0) {
                paddleX -= 7;
            }

            //move ball
            if (x + dx > canvas2.width - ballRadius || x + dx < ballRadius) {
                dx = -dx;
            }
            if (y + dy < ballRadius) {
                dy = -dy;
            } else if (y + dy > canvas2.height - ballRadius - 12) {
                if (x > paddleX && x < paddleX + paddleWidth) {
                    dy = -dy;
                } else {
                    ctx.beginPath();
                    ctx.font = '40px san-serif';
                    ctx.fillText('Game Over', 240, 160);
                    ctx.font = '20px san-serif';
                    ctx.fillStyle = '#000000';
                    ctx.fillText('To Play again Refresh the page or click the Restarts button', 100, 260);
                    ctx.fill();
                    ctx.closePath();
                    document.location.reload();
                }
            }
            tenis.game.status = setTimeout(function() { draw(); }, 10);
        }

        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);

        function pause(elem) {
            if (tenis.game.status) {
                clearTimeout(tenis.game.status);
                tenis.game.status = false;
                elem.value = 'Play';
            } else {
                draw();
                elem.value = 'Pause';
            }
        }

        function begin() {
            draw();
        }

        function restart() {
            location.reload();
        }

        function start() {
            ctx.fillStyle = 'rgb(75, 177, 245)';
            ctx.fillRect(0, 0, canvas2.width, canvas2.height);
            ctx.fillStyle = '#ffffff';
            ctx.font = '40px helvatica';
            ctx.fillText('Tenis JS', 250, 180);

        }

        return {
            pause: pause,
            restart: restart,
            start: start,
            begin: begin
        };
    })();
    tenis.game.start();
};