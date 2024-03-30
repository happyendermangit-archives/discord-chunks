function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var r = n("470079"),
        o = n("364612"),
        i = n("798481"),
        a = n("884876"),
        u = n("706118"),
        s = n("254093"),
        l = n("823208");

    function c(e) {
        return {
            react: function(t, n, c) {
                if (e.enableBuildOverrides && (0, a.isBuildOverrideLink)(t.target)) return r.createElement(r.Fragment, {
                    key: c.key
                }, r.createElement(u.default, {
                    url: t.target,
                    key: t.target
                }));
                var f = n(t.content, c),
                    d = "string" == typeof t.title && 0 !== t.title.length ? t.title : (0, o.astToString)(t.content),
                    _ = (null == e ? void 0 : e.mustConfirmExternalLink) ? function(e) {
                        return null == e || e.stopPropagation(), null == e || e.preventDefault(), (0, s.handleClick)({
                            href: t.target,
                            shouldConfirm: !0,
                            messageId: c.messageId,
                            channelId: c.channelId
                        }), null
                    } : void 0;
                if (c.previewLinkTarget && !(0, l.isLinkTrusted)(t)) {
                    var E = "\n\n(".concat(t.target, ")");
                    d.length + E.length > 1024 && (E = "..." + E, d = (d = d.substr(0, 1024 - E.length)).trimEnd()), d += E
                }
                return c.noStyleAndInteraction ? r.createElement("span", {
                    key: c.key,
                    title: d
                }, f) : r.createElement(i.default, {
                    key: c.key,
                    title: d,
                    href: t.target,
                    trusted: function() {
                        return (0, l.isLinkTrusted)(t)
                    },
                    onClick: _,
                    messageId: c.messageId,
                    channelId: c.channelId
                }, f)
            }
        }
    }
}