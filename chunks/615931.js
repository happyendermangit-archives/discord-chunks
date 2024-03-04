function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        resolveThunk: function() {
            return r
        }
    });
    var i = n("917351"),
        s = n.n(i);
    let r = e => "function" == typeof e ? e() : e;
    s.curry((e, t, n) => r(t) ? e(n) : n({}))
}