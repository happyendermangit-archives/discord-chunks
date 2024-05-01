function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ProcessArgs: function() {
            return o
        }
    });
    var i, r, a, s = n("579806");
    class o {
        static get() {
            if (null == o.cached) {
                var e, t;
                let n = null === s.default || void 0 === s.default ? void 0 : null === (t = s.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t);
                null != n && n.length > 1 && n.shift(), o.cached = null != n ? n : []
            }
            return o.cached
        }
        static contains(e) {
            return o.get().includes(e)
        }
        static isEnvVariableTrue(e) {
            var t, n;
            if (void 0 === s.default) return !1;
            switch (null === s.default || void 0 === s.default ? void 0 : null === (n = s.default.process) || void 0 === n ? void 0 : null === (t = n.env) || void 0 === t ? void 0 : t[e]) {
                case "1":
                case "true":
                    return !0
            }
            return !1
        }
        static isDisallowPopupsSet() {
            return o.contains("--disallow-popups") || o.isEnvVariableTrue("DISCORD_DISALLOW_POPUPS")
        }
        static isDiscordTestSet() {
            return o.isEnvVariableTrue("DISCORD_TEST")
        }
        static isDiscordGatewayPlaintextSet() {
            return !1
        }
    }
    a = void 0, (r = "cached") in(i = o) ? Object.defineProperty(i, r, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = a
}