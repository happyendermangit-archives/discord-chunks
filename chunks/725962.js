function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var l = n("37983"),
        i = n("884691"),
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
                target: m,
                mimeType: p,
                fileName: h,
                focusProps: E,
                onClick: g,
                ...C
            } = e, S = i.useMemo(() => a.designConfig.getDefaultLinkInterceptor(t), [t]), T = i.useCallback(e => {
                r.default.track(u.AnalyticEvents.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                    attachment_type: null == p ? void 0 : p[0],
                    attachment_subtype: null == p ? void 0 : p[1]
                }), null == g || g(), null == S || S(e)
            }, [S, p, g]);
            return null != h ? (0, l.jsx)(s.Anchor, {
                href: t,
                onClick: T,
                target: m,
                rel: f,
                className: n,
                "aria-label": d.default.Messages.DOWNLOAD,
                focusProps: E,
                ...C,
                children: h
            }) : (0, l.jsx)(s.Anchor, {
                href: t,
                onClick: T,
                target: m,
                rel: f,
                className: n,
                "aria-label": d.default.Messages.DOWNLOAD,
                focusProps: E,
                ...C,
                children: (0, l.jsx)(o.default, {
                    className: c
                })
            })
        }
}