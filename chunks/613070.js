function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("414456"),
        r = n.n(s),
        a = n("775560"),
        o = n("891189"),
        l = n("605451"),
        u = n("577776"),
        d = n("36694"),
        c = n("945330"),
        f = n("29479"),
        _ = n("843455"),
        E = n("782340"),
        h = n("963355");

    function g(e) {
        let {
            text: t,
            error: n,
            isFake: s
        } = e;
        return (0, i.jsxs)("div", {
            className: h.scope,
            children: [(0, i.jsx)("div", {
                className: r(h.iconWrapper, s ? h.fakeScopeIcon : h.scopeIcon),
                children: s ? (0, i.jsx)(c.default, {
                    className: h.icon
                }) : (0, i.jsx)(d.default, {
                    className: h.icon
                })
            }), (0, i.jsxs)("div", {
                className: h.scopeInner,
                children: [(0, i.jsx)(u.Text, {
                    variant: "text-md/medium",
                    children: t
                }), null != n ? (0, i.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    color: "text-danger",
                    children: n
                }) : null]
            })]
        })
    }

    function m(e) {
        var t;
        let {
            application: n,
            accountScopes: s,
            requestedScopes: r,
            integrationType: u,
            errors: d,
            isTrustedName: c = !1
        } = e, m = (0, a.useLazyValue)(() => f.FAKE_SCOPES[Math.floor(Math.random() * f.FAKE_SCOPES.length)]);
        if (0 === s.length) return null;
        let p = m(),
            S = c ? E.default.Messages.OAUTH2_SCOPES_LABEL_TRUSTED_NAME : E.default.Messages.OAUTH2_SCOPES_LABEL,
            v = u === o.ApplicationIntegrationType.USER_INSTALL && r.includes(_.OAuth2Scopes.APPLICATIONS_COMMANDS);
        return (0, i.jsxs)("div", {
            className: h.scopes,
            children: [(0, i.jsx)(l.Heading, {
                variant: "heading-deprecated-12/semibold",
                className: h.sectionLabel,
                children: S.format({
                    application: null !== (t = null == n ? void 0 : n.name) && void 0 !== t ? t : ""
                })
            }), s.map(e => {
                var t;
                return (0, i.jsx)(g, {
                    text: (0, f.getScopeName)(e, s),
                    error: null == d ? void 0 : null === (t = d[e]) || void 0 === t ? void 0 : t[0]
                }, e)
            }), v && (0, i.jsx)(g, {
                text: E.default.Messages.SCOPE_DM_YOU
            }), (0, i.jsx)(g, {
                text: p,
                isFake: !0
            })]
        })
    }
}