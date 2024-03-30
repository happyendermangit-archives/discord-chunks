function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSortedGuildIdsForSoundboard: function() {
            return f
        }
    });
    var r = n("470079"),
        o = n("37295"),
        i = n("29884"),
        a = n("380512"),
        u = n("208454"),
        s = n("830721"),
        l = n("281767"),
        c = n("563090");

    function f(e, t) {
        var n, f = (0, o.useStateFromStores)([u.default], function() {
                return u.default.getCurrentUser()
            }),
            d = null !== (n = null == e ? void 0 : e.guild_id) && void 0 !== n ? n : l.EMPTY_STRING_SNOWFLAKE_ID,
            _ = (0, o.useStateFromStores)([a.default], function() {
                return a.default.getFlattenedGuildIds()
            }),
            E = (0, o.useStateFromStores)([i.default], function() {
                return null == e || null == e.guild_id || i.default.can(c.Permissions.USE_EXTERNAL_SOUNDS, e)
            });
        return r.useMemo(function() {
            if ((s.default.canUseSoundboardEverywhere(f) || !t) && E) {
                var e = "" !== d,
                    n = e ? _.filter(function(e) {
                        return e !== d
                    }) : _;
                return e && n.unshift(d), n
            }
            return [d]
        }, [f, t, d, _, E])
    }
}