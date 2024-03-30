function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i = n("470079"),
        a = n("803997"),
        u = n.n(a),
        s = n("784184"),
        l = n("162677"),
        c = n("516617"),
        f = n("24771"),
        d = n("421986"),
        _ = n("282544"),
        E = n("728664"),
        p = n("281767"),
        m = n("941504"),
        y = n("262199");

    function I(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function h(e) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function O(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function T(e, t) {
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

    function S(e, t) {
        return (S = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }(r = o || (o = {}))[r.PARTNERED = 0] = "PARTNERED", r[r.STAFF = 1] = "STAFF", r[r.VERIFIED = 2] = "VERIFIED", r[r.VERIFIED_AND_PARTNERED = 3] = "VERIFIED_AND_PARTNERED", r[r.VERIFIED_AND_HUB = 4] = "VERIFIED_AND_HUB", r[r.HUB = 5] = "HUB", r[r.NONE = 6] = "NONE";
    var v = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && S(e, t)
        }(g, e);
        var t, n, r, o, a, v = (t = g, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = h(t);
            if (n) {
                var a = h(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function g() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, g), v.apply(this, arguments)
        }
        return r = g, o = [{
            key: "renderBadge",
            value: function(e, t, n) {
                var r = this.props,
                    o = r.className,
                    a = r.badgeStrokeColor,
                    f = r.tooltipColor,
                    d = void 0 === f ? s.Tooltip.Colors.BRAND : f,
                    _ = r.tooltipPosition,
                    E = r.size,
                    p = void 0 === E ? 16 : E,
                    I = r.badgeColor,
                    h = r.iconClassName,
                    S = r.flowerStarClassName,
                    v = function(e) {
                        switch (e) {
                            case 2:
                                return m.default.Messages.GUILD_VERIFIED;
                            case 0:
                                return m.default.Messages.GUILD_PARTNERED;
                            case 3:
                                return m.default.Messages.GUILD_VERIFIED_AND_PARTNERED;
                            case 4:
                                return m.default.Messages.HUB_VERIFIED_DISCORD_HUB;
                            case 5:
                                return m.default.Messages.HUB_DISCORD_HUB;
                            case 1:
                                return m.default.Messages.INTERNAL_EMPLOYEE_ONLY;
                            case 6:
                                return null;
                            default:
                                (0, l.assertNever)(e)
                        }
                    }(e);
                return i.createElement(s.Tooltip, {
                    color: d,
                    position: _,
                    text: v
                }, function(r) {
                    return 5 === e || 4 === e ? i.createElement("div", T(O({}, r), {
                        className: u()(n, o),
                        style: {
                            width: p,
                            height: p
                        }
                    }), i.createElement(t, {
                        className: u()(y.icon, h)
                    })) : i.createElement(c.default, T(O({}, r), {
                        className: u()(n, o),
                        flowerStarClassName: S,
                        color: I,
                        stroke: a,
                        size: p
                    }), i.createElement(t, {
                        className: u()(y.icon, h)
                    }))
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.guild,
                    t = new Set(e.features);
                return t.has(p.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) ? this.renderBadge(1, _.default, y.staff) : t.has(p.GuildFeatures.VERIFIED) && t.has(p.GuildFeatures.HUB) ? this.renderBadge(4, f.default, y.verifiedHub) : t.has(p.GuildFeatures.HUB) ? this.renderBadge(5, f.default, y.hub) : t.has(p.GuildFeatures.VERIFIED) && t.has(p.GuildFeatures.PARTNERED) ? this.renderBadge(3, E.default, y.verified) : t.has(p.GuildFeatures.VERIFIED) ? this.renderBadge(2, E.default, y.verified) : t.has(p.GuildFeatures.PARTNERED) ? this.renderBadge(0, d.default, y.partnered) : null
            }
        }], I(r.prototype, o), a && I(r, a), g
    }(i.PureComponent);
    t.default = v
}