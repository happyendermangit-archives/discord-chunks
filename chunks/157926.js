function(e, t, n) {
    var r = n("779518"),
        i = n("474401"),
        a = n("759248"),
        o = n("320249"),
        s = n("584428"),
        u = n("85357"),
        c = n("278757");
    e.exports = function(e, t) {
        return o(e) && s(t) ? u(c(e), t) : function(n) {
            var o = i(n, e);
            return void 0 === o && o === t ? a(n, e) : r(t, o, 3)
        }
    }
}