function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        }
    }), n("702976"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
    var s = n("37983");
    n("884691");
    var i = n("414456"),
        r = n.n(i),
        a = n("527073"),
        o = n("577776"),
        d = n("841811"),
        u = n("338835"),
        l = n("83900"),
        f = n("45029"),
        _ = n("71216"),
        c = n("148337"),
        g = n("568734"),
        m = n("299039"),
        h = n("955145"),
        v = n("29479"),
        E = n("49111"),
        p = n("843455"),
        y = n("782340"),
        T = n("10604");

    function C(e) {
        var t;
        let n, {
                application: i,
                scopes: r,
                redirectUri: o,
                approximateGuildCount: C,
                isEmbeddedFlow: S,
                embeddedActivityConfig: A
            } = e,
            D = new Date(m.default.extractTimestamp(i.id)),
            N = (0, v.getSecurityMessage)(r),
            O = (0, g.hasFlag)(null !== (t = i.flags) && void 0 !== t ? t : 0, E.ApplicationFlags.EMBEDDED);
        if (null != o && !O && !S) {
            let e = new URL(o);
            n = null != e.host && e.host.length > 0 ? e.origin : e.href
        }
        return (0, s.jsxs)("div", {
            className: T.applicationDetails,
            children: [null != n ? (0, s.jsx)(I, {
                className: T.redirectWarning,
                icon: l.default,
                text: y.default.Messages.OAUTH2_DETAILS_REDIRECT.format({
                    origin: n
                })
            }) : null, (0, s.jsx)(I, {
                icon: f.default,
                text: (0, h.getApplicationDetailsText)(i)
            }), (0, s.jsx)(I, {
                icon: d.default,
                text: y.default.Messages.OAUTH2_DETAILS_CREATION_DATE.format({
                    date: D
                })
            }), r.includes(p.OAuth2Scopes.BOT) && null != C ? (0, s.jsx)(I, {
                icon: _.default,
                text: y.default.Messages.OAUTH2_DETAILS_GUILDS.format({
                    guildCount: C
                })
            }) : null, (0, s.jsx)(I, {
                icon: c.default,
                text: N
            }), (null == A ? void 0 : A.has_csp_exception) ? (0, s.jsx)(I, {
                icon: u.default,
                text: y.default.Messages.OAUTH2_IP_LOCATION_DISCLOSURE
            }) : null, (null == A ? void 0 : A.displays_advertisements) ? (0, s.jsx)(I, {
                icon: a.EmbedIcon,
                text: y.default.Messages.OAUTH2_ADVERTISEMENTS_DISCLOSURE
            }) : null]
        })
    }

    function I(e) {
        let {
            icon: t,
            text: n,
            className: i
        } = e;
        return (0, s.jsxs)("div", {
            className: r(T.entry, i),
            children: [(0, s.jsx)(t, {
                className: T.entryIcon
            }), (0, s.jsx)(o.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                className: T.entryInner,
                children: n
            })]
        })
    }
}