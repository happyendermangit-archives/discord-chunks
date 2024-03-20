function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        listSnapshots: function() {
            return o
        },
        takeSnapshot: function() {
            return r
        },
        restoreSnapshot: function() {
            return u
        },
        backupSettings: function() {
            return c
        }
    });
    var a = n("917351"),
        i = n.n(a),
        s = n("872717"),
        l = n("49111");
    async function o() {
        return (await s.default.get(l.Endpoints.NOTIFICATION_SNAPSHOTS)).body
    }
    async function r(e) {
        return (await s.default.post({
            url: l.Endpoints.NOTIFICATION_SNAPSHOTS,
            body: {
                label: e
            }
        })).body
    }
    async function u(e) {
        return (await s.default.post(l.Endpoints.RESTORE_NOTIFICATION_SNAPSHOT(e))).body
    }
    async function d(e) {
        return (await s.default.delete(l.Endpoints.NOTIFICATION_SNAPSHOT(e))).body
    }
    async function c(e) {
        if (e.length > 0) {
            var t;
            let n = i.sum(e.map(e => e.length)),
                a = null !== (t = i.max(e.map(e => e.length))) && void 0 !== t ? t : 0;
            if (e.length >= 5 || n + a > 1e6) {
                let t = i.sortBy(e, e => new Date(e.recorded_at).getTime());
                await d(t[0].id)
            }
        }
        return r("Backup from ".concat(new Date().toLocaleDateString()))
    }
}