function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        startImpersonating: function() {
            return S
        },
        stopImpersonating: function() {
            return g
        },
        updateImpersonatedChannels: function() {
            return b
        },
        updateImpersonatedData: function() {
            return R
        },
        updateImpersonatedRoles: function() {
            return N
        },
        updateImpersonating: function() {
            return v
        }
    });
    var r = n("629815"),
        o = n("140817"),
        i = n("163291"),
        a = n("935741"),
        u = n("29604"),
        s = n("957808"),
        l = n("306912"),
        c = n("29884"),
        f = n("894288"),
        d = n("848957"),
        _ = n("870331"),
        E = n("717744"),
        p = n("269636"),
        m = n("281767"),
        y = n("928204");

    function I(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function h(e) {
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

    function T(e) {
        return function(e) {
            if (Array.isArray(e)) return I(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return I(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function S(e, t) {
        _.default.track(m.AnalyticEvents.VIEW_AS_ROLES_SELECTED, O(h({
            num_roles: Object.keys(t.roles).length
        }, (0, o.collectGuildAnalyticsMetadata)(e)), {
            is_viewing_as_member: t.type === p.ImpersonateType.NEW_MEMBER
        })), r.default.dispatch({
            type: "IMPERSONATE_UPDATE",
            guildId: e,
            data: t
        }), A(e)
    }

    function v(e, t) {
        var n = E.default.getData(e);
        null != n && n.type === t.type && (_.default.track(m.AnalyticEvents.VIEW_AS_ROLES_SELECTED, O(h({
            num_roles: Object.keys(n.roles).length
        }, (0, o.collectGuildAnalyticsMetadata)(e)), {
            is_viewing_as_member: n.type === p.ImpersonateType.NEW_MEMBER
        })), r.default.dispatch({
            type: "IMPERSONATE_UPDATE",
            guildId: e,
            data: h({}, n, t)
        }), A(e))
    }

    function g(e) {
        r.default.dispatch({
            type: "IMPERSONATE_STOP",
            guildId: e
        })
    }

    function A(e) {
        var t = f.default.getChannelId(e),
            n = a.default.getChannel(t);
        if (!(null != t && (0, y.isStaticChannelRoute)(t)) && !c.default.can(m.Permissions.VIEW_CHANNEL, n)) {
            var r = u.default.getDefaultChannel(e);
            null != r && (0, i.transitionTo)(m.Routes.CHANNEL(e, r.id))
        }
    }

    function b(e, t, n) {
        var r = new Set(d.default.getOptedInChannels(e));
        t.forEach(function(e) {
            return r.add(e)
        }), n.forEach(function(e) {
            return r.delete(e)
        }), v(e, {
            type: p.ImpersonateType.NEW_MEMBER,
            optInChannels: r
        })
    }

    function N(e, t) {
        var n, r, o, i, a = l.default.getRoles(e);
        n = e, r = t, o = T(u.default.getSelectableChannelIds(n)).concat(T(u.default.getVocalChannelIds(n))), i = Array.from(r), u.default.addConditionalChangeListener(function() {
            var e = s.default.getSelfMember(n);
            if (null == e) return !1;
            if (i.some(function(t) {
                    return !e.roles.includes(t)
                })) return !0;
            var t = T(u.default.getSelectableChannelIds(n)).concat(T(u.default.getVocalChannelIds(n))).filter(function(e) {
                return !o.includes(e)
            });
            return t.length > 0 && b(n, t, []), !1
        });
        var c = {};
        t.forEach(function(e) {
            return c[e] = a[e]
        }), v(e, {
            type: p.ImpersonateType.NEW_MEMBER,
            roles: c
        })
    }

    function R(e, t) {
        v(e, h({
            type: p.ImpersonateType.NEW_MEMBER
        }, t))
    }
}