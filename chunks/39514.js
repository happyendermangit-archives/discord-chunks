function(e, t, s) {
    "use strict";
    s.r(t), s("47120"), s("411104");
    var n, a, l = s("735250"),
        i = s("470079"),
        r = s("120356"),
        u = s.n(r),
        o = s("442837"),
        d = s("570140"),
        c = s("893776"),
        f = s("533307"),
        E = s("978085"),
        I = s("232567"),
        _ = s("362762"),
        h = s("108427"),
        p = s("314897"),
        T = s("896797"),
        N = s("82142"),
        g = s("283595"),
        m = s("55563"),
        A = s("819570"),
        S = s("669079"),
        v = s("63063"),
        C = s("51144"),
        O = s("481153"),
        R = s("781428"),
        x = s("109894"),
        D = s("981631"),
        L = s("689938"),
        P = s("794711");

    function M(e, t, s) {
        return t in e ? Object.defineProperty(e, t, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = s, e
    }
    o.default.initialize(), (a = n || (n = {})).REGISTER = "register", a.LOGIN = "login";
    class j extends i.PureComponent {
        componentDidMount() {
            let {
                authenticated: e,
                isResolved: t
            } = this.props;
            e && this.handleAuthenticated(), !t && this.resolveGiftCode(), (0, h.trackAppUIViewed)("gift_code")
        }
        componentDidUpdate(e) {
            let {
                authenticated: t,
                isResolved: s
            } = this.props;
            !s && d.default.wait(() => {
                this.resolveGiftCode()
            }), t && !e.authenticated && this.handleAuthenticated(), !t && e.authenticated && this.setState({
                currentUser: null
            })
        }
        handleAuthenticated() {
            let {
                currentUser: e
            } = this.state;
            E.fetchLibrary(), null == e && this.refreshUser()
        }
        get requiresVerification() {
            let {
                currentUser: e
            } = this.state;
            return null != e && !e.verified
        }
        getCode() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
            return e.match.params.giftCode
        }
        getMode() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
            return e.login ? "login" : "register"
        }
        getErrorMessage(e) {
            let {
                libraryApplication: t,
                sku: s
            } = this.props, {
                error: n
            } = this.state, a = null != n ? n.code : null;
            return a === D.AbortCodes.INVALID_GIFT_SELF_REDEMPTION ? L.default.Messages.GIFT_CONFIRMATION_BODY_SELF_GIFT_NO_PAYMENT : a === D.AbortCodes.INVALID_GIFT_REDEMPTION_OWNED && (null == s ? void 0 : s.productLine) === D.SKUProductLines.COLLECTIBLES ? L.default.Messages.GIFT_ERROR_OWNED : null != t || a === D.AbortCodes.INVALID_GIFT_REDEMPTION_OWNED ? L.default.Messages.GIFT_CODE_AUTH_HELP_TEXT_OWNED.format({
                libraryLink: D.Routes.APPLICATION_LIBRARY
            }) : e.isClaimed || a === D.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED ? L.default.Messages.GIFT_CODE_AUTH_HELP_TEXT_CLAIMED : a === D.AbortCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED ? L.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT : void 0
        }
        renderSpinner(e) {
            return (0, l.jsxs)(A.default, {
                children: [(0, l.jsx)(A.Title, {
                    children: e
                }), (0, l.jsx)(A.AuthSpinner, {})]
            })
        }
        renderExpiredInvite() {
            let {
                defaultRoute: e,
                transitionTo: t
            } = this.props;
            return (0, l.jsxs)(A.default, {
                children: [(0, l.jsx)(A.Image, {
                    src: s("167969"),
                    className: P.marginBottom8
                }), (0, l.jsx)(A.Title, {
                    className: u()(P.marginTop8, P.marginBottom8),
                    children: L.default.Messages.GIFT_CODE_AUTH_INVALID_TITLE
                }), (0, l.jsx)(A.SubTitle, {
                    children: L.default.Messages.GIFT_CODE_AUTH_INVALID_BODY
                }), (0, l.jsx)(A.Button, {
                    className: u()(P.marginTop40, P.marginBottom8),
                    onClick: () => t(e),
                    children: L.default.Messages.CONTINUE_TO_WEBAPP
                }), (0, l.jsx)(A.Button, {
                    onClick: () => window.open(v.default.getArticleURL(D.HelpdeskArticles.GIFTING), "_blank"),
                    look: A.Button.Looks.LINK,
                    color: A.Button.Colors.LINK,
                    children: L.default.Messages.GIFT_CODE_AUTH_INVALID_TIP
                })]
            })
        }
        renderAppOpened() {
            return (0, l.jsxs)(A.default, {
                children: [(0, l.jsx)(A.Title, {
                    className: P.marginBottom8,
                    children: L.default.Messages.APP_OPENED_TITLE
                }), (0, l.jsx)(A.SubTitle, {
                    children: L.default.Messages.APP_OPENED_BODY
                }), (0, l.jsx)(A.Button, {
                    className: P.marginTop40,
                    onClick: () => this.setState({
                        continueOnWeb: !0
                    }),
                    children: L.default.Messages.GIFT_CODE_AUTH_CONTINUE_IN_BROWSER
                })]
            })
        }
        renderVerification(e) {
            let {
                sentVerification: t
            } = this.state;
            return (0, l.jsxs)(A.default, {
                children: [(0, l.jsx)(A.Image, {
                    src: s("892235"),
                    className: P.marginBottom8
                }), (0, l.jsx)(A.Title, {
                    children: L.default.Messages.GIFT_CODE_AUTH_VERIFICATION_TITLE.format({
                        username: e.username
                    })
                }), (0, l.jsx)(A.SubTitle, {
                    className: P.marginTop20,
                    children: L.default.Messages.GIFT_CODE_AUTH_HELP_TEXT_VERIFICATION_REQUIRED
                }), (0, l.jsx)(A.Button, {
                    disabled: t,
                    className: P.marginTop40,
                    onClick: this.handleResendVerification,
                    children: t ? L.default.Messages.GIFT_CODE_AUTH_VERIFICATION_SENT : L.default.Messages.RESEND_VERIFICATION_EMAIL
                }), (0, l.jsx)(A.Button, {
                    look: A.Button.Looks.LINK,
                    color: A.Button.Colors.LINK,
                    onClick: this.refreshUser,
                    className: P.marginTop8,
                    children: L.default.Messages.GIFT_CODE_AUTH_CHECK_VERIFICATION_AGAIN
                })]
            })
        }
        renderAuthenticated(e, t) {
            let s = this.getErrorMessage(e);
            return (0, l.jsxs)(A.default, {
                children: [(0, l.jsx)(O.default, {
                    giftCode: e
                }), (0, l.jsx)(A.Button, {
                    disabled: null != s,
                    className: P.marginTop40,
                    onClick: this.handleAccept,
                    children: L.default.Messages.GIFT_CODE_AUTH_ACCEPT
                }), null != s ? (0, l.jsx)(A.SubTitle, {
                    className: P.marginTop20,
                    children: s
                }) : (0, l.jsx)(A.SubText, {
                    className: P.marginTop20,
                    children: L.default.Messages.GIFT_CODE_AUTH_LOGGED_IN_AS.format({
                        userTag: C.default.getUserTag(t),
                        onLogoutClick: this.handleLogout
                    })
                })]
            })
        }
        render() {
            let {
                nativeAppState: e,
                sku: t,
                authenticated: s,
                giftCode: n,
                isResolved: a,
                isAccepting: i,
                transitionTo: r,
                location: u
            } = this.props, {
                fetchingUser: o,
                continueOnWeb: d
            } = this.state;
            if (e === D.NativeAppStates.OPEN && !d) return this.renderAppOpened();
            if (e === D.NativeAppStates.OPENING) return this.renderSpinner(L.default.Messages.APP_OPENING);
            if (i) return this.renderSpinner(L.default.Messages.GIFT_CODE_AUTH_ACCEPTING);
            if (null == n) return a ? this.renderExpiredInvite() : this.renderSpinner(L.default.Messages.GIFT_CODE_AUTH_RESOLVING);
            if (a) {
                if (s) {
                    let e = this.state.currentUser;
                    return o || null == e ? this.renderSpinner(L.default.Messages.GIFT_CODE_AUTH_FETCHING_USER) : this.requiresVerification && null != e ? this.renderVerification(e) : this.renderAuthenticated(n, e)
                }
                return "login" === this.getMode() ? (0, l.jsx)(R.default, {
                    giftCodeSKU: t,
                    giftCode: n,
                    transitionTo: r,
                    location: u
                }) : (0, l.jsx)(x.default, {
                    giftCodeSKU: t,
                    giftCode: n,
                    transitionTo: r,
                    location: u
                })
            }
            return null
        }
        constructor(...e) {
            super(...e), M(this, "state", {
                error: null,
                continueOnWeb: !1,
                currentUser: null,
                sentVerification: !1,
                fetchingUser: !1
            }), M(this, "refreshUser", () => {
                this.setState({
                    fetchingUser: !0
                }), I.fetchCurrentUser({
                    withAnalyticsToken: !0
                }).then(e => this.setState({
                    currentUser: e,
                    fetchingUser: !1
                })).catch(() => this.setState({
                    fetchingUser: !1
                }))
            }), M(this, "handleLogout", () => {
                let e = this.props.match.params.giftCode;
                c.default.logout(D.Routes.GIFT_CODE_LOGIN(e))
            }), M(this, "handleResendVerification", () => {
                c.default.verifyResend(), this.setState({
                    sentVerification: !0
                })
            }), M(this, "handleAccept", async () => {
                let {
                    transitionTo: e,
                    giftCode: t
                } = this.props;
                if (null == t) throw Error("Trying to accept gift before resolve");
                let s = this.getCode();
                try {
                    this.setState({
                        error: null
                    }), await f.default.redeemGiftCode({
                        code: s
                    }), e(D.Routes.APP)
                } catch (e) {
                    this.setState({
                        error: e
                    })
                }
            }), M(this, "resolveGiftCode", () => {
                let {
                    transitionTo: e
                } = this.props, t = this.getCode();
                f.default.resolveGiftCode(t, !0, !0).then(s => {
                    null != s && null != s.giftCode.promotion && e(D.Routes.BILLING_PROMOTION_REDEMPTION(t))
                })
            })
        }
    }
    t.default = o.default.connectStores([N.default, g.default, p.default, m.default, T.default, _.default], e => {
        let t = e.match.params.giftCode,
            s = N.default.get(t),
            n = null != s ? m.default.get(s.skuId) : null;
        return {
            giftCode: s,
            sku: n,
            libraryApplication: null != n && (null == s ? void 0 : s.entitlementBranches) != null ? S.firstLibraryApplicationForGiftCode(s.entitlementBranches, n, g.default) : null,
            authenticated: p.default.isAuthenticated(),
            defaultRoute: T.default.defaultRoute,
            isResolved: N.default.getIsResolved(t),
            isAccepting: N.default.getIsAccepting(t),
            libraryApplicationsFetched: g.default.fetched,
            nativeAppState: _.default.getState(t)
        }
    })(j)
}