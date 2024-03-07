function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
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
        E = n("959097"),
        g = n("328413"),
        S = n("782340"),
        C = n("263218"),
        T = function(e) {
            let {
                iconType: t,
                children: n
            } = e, i = null;
            switch (t) {
                case "voice":
                    i = (0, l.jsx)(p.default, {
                        className: C.icon,
                        "aria-label": S.default.Messages.VOICE_CHANNEL
                    });
                    break;
                case "voice-locked":
                    i = (0, l.jsx)(c.default, {
                        className: C.icon,
                        "aria-label": S.default.Messages.VOICE_CHANNEL_LOCKED
                    });
                    break;
                case "stage":
                    i = (0, l.jsx)(h.default, {
                        className: C.icon,
                        "aria-label": S.default.Messages.STAGE_CHANNEL
                    });
                    break;
                case "stage-locked":
                    i = (0, l.jsx)(c.default, {
                        className: C.icon,
                        "aria-label": S.default.Messages.STAGE_CHANNEL_LOCKED
                    });
                    break;
                case "thread":
                    i = (0, l.jsx)(E.default, {
                        className: C.icon,
                        "aria-label": S.default.Messages.THREAD
                    });
                    break;
                case "text":
                    i = (0, l.jsx)(r.default, {
                        className: C.icon,
                        "aria-label": S.default.Messages.CHANNEL
                    });
                    break;
                case "forum":
                    i = (0, l.jsx)(u.default, {
                        className: C.icon,
                        "aria-label": S.default.Messages.FORUM_CHANNEL
                    });
                    break;
                case "post":
                    i = (0, l.jsx)(d.default, {
                        className: C.icon,
                        "aria-label": S.default.Messages.FORUM_POST
                    });
                    break;
                case "home":
                case "guide":
                    i = (0, l.jsx)(m.default, {
                        className: C.icon,
                        "aria-label": S.default.Messages.SERVER_GUIDE
                    });
                    break;
                case "browse":
                case "customize":
                    i = (0, l.jsx)(s.default, {
                        className: C.icon,
                        "aria-label": S.default.Messages.CHANNEL_BROWSER_TITLE
                    });
                    break;
                case "message":
                    i = (0, l.jsx)(o.default, {
                        className: C.icon,
                        "aria-label": S.default.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION
                    });
                    break;
                case "locked":
                    i = (0, l.jsx)(c.default, {
                        className: C.icon,
                        "aria-label": S.default.Messages.NO_ACCESS
                    });
                    break;
                case "media":
                    i = (0, l.jsx)(f.default, {
                        className: C.icon,
                        "aria-label": S.default.Messages.MEDIA_CHANNEL
                    })
            }
            return (0, l.jsxs)("span", {
                className: a("channelWithIcon", {
                    [C.iconMentionText]: "text" === t
                }),
                children: [(0, l.jsx)(g.default, {
                    children: i
                }), null != n && "" !== n ? (0, l.jsx)("span", {
                    className: C.name,
                    children: n
                }) : null]
            })
        }
}