function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        drainClickstream: function() {
            return o
        },
        trackClickstream: function() {
            return a
        }
    }), n("47120"), n("653041");
    var i = n("626135"),
        r = n("435749");
    let s = new Map;

    function a(e, t) {
        var i;
        !s.has(e) && s.set(e, []);
        let {
            default: r
        } = n("15379");
        null === (i = s.get(e)) || void 0 === i || i.push(r(e, t))
    }

    function o() {
        if (!(0, r.clickstreamExperimentEnabled)()) {
            s.clear();
            return
        }
        let {
            default: e
        } = n("672513");
        for (let [t, n] of s) i.default.track(t, e(t, n));
        s.clear()
    }
}