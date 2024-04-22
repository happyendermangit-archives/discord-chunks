function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    }), n("789020"), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("389507"),
        o = n("993365"),
        l = n("979200"),
        u = n("497309"),
        d = n("950463"),
        _ = n("757698"),
        c = n("630641"),
        E = n("912527"),
        I = n("833571"),
        T = n("630388"),
        f = n("709054"),
        S = n("941532"),
        h = n("713938"),
        A = n("981631"),
        m = n("231338"),
        N = n("689938"),
        p = n("645392");

    function O(e) {
        var t;
        let n, {
                application: r,
                scopes: s,
                redirectUri: o,
                approximateGuildCount: O,
                isEmbeddedFlow: C,
                disclosures: g
            } = e,
            L = new Date(f.default.extractTimestamp(r.id)),
            D = (0, h.getSecurityMessage)(s),
            v = (0, T.hasFlag)(null !== (t = r.flags) && void 0 !== t ? t : 0, A.ApplicationFlags.EMBEDDED);
        if (null != o && !v && !C) {
            let e = new URL(o);
            n = null != e.host && e.host.length > 0 ? e.origin : e.href
        }
        return (0, i.jsxs)("div", {
            className: p.applicationDetails,
            children: [null != n ? (0, i.jsx)(R, {
                className: p.redirectWarning,
                icon: _.default,
                text: N.default.Messages.OAUTH2_DETAILS_REDIRECT.format({
                    origin: n
                })
            }) : null, (0, i.jsx)(R, {
                icon: c.default,
                text: (0, S.getApplicationDetailsText)(r)
            }), (0, i.jsx)(R, {
                icon: u.default,
                text: N.default.Messages.OAUTH2_DETAILS_CREATION_DATE.format({
                    date: L
                })
            }), s.includes(m.OAuth2Scopes.BOT) && null != O ? (0, i.jsx)(R, {
                icon: E.default,
                text: N.default.Messages.OAUTH2_DETAILS_GUILDS.format({
                    guildCount: O
                })
            }) : null, (0, i.jsx)(R, {
                icon: I.default,
                text: D
            }), null != g && g.includes(l.ApplicationDisclosure.IP_LOCATION) ? (0, i.jsx)(R, {
                icon: d.default,
                text: N.default.Messages.OAUTH2_IP_LOCATION_DISCLOSURE
            }) : null, null != g && g.includes(l.ApplicationDisclosure.DISPLAYS_ADVERTISEMENTS) ? (0, i.jsx)(R, {
                icon: a.EmbedIcon,
                text: N.default.Messages.OAUTH2_ADVERTISEMENTS_DISCLOSURE
            }) : null]
        })
    }

    function R(e) {
        let {
            icon: t,
            text: n,
            className: r
        } = e;
        return (0, i.jsxs)("div", {
            className: s()(p.entry, r),
            children: [(0, i.jsx)(t, {
                className: p.entryIcon
            }), (0, i.jsx)(o.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                className: p.entryInner,
                children: n
            })]
        })
    }
}