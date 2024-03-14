function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        trackClickstream: function() {
            return l
        },
        drainClickstream: function() {
            return u
        }
    }), n("222007"), n("424973");
    var i = n("599110"),
        s = n("407708"),
        r = n("403040"),
        a = n("862947");
    let o = new Map;

    function l(e, t) {
        var n;
        !o.has(e) && o.set(e, []), null === (n = o.get(e)) || void 0 === n || n.push((0, a.default)(e, t))
    }

    function u() {
        let e = (0, s.clickstreamExperimentEnabled)();
        if (!e) {
            o.clear();
            return
        }
        for (let [e, t] of o) i.default.track(e, (0, r.default)(e, t));
        o.clear()
    }
}