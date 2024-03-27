function(t, r, n) {
    "use strict";
    var e = n("147018"),
        o = n("161581"),
        i = n("4340"),
        u = n("325008"),
        f = TypeError,
        c = Object.defineProperty,
        a = o.self !== o;
    try {
        if (u) {
            var s = Object.getOwnPropertyDescriptor(o, "self");
            (a || !s || !s.get || !s.enumerable) && i(o, "self", {
                get: function() {
                    return o
                },
                set: function(t) {
                    if (this !== o) throw f("Illegal invocation");
                    c(o, "self", {
                        value: t,
                        writable: !0,
                        configurable: !0,
                        enumerable: !0
                    })
                },
                configurable: !0,
                enumerable: !0
            })
        } else e({
            global: !0,
            simple: !0,
            forced: a
        }, {
            self: o
        })
    } catch (t) {}
}