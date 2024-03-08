function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CustomSoundType: function() {
            return l
        },
        useCustomJoinSound: function() {
            return o
        },
        getCustomJoinSound: function() {
            return u
        }
    });
    var i, l, a = n("446674"),
        s = n("374363"),
        r = n("846325");

    function o(e) {
        return (0, a.useStateFromStores)([s.default], () => {
            var t, n;
            let i = null !== (n = null === (t = s.default.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== n ? n : {};
            return d(e, i)
        })
    }

    function u(e) {
        var t, n;
        let i = null !== (n = null === (t = s.default.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== n ? n : {};
        return d(e, i)
    }

    function d(e, t) {
        var n, i;
        let l = null === (n = t[e]) || void 0 === n ? void 0 : n.joinSound,
            a = null === (i = t[r.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID]) || void 0 === i ? void 0 : i.joinSound,
            s = null != l ? l : a;
        return null != s ? {
            ...s,
            type: null != l ? 1 : 0
        } : void 0
    }(i = l || (l = {}))[i.GLOBAL = 0] = "GLOBAL", i[i.GUILD = 1] = "GUILD"
}