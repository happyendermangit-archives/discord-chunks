function(e, t, n) {
    n("70102");
    var r = 1073741823;
    e.exports = function(e, t) {
        if ("number" != typeof e) throw TypeError("Iterations not a number");
        if (e < 0) throw TypeError("Bad iterations");
        if ("number" != typeof t) throw TypeError("Key length not a number");
        if (t < 0 || t > r || t != t) throw TypeError("Bad key length")
    }
}