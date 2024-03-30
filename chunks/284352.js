function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("913527"),
        o = n.n(r),
        i = n("864842");

    function a(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function c(e, t) {
        return (c = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var f = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }(_, e);
        var t, n, r, i, f, d = (t = _, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = l(t);
            if (n) {
                var u = l(this).constructor;
                o = Reflect.construct(i, arguments, u)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : a(e)
        });

        function _(e) {
            var t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, _), s(a(t = d.call(this)), "code", void 0), s(a(t), "temporary", void 0), s(a(t), "revoked", void 0), s(a(t), "uses", void 0), s(a(t), "maxUses", void 0), s(a(t), "maxAge", void 0), s(a(t), "createdAt", void 0), s(a(t), "channel", void 0), s(a(t), "guild", void 0), s(a(t), "inviter", void 0), s(a(t), "targetType", void 0), s(a(t), "targetUser", void 0), s(a(t), "targetApplication", void 0), s(a(t), "type", void 0), s(a(t), "flags", void 0), t.code = e.code || "", t.temporary = e.temporary || !1, t.revoked = e.revoked || !1, t.uses = e.uses || 0, t.maxUses = e.maxUses || 0, t.maxAge = e.maxAge || 0, t.createdAt = e.createdAt || new Date, t.channel = e.channel, t.guild = e.guild, t.inviter = e.inviter || null, t.targetType = e.targetType || null, t.targetUser = e.targetUser || null, t.targetApplication = e.targetApplication || null, t.type = e.type || null, t.flags = e.flags || 0, t
        }
        return r = _, i = [{
            key: "isExpired",
            value: function() {
                var e = this.maxAge;
                return !!(e > 0 && o()(this.createdAt).add(e, "seconds").isBefore(Date.now())) || !1
            }
        }, {
            key: "getExpiresAt",
            value: function() {
                return this.maxAge > 0 ? o()(this.createdAt).add(this.maxAge, "seconds").toDate() : 1 / 0
            }
        }, {
            key: "toString",
            value: function() {
                return this.code
            }
        }], f = [{
            key: "createFromServer",
            value: function(e) {
                var t, n, r;
                return new _((n = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            s(e, t, n[t])
                        })
                    }
                    return e
                }({}, e), r = (r = {
                    maxUses: e.max_uses,
                    maxAge: e.max_age,
                    createdAt: o()(null !== (t = e.created_at) && void 0 !== t ? t : void 0),
                    targetType: e.target_type,
                    targetUser: e.target_user,
                    targetApplication: e.target_application
                }, r), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(r)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                }), n))
            }
        }], i && u(r.prototype, i), f && u(r, f), _
    }(i.default)
}