function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSortedGuildIdsForSoundboard: function() {
            return c
        }
    }), n("843762");
    var i = n("884691"),
        l = n("65597"),
        a = n("957255"),
        s = n("677099"),
        r = n("697218"),
        o = n("719923"),
        u = n("49111"),
        d = n("843455");

    function c(e, t) {
        var n;
        let c = (0, l.default)([r.default], () => r.default.getCurrentUser()),
            f = null !== (n = null == e ? void 0 : e.guild_id) && void 0 !== n ? n : u.EMPTY_STRING_SNOWFLAKE_ID,
            p = (0, l.default)([s.default], () => s.default.getFlattenedGuildIds()),
            m = (0, l.default)([a.default], () => null == e || null == e.guild_id || a.default.can(d.Permissions.USE_EXTERNAL_SOUNDS, e)),
            h = i.useMemo(() => {
                if ((o.default.canUseSoundboardEverywhere(c) || !t) && m) {
                    let e = "" !== f,
                        t = e ? p.filter(e => e !== f) : p;
                    return e && t.unshift(f), t
                }
                return [f]
            }, [c, t, f, p, m]);
        return h
    }
}