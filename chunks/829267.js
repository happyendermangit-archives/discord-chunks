function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        guildEventDetailsParser: function() {
            return s
        }
    });
    var n = r("609879"),
        a = r("78454"),
        u = r("63093");

    function l(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
                var n, a, u;
                n = e, a = t, u = r[t], a in n ? Object.defineProperty(n, a, {
                    value: u,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[a] = u
            })
        }
        return e
    }

    function i(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                r.push.apply(r, n)
            }
            return r
        })(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
        }), e
    }
    var c = i(l({}, n.default.guildEventRules.link), {
            react: (0, u.default)({
                enableBuildOverrides: !1,
                mustConfirmExternalLink: !0
            }).react
        }),
        o = i(l({}, n.default.guildEventRules.channelMention), {
            react: (0, a.default)({
                enableBuildOverrides: !1,
                shouldCloseDefaultModals: !0,
                shouldStopPropagation: !0
            }).react
        }),
        s = n.default.reactParserFor(i(l({}, n.default.guildEventRules), {
            link: c,
            channelMention: o
        }))
}