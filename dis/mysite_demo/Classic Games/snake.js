var snake = {};
window.onload = function() {

    snake.game = (function() {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var status = false;
        var score = 0;
        var old_direction = 'right';
        var direction = 'right';
        var block = 10;
        var refresh_rate = 250;
        var pos = [
            [5, 1],
            [4, 1],
            [3, 1],
            [2, 1],
            [1, 1]
        ];
        var scoreboard = document.getElementById('scoreboard');
        var control = document.getElementById('controls');
        var keys = {
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down'
        };

        function adjust() {
            canvas.width = 650;
            canvas.height = 420;
        }

        var food = [Math.round(Math.random(2) * (canvas.width - 10)), Math.round(Math.random(2) * (canvas.height - 10)), ];

        function todraw() {
            for (var i = 0; i < pos.length; i++) {
                draw(pos[i]);
            }
        }

        function giveLife() {
            var nextPosition = pos[0].slice();
            switch (old_direction) {
                case 'right':
                    nextPosition[0] += 1;
                    break;
                case 'left':
                    nextPosition[0] -= 1;
                    break;
                case 'up':
                    nextPosition[1] -= 1;
                    break;
                case 'down':
                    nextPosition[1] += 1;
                    break;
            }
            pos.unshift(nextPosition);
            pos.pop();
        }

        function grow() {
            var nextPosition = pos[0].slice();
            switch (old_direction) {
                case 'right':
                    nextPosition[0] += 1;
                    break;
                case 'left':
                    nextPosition[0] -= 1;
                    break;
                case 'up':
                    nextPosition[1] -= 1;
                    break;
                case 'down':
                    nextPosition[1] += 1;
                    break;
            }
            pos.unshift(nextPosition);
        }

        function loop() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            todraw();
            giveLife();
            feed();
            if (is_catched(pos[0][0] * block, pos[0][1] * block, block, block, food[0], food[1], 10, 100)) {
                score += 10;
                createfood();
                scoreboard.innerHTML = score;
                grow();
                if (refresh_rate > 75) {
                    refresh_rate -= 25;
                }
            }
            snake.game.status = setTimeout(function() { loop(); }, refresh_rate);
        }
        window.onkeydown = function(event) {
            direction = keys[event.keyCode];
            if (direction) {
                setWay(direction);
                event.preventDefault();
            }
        };

        function setWay(direction) {
            var oppositeDirection = {
                left: 'right',
                right: 'left',
                up: 'down',
                down: 'up'
            };

            if (direction != oppositeDirection[old_direction]) {
                old_direction = direction;
            }
        }

        function feed() {
            ctx.beginPath();
            ctx.fillStyle = "#ff0000";
            ctx.fillRect(food[0], food[1], 10, 10);
            ctx.fill();
            ctx.closePath();
        }

        function createfood() {
            food = [Math.round(Math.random(4) * 620), Math.round(Math.random(4) * 380)];
        }

        function is_catched(ax, ay, awidth, aheight, bx, by, bwidth, bheight) {
            return !(
                ((ay + aheight) < (by)) ||
                (ay > (by + bheight)) ||
                ((ax + awidth) < bx) ||
                (ax > (bx + bwidth))
            );
        }

        function draw(pos) {
            var x = pos[0] * block;
            var y = pos[1] * block;
            if (x >= canvas.width || x <= 0 || y >= canvas.height || y <= 0) {
                document.getElementById('pause').disabled = 'true';
                snake.game.status = false;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.font = '40px san-serif';
                ctx.fillText('Game Over', 240, 160);
                ctx.font = '20px san-serif';
                ctx.fillStyle = '#000000';
                ctx.fillText('To Play again Refresh the page or click the Restarts button', 100, 260);
                throw ('Game Over');
            } else {
                ctx.beginPath();
                ctx.fillStyle = '#000000';
                ctx.fillRect(x, y, block, block);
                ctx.closePath();
            }
        }

        function pause(elem) {
            if (snake.game.status) {
                clearTimeout(snake.game.status);
                snake.game.status = false;
                elem.value = 'Play';
            } else {
                loop();
                elem.value = 'Pause';
            }
        }

        function begin() {
            loop();
        }

        function restart() {
            location.reload();
        }

        function start() {
            ctx.fillStyle = 'rgb(107, 153, 96)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#ffffff';
            ctx.font = '40px helvatica';
            ctx.fillText('Snake JS', 250, 180);

        }

        return {
            pause: pause,
            restart: restart,
            start: start,
            begin: begin,
            adjust: adjust,
        };
    })();
    snake.game.start();

};