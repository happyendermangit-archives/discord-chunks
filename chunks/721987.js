function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("47120");
    var i = n("866442"),
        r = n("442837"),
        a = n("410030"),
        s = n("607070"),
        o = n("220082"),
        l = n("44315"),
        u = n("168631"),
        d = n("981631");

    function _(e) {
        var t, n, _;
        let {
            user: c,
            displayProfile: E,
            pendingThemeColors: I,
            pendingAvatar: T,
            isPreview: f
        } = e, S = (0, a.default)(), h = (0, r.useStateFromStores)([s.default], () => s.default.syncProfileThemeWithUserTheme), A = null != T ? T : null == c ? void 0 : c.getAvatarURL(null == E ? void 0 : E.guildId, 80), m = (0, l.useColorValue)(d.Color.PRIMARY_530).hex, [N, p] = (0, o.useAvatarColors)(A, m, !1);
        if (!(null == E ? void 0 : E.canEditThemes) && !f) return {
            theme: S,
            primaryColor: null,
            secondaryColor: null
        };
        let O = null == E ? void 0 : E.getPreviewThemeColors(I),
            R = null !== (t = null == O ? void 0 : O[0]) && void 0 !== t ? t : (0, i.hex2int)(N),
            C = null !== (n = null == O ? void 0 : O[1]) && void 0 !== n ? n : (0, i.hex2int)(p);
        return {
            theme: h ? S : null !== (_ = (0, u.getProfileTheme)(R)) && void 0 !== _ ? _ : S,
            primaryColor: R,
            secondaryColor: C
        }
    }
}