function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var s = n("37983"),
        a = n("884691"),
        l = n("597755"),
        i = n.n(l),
        r = n("446674"),
        u = n("437822"),
        o = n("457108"),
        d = n("970366"),
        c = n("271938"),
        f = n("124969"),
        E = n("49111"),
        _ = n("782340"),
        I = n("890957");
    r.default.initialize();
    class h extends a.PureComponent {
        componentDidMount() {
            let e = (0, o.default)(this.props.location);
            null != e && u.default.authorizeIPAddress(e), (0, d.trackAppUIViewed)("authorize_ip")
        }
        renderLoginButton() {
            if ("Android" === i.os.family || "iOS" === i.os.family) return null;
            let {
                transitionTo: e
            } = this.props;
            return (0, s.jsx)(f.Button, {
                onClick: () => e(E.Routes.LOGIN),
                children: _.default.Messages._LOGIN
            })
        }
        renderFailed() {
            return (0, s.jsxs)(f.default, {
                children: [(0, s.jsx)("img", {
                    alt: "",
                    src: n("501851"),
                    className: I.marginBottom20
                }), (0, s.jsx)(f.Title, {
                    className: I.marginBottom8,
                    children: _.default.Messages.AUTHORIZATION_EXPIRED
                }), (0, s.jsx)(f.SubTitle, {
                    className: I.marginBottom40,
                    children: _.default.Messages._AUTH_EXPIRED_SUGGESTION
                }), this.renderLoginButton()]
            })
        }
        renderSucceeded() {
            return (0, s.jsxs)(f.default, {
                children: [(0, s.jsx)("img", {
                    alt: "",
                    src: n("346619"),
                    className: I.marginBottom20
                }), (0, s.jsx)(f.Title, {
                    className: I.marginBottom8,
                    children: _.default.Messages.IP_AUTHORIZATION_SUCCEEDED
                }), (0, s.jsx)(f.SubTitle, {
                    className: I.marginBottom40,
                    children: _.default.Messages._AUTH_IP_AUTH_SUCCEEDED_SUGGESTION
                }), this.renderLoginButton()]
            })
        }
        renderDefault() {
            return (0, s.jsxs)(f.default, {
                children: [(0, s.jsx)(f.AuthSpinner, {}), (0, s.jsx)(f.Title, {
                    children: _.default.Messages.AUTHORIZING
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
    h.defaultProps = {
        transitionTo: e => n.g.location.assign(e)
    };
    var p = r.default.connectStores([c.default], () => ({
        verifyFailed: c.default.didVerifyFail(),
        verifySucceeded: c.default.didVerifySucceed()
    }))(h)
}