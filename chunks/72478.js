function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("470079"),
        i = n("803997"),
        a = n.n(i),
        u = n("784184"),
        s = n("956407"),
        l = n("690036"),
        c = n("335050"),
        f = n("540105"),
        d = n("143953"),
        _ = n("281767"),
        E = n("178250");

    function p(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function I(e) {
        return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function h(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                y(e, t, n[t])
            })
        }
        return e
    }

    function O(e, t) {
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

    function T(e, t) {
        return (T = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var S = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && T(e, t)
        }(v, e);
        var t, n, r, i, l, S = (t = v, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = I(t);
            if (n) {
                var a = I(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : p(e)
        });

        function v() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, v), e = S.apply(this, arguments), y(p(e), "state", {
                popoutOpen: !1
            }), y(p(e), "handleClickUser", function() {
                var t = e.props.onPopoutOpen;
                e.setState({
                    popoutOpen: !e.state.popoutOpen
                }), null == t || t()
            }), y(p(e), "handleUserPopoutClose", function() {
                var t = e.props.onPopoutClose;
                e.setState({
                    popoutOpen: !1
                }), null == t || t()
            }), y(p(e), "renderUserPopout", function(t) {
                var n = e.props,
                    r = n.className,
                    i = n.disablePopout,
                    l = n.onContextMenu,
                    c = n.user,
                    f = n.status,
                    _ = n.textClassName,
                    p = n.nick,
                    m = n.guildId;
                return o.createElement(d.default, {
                    align: d.default.Align.CENTER,
                    className: a()(E.memberListItem, r, y({}, E.popoutDisabled, i)),
                    onContextMenu: l,
                    onMouseDown: t.onMouseDown,
                    onKeyDown: t.onKeyDown,
                    onClick: e.handleClickUser
                }, o.createElement(u.Avatar, {
                    src: c.getAvatarURL(m, 24),
                    className: E.avatar,
                    "aria-label": c.username,
                    size: u.AvatarSizes.SIZE_24,
                    status: f
                }), o.createElement(u.Text, {
                    className: a()(E.memberListItemTag, _),
                    variant: "text-sm/normal"
                }, o.createElement(s.default, {
                    user: c,
                    nick: p,
                    usernameClass: E.username,
                    hideDiscriminator: !0
                })))
            }), e
        }
        return r = v, i = [{
            key: "render",
            value: function() {
                var e = this,
                    t = this.state.popoutOpen,
                    n = this.props,
                    r = n.user,
                    i = n.analyticsContext,
                    a = n.disablePopout,
                    s = n.guildId,
                    l = {
                        location: O(h({}, i.location), {
                            object: _.AnalyticsObjects.LIST_ITEM
                        })
                    };
                return o.createElement(u.Popout, {
                    preload: function() {
                        return (0, c.default)(r.id, r.getAvatarURL(s, 80), {
                            guildId: s
                        })
                    },
                    renderPopout: function(e) {
                        return o.createElement(f.default, O(h({}, e), {
                            location: "UserListItem",
                            guildId: s,
                            userId: r.id,
                            analyticsParams: l
                        }))
                    },
                    position: "left",
                    onRequestClose: this.handleUserPopoutClose,
                    shouldShow: !a && t
                }, function(t) {
                    return e.renderUserPopout(t)
                })
            }
        }], m(r.prototype, i), l && m(r, l), v
    }(o.Component);
    y(S, "defaultProps", {
        disablePopout: !1
    }), t.default = (0, l.default)(S)
}