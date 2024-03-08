function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    }), n("222007");
    var i = n("509043"),
        l = n("462274"),
        a = n("449918"),
        s = n("49111");

    function r(e, t) {
        var n, r;
        let {
            pendingThemeColors: o,
            isPreview: u
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, d = null == e ? void 0 : e.getAvatarURL(null == t ? void 0 : t.guildId, 80), c = (0, a.useColorValue)(s.Color.PRIMARY_530).hex, [f, p] = (0, l.useAvatarColors)(d, c, !1);
        if (!(null == t ? void 0 : t.canEditThemes) && !u) return [null, null];
        let m = null == t ? void 0 : t.getPreviewThemeColors(o),
            h = null !== (n = null == m ? void 0 : m[0]) && void 0 !== n ? n : (0, i.hex2int)(f),
            x = null !== (r = null == m ? void 0 : m[1]) && void 0 !== r ? r : (0, i.hex2int)(p);
        return [h, x]
    }
}