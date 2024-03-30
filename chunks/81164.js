function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("864842");

    function o(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function u(e) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function s(e, t) {
        return (s = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var l = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && s(e, t)
        }(d, e);
        var t, n, r, l, c, f = (t = d, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, i, a = u(t);
            if (n) {
                var s = u(this).constructor;
                i = Reflect.construct(a, arguments, s)
            } else i = a.apply(this, arguments);
            return e = this, (r = i) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : o(e)
        });

        function d(e) {
            var t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, d), a(o(t = f.call(this)), "id", void 0), a(o(t), "guildId", void 0), a(o(t), "userId", void 0), a(o(t), "user", void 0), a(o(t), "ended", void 0), a(o(t), "endsAt", void 0), t.id = e.id, t.guildId = e.guildId, t.userId = e.userId, t.user = e.user, t.ended = e.ended, t.endsAt = null != e.endsAt ? e.endsAt : null, t
        }
        return r = d, l = null, c = [{
            key: "createFromServer",
            value: function(e) {
                return new d({
                    id: e.id,
                    guildId: e.guild_id,
                    userId: null != e.user ? e.user.id : e.user_id,
                    user: e.user,
                    ended: e.ended,
                    endsAt: null != e.ends_at && "" !== e.ends_at ? new Date(e.ends_at) : null
                })
            }
        }], l && i(r.prototype, l), c && i(r, c), d
    }(r.default);
    t.default = l
}