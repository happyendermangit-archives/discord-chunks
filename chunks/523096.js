function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getAutomodAvatarURL: function() {
            return I
        },
        default: function() {
            return C
        }
    });
    var i = n("560528"),
        s = n("324241"),
        r = n("307757"),
        a = n("548520"),
        o = n("445724"),
        l = n("170382"),
        u = n("593285"),
        d = n("575603"),
        c = n("181815"),
        f = n("521089"),
        _ = n("366942"),
        h = n("125707"),
        E = n("785744"),
        g = n("297384"),
        m = n("573220"),
        p = n("265284"),
        S = n("320436"),
        v = n("348044"),
        T = n("36409");

    function I() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return e ? T : s
    }
    var C = {
        DEFAULT_AVATARS: [r, a, o, l, u, d],
        DEFAULT_GROUP_DM_AVATARS: [c, f, _, h, E, g, m, p],
        BOT_AVATARS: {
            clyde: v
        },
        DEFAULT_CHANNEL_ICON: S,
        canUseWebp: function() {
            return i.canUseWebp()
        }
    }
}