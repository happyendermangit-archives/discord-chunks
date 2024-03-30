function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("784184"),
        s = n("930949"),
        l = n("303052"),
        c = n("14531"),
        f = n("830567"),
        d = n("941504"),
        _ = n("483170");

    function E(e) {
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

    function p(e) {
        if (e.isSystemUser()) return c.BotTypes.SYSTEM_DM;
        if (e.isClyde()) return c.BotTypes.AI;
        if (e.bot) return c.BotTypes.BOT;
        return null
    }
    var m = function(e) {
        var t = e.primary,
            n = e.secondary,
            o = e.botType,
            a = e.botVerified,
            s = e.discriminatorClass,
            c = e.className,
            f = e.usernameClass,
            p = e.color,
            m = e.botClass,
            y = e.showStreamerModeTooltip;
        return r.createElement("div", {
            className: i()(_.info, c)
        }, r.createElement(u.Tooltip, {
            text: d.default.Messages.STREAMER_MODE_ENABLED,
            shouldShow: y,
            "aria-label": !!y && void 0
        }, function(e) {
            var n, o;
            return r.createElement("span", (n = E({}, e), o = (o = {
                className: i()(_.__invalid_username, f),
                style: null != p ? {
                    color: p
                } : void 0
            }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(o)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
            }), n), t)
        }), null != n ? r.createElement("span", {
            className: i()(_.infoSpacing, s)
        }, n) : void 0, null != o && r.createElement(l.default, {
            type: o,
            className: i()(_.infoSpacing, m),
            verified: a
        }))
    };
    t.default = function(e) {
        var t = e.hideDiscriminator,
            n = e.user,
            o = e.nick,
            i = e.forceUsername,
            u = e.showAccountIdentifier,
            l = e.overrideDiscriminator,
            d = e.forcePomelo,
            _ = function(e, t) {
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
            }(e, ["hideDiscriminator", "user", "nick", "forceUsername", "showAccountIdentifier", "overrideDiscriminator", "forcePomelo"]),
            y = (0, a.useStateFromStores)([s.default], function() {
                return s.default.hidePersonalInformation
            }),
            I = y || void 0 !== t && t || n.isNonUserBot(),
            h = n.toString(),
            O = f.default.getName(n),
            T = i ? h : null != o ? o : O,
            S = n.isPomelo() || d;
        if (S || T !== h) {
            var v = T === h && S && i ? f.default.getUserTag(n, {
                    forcePomelo: d
                }) : T,
                g = u && v !== "@".concat(h) ? f.default.getUserTag(n) : void 0;
            return r.createElement(m, E({
                primary: v,
                secondary: g,
                botVerified: n.isVerifiedBot(),
                botType: p(n),
                showStreamerModeTooltip: y && v !== O
            }, _))
        }
        return r.createElement(c.default, E({
            name: T,
            botType: p(n),
            botVerified: n.isVerifiedBot(),
            discriminator: I || T !== h ? null : null != l ? l : n.discriminator
        }, _))
    }
}