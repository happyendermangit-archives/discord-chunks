function(e, t, r) {
    "use strict";
    r.r(t);
    var n, l, i, a, o = r("898511"),
        c = r("629815");

    function u(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function s(e) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var d = new Map,
        m = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && f(e, t)
            }(o, e);
            var t, r, n, l, i, a = (t = o, r = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, n, l, i = s(t);
                if (r) {
                    var a = s(this).constructor;
                    l = Reflect.construct(i, arguments, a)
                } else l = i.apply(this, arguments);
                return e = this, (n = l) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(n) || "function" == typeof n) ? n : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function o() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, o), a.apply(this, arguments)
            }
            return n = o, l = [{
                key: "getGuildRoleConnectionEligibility",
                value: function(e) {
                    return null != e ? d.get(e) : void 0
                }
            }], u(n.prototype, l), i && u(n, i), o
        }(o.default.Store);
    i = "GuildRoleConnectionEligibilityStore", (l = "displayName") in(n = m) ? Object.defineProperty(n, l, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : n[l] = i, t.default = new m(c.default, {
        GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: function(e) {
            var t = e.roleId,
                r = e.roleConnectionEligibility;
            d.set(t, r)
        }
    })
}