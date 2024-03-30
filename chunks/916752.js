function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("47120");
    var i = n("470079"),
        r = n("913527"),
        s = n.n(r),
        a = n("207561"),
        o = n("70956"),
        l = n("660199");
    let u = [
            [2 * o.default.Seconds.MINUTE, o.default.Seconds.SECOND],
            [5 * o.default.Seconds.MINUTE, o.default.Seconds.MINUTE],
            [45 * o.default.Seconds.MINUTE, 2 * o.default.Seconds.MINUTE],
            [21 * o.default.Seconds.HOUR, 5 * o.default.Seconds.MINUTE]
        ],
        d = 2 * o.default.Seconds.HOUR;

    function _(e) {
        let t = (0, a.useForceUpdate)();
        return (i.useEffect(() => {
            if ("R" !== e.format) return;
            let n = 1e3 * d,
                i = Math.abs(e.parsed.diff(s()()));
            for (let [e, t] of u)
                if (i < 1e3 * e) {
                    n = 1e3 * t;
                    break
                } let r = setInterval(() => {
                t()
            }, n);
            return () => clearInterval(r)
        }, [t, e.format, e.parsed]), "R" === e.format) ? l.TIMESTAMP_FORMATS.R(e.parsed) : e.formatted
    }
}