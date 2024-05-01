function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CustomSoundType: function() {
            return r
        },
        getCustomJoinSound: function() {
            return u
        },
        useCustomJoinSound: function() {
            return l
        }
    });
    var i, r, a = n("442837"),
        s = n("581883"),
        o = n("710111");

    function l(e) {
        return (0, a.useStateFromStores)([s.default], () => {
            var t, n;
            return d(e, null !== (n = null === (t = s.default.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== n ? n : {})
        })
    }

    function u(e) {
        var t, n;
        return d(e, null !== (n = null === (t = s.default.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== n ? n : {})
    }

    function d(e, t) {
        var n, i;
        let r = null === (n = t[e]) || void 0 === n ? void 0 : n.joinSound,
            a = null === (i = t[o.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID]) || void 0 === i ? void 0 : i.joinSound,
            s = null != r ? r : a;
        return null != s ? {
            ...s,
            type: null != r ? 1 : 0
        } : void 0
    }(i = r || (r = {}))[i.GLOBAL = 0] = "GLOBAL", i[i.GUILD = 1] = "GUILD"
}