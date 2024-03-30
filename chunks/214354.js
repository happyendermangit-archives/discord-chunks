function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("79362"),
        u = n("258674"),
        s = n("2566"),
        l = n("259931"),
        c = n("33010"),
        f = n("725292"),
        d = n("458872"),
        _ = n("758099"),
        E = n("893427"),
        p = n("417863"),
        m = n("777817"),
        y = n("938414"),
        I = n("941504"),
        h = n("785232");
    t.default = function(e) {
        var t, n, o, O = e.iconType,
            T = e.children,
            S = null;
        switch (O) {
            case "voice":
                S = r.createElement(E.default, {
                    className: h.icon,
                    "aria-label": I.default.Messages.VOICE_CHANNEL
                });
                break;
            case "voice-locked":
                S = r.createElement(f.default, {
                    className: h.icon,
                    "aria-label": I.default.Messages.VOICE_CHANNEL_LOCKED
                });
                break;
            case "stage":
                S = r.createElement(p.default, {
                    className: h.icon,
                    "aria-label": I.default.Messages.STAGE_CHANNEL
                });
                break;
            case "stage-locked":
                S = r.createElement(f.default, {
                    className: h.icon,
                    "aria-label": I.default.Messages.STAGE_CHANNEL_LOCKED
                });
                break;
            case "thread":
                S = r.createElement(m.default, {
                    className: h.icon,
                    "aria-label": I.default.Messages.THREAD
                });
                break;
            case "text":
                S = r.createElement(u.default, {
                    className: h.icon,
                    "aria-label": I.default.Messages.CHANNEL
                });
                break;
            case "forum":
                S = r.createElement(l.default, {
                    className: h.icon,
                    "aria-label": I.default.Messages.FORUM_CHANNEL
                });
                break;
            case "post":
                S = r.createElement(c.default, {
                    className: h.icon,
                    "aria-label": I.default.Messages.FORUM_POST
                });
                break;
            case "home":
            case "guide":
                S = r.createElement(_.default, {
                    className: h.icon,
                    "aria-label": I.default.Messages.SERVER_GUIDE
                });
                break;
            case "browse":
            case "customize":
                S = r.createElement(a.default, {
                    className: h.icon,
                    "aria-label": I.default.Messages.CHANNEL_BROWSER_TITLE
                });
                break;
            case "message":
                S = r.createElement(s.default, {
                    className: h.icon,
                    "aria-label": I.default.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION
                });
                break;
            case "locked":
                S = r.createElement(f.default, {
                    className: h.icon,
                    "aria-label": I.default.Messages.NO_ACCESS
                });
                break;
            case "media":
                S = r.createElement(d.default, {
                    className: h.icon,
                    "aria-label": I.default.Messages.MEDIA_CHANNEL
                })
        }
        return r.createElement("span", {
            className: i()("channelWithIcon", (t = {}, n = h.iconMentionText, o = "text" === O, n in t ? Object.defineProperty(t, n, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = o, t))
        }, r.createElement(y.default, null, S), null != T && "" !== T ? r.createElement("span", {
            className: h.name
        }, T) : null)
    }
}