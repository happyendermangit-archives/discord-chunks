function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UID: function() {
            return l
        },
        uid: function() {
            return a
        },
        useUID: function() {
            return o
        }
    });
    var i = n("97613"),
        r = n.n(i),
        s = n("207561");
    let a = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
            return r()(e)
        },
        o = () => (0, s.useLazyValue)(() => a()),
        l = e => {
            let {
                children: t
            } = e;
            return t(o())
        }
}