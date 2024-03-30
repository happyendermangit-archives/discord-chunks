function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CustomSoundType: function() {
            return o
        },
        getCustomJoinSound: function() {
            return l
        },
        useCustomJoinSound: function() {
            return s
        }
    });
    var r, o, i = n("898511"),
        a = n("851285"),
        u = n("571336");

    function s(e) {
        return (0, i.useStateFromStores)([a.default], function() {
            var t, n;
            return c(e, null !== (n = null === (t = a.default.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== n ? n : {})
        })
    }

    function l(e) {
        var t, n;
        return c(e, null !== (n = null === (t = a.default.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== n ? n : {})
    }

    function c(e, t) {
        var n, r, o, i, a = null === (o = t[e]) || void 0 === o ? void 0 : o.joinSound,
            s = null === (i = t[u.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID]) || void 0 === i ? void 0 : i.joinSound,
            l = null != a ? a : s;
        return null != l ? (n = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r, o, i;
                    r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = i
                })
            }
            return e
        }({}, l), r = (r = {
            type: null != a ? 1 : 0
        }, r), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(r)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
        }), n) : void 0
    }(r = o || (o = {}))[r.GLOBAL = 0] = "GLOBAL", r[r.GUILD = 1] = "GUILD"
}