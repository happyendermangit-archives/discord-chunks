function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Sizes: function() {
            return m
        }
    }), n("653041"), n("47120");
    var i, r = n("735250"),
        s = n("470079"),
        a = n("120356"),
        o = n.n(a),
        l = n("512722"),
        u = n.n(l),
        d = n("481060"),
        _ = n("484459"),
        c = n("103575"),
        E = n("598077"),
        I = n("594174"),
        T = n("632184"),
        f = n("426563"),
        S = n("806519"),
        h = n("125033");

    function A(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let m = {
        SIZE_16: 16,
        SIZE_24: 24,
        SIZE_32: 32,
        SIZE_56: 56
    };

    function N(e, t) {
        let n = e instanceof E.default ? e : null != e ? e.user : null;
        return null != n ? n.id : "user-".concat(t)
    }
    class p extends(i = s.PureComponent) {
        renderUsers() {
            let {
                users: e,
                max: t,
                renderUser: n = this.defaultRenderUser,
                size: i,
                extraDetail: s
            } = this.props, a = [], o = e.length === t ? e.length : t - 1, l = this.renderMoreUsers(o), u = 0;
            for (; u < o && u < e.length;) {
                var d;
                let t = null == l && null == s && u === e.length - 1,
                    o = n(e[u], t, u);
                a.push(t ? (0, r.jsx)("div", {
                    className: h.avatarContainer,
                    children: o
                }, N(null !== (d = e[u]) && void 0 !== d ? d : null, u)) : (0, r.jsx)(S.default, {
                    className: h.avatarContainerMasked,
                    height: i,
                    width: i,
                    mask: S.default.Masks.VOICE_USER_SUMMARY_ITEM,
                    children: o
                }, N(e[u], u))), u++
            }
            return null != s ? a.push(s) : null != l && a.push(l), a
        }
        renderMoreUsers(e) {
            let {
                max: t,
                count: n,
                hideMoreUsers: i,
                renderMoreUsers: a,
                users: o
            } = this.props, l = Math.min(e, o.length);
            if (!i) {
                if (null != n) {
                    if (n >= t) return (0, r.jsx)(s.Fragment, {
                        children: a("".concat(t, "+"), t)
                    }, "more-users");
                    if (n > o.length) {
                        let e = n - o.length;
                        return (0, r.jsx)(s.Fragment, {
                            children: a("+".concat(e), e)
                        }, "more-users")
                    }
                } else if (l < o.length) {
                    let e = Math.min(o.length - l, 99);
                    return (0, r.jsx)(s.Fragment, {
                        children: a("+".concat(e), e)
                    }, "more-users")
                }
            }
        }
        renderIcon() {
            return this.props.renderIcon ? (0, r.jsx)(T.default, {
                foreground: h.__invalid_foreground,
                className: h.icon
            }) : null
        }
        render() {
            let {
                className: e,
                size: t,
                users: n,
                guildId: i,
                showUserPopout: s,
                useFallbackUserForPopout: a
            } = this.props, {
                popoutUserId: l
            } = this.state, E = n.find(e => null != e && e.id === l), T = a && null == I.default.getUser(l);
            return (0, r.jsx)(d.Popout, {
                position: "right",
                preload: null == E ? void 0 : () => (0, _.default)(E.id, E.getAvatarURL(i, 80), {
                    guildId: i
                }),
                shouldShow: !0 === s && null != l,
                fixed: !0,
                renderPopout: e => (u()(null != l, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, r.jsx)(c.default, {
                    ...this.props,
                    location: "UserSummaryItem",
                    user: T && null != E ? E : void 0,
                    ...e,
                    userId: l,
                    guildId: this.props.guildId
                })),
                onRequestClose: () => this.setState({
                    popoutUserId: null
                }),
                children: n => (0, r.jsxs)("div", {
                    className: o()(e, h.container, function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.SIZE_24;
                        switch (e) {
                            case m.SIZE_16:
                                return h.size16;
                            case m.SIZE_24:
                                return h.size24;
                            case m.SIZE_32:
                                return h.size32;
                            case m.SIZE_56:
                                return h.size56;
                            default:
                                return h.size24
                        }
                    }(t)),
                    ref: this._ref,
                    ...n,
                    children: [this.renderIcon(), this.renderUsers()]
                })
            })
        }
        constructor(...e) {
            super(...e), A(this, "state", {
                popoutUserId: null
            }), A(this, "_ref", s.createRef()), A(this, "defaultRenderUser", (e, t, n) => {
                let {
                    showUserPopout: i,
                    guildId: s,
                    size: a
                } = this.props;
                if (null == e) {
                    if (!this.props.showDefaultAvatarsForNullUsers) return (0, r.jsx)("div", {
                        className: h.emptyUser
                    });
                    {
                        let e = (null != n ? n : 0) % f.default.DEFAULT_AVATARS.length,
                            t = f.default.DEFAULT_AVATARS[e];
                        return (0, r.jsx)("img", {
                            src: t,
                            alt: "",
                            className: h.avatar
                        })
                    }
                }
                let o = (0, r.jsx)("img", {
                    src: e.getAvatarURL(s, a),
                    alt: e.username,
                    className: h.avatar
                }, e.id);
                return i ? (0, r.jsx)(d.Clickable, {
                    className: h.clickableAvatar,
                    onClick: () => {
                        null != this._ref.current && null != e && this.setState({
                            popoutUserId: e.id
                        })
                    },
                    tabIndex: -1,
                    children: o
                }, e.id) : o
            })
        }
    }
    A(p, "defaultProps", {
        max: 10,
        renderMoreUsers: function(e) {
            return (0, r.jsx)("div", {
                className: h.moreUsers,
                children: e
            })
        },
        renderIcon: !1,
        showDefaultAvatarsForNullUsers: !1,
        size: m.SIZE_24
    }), t.default = p
}