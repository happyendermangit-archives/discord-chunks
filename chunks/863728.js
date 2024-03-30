function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return y
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("207561"),
        u = n("571979"),
        s = n("556026"),
        l = n("135983"),
        c = n("843317"),
        f = n("247164"),
        d = n("485250"),
        _ = n("563090"),
        E = n("941504"),
        p = n("520460");

    function m(e) {
        var t = e.text,
            n = e.error,
            o = e.isFake;
        return r.createElement("div", {
            className: p.scope
        }, r.createElement("div", {
            className: i()(p.iconWrapper, o ? p.fakeScopeIcon : p.scopeIcon)
        }, o ? r.createElement(f.default, {
            className: p.icon
        }) : r.createElement(c.default, {
            className: p.icon
        })), r.createElement("div", {
            className: p.scopeInner
        }, r.createElement(l.Text, {
            variant: "text-md/medium"
        }, t), null != n ? r.createElement(l.Text, {
            variant: "text-xs/normal",
            color: "text-danger"
        }, n) : null))
    }

    function y(e) {
        var t, n = e.application,
            o = e.accountScopes,
            i = e.requestedScopes,
            l = e.integrationType,
            c = e.errors,
            f = e.isTrustedName,
            y = (0, a.useLazyValue)(function() {
                return d.FAKE_SCOPES[Math.floor(Math.random() * d.FAKE_SCOPES.length)]
            });
        if (0 === o.length) return null;
        var I = y(),
            h = void 0 !== f && f ? E.default.Messages.OAUTH2_SCOPES_LABEL_TRUSTED_NAME : E.default.Messages.OAUTH2_SCOPES_LABEL,
            O = l === u.ApplicationIntegrationType.USER_INSTALL && i.includes(_.OAuth2Scopes.APPLICATIONS_COMMANDS);
        return r.createElement("div", {
            className: p.scopes
        }, r.createElement(s.Heading, {
            variant: "heading-deprecated-12/semibold",
            className: p.sectionLabel
        }, h.format({
            application: null !== (t = null == n ? void 0 : n.name) && void 0 !== t ? t : ""
        })), o.map(function(e) {
            var t;
            return r.createElement(m, {
                key: e,
                text: (0, d.getScopeName)(e, o),
                error: null == c ? void 0 : null === (t = c[e]) || void 0 === t ? void 0 : t[0]
            })
        }), O && r.createElement(m, {
            text: E.default.Messages.SCOPE_DM_YOU
        }), r.createElement(m, {
            text: I,
            isFake: !0
        }))
    }
}