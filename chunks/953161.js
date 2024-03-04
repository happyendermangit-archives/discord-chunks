function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    }), n("424973"), n("222007");
    var i = n("773364"),
        s = n("22546");

    function r(e) {
        let t = !1;
        e.on(i.MediaEngineEvent.Destroy, () => t = !0);
        let n = async () => {
            if (t) return;
            let r = [];
            e.eachConnection(e => r.push({
                connection: e,
                stats: e.emitStats()
            }));
            let a = [];
            for (let e of r) {
                let t = await e.stats;
                null != t && a.push({
                    connection: e.connection,
                    stats: t
                })
            }
            e.emit(i.MediaEngineEvent.ConnectionStats, a), setTimeout(n, s.STATS_INTERVAL)
        };
        setTimeout(n, s.STATS_INTERVAL)
    }
}