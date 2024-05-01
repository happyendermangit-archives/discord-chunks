function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("653041"), n("47120");
    var i = n("46973"),
        r = n("198274");

    function a(e) {
        let t = !1;
        e.on(i.MediaEngineEvent.Destroy, () => t = !0);
        let n = async () => {
            if (t) return;
            let a = [];
            e.eachConnection(e => a.push({
                connection: e,
                stats: e.emitStats()
            }));
            let s = [];
            for (let e of a) {
                let t = await e.stats;
                null != t && s.push({
                    connection: e.connection,
                    stats: t
                })
            }
            e.emit(i.MediaEngineEvent.ConnectionStats, s), setTimeout(n, r.STATS_INTERVAL)
        };
        setTimeout(n, r.STATS_INTERVAL)
    }
}