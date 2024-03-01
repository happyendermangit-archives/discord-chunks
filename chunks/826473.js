function(t, e, s) {
    t.exports = function(t, e, s) {
        for (var r = s - 1, i = t.length; ++r < i;)
            if (t[r] === e) return r;
        return -1
    }
}