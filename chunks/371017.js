function(e, t, n) {
    var r = n("605905"),
        i = n("779882"),
        a = n("580495"),
        o = RegExp("['’]", "g");
    e.exports = function(e) {
        return function(t) {
            return r(a(i(t).replace(o, "")), e, "")
        }
    }
}