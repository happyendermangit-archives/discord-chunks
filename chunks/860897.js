function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EventEmitterProvider: function() {
            return c
        }
    });
    var r = n("470079"),
        o = n("836560");

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function a(e) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function u(e, t) {
        return (u = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var s = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && u(e, t)
            }(c, e);
            var t, n, r, o, s, l = (t = c, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = a(t);
                if (n) {
                    var u = a(this).constructor;
                    o = Reflect.construct(i, arguments, u)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function c() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, c), l.apply(this, arguments)
            }
            return r = c, o = [{
                key: "on",
                value: function() {
                    return this
                }
            }, {
                key: "once",
                value: function() {
                    return this
                }
            }, {
                key: "addListener",
                value: function() {
                    return this
                }
            }, {
                key: "removeListener",
                value: function() {
                    return this
                }
            }, {
                key: "emit",
                value: function() {
                    return !1
                }
            }], i(r.prototype, o), s && i(r, s), c
        }(o.EventEmitter),
        l = r.createContext(new s),
        c = l.Provider;
    l.Consumer, t.default = l
}