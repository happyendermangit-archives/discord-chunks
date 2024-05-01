function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("25209"),
        s = n("794295"),
        o = n("865427"),
        l = n("853425"),
        u = n("49012"),
        d = n("773352");

    function _(e) {
        return {
            react(t, n, _) {
                if (e.enableBuildOverrides && (0, o.isBuildOverrideLink)(t.target)) return (0, i.jsx)(r.Fragment, {
                    children: (0, i.jsx)(l.default, {
                        url: t.target
                    }, t.target)
                }, _.key);
                let c = n(t.content, _),
                    E = "string" == typeof t.title && 0 !== t.title.length ? t.title : (0, a.astToString)(t.content),
                    I = (null == e ? void 0 : e.mustConfirmExternalLink) ? e => (null == e || e.stopPropagation(), null == e || e.preventDefault(), (0, u.handleClick)({
                        href: t.target,
                        shouldConfirm: !0,
                        messageId: _.messageId,
                        channelId: _.channelId
                    }), null) : void 0;
                if (_.previewLinkTarget && !(0, d.isLinkTrusted)(t)) {
                    let e = "\n\n(".concat(t.target, ")");
                    E.length + e.length > 1024 && (e = "..." + e, E = (E = E.substr(0, 1024 - e.length)).trimEnd()), E += e
                }
                return _.noStyleAndInteraction ? (0, i.jsx)("span", {
                    title: E,
                    children: c
                }, _.key) : (0, i.jsx)(s.default, {
                    title: E,
                    href: t.target,
                    trusted: () => (0, d.isLinkTrusted)(t),
                    onClick: I,
                    messageId: _.messageId,
                    channelId: _.channelId,
                    children: c
                }, _.key)
            }
        }
    }
}