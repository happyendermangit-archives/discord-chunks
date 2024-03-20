function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        uid: function() {
            return l
        },
        useUID: function() {
            return a
        },
        UID: function() {
            return o
        }
    });
    var i = n("995008"),
        r = n.n(i),
        s = n("775560");
    let l = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
            return r(e)
        },
        a = () => (0, s.useLazyValue)(() => l()),
        o = e => {
            let {
                children: t
            } = e;
            return t(a())
        }
}