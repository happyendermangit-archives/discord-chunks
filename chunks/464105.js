function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("10132"),
        u = n("793633");

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
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
    var d = new Set,
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
            }(E, e);
            var t, n, r, o, i, l = (t = E, n = function() {
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

            function E() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, E), l.apply(this, arguments)
            }
            return r = E, o = [{
                key: "initialize",
                value: function(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (d = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (_ = e.hotspotOverrides))
                }
            }, {
                key: "hasHotspot",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && _[e];
                    return !(u.CONFERENCE_MODE_ENABLED || a.ProcessArgs.isDisallowPopupsSet()) && (n || !d.has(e))
                }
            }, {
                key: "hasHiddenHotspot",
                value: function(e) {
                    return d.has(e)
                }
            }, {
                key: "getHotspotOverride",
                value: function(e) {
                    return _[e]
                }
            }, {
                key: "getState",
                value: function() {
                    return {
                        hiddenHotspots: d,
                        hotspotOverrides: _
                    }
                }
            }], s(r.prototype, o), i && s(r, i), E
        }(o.default.PersistedStore);
    l(E, "displayName", "HotspotStore"), l(E, "persistKey", "hotspots"), l(E, "migrations", [function(e) {
        return {
            hiddenHotspots: null != e ? e : [],
            hotspotOverrides: {}
        }
    }]), t.default = new E(i.default, {
        OVERLAY_INITIALIZE: function(e) {
            var t = e.hiddenHotspots;
            d = new Set(t)
        },
        HOTSPOT_HIDE: function(e) {
            var t = e.location;
            if (d.has(t)) return !1;
            d.add(t)
        },
        HOTSPOT_OVERRIDE_SET: function(e) {
            var t = e.location,
                n = e.enabled;
            _[t] = n
        },
        HOTSPOT_OVERRIDE_CLEAR: function(e) {
            var t = e.location;
            if (null == _[t]) return !1;
            delete _[t]
        }
    })
}