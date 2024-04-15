function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("648414"),
        o = n("93879"),
        l = n("974029"),
        u = n("481479"),
        d = n("634648"),
        _ = n("630641"),
        c = n("908434"),
        E = n("308570"),
        I = n("632184"),
        T = n("170039"),
        f = n("934458"),
        S = n("227356"),
        A = n("689938"),
        h = n("785232");
    t.default = function(e) {
        let {
            iconType: t,
            children: n
        } = e, r = null;
        switch (t) {
            case "voice":
                r = (0, i.jsx)(I.default, {
                    className: h.icon,
                    "aria-label": A.default.Messages.VOICE_CHANNEL
                });
                break;
            case "voice-locked":
                r = (0, i.jsx)(_.default, {
                    className: h.icon,
                    "aria-label": A.default.Messages.VOICE_CHANNEL_LOCKED
                });
                break;
            case "stage":
                r = (0, i.jsx)(T.default, {
                    className: h.icon,
                    "aria-label": A.default.Messages.STAGE_CHANNEL
                });
                break;
            case "stage-locked":
                r = (0, i.jsx)(_.default, {
                    className: h.icon,
                    "aria-label": A.default.Messages.STAGE_CHANNEL_LOCKED
                });
                break;
            case "thread":
                r = (0, i.jsx)(f.default, {
                    className: h.icon,
                    "aria-label": A.default.Messages.THREAD
                });
                break;
            case "text":
                r = (0, i.jsx)(o.default, {
                    className: h.icon,
                    "aria-label": A.default.Messages.CHANNEL
                });
                break;
            case "forum":
                r = (0, i.jsx)(u.default, {
                    className: h.icon,
                    "aria-label": A.default.Messages.FORUM_CHANNEL
                });
                break;
            case "post":
                r = (0, i.jsx)(d.default, {
                    className: h.icon,
                    "aria-label": A.default.Messages.FORUM_POST
                });
                break;
            case "home":
            case "guide":
                r = (0, i.jsx)(E.default, {
                    className: h.icon,
                    "aria-label": A.default.Messages.SERVER_GUIDE
                });
                break;
            case "browse":
            case "customize":
                r = (0, i.jsx)(a.default, {
                    className: h.icon,
                    "aria-label": A.default.Messages.CHANNEL_BROWSER_TITLE
                });
                break;
            case "message":
                r = (0, i.jsx)(l.default, {
                    className: h.icon,
                    "aria-label": A.default.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION
                });
                break;
            case "locked":
                r = (0, i.jsx)(_.default, {
                    className: h.icon,
                    "aria-label": A.default.Messages.NO_ACCESS
                });
                break;
            case "media":
                r = (0, i.jsx)(c.default, {
                    className: h.icon,
                    "aria-label": A.default.Messages.MEDIA_CHANNEL
                })
        }
        return (0, i.jsxs)("span", {
            className: s()("channelWithIcon", {
                [h.iconMentionText]: "text" === t
            }),
            children: [(0, i.jsx)(S.default, {
                children: r
            }), null != n && "" !== n ? (0, i.jsx)("span", {
                className: h.name,
                children: n
            }) : null]
        })
    }
}