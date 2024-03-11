function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return A
        }
    });
    var s = n("37983"),
        a = n("884691"),
        i = n("414456"),
        r = n.n(i),
        l = n("394846"),
        o = n("77078"),
        u = n("2021"),
        d = n("393414"),
        c = n("725484"),
        f = n("554054"),
        h = n("159885"),
        E = n("528502"),
        g = n("49111"),
        m = n("513680");
    let _ = (0, h.cssValueToNumber)(m.responsiveWidthMobile),
        p = [g.Routes.LOGIN, g.Routes.LOGIN_HANDOFF, g.Routes.REGISTER, g.Routes.INVITE(""), g.Routes.GIFT_CODE(""), g.Routes.GUILD_TEMPLATE_LOGIN(""), g.Routes.GUILD_TEMPLATE(""), g.Routes.DISABLE_EMAIL_NOTIFICATIONS, g.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, g.Routes.BILLING_PREMIUM_SUBSCRIBE, g.Routes.BILLING_PAYMENT_SOURCES_CREATE, g.Routes.BILLING_PAYMENTS, g.Routes.BILLING_PREMIUM_SWITCH_PLAN, g.Routes.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, g.Routes.VERIFY, g.Routes.VERIFY_HUB_EMAIL, g.Routes.REJECT_IP, g.Routes.REJECT_MFA, g.Routes.AUTHORIZE_IP, g.Routes.AUTHORIZE_PAYMENT, g.Routes.RESET, g.Routes.HANDOFF, g.Routes.REPORT, g.Routes.REPORT_SECOND_LOOK];

    function R(e) {
        return p.some(t => e.startsWith(t))
    }
    class S extends a.Component {
        componentDidMount() {
            window.addEventListener("resize", this.handleResize)
        }
        componentWillUnmount() {
            window.removeEventListener("resize", this.handleResize)
        }
        mobileTransitionTo(e, t) {
            if (R(e))(0, d.transitionTo)(e, t);
            else {
                let n = null != t && null != t.search ? t.search : null;
                window.location = null == n ? e : "".concat(e, "?").concat(n)
            }
        }
        mobileReplaceWith(e) {
            R(e) ? (0, d.replaceWith)(e) : window.location = e
        }
        renderDefault() {
            let {
                splash: e
            } = this.props, t = (0, s.jsx)(u.default, {
                component: a.Fragment,
                children: a.Children.map(this.props.children, e => a.cloneElement(e, {
                    transitionTo: d.transitionTo,
                    replaceWith: d.replaceWith
                }))
            });
            return (0, s.jsx)("div", {
                className: m.characterBackground,
                children: (0, s.jsx)(o.HeadingLevel, {
                    forceLevel: 1,
                    children: null != e ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(c.default, {
                            show: !0,
                            className: r(m.logo)
                        }), (0, s.jsx)(f.Splash, {
                            splash: e,
                            children: t
                        })]
                    }) : (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(E.default, {
                            className: m.artwork,
                            preserveAspectRatio: "xMinYMin slice"
                        }), t]
                    })
                })
            })
        }
        renderMobile() {
            return (0, s.jsx)(u.default, {
                component: a.Fragment,
                children: a.Children.map(this.props.children, e => a.cloneElement(e, {
                    transitionTo: this.mobileTransitionTo,
                    replaceWith: this.mobileReplaceWith
                }))
            })
        }
        render() {
            let {
                isMobileWidth: e
            } = this.state, t = navigator.userAgent.includes("GameLauncher");
            return e || l.isMobile || l.isTablet || t ? this.renderMobile() : this.renderDefault()
        }
        constructor(e) {
            super(e), this.handleResize = () => {
                this.setState({
                    isMobileWidth: window.innerWidth <= _
                })
            }, this.state = {
                isMobileWidth: window.innerWidth <= _
            }
        }
    }
    var A = S
}