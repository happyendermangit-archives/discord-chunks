function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("188129"),
        s = n("898511"),
        l = n("629815"),
        c = n("94498"),
        f = n("963041"),
        d = n("15036");

    function _(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function E(e) {
        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var m = (0, c.createExperiment)({
            id: "2024-03_gateway_zstd",
            label: "Gateway Zstd compression",
            kind: "user",
            defaultConfig: {
                useZstd: !1
            },
            treatments: [{
                id: 1,
                label: "Use Zstd",
                config: {
                    useZstd: !0
                }
            }]
        }),
        y = new u.Logger("GatewayZstdStore"),
        I = !1,
        h = !1,
        O = 0;

    function T(e) {
        if (e && !(0, d.supportsZstd)()) {
            y.warn("Attempting to enable zstd but it is not supported");
            return
        }(0, d.setFastConnectZstd)(e), e !== I && y.info("Setting Zstd to ".concat(e)), I = e
    }
    var S = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && p(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = E(t);
            if (n) {
                var a = E(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "initialize",
            value: function() {
                this.waitFor(f.default), I = (0, d.supportsZstd)() && (0, d.getFastConnectZstd)()
            }
        }, {
            key: "shouldUseZstd",
            value: function() {
                return I
            }
        }], _(r.prototype, o), i && _(r, i), u
    }(s.default.Store);
    i = "GatewayZstdStore", (o = "displayName") in(r = S) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new S(l.default, {
        CONNECTION_OPEN: function() {
            if (h) {
                y.info("Ignoring zstd experiment config because we fell back to zlib");
                return
            }
            T(m.getCurrentConfig({
                location: "GatewayZstdStore"
            }, {
                autoTrackExposure: (0, d.supportsZstd)()
            }).useZstd), O = 0
        },
        CONNECTION_INTERRUPTED: function() {
            I && (O += 1) > 3 && (y.error("Disabling zstd due to consecutive errors"), T(!1), h = !0)
        }
    })
}