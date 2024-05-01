function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("512722"),
        a = n.n(r),
        s = n("442837"),
        o = n("594174"),
        l = n("447452"),
        u = n("788197"),
        d = n("969835");

    function _(e) {
        let {
            location: t,
            userId: n,
            user: r,
            ..._
        } = e, {
            basicsEnabled: c
        } = (0, l.useSimplifiedProfileExperiment)({
            location: t
        }), E = (0, s.useStateFromStores)([o.default], () => o.default.getUser(n), [n]), I = null != r ? r : E;
        return (a()(null != I, "Unexpected missing user"), !c || I.bot || I.isNonUserBot() || I.isClyde()) ? (0, i.jsx)(u.default, {
            ..._,
            user: I
        }) : (0, i.jsx)(d.default, {
            ..._,
            user: I
        })
    }
}