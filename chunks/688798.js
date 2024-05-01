function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("570140"),
        r = n("661111"),
        a = n("147913"),
        s = n("706454"),
        o = n("709054"),
        l = n("802098"),
        u = n("128014"),
        d = n("163379");

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class c extends a.default {
        constructor(...e) {
            super(...e), _(this, "actions", {
                POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e)
            }), _(this, "handleConnectionOpen", async e => {
                let t = await r.default.fetchChangelogConfig(),
                    n = t.body,
                    a = function(e, t) {
                        let n = 0,
                            i = null;
                        for (var [r, {
                                min_version: a
                            }] of Object.entries(e)) a <= t && a > n && (n = a, i = r);
                        return i
                    }(n, (0, u.getClientVersionForChangelog)());
                if (i.default.dispatch({
                        type: "CHANGE_LOG_SET_CONFIG",
                        config: t.body,
                        latestChangelogId: a
                    }), null == a || !0 !== n[a].show_on_startup) return;
                let _ = l.default.lastSeenChangelogId(),
                    c = l.default.lastSeenChangelogDate();
                if (null != _ && 0 >= o.default.compare(a, _)) return;
                let E = await r.default.fetchChangelog(a, s.default.locale);
                if (null != E) {
                    if (null == c || null == l.default.lastSeenChangelogDate()) {
                        r.default.markChangelogAsSeen(a, E.date);
                        return
                    }!l.default.isLocked() && new Date(E.date) > new Date(c) && (0, d.openChangelog)()
                }
            })
        }
    }
    t.default = new c
}