function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("307573"),
        u = n("135983"),
        s = n("808242"),
        l = n("906566"),
        c = n("438398"),
        f = n("725292"),
        d = n("532329"),
        _ = n("843568"),
        E = n("947248"),
        p = n("523018"),
        m = n("853161"),
        y = n("485250"),
        I = n("281767"),
        h = n("563090"),
        O = n("941504"),
        T = n("645392");

    function S(e) {
        var t, n, o = e.application,
            i = e.scopes,
            u = e.redirectUri,
            S = e.approximateGuildCount,
            g = e.isEmbeddedFlow,
            A = e.embeddedActivityConfig,
            b = new Date(p.default.extractTimestamp(o.id)),
            N = (0, y.getSecurityMessage)(i),
            R = (0, E.hasFlag)(null !== (t = o.flags) && void 0 !== t ? t : 0, I.ApplicationFlags.EMBEDDED);
        if (null != u && !R && !g) {
            var C = new URL(u);
            n = null != C.host && C.host.length > 0 ? C.origin : C.href
        }
        return r.createElement("div", {
            className: T.applicationDetails
        }, null != n ? r.createElement(v, {
            className: T.redirectWarning,
            icon: c.default,
            text: O.default.Messages.OAUTH2_DETAILS_REDIRECT.format({
                origin: n
            })
        }) : null, r.createElement(v, {
            icon: f.default,
            text: (0, m.getApplicationDetailsText)(o)
        }), r.createElement(v, {
            icon: s.default,
            text: O.default.Messages.OAUTH2_DETAILS_CREATION_DATE.format({
                date: b
            })
        }), i.includes(h.OAuth2Scopes.BOT) && null != S ? r.createElement(v, {
            icon: d.default,
            text: O.default.Messages.OAUTH2_DETAILS_GUILDS.format({
                guildCount: S
            })
        }) : null, r.createElement(v, {
            icon: _.default,
            text: N
        }), (null == A ? void 0 : A.has_csp_exception) ? r.createElement(v, {
            icon: l.default,
            text: O.default.Messages.OAUTH2_IP_LOCATION_DISCLOSURE
        }) : null, (null == A ? void 0 : A.displays_advertisements) ? r.createElement(v, {
            icon: a.EmbedIcon,
            text: O.default.Messages.OAUTH2_ADVERTISEMENTS_DISCLOSURE
        }) : null)
    }

    function v(e) {
        var t = e.icon,
            n = e.text,
            o = e.className;
        return r.createElement("div", {
            className: i()(T.entry, o)
        }, r.createElement(t, {
            className: T.entryIcon
        }), r.createElement(u.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            className: T.entryInner
        }, n))
    }
}