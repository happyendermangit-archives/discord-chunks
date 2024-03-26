function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("222007");
    var s = n("37983"),
        a = n("884691"),
        l = n("730290"),
        r = n("446674"),
        i = n("872717"),
        u = n("970366"),
        o = n("813006"),
        d = n("476108"),
        c = n("124969"),
        f = n("457108"),
        E = n("49111"),
        _ = n("782340"),
        I = n("890957");
    r.default.initialize();
    class h extends a.PureComponent {
        componentDidMount() {
            let e = (0, f.default)(this.props.location),
                t = (0, l.parse)(this.props.location.search);
            i.HTTP.post({
                url: E.Endpoints.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
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
                } = e, n = new o.default(t);
                this.setState({
                    success: !0,
                    busy: !1,
                    guild: n
                })
            }, () => this.setState({
                success: !1,
                busy: !1
            })), (0, u.trackAppUIViewed)("disable_server_highlight_notifications")
        }
        renderBusy() {
            return (0, s.jsx)(c.default, {
                children: (0, s.jsx)(c.AuthSpinner, {})
            })
        }
        renderSuccess() {
            let {
                defaultRoute: e,
                transitionTo: t
            } = this.props, {
                guild: n
            } = this.state;
            return (0, s.jsxs)(c.default, {
                children: [(0, s.jsx)(c.Title, {
                    className: I.marginBottom8,
                    children: _.default.Messages.SERVER_HIGHLIGHT_UNSUBSCRIBE_HEADER
                }), (0, s.jsx)(c.SubTitle, {
                    children: _.default.Messages.SERVER_HIGHLIGHT_UNSUBSCRIBE_BODY.format({
                        guildName: n.name
                    })
                }), (0, s.jsx)(c.Button, {
                    className: I.marginTop40,
                    onClick: () => t(e),
                    children: _.default.Messages.CONTINUE_TO_WEBAPP
                }), (0, s.jsx)(c.Button, {
                    className: I.marginTop8,
                    color: c.Button.Colors.LINK,
                    look: c.Button.Looks.LINK,
                    onClick: () => {
                        t(E.Routes.USER_GUILD_NOTIFICATION_SETTINGS(n.id))
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
            return (0, s.jsxs)(c.default, {
                children: [(0, s.jsx)(c.Image, {
                    src: n("2862"),
                    className: I.marginBottom20
                }), (0, s.jsx)(c.Title, {
                    className: I.marginBottom8,
                    children: _.default.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_HEADER
                }), (0, s.jsx)(c.SubTitle, {
                    children: _.default.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_BODY
                }), (0, s.jsx)(c.Button, {
                    className: I.marginTop40,
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
            super(...e), this.state = {
                busy: !0,
                success: !1,
                guild: null
            }
        }
    }
    h.defaultProps = {
        transitionTo: e => n.g.location.assign(e)
    };
    var p = r.default.connectStores([d.default], () => ({
        defaultRoute: d.default.defaultRoute
    }))(h)
}