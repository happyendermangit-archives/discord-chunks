function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ProcessArgs: function() {
            return o
        }
    });
    var i, r, s, a = n("579806");
    class o {
        static get() {
            if (null == o.cached) {
                var e, t;
                let n = null === a.default || void 0 === a.default ? void 0 : null === (t = a.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t);
                null != n && n.length > 1 && n.shift(), o.cached = null != n ? n : []
            }
            return o.cached
        }
        static contains(e) {
            return o.get().includes(e)
        }
        static isEnvVariableTrue(e) {
            var t, n;
            if (void 0 === a.default) return !1;
            switch (null === a.default || void 0 === a.default ? void 0 : null === (n = a.default.process) || void 0 === n ? void 0 : null === (t = n.env) || void 0 === t ? void 0 : t[e]) {
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
    s = void 0, (r = "cached") in(i = o) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s
}