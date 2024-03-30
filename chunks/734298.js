function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("653041"), n("47120");
    var i = n("46973"),
        r = n("198274");

    function s(e) {
        let t = !1;
        e.on(i.MediaEngineEvent.Destroy, () => t = !0);
        let n = async () => {
            if (t) return;
            let s = [];
            e.eachConnection(e => s.push({
                connection: e,
                stats: e.emitStats()
            }));
            let a = [];
            for (let e of s) {
                let t = await e.stats;
                null != t && a.push({
                    connection: e.connection,
                    stats: t
                })
            }
            e.emit(i.MediaEngineEvent.ConnectionStats, a), setTimeout(n, r.STATS_INTERVAL)
        };
        setTimeout(n, r.STATS_INTERVAL)
    }
}