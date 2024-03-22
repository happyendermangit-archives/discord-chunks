function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("775560"),
        i = n("888400"),
        a = n("149638");

    function l(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
            n = arguments.length > 2 ? arguments[2] : void 0,
            l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            s = (0, i.diffAsUnits)(Date.now(), e),
            o = (0, r.useForceUpdate)();
        return (0, a.default)(() => {
            let e = 0 === s.days && 0 === s.hours && 0 === s.minutes && 0 === s.seconds;
            !e && !l && (o(), null == n || n())
        }, l ? null : t), s
    }
}