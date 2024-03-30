function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("207561"),
        o = n("170030"),
        i = n("176522");

    function a(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
            n = arguments.length > 2 ? arguments[2] : void 0,
            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            u = (0, o.diffAsUnits)(Date.now(), e),
            s = (0, r.useForceUpdate)();
        return (0, i.default)(function() {
            !(0 === u.days && 0 === u.hours && 0 === u.minutes && 0 === u.seconds) && !a && (s(), null == n || n())
        }, a ? null : t), u
    }
}