function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("757167"),
        o = n("807471"),
        i = n("388990"),
        a = n("51259"),
        u = n("564882");

    function s(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

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
    var d = 4 * i.default.Millis.HOUR,
        _ = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && f(e, t)
            }(m, e);
            var t, n, o, _, E, p = (t = m, n = function() {
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
                }(r) || "function" == typeof r) ? r : s(e)
            });

            function m() {
                var e, t, n, r;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, m), e = p.apply(this, arguments), t = s(e), r = void 0, (n = "intervalID") in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, e
            }
            return o = m, _ = [{
                key: "_initialize",
                value: function() {
                    setTimeout(function() {
                        return r.default.timeAsync("\uD83D\uDCBE", "getBlockedDomainList", function() {
                            return u.default.getBlockedDomainList()
                        })
                    }, 1e3), setTimeout(function() {
                        return (0, a.fetchBlockedDomainList)()
                    }, 10 * i.default.Millis.SECOND), this.intervalID = setInterval(a.fetchBlockedDomainList, d)
                }
            }, {
                key: "_terminate",
                value: function() {
                    clearInterval(this.intervalID)
                }
            }], l(o.prototype, _), E && l(o, E), m
        }(o.default);
    t.default = new _
}