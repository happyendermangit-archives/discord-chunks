function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r = n("735250"),
        a = n("470079"),
        s = n("120356"),
        o = n.n(s),
        l = n("481060"),
        u = n("129861"),
        d = n("730749"),
        _ = n("484459"),
        c = n("103575"),
        E = n("285952"),
        I = n("981631"),
        T = n("265299");

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class S extends(i = a.Component) {
        render() {
            let {
                popoutOpen: e
            } = this.state, {
                user: t,
                analyticsContext: n,
                disablePopout: i,
                guildId: a
            } = this.props, s = {
                location: {
                    ...n.location,
                    object: I.AnalyticsObjects.LIST_ITEM
                }
            };
            return (0, r.jsx)(l.Popout, {
                preload: () => (0, _.maybeFetchUserProfileForPopout)(t.id, t.getAvatarURL(a, 80), {
                    guildId: a
                }),
                renderPopout: e => (0, r.jsx)(c.default, {
                    ...e,
                    location: "UserListItem",
                    guildId: a,
                    userId: t.id,
                    analyticsParams: s
                }),
                position: "left",
                onRequestClose: this.handleUserPopoutClose,
                shouldShow: !i && e,
                children: e => this.renderUserPopout(e)
            })
        }
        constructor(...e) {
            super(...e), f(this, "state", {
                popoutOpen: !1
            }), f(this, "handleClickUser", () => {
                let {
                    onPopoutOpen: e
                } = this.props;
                this.setState({
                    popoutOpen: !this.state.popoutOpen
                }), null == e || e()
            }), f(this, "handleUserPopoutClose", () => {
                let {
                    onPopoutClose: e
                } = this.props;
                this.setState({
                    popoutOpen: !1
                }), null == e || e()
            }), f(this, "renderUserPopout", e => {
                let {
                    className: t,
                    disablePopout: n,
                    onContextMenu: i,
                    user: a,
                    status: s,
                    textClassName: d,
                    nick: _,
                    guildId: c
                } = this.props;
                return (0, r.jsxs)(E.default, {
                    align: E.default.Align.CENTER,
                    className: o()(T.memberListItem, t, {
                        [T.popoutDisabled]: n
                    }),
                    onContextMenu: i,
                    onMouseDown: e.onMouseDown,
                    onKeyDown: e.onKeyDown,
                    onClick: this.handleClickUser,
                    children: [(0, r.jsx)(l.Avatar, {
                        src: a.getAvatarURL(c, 24),
                        className: T.avatar,
                        "aria-label": a.username,
                        size: l.AvatarSizes.SIZE_24,
                        status: s
                    }), (0, r.jsx)(l.Text, {
                        className: o()(T.memberListItemTag, d),
                        variant: "text-sm/normal",
                        children: (0, r.jsx)(u.default, {
                            user: a,
                            nick: _,
                            usernameClass: T.username,
                            hideDiscriminator: !0
                        })
                    })]
                })
            })
        }
    }
    f(S, "defaultProps", {
        disablePopout: !1
    }), t.default = (0, d.default)(S)
}