function(e, t, n) {
    "use strict";
    n.r(t);
    var s = n("735250"),
        a = n("470079"),
        i = n("120356"),
        r = n.n(i),
        l = n("873546"),
        o = n("481060"),
        u = n("605782"),
        d = n("703656"),
        c = n("980483"),
        f = n("612744"),
        h = n("624138"),
        E = n("830064"),
        g = n("981631"),
        _ = n("672093");
    let m = (0, h.cssValueToNumber)(_.responsiveWidthMobile),
        p = [g.Routes.LOGIN, g.Routes.LOGIN_HANDOFF, g.Routes.REGISTER, g.Routes.INVITE(""), g.Routes.GIFT_CODE(""), g.Routes.GUILD_TEMPLATE_LOGIN(""), g.Routes.GUILD_TEMPLATE(""), g.Routes.DISABLE_EMAIL_NOTIFICATIONS, g.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, g.Routes.BILLING_PREMIUM_SUBSCRIBE, g.Routes.BILLING_PAYMENT_SOURCES_CREATE, g.Routes.BILLING_PAYMENTS, g.Routes.BILLING_PREMIUM_SWITCH_PLAN, g.Routes.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, g.Routes.VERIFY, g.Routes.VERIFY_HUB_EMAIL, g.Routes.REJECT_IP, g.Routes.REJECT_MFA, g.Routes.AUTHORIZE_IP, g.Routes.AUTHORIZE_PAYMENT, g.Routes.RESET, g.Routes.HANDOFF, g.Routes.REPORT, g.Routes.REPORT_SECOND_LOOK];

    function T(e) {
        return p.some(t => e.startsWith(t))
    }
    class A extends a.Component {
        componentDidMount() {
            window.addEventListener("resize", this.handleResize)
        }
        componentWillUnmount() {
            window.removeEventListener("resize", this.handleResize)
        }
        mobileTransitionTo(e, t) {
            if (T(e))(0, d.transitionTo)(e, t);
            else {
                let n = null != t && null != t.search ? t.search : null;
                window.location = null == n ? e : "".concat(e, "?").concat(n)
            }
        }
        mobileReplaceWith(e) {
            T(e) ? (0, d.replaceWith)(e) : window.location = e
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
                className: _.characterBackground,
                children: (0, s.jsx)(o.HeadingLevel, {
                    forceLevel: 1,
                    children: null != e ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(c.default, {
                            show: !0,
                            className: r()(_.logo)
                        }), (0, s.jsx)(f.Splash, {
                            splash: e,
                            children: t
                        })]
                    }) : (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(E.default, {
                            className: _.artwork,
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
            var t, n, s;
            super(e), t = this, n = "handleResize", s = () => {
                this.setState({
                    isMobileWidth: window.innerWidth <= m
                })
            }, n in t ? Object.defineProperty(t, n, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = s, this.state = {
                isMobileWidth: window.innerWidth <= m
            }
        }
    }
    t.default = A
}