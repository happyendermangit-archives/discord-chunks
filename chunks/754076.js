function(e, t, n) {
    var r = n("27556"),
        i = 1 / 0;
    e.exports = function(e) {
        if ("string" == typeof e || r(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -i ? "-0" : t
    }
}