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
            pendingAvatar: u,
            isPreview: d
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, _ = null != u ? u : null == e ? void 0 : e.getAvatarURL(null == t ? void 0 : t.guildId, 80), c = (0, s.useColorValue)(a.Color.PRIMARY_530).hex, [E, I] = (0, r.useAvatarColors)(_, c, !1);
        if (!(null == t ? void 0 : t.canEditThemes) && !d) return [null, null];
        let T = null == t ? void 0 : t.getPreviewThemeColors(l),
            f = null !== (n = null == T ? void 0 : T[0]) && void 0 !== n ? n : (0, i.hex2int)(E);
        return [f, null !== (o = null == T ? void 0 : T[1]) && void 0 !== o ? o : (0, i.hex2int)(I)]
    }
}