function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("896644"),
        u = n("941504"),
        s = n("99547");

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    t.default = r.forwardRef(function(e, t) {
        var n, o = e.className,
            c = e.contentClassName,
            f = e.isUnread,
            d = e.children,
            _ = e.id,
            E = e.role,
            p = e["aria-label"];
        return r.createElement("div", {
            className: i()(o, (l(n = {}, s.divider, !0), l(n, s.isUnread, f), l(n, s.hasContent, null != d), n)),
            ref: t,
            id: _,
            role: E,
            "aria-label": p
        }, null != d ? r.createElement("span", {
            className: i()(s.content, c)
        }, d) : null, f ? r.createElement("span", {
            className: s.unreadPill
        }, r.createElement(a.default, {
            foreground: s.unreadPillCapStroke,
            className: s.unreadPillCap
        }), u.default.Messages.NEW) : null)
    })
}