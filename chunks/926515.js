function(t, r, n) {
    "use strict";
    var e = n("962557"),
        o = Function.prototype.call;
    t.exports = e ? o.bind(o) : function() {
        return o.apply(o, arguments)
    }
}