function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getAutomodAvatarURL: function() {
            return I
        },
        default: function() {
            return A
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
        _ = n("521089"),
        f = n("366942"),
        E = n("125707"),
        h = n("785744"),
        g = n("297384"),
        m = n("573220"),
        p = n("265284"),
        S = n("320436"),
        T = n("348044"),
        v = n("36409");

    function I() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return e ? v : s
    }
    var A = {
        DEFAULT_AVATARS: [r, a, o, l, u, d],
        DEFAULT_GROUP_DM_AVATARS: [c, _, f, E, h, g, m, p],
        BOT_AVATARS: {
            clyde: T
        },
        DEFAULT_CHANNEL_ICON: S,
        canUseWebp: function() {
            return i.canUseWebp()
        }
    }
}