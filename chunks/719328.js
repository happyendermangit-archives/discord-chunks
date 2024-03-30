function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UID: function() {
            return s
        },
        uid: function() {
            return a
        },
        useUID: function() {
            return u
        }
    });
    var r = n("97613"),
        o = n.n(r),
        i = n("207561"),
        a = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
            return o()(e)
        },
        u = function() {
            return (0, i.useLazyValue)(function() {
                return a()
            })
        },
        s = function(e) {
            return (0, e.children)(u())
        }
}