function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DevToolsListener: function() {
            return c
        }
    });
    var r, o, i = n("836560");

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
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
    }(r = o || (o = {})).VERTICAL = "vertical", r.HORIZONTAL = "horizontal";
    var l = {
            open: !1,
            orientation: null
        },
        c = function(e) {
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
            var t, n, r, i, c, f = (t = d, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = u(t);
                if (n) {
                    var a = u(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function d() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, d), e = f.call(this), setInterval(function() {
                    return e.check()
                }, 500), e
            }
            return r = d, i = [{
                key: "orientations",
                get: function() {
                    return Object.values(o)
                }
            }, {
                key: "state",
                get: function() {
                    return l
                }
            }, {
                key: "check",
                value: function() {
                    var e = function() {
                            try {
                                return window.outerWidth - window.innerWidth
                            } catch (e) {
                                return 0
                            }
                        }() > 160,
                        t = function() {
                            try {
                                return window.outerHeight - window.innerHeight
                            } catch (e) {
                                return 0
                            }
                        }() > 160,
                        n = e ? "vertical" : "horizontal";
                    if (!(t && e) && (function() {
                            try {
                                return window.Firebug.chrome.isInitialized
                            } catch (e) {
                                return !1
                            }
                        }() || e || t)) {
                        var r = l.open;
                        l = {
                            open: !0,
                            orientation: n
                        }, (!r || l.orientation !== n) && this.emit("changed", l)
                    } else l.open && (l.open = !1, this.emit("changed", l))
                }
            }], a(r.prototype, i), c && a(r, c), d
        }(i.EventEmitter)
}