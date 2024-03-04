function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("222007");
    var i = n("37983");
    n("884691");
    var s = n("775560"),
        r = n("605451"),
        a = n("577776"),
        o = n("36694"),
        l = n("945330"),
        u = n("29479"),
        d = n("782340"),
        c = n("963355");

    function f(e) {
        var t;
        let {
            application: n,
            accountScopes: f,
            errors: _,
            isTrustedName: h = !1
        } = e, E = (0, s.useLazyValue)(() => u.FAKE_SCOPES[Math.floor(Math.random() * u.FAKE_SCOPES.length)]);
        if (0 === f.length) return null;
        let g = f.map(e => {
                var t;
                let n = (0, u.getScopeName)(e, f),
                    [s] = null !== (t = null == _ ? void 0 : _[e]) && void 0 !== t ? t : [];
                return (0, i.jsxs)("div", {
                    className: c.scope,
                    children: [(0, i.jsx)("div", {
                        className: c.scopeCheck,
                        children: (0, i.jsx)(o.default, {
                            className: c.icon
                        })
                    }), (0, i.jsxs)("div", {
                        className: c.scopeInner,
                        children: [(0, i.jsx)(a.Text, {
                            variant: "text-md/medium",
                            children: n
                        }), null != s ? (0, i.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "text-danger",
                            children: s
                        }) : null]
                    })]
                }, e)
            }),
            m = (0, i.jsxs)("div", {
                className: c.scope,
                children: [(0, i.jsx)("div", {
                    className: c.scopeTimes,
                    children: (0, i.jsx)(l.default, {
                        className: c.icon
                    })
                }), (0, i.jsx)("div", {
                    className: c.scopeInner,
                    children: (0, i.jsx)(a.Text, {
                        variant: "text-md/normal",
                        className: c.scopeName,
                        children: E()
                    })
                })]
            }),
            p = h ? d.default.Messages.OAUTH2_SCOPES_LABEL_TRUSTED_NAME : d.default.Messages.OAUTH2_SCOPES_LABEL;
        return (0, i.jsxs)("div", {
            className: c.scopes,
            children: [(0, i.jsx)(r.Heading, {
                variant: "heading-deprecated-12/semibold",
                className: c.sectionLabel,
                children: p.format({
                    application: null !== (t = null == n ? void 0 : n.name) && void 0 !== t ? t : ""
                })
            }), g, m]
        })
    }
}