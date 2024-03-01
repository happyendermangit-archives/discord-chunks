function(t, r, n) {
    "use strict";
    var e = n("406219"),
        o = Function.prototype,
        i = o.call,
        u = e && o.bind.bind(i, i);
    t.exports = e ? u : function(t) {
        return function() {
            return i.apply(t, arguments)
        }
    }
}