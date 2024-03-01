function(t, r, n) {
    "use strict";
    var e = n("406219"),
        i = Function.prototype,
        u = i.apply,
        o = i.call;
    t.exports = "object" == typeof Reflect && Reflect.apply || (e ? o.bind(u) : function() {
        return o.apply(u, arguments)
    })
}