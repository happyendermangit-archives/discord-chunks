function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    }), n("222007");
    var l = n("509043"),
        i = n("462274"),
        a = n("449918"),
        s = n("49111");

    function r(e, t) {
        var n, r;
        let {
            pendingThemeColors: o,
            isPreview: u
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, d = null == e ? void 0 : e.getAvatarURL(null == t ? void 0 : t.guildId, 80), c = (0, a.useColorValue)(s.Color.PRIMARY_530).hex, [f, m] = (0, i.useAvatarColors)(d, c, !1);
        if (!(null == t ? void 0 : t.canEditThemes) && !u) return [null, null];
        let p = null == t ? void 0 : t.getPreviewThemeColors(o),
            h = null !== (n = null == p ? void 0 : p[0]) && void 0 !== n ? n : (0, l.hex2int)(f),
            E = null !== (r = null == p ? void 0 : p[1]) && void 0 !== r ? r : (0, l.hex2int)(m);
        return [h, E]
    }
}