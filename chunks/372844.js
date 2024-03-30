function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a = n("470079"),
        u = n("803997"),
        s = n.n(u),
        l = n("613828"),
        c = n("898511"),
        f = n("447515"),
        d = n("784184"),
        _ = n("292895"),
        E = n("290976"),
        p = n("182425"),
        m = n("573525"),
        y = n("793570"),
        I = n("795798");

    function h(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function O(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function T(e, t, n) {
        return t && O(e.prototype, t), n && O(e, n), e
    }

    function S(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function v(e) {
        return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function g(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && b(e, t)
    }

    function A(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                S(e, t, n[t])
            })
        }
        return e
    }

    function b(e, t) {
        return (b = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function N(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r, o, i = v(e);
            if (t) {
                var a = v(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return n = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(n)
        }
    }
    var R = {
            SMOL: "Smol",
            MINI: "Mini",
            SMALLER: "Smaller",
            SMALL: "Small",
            MEDIUM: "Medium",
            LARGE: "Large",
            LARGER: "Larger",
            XLARGE: "XLarge"
        },
        C = (S(r = {}, R.SMOL, 16), S(r, R.MINI, 20), S(r, R.SMALLER, 24), S(r, R.SMALL, 30), S(r, R.MEDIUM, 40), S(r, R.LARGE, 50), S(r, R.LARGER, 64), S(r, R.XLARGE, 100), r),
        P = (S(o = {}, R.SMOL, [10, 10, 8, 6, 6, 4]), S(o, R.MINI, [12, 12, 10, 10, 8, 6, 4]), S(o, R.SMALLER, [13, 13, 11, 11, 9, 7, 5]), S(o, R.SMALL, [14, 14, 12, 12, 10, 8, 6]), S(o, R.MEDIUM, [16, 16, 14, 14, 12, 10, 8]), S(o, R.LARGE, [18, 18, 16, 16, 14, 12, 10]), S(o, R.LARGER, [19, 19, 17, 17, 15, 13, 11]), S(o, R.XLARGE, [20, 20, 18, 18, 16, 14, 12]), o),
        D = function(e) {
            g(n, e);
            var t = N(n);

            function n() {
                return h(this, n), t.apply(this, arguments)
            }
            return T(n, [{
                key: "renderAcronym",
                value: function() {
                    var e = this.props,
                        t = e.guild,
                        n = e.iconSrc;
                    return null != t.icon || null != n ? null : a.createElement("div", {
                        className: I.acronym
                    }, t.acronym)
                }
            }, {
                key: "renderBadge",
                value: function() {
                    var e = this.props,
                        t = e.showBadge,
                        n = e.guild,
                        r = e.badgeStrokeColor;
                    return t && null != n.hasFeature ? a.createElement(y.default, {
                        className: I.guildIconBadge,
                        guild: n,
                        badgeStrokeColor: r
                    }) : null
                }
            }, {
                key: "renderIcon",
                value: function() {
                    var e, t, n, r = this.props,
                        o = r.guild,
                        i = r.className,
                        u = (r.showBadge, r.active),
                        l = r.size,
                        c = r.style,
                        f = void 0 === c ? {} : c,
                        _ = r.textScale,
                        E = (r.showTooltip, r.tooltipPosition, r.onClick),
                        p = r.to,
                        y = (r.badgeStrokeColor, r.animate, r.tabIndex),
                        h = (r.iconSrc, r["aria-hidden"]),
                        O = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = function(e, t) {
                                if (null == e) return {};
                                var n, r, o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < i.length; r++) {
                                    if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                                }
                            }
                            return o
                        }(r, ["guild", "className", "showBadge", "active", "size", "style", "textScale", "showTooltip", "tooltipPosition", "onClick", "to", "badgeStrokeColor", "animate", "tabIndex", "iconSrc", "aria-hidden"]),
                        T = P[l],
                        v = null != E ? d.Clickable : "div";
                    return a.createElement(v, A({
                        className: s()(I.icon, i, (0, m.getClass)(I, "iconSize", l), (S(n = {}, null !== (e = (0, m.getClass)(I, "iconActive", l)) && void 0 !== e ? e : "", u), S(n, I.iconInactive, !u), S(n, I.noIcon, null == o.icon), n)),
                        "aria-hidden": h,
                        style: null == o.icon ? A({
                            fontSize: (null !== (t = T[o.acronym.length]) && void 0 !== t ? t : T[T.length - 1]) * _
                        }, f) : f,
                        onClick: null != p || null == E ? void 0 : E,
                        tabIndex: y
                    }, O), this.renderAcronym(), this.renderBadge())
                }
            }, {
                key: "renderTooltip",
                value: function() {
                    var e = this,
                        t = this.props,
                        n = t.guild,
                        r = t.showTooltip,
                        o = t.tooltipPosition;
                    return r ? a.createElement(d.Tooltip, {
                        text: n.name,
                        position: o,
                        "aria-label": !1
                    }, function(t) {
                        return a.cloneElement(a.Children.only(e.renderIcon()), A({}, t))
                    }) : this.renderIcon()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.to,
                        n = e.guild,
                        r = e.source,
                        o = e.tabIndex,
                        i = e["aria-hidden"];
                    return null != t ? a.createElement(l.Link, {
                        "aria-hidden": i,
                        to: {
                            pathname: t,
                            state: null != r ? {
                                analyticsSource: r
                            } : null
                        },
                        "aria-label": n.toString(),
                        tabIndex: o
                    }, this.renderTooltip()) : this.renderTooltip()
                }
            }]), n
        }(a.PureComponent),
        L = c.default.connectStores([E.default], function(e) {
            var t, n, r = e.guild,
                o = e.animate,
                i = e.iconSrc,
                a = e.style,
                u = e.size;
            return {
                style: (t = A({}, a), n = (n = {
                    backgroundImage: (0, p.makeCssUrlString)(null != i ? i : r.getIconURL(C[u], o && E.default.isFocused()))
                }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }), t)
            }
        })((0, _.backgroundImagePreloader)(function(e) {
            return a.createElement(D, e)
        })),
        M = function(e) {
            g(n, e);
            var t = N(n);

            function n() {
                return h(this, n), t.apply(this, arguments)
            }
            return T(n, [{
                key: "render",
                value: function() {
                    return a.createElement(L, this.props)
                }
            }]), n
        }(a.PureComponent);
    S(M, "Sizes", R), S(M, "defaultProps", {
        size: R.LARGE,
        textScale: 1,
        showBadge: !1,
        showTooltip: !1,
        active: !1,
        tooltipPosition: "top",
        badgeStrokeColor: f.default.unsafe_rawColors.WHITE_500.css,
        animate: !1
    }), t.default = M
}