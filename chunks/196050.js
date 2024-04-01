function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("335854"),
        a = n("481060"),
        o = n("626135"),
        l = n("943461"),
        u = n("981631"),
        d = n("689938");
    t.default = e => {
        let {
            href: t,
            className: n,
            iconClassName: _,
            rel: c,
            target: E,
            mimeType: I,
            fileName: T,
            focusProps: f,
            onClick: S,
            ...A
        } = e, h = r.useMemo(() => s.designConfig.getDefaultLinkInterceptor(t), [t]), m = r.useCallback(e => {
            o.default.track(u.AnalyticEvents.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                attachment_type: null == I ? void 0 : I[0],
                attachment_subtype: null == I ? void 0 : I[1]
            }), null == S || S(), null == h || h(e)
        }, [h, I, S]);
        return null != T ? (0, i.jsx)(a.Anchor, {
            href: t,
            onClick: m,
            target: E,
            rel: c,
            className: n,
            "aria-label": d.default.Messages.DOWNLOAD,
            focusProps: f,
            ...A,
            children: T
        }) : (0, i.jsx)(a.Anchor, {
            href: t,
            onClick: m,
            target: E,
            rel: c,
            className: n,
            "aria-label": d.default.Messages.DOWNLOAD,
            focusProps: f,
            ...A,
            children: (0, i.jsx)(l.default, {
                className: _
            })
        })
    }
}