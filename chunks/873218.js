function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("446685"),
        r = n("593195"),
        o = n("109264"),
        u = n("991497"),
        d = n("660074"),
        c = n("45029"),
        f = n("990745"),
        m = n("620193"),
        p = n("368121"),
        h = n("228427"),
        x = n("959097"),
        E = n("328413"),
        y = n("782340"),
        g = n("263218"),
        S = function(e) {
            let {
                iconType: t,
                children: n
            } = e, l = null;
            switch (t) {
                case "voice":
                    l = (0, i.jsx)(p.default, {
                        className: g.icon,
                        "aria-label": y.default.Messages.VOICE_CHANNEL
                    });
                    break;
                case "voice-locked":
                    l = (0, i.jsx)(c.default, {
                        className: g.icon,
                        "aria-label": y.default.Messages.VOICE_CHANNEL_LOCKED
                    });
                    break;
                case "stage":
                    l = (0, i.jsx)(h.default, {
                        className: g.icon,
                        "aria-label": y.default.Messages.STAGE_CHANNEL
                    });
                    break;
                case "stage-locked":
                    l = (0, i.jsx)(c.default, {
                        className: g.icon,
                        "aria-label": y.default.Messages.STAGE_CHANNEL_LOCKED
                    });
                    break;
                case "thread":
                    l = (0, i.jsx)(x.default, {
                        className: g.icon,
                        "aria-label": y.default.Messages.THREAD
                    });
                    break;
                case "text":
                    l = (0, i.jsx)(r.default, {
                        className: g.icon,
                        "aria-label": y.default.Messages.CHANNEL
                    });
                    break;
                case "forum":
                    l = (0, i.jsx)(u.default, {
                        className: g.icon,
                        "aria-label": y.default.Messages.FORUM_CHANNEL
                    });
                    break;
                case "post":
                    l = (0, i.jsx)(d.default, {
                        className: g.icon,
                        "aria-label": y.default.Messages.FORUM_POST
                    });
                    break;
                case "home":
                case "guide":
                    l = (0, i.jsx)(m.default, {
                        className: g.icon,
                        "aria-label": y.default.Messages.SERVER_GUIDE
                    });
                    break;
                case "browse":
                case "customize":
                    l = (0, i.jsx)(s.default, {
                        className: g.icon,
                        "aria-label": y.default.Messages.CHANNEL_BROWSER_TITLE
                    });
                    break;
                case "message":
                    l = (0, i.jsx)(o.default, {
                        className: g.icon,
                        "aria-label": y.default.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION
                    });
                    break;
                case "locked":
                    l = (0, i.jsx)(c.default, {
                        className: g.icon,
                        "aria-label": y.default.Messages.NO_ACCESS
                    });
                    break;
                case "media":
                    l = (0, i.jsx)(f.default, {
                        className: g.icon,
                        "aria-label": y.default.Messages.MEDIA_CHANNEL
                    })
            }
            return (0, i.jsxs)("span", {
                className: a("channelWithIcon", {
                    [g.iconMentionText]: "text" === t
                }),
                children: [(0, i.jsx)(E.default, {
                    children: l
                }), null != n && "" !== n ? (0, i.jsx)("span", {
                    className: g.name,
                    children: n
                }) : null]
            })
        }
}