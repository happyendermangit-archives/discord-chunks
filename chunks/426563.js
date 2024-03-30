function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getAutomodAvatarURL: function() {
            return O
        }
    });
    var i = n("526167"),
        r = n("621554"),
        s = n("328756"),
        a = n("639525"),
        o = n("131812"),
        l = n("265174"),
        u = n("926425"),
        d = n("844049"),
        _ = n("712386"),
        c = n("602722"),
        E = n("534109"),
        I = n("859500"),
        T = n("484542"),
        f = n("881500"),
        S = n("910826"),
        h = n("307244"),
        A = n("669730"),
        m = n("185672"),
        N = n("235731");

    function O() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return e ? N : r
    }
    t.default = {
        DEFAULT_AVATARS: [s, a, o, l, u, d],
        DEFAULT_GROUP_DM_AVATARS: [_, c, E, I, T, f, S, h],
        BOT_AVATARS: {
            clyde: m
        },
        DEFAULT_CHANNEL_ICON: A,
        canUseWebp: function() {
            return i.canUseWebp()
        }
    }
}