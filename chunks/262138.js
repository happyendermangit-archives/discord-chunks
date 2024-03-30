function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        computeHasRoleSubscriptionsInGuild: function() {
            return l
        },
        default: function() {
            return c
        }
    });
    var r = n("898511"),
        o = n("217014"),
        i = n("957808"),
        a = n("306912"),
        u = n("281767");

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function l(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == e ? null : i.default.getMember(e, o.default.getId()),
            r = (_ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [a.default], E = 1, function(e) {
                if (Array.isArray(e)) return e
            }(_) || function(e, t) {
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
            }(_, E) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
                }
            }(_, E) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            l = r[0].getGuild(e);
        if (null == l || null == n || !l.hasFeature(u.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) return !1;
        var c = !0,
            f = !1,
            d = void 0;
        try {
            for (var _, E, p, m = n.roles[Symbol.iterator](); !(c = (p = m.next()).done); c = !0) {
                var y, I = p.value,
                    h = null == t ? void 0 : t[I];
                if ((null == h ? void 0 : null === (y = h.tags) || void 0 === y ? void 0 : y.subscription_listing_id) != null) return !0
            }
        } catch (e) {
            f = !0, d = e
        } finally {
            try {
                !c && null != m.return && m.return()
            } finally {
                if (f) throw d
            }
        }
        return !1
    }

    function c(e) {
        var t = (0, r.useStateFromStores)([o.default, i.default], function() {
            return null == e ? null : i.default.getMember(e, o.default.getId())
        });
        return (0, r.useStateFromStores)([a.default], function() {
            return l(e, null != e ? a.default.getRoles(e) : void 0, t, [a.default])
        }, [e, t])
    }
}