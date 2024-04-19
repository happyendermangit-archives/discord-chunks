function(e, t, s) {
    "use strict";
    s.r(t), s("47120");
    var n, a = s("735250"),
        l = s("470079"),
        i = s("593473"),
        r = s("442837"),
        u = s("544891"),
        o = s("108427"),
        d = s("601964"),
        c = s("896797"),
        f = s("819570"),
        E = s("129293"),
        I = s("981631"),
        _ = s("689938"),
        h = s("794711");

    function p(e, t, s) {
        return t in e ? Object.defineProperty(e, t, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = s, e
    }
    r.default.initialize();
    class T extends(n = l.PureComponent) {
        componentDidMount() {
            let e = (0, E.default)(this.props.location),
                t = (0, i.parse)(this.props.location.search);
            u.HTTP.post({
                url: I.Endpoints.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                body: {
                    token: e,
                    pixel_uuid: t.hash,
                    guild_id: t.guild_id
                },
                oldFormErrors: !0
            }).then(e => {
                let {
                    body: {
                        guild: t
                    }
                } = e, s = new d.default(t);
                this.setState({
                    success: !0,
                    busy: !1,
                    guild: s
                })
            }, () => this.setState({
                success: !1,
                busy: !1
            })), (0, o.trackAppUIViewed)("disable_server_highlight_notifications")
        }
        renderBusy() {
            return (0, a.jsx)(f.default, {
                children: (0, a.jsx)(f.AuthSpinner, {})
            })
        }
        renderSuccess() {
            let {
                defaultRoute: e,
                transitionTo: t
            } = this.props, {
                guild: s
            } = this.state;
            return (0, a.jsxs)(f.default, {
                children: [(0, a.jsx)(f.Title, {
                    className: h.marginBottom8,
                    children: _.default.Messages.SERVER_HIGHLIGHT_UNSUBSCRIBE_HEADER
                }), (0, a.jsx)(f.SubTitle, {
                    children: _.default.Messages.SERVER_HIGHLIGHT_UNSUBSCRIBE_BODY.format({
                        guildName: s.name
                    })
                }), (0, a.jsx)(f.Button, {
                    className: h.marginTop40,
                    onClick: () => t(e),
                    children: _.default.Messages.CONTINUE_TO_WEBAPP
                }), (0, a.jsx)(f.Button, {
                    className: h.marginTop8,
                    color: f.Button.Colors.LINK,
                    look: f.Button.Looks.LINK,
                    onClick: () => {
                        t(I.Routes.USER_GUILD_NOTIFICATION_SETTINGS(s.id))
                    },
                    children: _.default.Messages.SERVER_HIGHLIGHT_MANAGE_SETTINGS
                })]
            })
        }
        renderError() {
            let {
                defaultRoute: e,
                transitionTo: t
            } = this.props;
            return (0, a.jsxs)(f.default, {
                children: [(0, a.jsx)(f.Image, {
                    src: s("105020"),
                    className: h.marginBottom20
                }), (0, a.jsx)(f.Title, {
                    className: h.marginBottom8,
                    children: _.default.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_HEADER
                }), (0, a.jsx)(f.SubTitle, {
                    children: _.default.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_BODY
                }), (0, a.jsx)(f.Button, {
                    className: h.marginTop40,
                    onClick: () => t(e),
                    children: _.default.Messages.CONTINUE_TO_WEBAPP
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
            super(...e), p(this, "state", {
                busy: !0,
                success: !1,
                guild: null
            })
        }
    }
    p(T, "defaultProps", {
        transitionTo: e => s.g.location.assign(e)
    }), t.default = r.default.connectStores([c.default], () => ({
        defaultRoute: c.default.defaultRoute
    }))(T)
}