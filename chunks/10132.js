function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ProcessArgs: function() {
            return s
        }
    });
    var r, o, i, a = n("517727");

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var s = function() {
        var e, t, n;

        function r() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r)
        }
        return e = r, t = null, n = [{
            key: "get",
            value: function() {
                if (null == r.cached) {
                    var e, t, n = null === a.default || void 0 === a.default ? void 0 : null === (t = a.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t);
                    null != n && n.length > 1 && n.shift(), r.cached = null != n ? n : []
                }
                return r.cached
            }
        }, {
            key: "contains",
            value: function(e) {
                return r.get().includes(e)
            }
        }, {
            key: "isEnvVariableTrue",
            value: function(e) {
                var t, n;
                if (void 0 === a.default) return !1;
                switch (null === a.default || void 0 === a.default ? void 0 : null === (n = a.default.process) || void 0 === n ? void 0 : null === (t = n.env) || void 0 === t ? void 0 : t[e]) {
                    case "1":
                    case "true":
                        return !0
                }
                return !1
            }
        }, {
            key: "isDisallowPopupsSet",
            value: function() {
                return r.contains("--disallow-popups") || r.isEnvVariableTrue("DISCORD_DISALLOW_POPUPS")
            }
        }, {
            key: "isDiscordTestSet",
            value: function() {
                return r.isEnvVariableTrue("DISCORD_TEST")
            }
        }, {
            key: "isDiscordGatewayPlaintextSet",
            value: function() {
                return !1
            }
        }], t && u(e.prototype, t), n && u(e, n), r
    }();
    i = void 0, (o = "cached") in(r = s) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i
}