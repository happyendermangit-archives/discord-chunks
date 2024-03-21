function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    }), n("702976"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
    var i = n("37983");
    n("884691");
    var s = n("414456"),
        r = n.n(s),
        a = n("527073"),
        o = n("577776"),
        l = n("841811"),
        u = n("338835"),
        d = n("83900"),
        c = n("45029"),
        _ = n("71216"),
        f = n("148337"),
        E = n("568734"),
        h = n("299039"),
        g = n("955145"),
        m = n("29479"),
        p = n("49111"),
        S = n("843455"),
        v = n("782340"),
        T = n("10604");

    function I(e) {
        var t;
        let n, {
                application: s,
                scopes: r,
                redirectUri: o,
                approximateGuildCount: I,
                isEmbeddedFlow: C,
                embeddedActivityConfig: y
            } = e,
            N = new Date(h.default.extractTimestamp(s.id)),
            R = (0, m.getSecurityMessage)(r),
            O = (0, E.hasFlag)(null !== (t = s.flags) && void 0 !== t ? t : 0, p.ApplicationFlags.EMBEDDED);
        if (null != o && !O && !C) {
            let e = new URL(o);
            n = null != e.host && e.host.length > 0 ? e.origin : e.href
        }
        return (0, i.jsxs)("div", {
            className: T.applicationDetails,
            children: [null != n ? (0, i.jsx)(A, {
                className: T.redirectWarning,
                icon: d.default,
                text: v.default.Messages.OAUTH2_DETAILS_REDIRECT.format({
                    origin: n
                })
            }) : null, (0, i.jsx)(A, {
                icon: c.default,
                text: (0, g.getApplicationDetailsText)(s)
            }), (0, i.jsx)(A, {
                icon: l.default,
                text: v.default.Messages.OAUTH2_DETAILS_CREATION_DATE.format({
                    date: N
                })
            }), r.includes(S.OAuth2Scopes.BOT) && null != I ? (0, i.jsx)(A, {
                icon: _.default,
                text: v.default.Messages.OAUTH2_DETAILS_GUILDS.format({
                    guildCount: I
                })
            }) : null, (0, i.jsx)(A, {
                icon: f.default,
                text: R
            }), (null == y ? void 0 : y.has_csp_exception) ? (0, i.jsx)(A, {
                icon: u.default,
                text: v.default.Messages.OAUTH2_IP_LOCATION_DISCLOSURE
            }) : null, (null == y ? void 0 : y.displays_advertisements) ? (0, i.jsx)(A, {
                icon: a.EmbedIcon,
                text: v.default.Messages.OAUTH2_ADVERTISEMENTS_DISCLOSURE
            }) : null]
        })
    }

    function A(e) {
        let {
            icon: t,
            text: n,
            className: s
        } = e;
        return (0, i.jsxs)("div", {
            className: r(T.entry, s),
            children: [(0, i.jsx)(t, {
                className: T.entryIcon
            }), (0, i.jsx)(o.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                className: T.entryInner,
                children: n
            })]
        })
    }
}