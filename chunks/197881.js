function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ProcessArgs: function() {
            return s
        }
    });
    var i = n("49671");
    class s {
        static get() {
            if (null == s.cached) {
                var e, t;
                let n = null === i.default || void 0 === i.default ? void 0 : null === (t = i.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t);
                null != n && n.length > 1 && n.shift(), s.cached = null != n ? n : []
            }
            return s.cached
        }
        static contains(e) {
            return s.get().includes(e)
        }
        static isEnvVariableTrue(e) {
            var t, n;
            if (void 0 === i.default) return !1;
            switch (null === i.default || void 0 === i.default ? void 0 : null === (n = i.default.process) || void 0 === n ? void 0 : null === (t = n.env) || void 0 === t ? void 0 : t[e]) {
                case "1":
                case "true":
                    return !0
            }
            return !1
        }
        static isDisallowPopupsSet() {
            return s.contains("--disallow-popups") || s.isEnvVariableTrue("DISCORD_DISALLOW_POPUPS")
        }
        static isDiscordTestSet() {
            return s.isEnvVariableTrue("DISCORD_TEST")
        }
        static isDiscordGatewayPlaintextSet() {
            return !1
        }
    }
}