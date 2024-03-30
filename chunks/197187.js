function(t, e, n) {
    "use strict";
    var r = n("962557"),
        i = Function.prototype,
        a = i.apply,
        o = i.call;
    t.exports = "object" == typeof Reflect && Reflect.apply || (r ? o.bind(a) : function() {
        return o.apply(a, arguments)
    })
}