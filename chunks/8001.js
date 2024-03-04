function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("75247"),
        s = n("913144"),
        r = n("605250"),
        a = n("718517"),
        o = n("802493");
    let l = new r.default("FileSystemStore"),
        u = 10 * a.default.Millis.MINUTE;
    class d extends i.default {
        handlePostConnectionOpen() {
            return this.refresh(), !1
        }
        handleAppStateUpdate(e) {
            return "active" !== e.state && this.refresh(), !1
        }
        async refresh() {
            var e, t;
            let n = await (null === (t = o.default.database()) || void 0 === t ? void 0 : null === (e = t.fsInfo()) || void 0 === e ? void 0 : e.catch(e => l.warn("couldn't get fs info", e)));
            if (null != n) {
                let e = n.fs.available < 268435456 || n.fs.available < 3 * n.database.used || n.fs.available < 2 * n.database.total,
                    t = n.fs.available > 805306368 && n.fs.available > 4 * n.database.used && n.fs.available > 4 * n.database.total,
                    i = !!e || !t && null;
                null != i && this.isLowDisk !== i && (this.isLowDisk = i, this.emitChange())
            }
        }
        constructor() {
            super(s.default, {
                APP_STATE_UPDATE: e => this.handleAppStateUpdate(e),
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
            }), this.isLowDisk = !1, this.refresh(), this.waitFor(o.default), setInterval(() => this.refresh(), u)
        }
    }
    var c = new d
}