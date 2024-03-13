function(e, t, n) {
    n("781738");
    var r = n("711057"),
        i = n("72840"),
        o = n("987131"),
        s = RegExp("['’]", "g");
    e.exports = function(e) {
        return function(t) {
            return r(o(i(t).replace(s, "")), e, "")
        }
    }
}