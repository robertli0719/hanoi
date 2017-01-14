document.write('<canvas id="c" width="900" height="240"></canvas>')
var X = document.getElementById("c").getContext("2d");
function f(s, a, b, c, d) {
    X.fillStyle = s;
    X.fillRect(a, b, c, d);
}

var d = { a: [9, 8, 7, 6, 5, 4, 3, 2, 1], b: [], c: [] }
function D(c, p) {
    f("#0F0", c - 3, 20, 6, 200);
    for (var i = 0; i < d[p].length; i++) {
        var w = d[p][i] * 30, h = 20
        var x = c - w / 2, y = (10 - i) * h
        var g = X.createLinearGradient(x, y, x + w, y + h);
        g.addColorStop(0, "#F00");
        g.addColorStop(1, "#FFF");
        f(g, x, y, w, h)
    }
}

function s() {
    f("#000", 0, 0, 1000, 500);
    D(150, 'a');
    D(450, 'b');
    D(750, 'c');
}

var ai = []
function m(a, t) {
    ai.push(function () {
        d[t].push(d[a].pop());
        s();
    })
}

function M(n, a, b, c) {
    if (n == 1) {
        m(a, c)
        return;
    }
    M(n - 1, a, c, b);
    m(a, c);
    M(n - 1, b, a, c);
}

M(9, "a", "b", "c")

function r() {
    if (ai.length) {
        ai.shift()();
        setTimeout(r, 1000)
    }
}
s();
setTimeout(r, 1000)