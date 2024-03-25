function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        trackClickstream: function() {
            return a
        },
        drainClickstream: function() {
            return o
        }
    }), n("222007"), n("424973");
    var i = n("599110"),
        s = n("407708");
    let r = new Map;

    function a(e, t) {
        var i;
        !r.has(e) && r.set(e, []);
        let {
            default: s
        } = n("862947");
        null === (i = r.get(e)) || void 0 === i || i.push(s(e, t))
    }

    function o() {
        let e = (0, s.clickstreamExperimentEnabled)();
        if (!e) {
            r.clear();
            return
        }
        let {
            default: t
        } = n("403040");
        for (let [e, n] of r) i.default.track(e, t(e, n));
        r.clear()
    }
}