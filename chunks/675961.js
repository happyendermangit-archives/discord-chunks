function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CustomSoundType: function() {
            return i
        },
        useCustomJoinSound: function() {
            return o
        },
        getCustomJoinSound: function() {
            return u
        }
    });
    var l, i, a = n("446674"),
        s = n("374363"),
        r = n("846325");

    function o(e) {
        return (0, a.useStateFromStores)([s.default], () => {
            var t, n;
            let l = null !== (n = null === (t = s.default.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== n ? n : {};
            return d(e, l)
        })
    }

    function u(e) {
        var t, n;
        let l = null !== (n = null === (t = s.default.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== n ? n : {};
        return d(e, l)
    }

    function d(e, t) {
        var n, l;
        let i = null === (n = t[e]) || void 0 === n ? void 0 : n.joinSound,
            a = null === (l = t[r.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID]) || void 0 === l ? void 0 : l.joinSound,
            s = null != i ? i : a;
        return null != s ? {
            ...s,
            type: null != i ? 1 : 0
        } : void 0
    }(l = i || (i = {}))[l.GLOBAL = 0] = "GLOBAL", l[l.GUILD = 1] = "GUILD"
}