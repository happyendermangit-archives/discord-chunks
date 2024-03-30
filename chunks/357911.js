function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getManageResourcePermissions: function() {
            return I
        },
        useManageResourcePermissions: function() {
            return y
        }
    });
    var r = n("470079"),
        o = n("22287"),
        i = n("898511"),
        a = n("393588");
    n("29604");
    var u = n("29884"),
        s = n("208454");
    n("359017");
    var l = n("156496"),
        c = n("563090");

    function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function d(e, t) {
        return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
    }

    function _(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return f(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var E = {
            canCreateExpressions: !1,
            canCreateGuildEvent: !1,
            canManageAllExpressions: !1,
            canManageAllEvents: !1,
            canManageGuildExpression: function() {
                return !1
            },
            canManageGuildEvent: function() {
                return !1
            }
        },
        p = function(e, t, n, r) {
            if (null == e) return !1;
            if (n) return !0;
            if ("creator_id" in e) return r && null != t && e.creator_id === t.id;
            if ("userId" in e) return r && null != t && e.userId === t.id;
            if ("user" in e) {
                var o;
                return r && null != t && (null === (o = e.user) || void 0 === o ? void 0 : o.id) === t.id
            }
            return !1
        },
        m = function(e) {
            if (null == e) return [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS];
            var t = l.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
            return e.isGuildStageVoice() ? t = l.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = l.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [o.combine(t, c.Permissions.CREATE_EVENTS), o.combine(t, c.Permissions.MANAGE_EVENTS)]
        },
        y = function(e) {
            var t = _(d(e, a.default) ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : m(e), 2),
                n = t[0],
                o = t[1],
                l = _((0, i.useStateFromStoresArray)([u.default], function() {
                    return [u.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e), u.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e), u.default.can(n, e), u.default.can(o, e)]
                }), 4),
                f = l[0],
                y = l[1],
                I = l[2],
                h = l[3],
                O = (0, i.useStateFromStores)([s.default], function() {
                    return s.default.getCurrentUser()
                }),
                T = r.useCallback(function(e) {
                    return p(e, O, y, f)
                }, [f, y, O]),
                S = r.useCallback(function(e) {
                    return p(e, O, h, I)
                }, [h, I, O]);
            return null == e ? E : {
                canCreateExpressions: f,
                canCreateGuildEvent: I,
                canManageAllExpressions: y,
                canManageAllEvents: h,
                canManageGuildExpression: T,
                canManageGuildEvent: S
            }
        },
        I = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.default,
                r = _(d(e, a.default) ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : m(e), 2),
                o = r[0],
                i = r[1],
                l = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                f = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                y = t.can(o, e),
                I = t.can(i, e),
                h = n.getCurrentUser();
            return null == e ? E : {
                canCreateExpressions: l,
                canCreateGuildEvent: y,
                canManageAllExpressions: f,
                canManageAllEvents: I,
                canManageGuildExpression: function(e) {
                    return p(e, h, f, l)
                },
                canManageGuildEvent: function(e) {
                    return p(e, h, I, y)
                }
            }
        }
}