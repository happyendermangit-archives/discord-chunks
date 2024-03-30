function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("898511"),
        s = n("629815");

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var d = {},
        _ = {},
        E = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && f(e, t)
            }(u, e);
            var t, n, r, o, i, a = (t = u, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = c(t);
                if (n) {
                    var a = c(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function u() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, u), a.apply(this, arguments)
            }
            return r = u, o = [{
                key: "getRoleMemberCount",
                value: function(e) {
                    return null != e ? d[e] : null
                }
            }, {
                key: "shouldFetch",
                value: function(e) {
                    if (null == e) return !1;
                    var t = _[e];
                    return null == t || Date.now() - t > 12e4
                }
            }], l(r.prototype, o), i && l(r, i), u
        }(u.default.Store);
    i = "GuildRoleMemberCountStore", (o = "displayName") in(r = E) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new E(s.default, {
        GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
            var t = e.guildId,
                n = e.roleMemberCount;
            d[t] = n, _[t] = Date.now()
        },
        GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
            var t = e.guildId,
                n = e.roleId,
                r = e.count,
                o = d[t];
            if (null == o) return !1;
            o[n] = r
        },
        GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
            var t = e.guildId,
                n = e.roleId,
                r = e.added,
                o = d[t];
            if (null == o || null == o[n]) return !1;
            var i = Object.keys(r).length;
            o[n] += i
        },
        GUILD_ROLE_MEMBER_ADD: function(e) {
            var t = e.guildId,
                n = e.roleId,
                r = d[t];
            if (null == r || null == r[n]) return !1;
            r[n] = r[n] + 1
        },
        GUILD_ROLE_MEMBER_REMOVE: function(e) {
            var t = e.guildId,
                n = e.roleId,
                r = d[t];
            if (null == r || null == r[n]) return !1;
            r[n] = Math.max(r[n] - 1, 0)
        },
        GUILD_ROLE_CREATE: function(e) {
            var t = e.guildId,
                n = e.role;
            null == d[t] && (d[t] = {}), d[t][n.id] = 0
        },
        GUILD_DELETE: function(e) {
            var t = e.guild;
            delete d[t.id], delete _[t.id]
        }
    })
}