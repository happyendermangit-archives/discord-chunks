function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    }), n("789020"), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
    var i = n("735250");
    n("470079");
    var r = n("803997"),
        s = n.n(r),
        a = n("389507"),
        o = n("993365"),
        l = n("497309"),
        u = n("950463"),
        d = n("757698"),
        _ = n("630641"),
        c = n("912527"),
        E = n("833571"),
        I = n("630388"),
        T = n("709054"),
        f = n("941532"),
        S = n("713938"),
        A = n("981631"),
        h = n("231338"),
        m = n("689938"),
        N = n("645392");

    function O(e) {
        var t;
        let n, {
                application: r,
                scopes: s,
                redirectUri: o,
                approximateGuildCount: O,
                isEmbeddedFlow: R,
                embeddedActivityConfig: C
            } = e,
            g = new Date(T.default.extractTimestamp(r.id)),
            L = (0, S.getSecurityMessage)(s),
            D = (0, I.hasFlag)(null !== (t = r.flags) && void 0 !== t ? t : 0, A.ApplicationFlags.EMBEDDED);
        if (null != o && !D && !R) {
            let e = new URL(o);
            n = null != e.host && e.host.length > 0 ? e.origin : e.href
        }
        return (0, i.jsxs)("div", {
            className: N.applicationDetails,
            children: [null != n ? (0, i.jsx)(p, {
                className: N.redirectWarning,
                icon: d.default,
                text: m.default.Messages.OAUTH2_DETAILS_REDIRECT.format({
                    origin: n
                })
            }) : null, (0, i.jsx)(p, {
                icon: _.default,
                text: (0, f.getApplicationDetailsText)(r)
            }), (0, i.jsx)(p, {
                icon: l.default,
                text: m.default.Messages.OAUTH2_DETAILS_CREATION_DATE.format({
                    date: g
                })
            }), s.includes(h.OAuth2Scopes.BOT) && null != O ? (0, i.jsx)(p, {
                icon: c.default,
                text: m.default.Messages.OAUTH2_DETAILS_GUILDS.format({
                    guildCount: O
                })
            }) : null, (0, i.jsx)(p, {
                icon: E.default,
                text: L
            }), (null == C ? void 0 : C.has_csp_exception) ? (0, i.jsx)(p, {
                icon: u.default,
                text: m.default.Messages.OAUTH2_IP_LOCATION_DISCLOSURE
            }) : null, (null == C ? void 0 : C.displays_advertisements) ? (0, i.jsx)(p, {
                icon: a.EmbedIcon,
                text: m.default.Messages.OAUTH2_ADVERTISEMENTS_DISCLOSURE
            }) : null]
        })
    }

    function p(e) {
        let {
            icon: t,
            text: n,
            className: r
        } = e;
        return (0, i.jsxs)("div", {
            className: s()(N.entry, r),
            children: [(0, i.jsx)(t, {
                className: N.entryIcon
            }), (0, i.jsx)(o.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                className: N.entryInner,
                children: n
            })]
        })
    }
}