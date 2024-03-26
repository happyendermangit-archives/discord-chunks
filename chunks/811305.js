function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Sizes: function() {
            return y
        },
        default: function() {
            return C
        }
    }), n("424973"), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("627445"),
        o = n.n(r),
        u = n("77078"),
        d = n("506885"),
        c = n("340906"),
        f = n("766274"),
        p = n("697218"),
        m = n("368121"),
        h = n("523096"),
        x = n("587974"),
        E = n("856614");
    let y = {
        SIZE_16: 16,
        SIZE_24: 24,
        SIZE_32: 32,
        SIZE_56: 56
    };

    function g(e, t) {
        let n = e instanceof f.default ? e : null != e ? e.user : null;
        return null != n ? n.id : "user-".concat(t)
    }
    class S extends l.PureComponent {
        renderUsers() {
            let {
                users: e,
                max: t,
                renderUser: n = this.defaultRenderUser,
                size: l,
                extraDetail: a
            } = this.props, s = [], r = e.length === t ? e.length : t - 1, o = this.renderMoreUsers(r), u = 0;
            for (; u < r && u < e.length;) {
                var d;
                let t = null == o && null == a && u === e.length - 1,
                    r = n(e[u], t, u);
                s.push(t ? (0, i.jsx)("div", {
                    className: E.avatarContainer,
                    children: r
                }, g(null !== (d = e[u]) && void 0 !== d ? d : null, u)) : (0, i.jsx)(x.default, {
                    className: E.avatarContainerMasked,
                    height: l,
                    width: l,
                    mask: x.default.Masks.VOICE_USER_SUMMARY_ITEM,
                    children: r
                }, g(e[u], u))), u++
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
                    if (n >= t) return (0, i.jsx)(l.Fragment, {
                        children: s("".concat(t, "+"), t)
                    }, "more-users");
                    if (n > r.length) {
                        let e = n - r.length;
                        return (0, i.jsx)(l.Fragment, {
                            children: s("+".concat(e), e)
                        }, "more-users")
                    }
                } else if (o < r.length) {
                    let e = Math.min(r.length - o, 99);
                    return (0, i.jsx)(l.Fragment, {
                        children: s("+".concat(e), e)
                    }, "more-users")
                }
            }
        }
        renderIcon() {
            return this.props.renderIcon ? (0, i.jsx)(m.default, {
                foreground: E.foreground,
                className: E.icon
            }) : null
        }
        render() {
            let {
                className: e,
                size: t,
                users: n,
                guildId: l,
                showUserPopout: a,
                useFallbackUserForPopout: r
            } = this.props, {
                popoutUserId: f
            } = this.state, m = n.find(e => null != e && e.id === f), h = r && null == p.default.getUser(f);
            return (0, i.jsx)(u.Popout, {
                position: "right",
                preload: null == m ? void 0 : () => (0, d.default)(m.id, m.getAvatarURL(l, 80), {
                    guildId: l
                }),
                shouldShow: !0 === a && null != f,
                fixed: !0,
                renderPopout: e => (o(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, i.jsx)(c.default, {
                    ...this.props,
                    location: "UserSummaryItem",
                    user: h && null != m ? m : void 0,
                    ...e,
                    userId: f,
                    guildId: this.props.guildId
                })),
                onRequestClose: () => this.setState({
                    popoutUserId: null
                }),
                children: n => (0, i.jsxs)("div", {
                    className: s(e, E.container, function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y.SIZE_24;
                        switch (e) {
                            case y.SIZE_16:
                                return E.size16;
                            case y.SIZE_24:
                                return E.size24;
                            case y.SIZE_32:
                                return E.size32;
                            case y.SIZE_56:
                                return E.size56;
                            default:
                                return E.size24
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
            }, this._ref = l.createRef(), this.defaultRenderUser = (e, t, n) => {
                let {
                    showUserPopout: l,
                    guildId: a,
                    size: s
                } = this.props;
                if (null == e) {
                    if (!this.props.showDefaultAvatarsForNullUsers) return (0, i.jsx)("div", {
                        className: E.emptyUser
                    });
                    {
                        let e = (null != n ? n : 0) % h.default.DEFAULT_AVATARS.length,
                            t = h.default.DEFAULT_AVATARS[e];
                        return (0, i.jsx)("img", {
                            src: t,
                            alt: "",
                            className: E.avatar
                        })
                    }
                }
                let r = (0, i.jsx)("img", {
                    src: e.getAvatarURL(a, s),
                    alt: e.username,
                    className: E.avatar
                }, e.id);
                return l ? (0, i.jsx)(u.Clickable, {
                    className: E.clickableAvatar,
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
    S.defaultProps = {
        max: 10,
        renderMoreUsers: function(e) {
            return (0, i.jsx)("div", {
                className: E.moreUsers,
                children: e
            })
        },
        renderIcon: !1,
        showDefaultAvatarsForNullUsers: !1,
        size: y.SIZE_24
    };
    var C = S
}