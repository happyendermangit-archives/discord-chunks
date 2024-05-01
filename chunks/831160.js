function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        resolveThunk: function() {
            return s
        }
    });
    var i = n("392711"),
        r = n.n(i);
    let s = e => "function" == typeof e ? e() : e;
    r().curry((e, t, n) => s(t) ? e(n) : n({}))
}