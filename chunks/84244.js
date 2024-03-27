function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("47120");
    var i = n("866442"),
        r = n("220082"),
        s = n("44315"),
        a = n("981631");

    function o(e, t) {
        var n, o;
        let {
            pendingThemeColors: l,
            isPreview: u
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, d = null == e ? void 0 : e.getAvatarURL(null == t ? void 0 : t.guildId, 80), _ = (0, s.useColorValue)(a.Color.PRIMARY_530).hex, [c, E] = (0, r.useAvatarColors)(d, _, !1);
        if (!(null == t ? void 0 : t.canEditThemes) && !u) return [null, null];
        let I = null == t ? void 0 : t.getPreviewThemeColors(l),
            T = null !== (n = null == I ? void 0 : I[0]) && void 0 !== n ? n : (0, i.hex2int)(c);
        return [T, null !== (o = null == I ? void 0 : I[1]) && void 0 !== o ? o : (0, i.hex2int)(E)]
    }
}