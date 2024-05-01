function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        a = n("302454"),
        s = n.n(a),
        o = n("481060"),
        l = n("100527"),
        u = n("906732"),
        d = n("49012");
    t.default = r.memo(function(e) {
        let {
            onClick: t,
            trusted: n,
            title: a,
            href: _,
            children: c,
            messageId: E,
            channelId: I,
            ...T
        } = e, {
            analyticsLocations: f
        } = (0, u.default)(l.default.MASKED_LINK), S = r.useCallback(t => (0, d.handleClick)(e, t, f), [f, e]), h = r.useCallback(e => {
            1 === e.button && S(e)
        }, [S]), A = s().sanitizeUrl(_);
        return (0, i.jsx)(o.Anchor, {
            ...T,
            title: a,
            target: "_blank",
            rel: "noreferrer noopener",
            href: A,
            onClick: S,
            onAuxClick: h,
            children: null != c ? c : a
        })
    })
}