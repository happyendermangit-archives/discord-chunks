function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Anchor: function() {
            return E
        }
    }), n("411104");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("532712"),
        l = n("1561"),
        u = n("84735"),
        d = n("335854"),
        _ = n("645499"),
        c = n("996176");

    function E(e) {
        let {
            href: t,
            onClick: n,
            className: s,
            children: E,
            rel: I,
            target: T,
            useDefaultUnderlineStyles: f = !0,
            title: S,
            style: A,
            focusProps: h,
            ...m
        } = e;
        null != t && null == n && (n = d.designConfig.getDefaultLinkInterceptor(t));
        let N = r.useContext(o.BlockInteractionsContext),
            O = {
                className: a()(c.anchor, {
                    [c.anchorUnderlineOnHover]: f
                }, s),
                href: t,
                onClick: n,
                rel: null != I ? I : void 0,
                target: null != T ? T : void 0,
                title: null != S ? S : void 0,
                style: null != A ? A : void 0
            };
        return (null != t && !(0, _.isSafeRedirect)(t) && (O.rel = "noreferrer noopener", O.target = "_blank"), N && delete O.href, null != n) ? (0, i.jsx)(l.Clickable, {
            tag: "a",
            ...m,
            ...O,
            onClick: n,
            focusProps: h,
            children: E
        }) : (0, i.jsx)(u.FocusRing, {
            ...h,
            children: (0, i.jsx)("a", {
                ...m,
                ...O,
                children: E
            })
        })
    }
}