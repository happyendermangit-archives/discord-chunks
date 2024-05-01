function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        s = n("928518"),
        a = n("451478"),
        o = n("710290"),
        l = n("371282"),
        u = n("228488"),
        d = n("871499"),
        _ = n("689938");
    t.default = r.default.connectStores([a.default, s.default], e => {
        let {
            node: t,
            guestWindow: n
        } = e;
        return {
            enabled: (0, u.isFullScreen)(t, null == n ? void 0 : n.document)
        }
    })(function(e) {
        let {
            enabled: t,
            ...n
        } = e, r = t ? _.default.Messages.EXIT_FULL_SCREEN : _.default.Messages.FULL_SCREEN, s = t ? l.default : o.default;
        return (0, i.jsx)(d.default, {
            label: r,
            iconComponent: s,
            ...n
        })
    })
}