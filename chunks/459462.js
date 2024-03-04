function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Anchor: function() {
            return _
        }
    }), n("70102");
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("247716"),
        l = n("227645"),
        u = n("718776"),
        d = n("143435"),
        c = n("315733"),
        f = n("744777");

    function _(e) {
        let {
            href: t,
            onClick: n,
            className: r,
            children: _,
            rel: h,
            target: E,
            useDefaultUnderlineStyles: g = !0,
            title: m,
            style: p,
            focusProps: S,
            ...v
        } = e;
        null != t && null == n && (n = d.designConfig.getDefaultLinkInterceptor(t));
        let T = s.useContext(o.BlockInteractionsContext),
            I = {
                className: a(f.anchor, {
                    [f.anchorUnderlineOnHover]: g
                }, r),
                href: t,
                onClick: n,
                rel: null != h ? h : void 0,
                target: null != E ? E : void 0,
                title: null != m ? m : void 0,
                style: null != p ? p : void 0
            };
        return (null != t && !(0, c.isSafeRedirect)(t) && (I.rel = "noreferrer noopener", I.target = "_blank"), T && delete I.href, null != n) ? (0, i.jsx)(l.Clickable, {
            tag: "a",
            ...v,
            ...I,
            onClick: n,
            focusProps: S,
            children: _
        }) : (0, i.jsx)(u.FocusRing, {
            ...S,
            children: (0, i.jsx)("a", {
                ...v,
                ...I,
                children: _
            })
        })
    }
}