function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("207561"),
        r = n("55935"),
        s = n("745735");

    function a(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
            n = arguments.length > 2 ? arguments[2] : void 0,
            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o = (0, r.diffAsUnits)(Date.now(), e),
            l = (0, i.useForceUpdate)();
        return (0, s.default)(() => {
            !(0 === o.days && 0 === o.hours && 0 === o.minutes && 0 === o.seconds) && !a && (l(), null == n || n())
        }, a ? null : t), o
    }
}