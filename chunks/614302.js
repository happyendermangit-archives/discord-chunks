function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MigrationStatus: function() {
            return i
        }
    });
    var a, r, c, o, i, f, d = n("898511"),
        u = n("629815");

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function s(e) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function b(e, t) {
        return (b = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }(a = i || (i = {}))[a.NOT_STARTED = 0] = "NOT_STARTED", a[a.IN_PROGRESS = 1] = "IN_PROGRESS", a[a.FAILED = 2] = "FAILED", a[a.SKIPPED = 3] = "SKIPPED";
    var p = 0,
        h = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && b(e, t)
            }(i, e);
            var t, n, a, r, c, o = (t = i, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, a, r, c = s(t);
                if (n) {
                    var o = s(this).constructor;
                    r = Reflect.construct(c, arguments, o)
                } else r = c.apply(this, arguments);
                return e = this, (a = r) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(a) || "function" == typeof a) ? a : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function i() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, i), o.apply(this, arguments)
            }
            return a = i, r = [{
                key: "getMigrationStatus",
                value: function() {
                    return p
                }
            }], l(a.prototype, r), c && l(a, c), i
        }(d.default.Store);
    o = "DomainMigrationStore", (c = "displayName") in(r = h) ? Object.defineProperty(r, c, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[c] = o, t.default = new h(u.default, {
        DOMAIN_MIGRATION_START: function() {
            p = 1
        },
        DOMAIN_MIGRATION_FAILURE: function() {
            p = 2
        },
        DOMAIN_MIGRATION_SKIP: function() {
            p = 3
        }
    })
}