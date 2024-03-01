function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return c
        }
    });
    var n = r("37983"),
        l = r("884691"),
        i = r("933805"),
        a = r("340616"),
        s = r("355025"),
        u = r("198700"),
        d = r("128259"),
        o = r("758926");

    function c(e) {
        return {
            react(t, r, c) {
                if (e.enableBuildOverrides && (0, s.isBuildOverrideLink)(t.target)) return (0, n.jsx)(l.Fragment, {
                    children: (0, n.jsx)(u.default, {
                        url: t.target
                    }, t.target)
                }, c.key);
                let f = r(t.content, c),
                    v = "string" == typeof t.title && 0 !== t.title.length ? t.title : (0, i.astToString)(t.content),
                    g = (null == e ? void 0 : e.mustConfirmExternalLink) ? e => (null == e || e.stopPropagation(), null == e || e.preventDefault(), (0, d.handleClick)({
                        href: t.target,
                        shouldConfirm: !0,
                        messageId: c.messageId,
                        channelId: c.channelId
                    }), null) : void 0;
                if (c.previewLinkTarget && !(0, o.isLinkTrusted)(t)) {
                    let e = "\n\n(".concat(t.target, ")"),
                        r = v.length + e.length;
                    r > 1024 && (e = "..." + e, v = (v = v.substr(0, 1024 - e.length)).trimEnd()), v += e
                }
                return c.noStyleAndInteraction ? (0, n.jsx)("span", {
                    title: v,
                    children: f
                }, c.key) : (0, n.jsx)(a.default, {
                    title: v,
                    href: t.target,
                    trusted: () => (0, o.isLinkTrusted)(t),
                    onClick: g,
                    messageId: c.messageId,
                    channelId: c.channelId,
                    children: f
                }, c.key)
            }
        }
    }
}