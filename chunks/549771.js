function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSortedGuildIdsForSoundboard: function() {
            return _
        }
    }), n("733860");
    var i = n("470079"),
        r = n("399606"),
        s = n("496675"),
        a = n("771845"),
        o = n("594174"),
        l = n("74538"),
        u = n("981631"),
        d = n("231338");

    function _(e, t) {
        var n;
        let _ = (0, r.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
            c = null !== (n = null == e ? void 0 : e.guild_id) && void 0 !== n ? n : u.EMPTY_STRING_SNOWFLAKE_ID,
            E = (0, r.useStateFromStores)([a.default], () => a.default.getFlattenedGuildIds()),
            I = (0, r.useStateFromStores)([s.default], () => null == e || null == e.guild_id || s.default.can(d.Permissions.USE_EXTERNAL_SOUNDS, e));
        return i.useMemo(() => {
            if ((l.default.canUseSoundboardEverywhere(_) || !t) && I) {
                let e = "" !== c,
                    t = e ? E.filter(e => e !== c) : E;
                return e && t.unshift(c), t
            }
            return [c]
        }, [_, t, c, E, I])
    }
}