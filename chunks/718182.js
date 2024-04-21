function(e, t, n) {
    "use strict";
    n.r(t);
    var s, a, l, i, r = n("735250"),
        u = n("470079"),
        o = n("525654"),
        d = n.n(o),
        c = n("442837"),
        f = n("893776"),
        E = n("129293"),
        _ = n("108427"),
        I = n("314897"),
        p = n("819570"),
        h = n("981631"),
        T = n("689938"),
        N = n("794711");
    c.default.initialize();
    class g extends(i = u.PureComponent) {
        componentDidMount() {
            let e = (0, E.default)(this.props.location);
            null != e && f.default.authorizeIPAddress(e), (0, _.trackAppUIViewed)("authorize_ip")
        }
        renderLoginButton() {
            if ("Android" === d().os.family || "iOS" === d().os.family) return null;
            let {
                transitionTo: e
            } = this.props;
            return (0, r.jsx)(p.Button, {
                onClick: () => e(h.Routes.LOGIN),
                children: T.default.Messages._LOGIN
            })
        }
        renderFailed() {
            return (0, r.jsxs)(p.default, {
                children: [(0, r.jsx)("img", {
                    alt: "",
                    src: n("211095"),
                    className: N.marginBottom20
                }), (0, r.jsx)(p.Title, {
                    className: N.marginBottom8,
                    children: T.default.Messages.AUTHORIZATION_EXPIRED
                }), (0, r.jsx)(p.SubTitle, {
                    className: N.marginBottom40,
                    children: T.default.Messages._AUTH_EXPIRED_SUGGESTION
                }), this.renderLoginButton()]
            })
        }
        renderSucceeded() {
            return (0, r.jsxs)(p.default, {
                children: [(0, r.jsx)("img", {
                    alt: "",
                    src: n("640356"),
                    className: N.marginBottom20
                }), (0, r.jsx)(p.Title, {
                    className: N.marginBottom8,
                    children: T.default.Messages.IP_AUTHORIZATION_SUCCEEDED
                }), (0, r.jsx)(p.SubTitle, {
                    className: N.marginBottom40,
                    children: T.default.Messages._AUTH_IP_AUTH_SUCCEEDED_SUGGESTION
                }), this.renderLoginButton()]
            })
        }
        renderDefault() {
            return (0, r.jsxs)(p.default, {
                children: [(0, r.jsx)(p.AuthSpinner, {}), (0, r.jsx)(p.Title, {
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
    s = g, a = "defaultProps", l = {
        transitionTo: e => n.g.location.assign(e)
    }, a in s ? Object.defineProperty(s, a, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : s[a] = l, t.default = c.default.connectStores([I.default], () => ({
        verifyFailed: I.default.didVerifyFail(),
        verifySucceeded: I.default.didVerifySucceed()
    }))(g)
}