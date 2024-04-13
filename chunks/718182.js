function(e, t, n) {
    "use strict";
    n.r(t);
    var s, a, i, l, r = n("735250"),
        u = n("470079"),
        o = n("525654"),
        d = n.n(o),
        c = n("442837"),
        f = n("893776"),
        E = n("129293"),
        I = n("108427"),
        h = n("314897"),
        _ = n("819570"),
        p = n("981631"),
        T = n("689938"),
        m = n("794711");
    c.default.initialize();
    class N extends(l = u.PureComponent) {
        componentDidMount() {
            let e = (0, E.default)(this.props.location);
            null != e && f.default.authorizeIPAddress(e), (0, I.trackAppUIViewed)("authorize_ip")
        }
        renderLoginButton() {
            if ("Android" === d().os.family || "iOS" === d().os.family) return null;
            let {
                transitionTo: e
            } = this.props;
            return (0, r.jsx)(_.Button, {
                onClick: () => e(p.Routes.LOGIN),
                children: T.default.Messages._LOGIN
            })
        }
        renderFailed() {
            return (0, r.jsxs)(_.default, {
                children: [(0, r.jsx)("img", {
                    alt: "",
                    src: n("211095"),
                    className: m.marginBottom20
                }), (0, r.jsx)(_.Title, {
                    className: m.marginBottom8,
                    children: T.default.Messages.AUTHORIZATION_EXPIRED
                }), (0, r.jsx)(_.SubTitle, {
                    className: m.marginBottom40,
                    children: T.default.Messages._AUTH_EXPIRED_SUGGESTION
                }), this.renderLoginButton()]
            })
        }
        renderSucceeded() {
            return (0, r.jsxs)(_.default, {
                children: [(0, r.jsx)("img", {
                    alt: "",
                    src: n("640356"),
                    className: m.marginBottom20
                }), (0, r.jsx)(_.Title, {
                    className: m.marginBottom8,
                    children: T.default.Messages.IP_AUTHORIZATION_SUCCEEDED
                }), (0, r.jsx)(_.SubTitle, {
                    className: m.marginBottom40,
                    children: T.default.Messages._AUTH_IP_AUTH_SUCCEEDED_SUGGESTION
                }), this.renderLoginButton()]
            })
        }
        renderDefault() {
            return (0, r.jsxs)(_.default, {
                children: [(0, r.jsx)(_.AuthSpinner, {}), (0, r.jsx)(_.Title, {
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
    s = N, a = "defaultProps", i = {
        transitionTo: e => n.g.location.assign(e)
    }, a in s ? Object.defineProperty(s, a, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : s[a] = i, t.default = c.default.connectStores([h.default], () => ({
        verifyFailed: h.default.didVerifyFail(),
        verifySucceeded: h.default.didVerifySucceed()
    }))(N)
}