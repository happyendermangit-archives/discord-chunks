function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("143435"),
        s = n("77078"),
        r = n("599110"),
        o = n("195812"),
        u = n("49111"),
        d = n("782340"),
        c = e => {
            let {
                href: t,
                className: n,
                iconClassName: c,
                rel: f,
                target: p,
                mimeType: m,
                fileName: h,
                focusProps: x,
                onClick: E,
                ...y
            } = e, g = l.useMemo(() => a.designConfig.getDefaultLinkInterceptor(t), [t]), S = l.useCallback(e => {
                r.default.track(u.AnalyticEvents.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                    attachment_type: null == m ? void 0 : m[0],
                    attachment_subtype: null == m ? void 0 : m[1]
                }), null == E || E(), null == g || g(e)
            }, [g, m, E]);
            return null != h ? (0, i.jsx)(s.Anchor, {
                href: t,
                onClick: S,
                target: p,
                rel: f,
                className: n,
                "aria-label": d.default.Messages.DOWNLOAD,
                focusProps: x,
                ...y,
                children: h
            }) : (0, i.jsx)(s.Anchor, {
                href: t,
                onClick: S,
                target: p,
                rel: f,
                className: n,
                "aria-label": d.default.Messages.DOWNLOAD,
                focusProps: x,
                ...y,
                children: (0, i.jsx)(o.default, {
                    className: c
                })
            })
        }
}