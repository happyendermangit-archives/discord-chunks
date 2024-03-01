function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("222007");
    var s = n("37983");
    n("884691");
    var i = n("775560"),
        r = n("605451"),
        a = n("577776"),
        o = n("36694"),
        d = n("945330"),
        u = n("29479"),
        l = n("782340"),
        f = n("963355");

    function _(e) {
        var t;
        let {
            application: n,
            accountScopes: _,
            errors: c,
            isTrustedName: g = !1
        } = e, m = (0, i.useLazyValue)(() => u.FAKE_SCOPES[Math.floor(Math.random() * u.FAKE_SCOPES.length)]);
        if (0 === _.length) return null;
        let h = _.map(e => {
                var t;
                let n = (0, u.getScopeName)(e, _),
                    [i] = null !== (t = null == c ? void 0 : c[e]) && void 0 !== t ? t : [];
                return (0, s.jsxs)("div", {
                    className: f.scope,
                    children: [(0, s.jsx)("div", {
                        className: f.scopeCheck,
                        children: (0, s.jsx)(o.default, {
                            className: f.icon
                        })
                    }), (0, s.jsxs)("div", {
                        className: f.scopeInner,
                        children: [(0, s.jsx)(a.Text, {
                            variant: "text-md/medium",
                            children: n
                        }), null != i ? (0, s.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "text-danger",
                            children: i
                        }) : null]
                    })]
                }, e)
            }),
            v = (0, s.jsxs)("div", {
                className: f.scope,
                children: [(0, s.jsx)("div", {
                    className: f.scopeTimes,
                    children: (0, s.jsx)(d.default, {
                        className: f.icon
                    })
                }), (0, s.jsx)("div", {
                    className: f.scopeInner,
                    children: (0, s.jsx)(a.Text, {
                        variant: "text-md/normal",
                        className: f.scopeName,
                        children: m()
                    })
                })]
            }),
            E = g ? l.default.Messages.OAUTH2_SCOPES_LABEL_TRUSTED_NAME : l.default.Messages.OAUTH2_SCOPES_LABEL;
        return (0, s.jsxs)("div", {
            className: f.scopes,
            children: [(0, s.jsx)(r.Heading, {
                variant: "heading-deprecated-12/semibold",
                className: f.sectionLabel,
                children: E.format({
                    application: null !== (t = null == n ? void 0 : n.name) && void 0 !== t ? t : ""
                })
            }), h, v]
        })
    }
}