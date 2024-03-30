function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Sizes: function() {
            return A
        }
    });
    var r, o = n("470079"),
        i = n("803997"),
        a = n.n(i),
        u = n("512722"),
        s = n.n(u),
        l = n("784184"),
        c = n("335050"),
        f = n("540105"),
        d = n("428009"),
        _ = n("208454"),
        E = n("893427"),
        p = n("341633"),
        m = n("845265"),
        y = n("943643");

    function I(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function h(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function T(e) {
        return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function S(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                O(e, t, n[t])
            })
        }
        return e
    }

    function v(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function g(e, t) {
        return (g = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var A = {
        SIZE_16: 16,
        SIZE_24: 24,
        SIZE_32: 32,
        SIZE_56: 56
    };

    function b(e, t) {
        var n, r, o = (n = e, null != (r = d.default) && "undefined" != typeof Symbol && r[Symbol.hasInstance] ? !!r[Symbol.hasInstance](n) : n instanceof r) ? e : null != e ? e.user : null;
        return null != o ? o.id : "user-".concat(t)
    }
    var N = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && g(e, t)
        }(N, e);
        var t, n, r, i, u, d = (t = N, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = T(t);
            if (n) {
                var a = T(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : I(e)
        });

        function N() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, N), e = d.apply(this, arguments), O(I(e), "state", {
                popoutUserId: null
            }), O(I(e), "_ref", o.createRef()), O(I(e), "defaultRenderUser", function(t, n, r) {
                var i = e.props,
                    a = i.showUserPopout,
                    u = i.guildId,
                    s = i.size;
                if (null == t) {
                    if (!e.props.showDefaultAvatarsForNullUsers) return o.createElement("div", {
                        className: y.emptyUser
                    });
                    var c = (null != r ? r : 0) % p.default.DEFAULT_AVATARS.length,
                        f = p.default.DEFAULT_AVATARS[c];
                    return o.createElement("img", {
                        src: f,
                        alt: "",
                        className: y.avatar
                    })
                }
                var d = o.createElement("img", {
                    key: t.id,
                    src: t.getAvatarURL(u, s),
                    alt: t.username,
                    className: y.avatar
                });
                return a ? o.createElement(l.Clickable, {
                    key: t.id,
                    className: y.clickableAvatar,
                    onClick: function() {
                        null != e._ref.current && null != t && e.setState({
                            popoutUserId: t.id
                        })
                    },
                    tabIndex: -1
                }, d) : d
            }), e
        }
        return r = N, i = [{
            key: "renderUsers",
            value: function() {
                for (var e = this.props, t = e.users, n = e.max, r = e.renderUser, i = void 0 === r ? this.defaultRenderUser : r, a = e.size, u = e.extraDetail, s = [], l = t.length === n ? t.length : n - 1, c = this.renderMoreUsers(l), f = 0; f < l && f < t.length;) {
                    var d, _ = null == c && null == u && f === t.length - 1,
                        E = i(t[f], _, f);
                    s.push(_ ? o.createElement("div", {
                        key: b(null !== (d = t[f]) && void 0 !== d ? d : null, f),
                        className: y.avatarContainer
                    }, E) : o.createElement(m.default, {
                        key: b(t[f], f),
                        className: y.avatarContainerMasked,
                        height: a,
                        width: a,
                        mask: m.default.Masks.VOICE_USER_SUMMARY_ITEM
                    }, E)), f++
                }
                return null != u ? s.push(u) : null != c && s.push(c), s
            }
        }, {
            key: "renderMoreUsers",
            value: function(e) {
                var t = this.props,
                    n = t.max,
                    r = t.count,
                    i = t.hideMoreUsers,
                    a = t.renderMoreUsers,
                    u = t.users,
                    s = Math.min(e, u.length);
                if (!i) {
                    if (null != r) {
                        if (r >= n) return o.createElement(o.Fragment, {
                            key: "more-users"
                        }, a("".concat(n, "+"), n));
                        if (r > u.length) {
                            var l = r - u.length;
                            return o.createElement(o.Fragment, {
                                key: "more-users"
                            }, a("+".concat(l), l))
                        }
                    } else if (s < u.length) {
                        var c = Math.min(u.length - s, 99);
                        return o.createElement(o.Fragment, {
                            key: "more-users"
                        }, a("+".concat(c), c))
                    }
                }
            }
        }, {
            key: "renderIcon",
            value: function() {
                return this.props.renderIcon ? o.createElement(E.default, {
                    foreground: y.__invalid_foreground,
                    className: y.icon
                }) : null
            }
        }, {
            key: "render",
            value: function() {
                var e = this,
                    t = this.props,
                    n = t.className,
                    r = t.size,
                    i = t.users,
                    u = t.guildId,
                    d = t.showUserPopout,
                    E = t.useFallbackUserForPopout,
                    p = this.state.popoutUserId,
                    m = i.find(function(e) {
                        return null != e && e.id === p
                    }),
                    I = E && null == _.default.getUser(p);
                return o.createElement(l.Popout, {
                    position: "right",
                    preload: null == m ? void 0 : function() {
                        return (0, c.default)(m.id, m.getAvatarURL(u, 80), {
                            guildId: u
                        })
                    },
                    shouldShow: !0 === d && null != p,
                    fixed: !0,
                    renderPopout: function(t) {
                        return s()(null != p, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), o.createElement(f.default, v(S(v(S({}, e.props), {
                            location: "UserSummaryItem",
                            user: I && null != m ? m : void 0
                        }), t), {
                            userId: p,
                            guildId: e.props.guildId
                        }))
                    },
                    onRequestClose: function() {
                        return e.setState({
                            popoutUserId: null
                        })
                    }
                }, function(t) {
                    return o.createElement("div", S({
                        className: a()(n, y.container, function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A.SIZE_24;
                            switch (e) {
                                case A.SIZE_16:
                                    return y.size16;
                                case A.SIZE_24:
                                    return y.size24;
                                case A.SIZE_32:
                                    return y.size32;
                                case A.SIZE_56:
                                    return y.size56;
                                default:
                                    return y.size24
                            }
                        }(r)),
                        ref: e._ref
                    }, t), e.renderIcon(), e.renderUsers())
                })
            }
        }], h(r.prototype, i), u && h(r, u), N
    }(o.PureComponent);
    O(N, "defaultProps", {
        max: 10,
        renderMoreUsers: function(e) {
            return o.createElement("div", {
                className: y.moreUsers
            }, e)
        },
        renderIcon: !1,
        showDefaultAvatarsForNullUsers: !1,
        size: A.SIZE_24
    }), t.default = N
}