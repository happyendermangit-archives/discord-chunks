function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Sizes: function() {
            return S
        },
        default: function() {
            return v
        }
    }), n("424973"), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("627445"),
        o = n.n(r),
        u = n("77078"),
        d = n("506885"),
        c = n("981601"),
        f = n("766274"),
        m = n("697218"),
        p = n("368121"),
        h = n("523096"),
        E = n("587974"),
        g = n("856614");
    let S = {
        SIZE_16: 16,
        SIZE_24: 24,
        SIZE_32: 32,
        SIZE_56: 56
    };

    function C(e, t) {
        let n = e instanceof f.default ? e : null != e ? e.user : null;
        return null != n ? n.id : "user-".concat(t)
    }
    class T extends i.PureComponent {
        renderUsers() {
            let {
                users: e,
                max: t,
                renderUser: n = this.defaultRenderUser,
                size: i,
                extraDetail: a
            } = this.props, s = [], r = e.length === t ? e.length : t - 1, o = this.renderMoreUsers(r), u = 0;
            for (; u < r && u < e.length;) {
                var d;
                let t = null == o && null == a && u === e.length - 1,
                    r = n(e[u], t, u);
                s.push(t ? (0, l.jsx)("div", {
                    className: g.avatarContainer,
                    children: r
                }, C(null !== (d = e[u]) && void 0 !== d ? d : null, u)) : (0, l.jsx)(E.default, {
                    className: g.avatarContainerMasked,
                    height: i,
                    width: i,
                    mask: E.default.Masks.VOICE_USER_SUMMARY_ITEM,
                    children: r
                }, C(e[u], u))), u++
            }
            return null != a ? s.push(a) : null != o && s.push(o), s
        }
        renderMoreUsers(e) {
            let {
                max: t,
                count: n,
                hideMoreUsers: a,
                renderMoreUsers: s,
                users: r
            } = this.props, o = Math.min(e, r.length);
            if (!a) {
                if (null != n) {
                    if (n >= t) return (0, l.jsx)(i.Fragment, {
                        children: s("".concat(t, "+"), t)
                    }, "more-users");
                    if (n > r.length) {
                        let e = n - r.length;
                        return (0, l.jsx)(i.Fragment, {
                            children: s("+".concat(e), e)
                        }, "more-users")
                    }
                } else if (o < r.length) {
                    let e = Math.min(r.length - o, 99);
                    return (0, l.jsx)(i.Fragment, {
                        children: s("+".concat(e), e)
                    }, "more-users")
                }
            }
        }
        renderIcon() {
            return this.props.renderIcon ? (0, l.jsx)(p.default, {
                foreground: g.foreground,
                className: g.icon
            }) : null
        }
        render() {
            let {
                className: e,
                size: t,
                users: n,
                guildId: i,
                showUserPopout: a,
                useFallbackUserForPopout: r
            } = this.props, {
                popoutUserId: f
            } = this.state, p = n.find(e => null != e && e.id === f), h = r && null == m.default.getUser(f);
            return (0, l.jsx)(u.Popout, {
                position: "right",
                preload: null == p ? void 0 : () => (0, d.default)(p.id, p.getAvatarURL(i, 80), {
                    guildId: i
                }),
                shouldShow: !0 === a && null != f,
                fixed: !0,
                renderPopout: e => (o(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, l.jsx)(c.default, {
                    ...this.props,
                    user: h && null != p ? p : void 0,
                    ...e,
                    userId: f,
                    guildId: this.props.guildId
                })),
                onRequestClose: () => this.setState({
                    popoutUserId: null
                }),
                children: n => (0, l.jsxs)("div", {
                    className: s(e, g.container, function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.SIZE_24;
                        switch (e) {
                            case S.SIZE_16:
                                return g.size16;
                            case S.SIZE_24:
                                return g.size24;
                            case S.SIZE_32:
                                return g.size32;
                            case S.SIZE_56:
                                return g.size56;
                            default:
                                return g.size24
                        }
                    }(t)),
                    ref: this._ref,
                    ...n,
                    children: [this.renderIcon(), this.renderUsers()]
                })
            })
        }
        constructor(...e) {
            super(...e), this.state = {
                popoutUserId: null
            }, this._ref = i.createRef(), this.defaultRenderUser = (e, t, n) => {
                let {
                    showUserPopout: i,
                    guildId: a,
                    size: s
                } = this.props;
                if (null == e) {
                    if (!this.props.showDefaultAvatarsForNullUsers) return (0, l.jsx)("div", {
                        className: g.emptyUser
                    });
                    {
                        let e = (null != n ? n : 0) % h.default.DEFAULT_AVATARS.length,
                            t = h.default.DEFAULT_AVATARS[e];
                        return (0, l.jsx)("img", {
                            src: t,
                            alt: "",
                            className: g.avatar
                        })
                    }
                }
                let r = (0, l.jsx)("img", {
                    src: e.getAvatarURL(a, s),
                    alt: e.username,
                    className: g.avatar
                }, e.id);
                return i ? (0, l.jsx)(u.Clickable, {
                    className: g.clickableAvatar,
                    onClick: () => {
                        null != this._ref.current && null != e && this.setState({
                            popoutUserId: e.id
                        })
                    },
                    tabIndex: -1,
                    children: r
                }, e.id) : r
            }
        }
    }
    T.defaultProps = {
        max: 10,
        renderMoreUsers: function(e) {
            return (0, l.jsx)("div", {
                className: g.moreUsers,
                children: e
            })
        },
        renderIcon: !1,
        showDefaultAvatarsForNullUsers: !1,
        size: S.SIZE_24
    };
    var v = T
}