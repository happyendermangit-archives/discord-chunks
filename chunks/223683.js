function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        backupSettings: function() {
            return _
        },
        listSnapshots: function() {
            return o
        },
        restoreSnapshot: function() {
            return u
        },
        takeSnapshot: function() {
            return l
        }
    });
    var i = n("392711"),
        r = n.n(i),
        a = n("544891"),
        s = n("981631");
    async function o() {
        return (await a.HTTP.get(s.Endpoints.NOTIFICATION_SNAPSHOTS)).body
    }
    async function l(e) {
        return (await a.HTTP.post({
            url: s.Endpoints.NOTIFICATION_SNAPSHOTS,
            body: {
                label: e
            }
        })).body
    }
    async function u(e) {
        return (await a.HTTP.post(s.Endpoints.RESTORE_NOTIFICATION_SNAPSHOT(e))).body
    }
    async function d(e) {
        return (await a.HTTP.del(s.Endpoints.NOTIFICATION_SNAPSHOT(e))).body
    }
    async function _(e) {
        if (e.length > 0) {
            var t;
            let n = r().sum(e.map(e => e.length)),
                i = null !== (t = r().max(e.map(e => e.length))) && void 0 !== t ? t : 0;
            if (e.length >= 5 || n + i > 1e6) {
                let t = r().sortBy(e, e => new Date(e.recorded_at).getTime());
                await d(t[0].id)
            }
        }
        return l("Backup from ".concat(new Date().toLocaleDateString()))
    }
}