function(e, t, s) {
    "use strict";
    s.r(t);
    var n, a, l, i, r = s("735250"),
        u = s("470079"),
        o = s("525654"),
        d = s.n(o),
        c = s("442837"),
        f = s("893776"),
        E = s("129293"),
        I = s("108427"),
        _ = s("314897"),
        h = s("819570"),
        p = s("981631"),
        T = s("689938"),
        N = s("794711");
    c.default.initialize();
    class g extends(i = u.PureComponent) {
        componentDidMount() {
            let e = (0, E.default)(this.props.location);
            null != e && f.default.authorizeIPAddress(e), (0, I.trackAppUIViewed)("authorize_ip")
        }
        renderLoginButton() {
            if ("Android" === d().os.family || "iOS" === d().os.family) return null;
            let {
                transitionTo: e
            } = this.props;
            return (0, r.jsx)(h.Button, {
                onClick: () => e(p.Routes.LOGIN),
                children: T.default.Messages._LOGIN
            })
        }
        renderFailed() {
            return (0, r.jsxs)(h.default, {
                children: [(0, r.jsx)("img", {
                    alt: "",
                    src: s("211095"),
                    className: N.marginBottom20
                }), (0, r.jsx)(h.Title, {
                    className: N.marginBottom8,
                    children: T.default.Messages.AUTHORIZATION_EXPIRED
                }), (0, r.jsx)(h.SubTitle, {
                    className: N.marginBottom40,
                    children: T.default.Messages._AUTH_EXPIRED_SUGGESTION
                }), this.renderLoginButton()]
            })
        }
        renderSucceeded() {
            return (0, r.jsxs)(h.default, {
                children: [(0, r.jsx)("img", {
                    alt: "",
                    src: s("640356"),
                    className: N.marginBottom20
                }), (0, r.jsx)(h.Title, {
                    className: N.marginBottom8,
                    children: T.default.Messages.IP_AUTHORIZATION_SUCCEEDED
                }), (0, r.jsx)(h.SubTitle, {
                    className: N.marginBottom40,
                    children: T.default.Messages._AUTH_IP_AUTH_SUCCEEDED_SUGGESTION
                }), this.renderLoginButton()]
            })
        }
        renderDefault() {
            return (0, r.jsxs)(h.default, {
                children: [(0, r.jsx)(h.AuthSpinner, {}), (0, r.jsx)(h.Title, {
                    children: T.default.Messages.AUTHORIZING
                })]
            })
        }
        render() {
            let {
                verifyFailed: e,
                verifySucceeded: t
            } = this.props;
            return e ? this.renderFailed() : t ? this.renderSucceeded() : this.renderDefault()
        }
    }
    n = g, a = "defaultProps", l = {
        transitionTo: e => s.g.location.assign(e)
    }, a in n ? Object.defineProperty(n, a, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : n[a] = l, t.default = c.default.connectStores([_.default], () => ({
        verifyFailed: _.default.didVerifyFail(),
        verifySucceeded: _.default.didVerifySucceed()
    }))(g)
}