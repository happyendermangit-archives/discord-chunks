function(e, t, n) {
    "use strict";
    var r;
    if (!Object.keys) {
        var i = Object.prototype.hasOwnProperty,
            a = Object.prototype.toString,
            o = n("560640"),
            s = Object.prototype.propertyIsEnumerable,
            u = !s.call({
                toString: null
            }, "toString"),
            c = s.call(function() {}, "prototype"),
            l = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            d = function(e) {
                var t = e.constructor;
                return t && t.prototype === e
            },
            f = {
                $applicationCache: !0,
                $console: !0,
                $external: !0,
                $frame: !0,
                $frameElement: !0,
                $frames: !0,
                $innerHeight: !0,
                $innerWidth: !0,
                $onmozfullscreenchange: !0,
                $onmozfullscreenerror: !0,
                $outerHeight: !0,
                $outerWidth: !0,
                $pageXOffset: !0,
                $pageYOffset: !0,
                $parent: !0,
                $scrollLeft: !0,
                $scrollTop: !0,
                $scrollX: !0,
                $scrollY: !0,
                $self: !0,
                $webkitIndexedDB: !0,
                $webkitStorageInfo: !0,
                $window: !0
            },
            p = function() {
                if ("undefined" == typeof window) return !1;
                for (var e in window) try {
                    if (!f["$" + e] && i.call(window, e) && null !== window[e] && "object" == typeof window[e]) try {
                        d(window[e])
                    } catch (e) {
                        return !0
                    }
                } catch (e) {
                    return !0
                }
                return !1
            }(),
            h = function(e) {
                if ("undefined" == typeof window || !p) return d(e);
                try {
                    return d(e)
                } catch (e) {
                    return !1
                }
            };
        r = function(e) {
            var t = null !== e && "object" == typeof e,
                n = "[object Function]" === a.call(e),
                r = o(e),
                s = t && "[object String]" === a.call(e),
                d = [];
            if (!t && !n && !r) throw TypeError("Object.keys called on a non-object");
            var f = c && n;
            if (s && e.length > 0 && !i.call(e, 0))
                for (var p = 0; p < e.length; ++p) d.push(String(p));
            if (r && e.length > 0)
                for (var m = 0; m < e.length; ++m) d.push(String(m));
            else
                for (var g in e) !(f && "prototype" === g) && i.call(e, g) && d.push(String(g));
            if (u) {
                for (var _ = h(e), b = 0; b < l.length; ++b) !(_ && "constructor" === l[b]) && i.call(e, l[b]) && d.push(l[b])
            }
            return d
        }
    }
    e.exports = r
}