function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return c
        }
    });
    var n = r("37983"),
        l = r("884691"),
        i = r("404828"),
        a = r.n(i),
        s = r("77078"),
        u = r("812204"),
        d = r("685665"),
        o = r("128259"),
        c = l.memo(function(e) {
            let {
                onClick: t,
                trusted: r,
                title: i,
                href: c,
                children: f,
                messageId: v,
                channelId: g,
                ...h
            } = e, {
                analyticsLocations: E
            } = (0, d.default)(u.default.MASKED_LINK), C = l.useCallback(t => (0, o.handleClick)(e, t, E), [E, e]), I = l.useCallback(e => {
                1 === e.button && C(e)
            }, [C]), R = a.sanitizeUrl(c);
            return (0, n.jsx)(s.Anchor, {
                ...h,
                title: i,
                target: "_blank",
                rel: "noreferrer noopener",
                href: R,
                onClick: C,
                onAuxClick: I,
                children: null != f ? f : i
            })
        })
}