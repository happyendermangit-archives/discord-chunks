function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        areRoleSubscriptionsVisibleInGuild: function() {
            return _
        },
        useRoleSubscriptionsVisibleInGuild: function() {
            return E
        },
        useShowRoleSubscriptionsInChannelList: function() {
            return p
        }
    });
    var r = n("898511"),
        o = n("833458"),
        i = n("770765"),
        a = n("429910"),
        u = n("717744"),
        s = n("306912"),
        l = n("262138"),
        c = n("281767");

    function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function d(e) {
        var t, n, r = (t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.default, u.default], n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            o = r[0],
            a = r[1],
            l = o.getGuild(e);
        if (null == l) return !1;
        var d = (0, i.isCreatorMonetizationEnabledGuild)(l),
            _ = l.hasFeature(c.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
        return !!(d && _ || a.isViewingServerShop(e)) || !1
    }

    function _(e, t) {
        return !!d(e) || (0, l.computeHasRoleSubscriptionsInGuild)(e, t)
    }

    function E(e) {
        var t = (0, l.default)(e),
            n = (0, r.useStateFromStores)([s.default, u.default], function() {
                return d(e, [s.default, u.default])
            }, [e]);
        return !(0, a.useShouldHideGuildPurchaseEntryPoints)(e).shouldHideGuildPurchaseEntryPoints && (n || t)
    }

    function p(e) {
        var t = E(e),
            n = (0, o.useIsEligibleForSubscriptionsInGuildShop)(e, "useShowRoleSubscriptionsInChannelList");
        return t && !n
    }
}