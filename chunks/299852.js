function(e, t, s) {
    "use strict";
    s.r(t), s("47120");
    var n, a = s("735250"),
        l = s("470079"),
        i = s("593473"),
        r = s("442837"),
        u = s("544891"),
        o = s("481060"),
        d = s("129293"),
        c = s("108427"),
        f = s("598077"),
        E = s("896797"),
        I = s("819570"),
        _ = s("981631"),
        h = s("930441"),
        p = s("689938"),
        T = s("794711");

    function N(e, t, s) {
        return t in e ? Object.defineProperty(e, t, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = s, e
    }
    r.default.initialize();
    class g extends(n = l.PureComponent) {
        componentDidMount() {
            let e = (0, d.default)(this.props.location),
                t = (0, i.parse)(this.props.location.search);
            u.HTTP.post({
                url: _.Endpoints.DISABLE_EMAIL_NOTIFICATIONS,
                body: {
                    token: e,
                    pixel_uuid: t.hash,
                    category: t.category,
                    email_type: t.email_type
                },
                oldFormErrors: !0
            }).then(e => {
                let {
                    body: {
                        user: s
                    }
                } = e, n = new f.default(s);
                this.setState({
                    success: !0,
                    busy: !1,
                    user: n,
                    category: t.category
                })
            }, () => this.setState({
                success: !1,
                busy: !1
            })), (0, c.trackAppUIViewed)("disable_email_notifications")
        }
        renderBusy() {
            return (0, a.jsx)(I.default, {
                children: (0, a.jsx)(I.AuthSpinner, {})
            })
        }
        renderCategorySuccess(e, t) {
            let {
                defaultRoute: s,
                transitionTo: n
            } = this.props, l = p.default.Messages.EMAIL_CATEGORY_UNSUBSCRIBE_EMAIL_BODY.format({
                category: t
            });
            return (0, a.jsxs)(I.default, {
                children: [(0, a.jsx)(I.Title, {
                    className: T.marginBottom8,
                    children: p.default.Messages.EMAIL_CATEGORY_UNSUBSCRIBE_HEADER
                }), (0, a.jsx)(I.SubTitle, {
                    children: l
                }), (0, a.jsx)(I.Button, {
                    className: T.marginTop20,
                    onClick: () => n(s),
                    children: p.default.Messages.CONTINUE_TO_WEBAPP
                }), (0, a.jsx)(I.Button, {
                    className: T.marginTop8,
                    color: I.Button.Colors.LINK,
                    look: I.Button.Looks.LINK,
                    onClick: () => n(_.Routes.SETTINGS("notifications", h.EMAILS_SUBSECTION)),
                    children: p.default.Messages.EMAIL_CATEGORY_MANAGE_SETTING_LABEL
                })]
            })
        }
        renderSuccess() {
            let {
                defaultRoute: e,
                transitionTo: t
            } = this.props, {
                user: s,
                category: n
            } = this.state;
            if (null != n) {
                let e = h.EmailCategoriesList.find(e => e.category === n);
                if (null != e) return this.renderCategorySuccess(n, e.label())
            }
            return (0, a.jsxs)(I.default, {
                children: [(0, a.jsx)(I.Avatar, {
                    src: null == s ? void 0 : s.getAvatarURL(void 0, 100),
                    size: o.AvatarSizes.DEPRECATED_SIZE_100,
                    className: T.marginBottom20
                }), (0, a.jsx)(I.Title, {
                    className: T.marginBottom8,
                    children: p.default.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_SUCCESS_HEADER
                }), (0, a.jsx)(I.SubTitle, {
                    children: p.default.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_SUCCESS_BODY
                }), (0, a.jsx)(I.Button, {
                    className: T.marginTop40,
                    onClick: () => t(e),
                    children: p.default.Messages.CONTINUE_TO_WEBAPP
                })]
            })
        }
        renderError() {
            let {
                defaultRoute: e,
                transitionTo: t
            } = this.props;
            return (0, a.jsxs)(I.default, {
                children: [(0, a.jsx)(I.Image, {
                    src: s("105020"),
                    className: T.marginBottom20
                }), (0, a.jsx)(I.Title, {
                    className: T.marginBottom8,
                    children: p.default.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_HEADER
                }), (0, a.jsx)(I.SubTitle, {
                    children: p.default.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_BODY
                }), (0, a.jsx)(I.Button, {
                    className: T.marginTop40,
                    onClick: () => t(e),
                    children: p.default.Messages.CONTINUE_TO_WEBAPP
                })]
            })
        }
        render() {
            let {
                busy: e,
                success: t
            } = this.state;
            return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError()
        }
        constructor(...e) {
            super(...e), N(this, "state", {
                busy: !0,
                success: !1,
                user: null,
                category: null
            })
        }
    }
    N(g, "defaultProps", {
        transitionTo: e => s.g.location.assign(e)
    }), t.default = r.default.connectStores([E.default], () => ({
        defaultRoute: E.default.defaultRoute
    }))(g)
}