function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getAutomodAvatarURL: function() {
            return S
        }
    });
    var r = n("513741"),
        o = n("621554"),
        i = n("328756"),
        a = n("639525"),
        u = n("131812"),
        s = n("265174"),
        l = n("926425"),
        c = n("844049"),
        f = n("712386"),
        d = n("602722"),
        _ = n("534109"),
        E = n("859500"),
        p = n("484542"),
        m = n("881500"),
        y = n("910826"),
        I = n("307244"),
        h = n("669730"),
        O = n("185672"),
        T = n("235731");

    function S() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return e ? T : o
    }
    t.default = {
        DEFAULT_AVATARS: [i, a, u, s, l, c],
        DEFAULT_GROUP_DM_AVATARS: [f, d, _, E, p, m, y, I],
        BOT_AVATARS: {
            clyde: O
        },
        DEFAULT_CHANNEL_ICON: h,
        canUseWebp: function() {
            return r.canUseWebp()
        }
    }
}