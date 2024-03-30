function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        trackAppUIViewed: function() {
            return c
        }
    });
    var r = n("153832"),
        o = n("517727"),
        i = n("870331"),
        a = n("281767");

    function u(e, t) {
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
    var s = new(function() {
        var e, t, n;

        function s() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, s), l(this, "loadId", (0, r.v4)()), l(this, "appUIViewed", !1)
        }
        return e = s, t = [{
            key: "trackEvent",
            value: function(e, t) {
                var n = this,
                    r = Date.now();
                requestIdleCallback(function() {
                    var a, u;
                    i.default.track(e, (a = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                l(e, t, n[t])
                            })
                        }
                        return e
                    }({}, function() {
                        var e = "--campaign-id=",
                            t = null !== (l = null === o.default || void 0 === o.default ? void 0 : null === (u = o.default.processUtils) || void 0 === u ? void 0 : null === (a = u.getMainArgvSync) || void 0 === a ? void 0 : a.call(u)) && void 0 !== l ? l : [],
                            n = !0,
                            r = !1,
                            i = void 0;
                        try {
                            for (var a, u, l, s, c = t[Symbol.iterator](); !(n = (s = c.next()).done); n = !0) {
                                var f = s.value;
                                if (f.startsWith(e)) return {
                                    referrer: f.substr(e.length)
                                }
                            }
                        } catch (e) {
                            r = !0, i = e
                        } finally {
                            try {
                                !n && null != c.return && c.return()
                            } finally {
                                if (r) throw i
                            }
                        }
                        return {}
                    }(), function() {
                        var e = !1,
                            t = {
                                total_compressed_byte_size: 0,
                                total_uncompressed_byte_size: 0,
                                total_transfer_byte_size: 0,
                                js_compressed_byte_size: 0,
                                js_uncompressed_byte_size: 0,
                                js_transfer_byte_size: 0,
                                css_compressed_byte_size: 0,
                                css_uncompressed_byte_size: 0,
                                css_transfer_byte_size: 0
                            };
                        return null != window.performance && null != window.performance.getEntries && window.performance.getEntries().forEach(function(n) {
                            var r = null != n.encodedBodySize ? n.encodedBodySize : n.decodedBodySize,
                                o = null != n.decodedBodySize ? n.decodedBodySize : n.encodedBodySize,
                                i = n.transferSize;
                            null != o && null != r && (e = !0, t.total_compressed_byte_size += r, t.total_uncompressed_byte_size += o, null != i && (t.total_uncompressed_byte_size += i), "resource" === n.entryType && ("script" === n.initiatorType && null != n.name && null != n.name.match(/\.js/) && (t.js_compressed_byte_size += r, t.js_uncompressed_byte_size += o, null != i && (t.js_uncompressed_byte_size += i)), "link" === n.initiatorType && null != n.name && null != n.name.match(/\.css/) && (t.css_compressed_byte_size += r, t.css_uncompressed_byte_size += o, null != i && (t.css_uncompressed_byte_size += i))))
                        }), e ? t : {}
                    }()), u = (u = {
                        load_id: n.loadId,
                        screen_name: t,
                        duration_ms_since_app_opened: r - window.GLOBAL_ENV.HTML_TIMESTAMP
                    }, u), Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(u)).forEach(function(e) {
                        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(u, e))
                    }), a))
                })
            }
        }, {
            key: "trackAppUIViewed",
            value: function(e) {
                !this.appUIViewed && (this.trackEvent(a.AnalyticEvents.APP_UI_VIEWED, e), this.appUIViewed = !0)
            }
        }], u(e.prototype, t), n && u(e, n), s
    }());

    function c(e) {
        s.trackAppUIViewed(e)
    }
}