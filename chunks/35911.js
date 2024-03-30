function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i = n("60082"),
        a = n("967888"),
        u = n("374550"),
        s = n("376734"),
        l = n("713313"),
        c = n("204974"),
        f = n("281767");

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function _(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function p(e) {
        return function(e) {
            if (Array.isArray(e)) return d(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return d(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var m = new Set(["darwin", "linux", "win32", "ios", "android"]);
    (r = o || (o = {})).COUNT = "count", r.DISTRIBUTION = "distribution";
    var y = function() {
        var e, t, n;

        function r() {
            var e = this;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r), E(this, "_metrics", void 0), E(this, "_intervalId", void 0), this._metrics = [], this._intervalId = setInterval(function() {
                e._flush()
            }, 12e4)
        }
        return e = r, t = [{
            key: "_getMetricWithDefaults",
            value: function(e, t) {
                var n, r = e.name,
                    o = e.tags,
                    a = {
                        name: r,
                        type: t,
                        tags: (0, c.getGlobalTagsArray)()
                    };
                null != o && o.forEach(function(e) {
                    a.tags.push(e)
                });
                var l = function() {
                    if ((0, u.isWeb)()) return "web";
                    var e = (0, u.getPlatformName)();
                    return m.has(e) ? e : null
                }();
                null != l && a.tags.push("platform:".concat(l));
                var f = null != (n = s.CurrentReleaseChannel) && i.ReleaseChannelsSets.ALL.has(n) ? n : null;
                return null != f && a.tags.push("release_channel:".concat(f)), a
            }
        }, {
            key: "increment",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = this._getMetricWithDefaults(e, "count");
                this._metrics.push(n), (t || this._metrics.length >= 100) && this._flush()
            }
        }, {
            key: "distribution",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if ((0, l.isMetricsEndpointV2Enabled)("distribution-metric")) {
                    var r, o, i = (r = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                E(e, t, n[t])
                            })
                        }
                        return e
                    }({}, this._getMetricWithDefaults(e, "distribution")), o = (o = {
                        value: t
                    }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(o)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
                    }), r);
                    this._metrics.push(i), (n || this._metrics.length >= 100) && this._flush()
                }
            }
        }, {
            key: "_flush",
            value: function() {
                var e = this;
                if (this._metrics.length > 0) {
                    var t = p(this._metrics);
                    a.HTTP.post({
                        url: (0, l.isMetricsEndpointV2Enabled)("monitoring-agent") ? f.Endpoints.METRICS_V2 : f.Endpoints.METRICS,
                        body: {
                            metrics: t,
                            client_info: {
                                built_at: "1711764812641",
                                build_number: "280219"
                            }
                        },
                        retries: 1
                    }).catch(function(n) {
                        e._metrics.length + t.length < 100 && (e._metrics = p(e._metrics).concat(p(t)))
                    })
                }
                this._metrics = []
            }
        }], _(e.prototype, t), n && _(e, n), r
    }();
    t.default = new y
}