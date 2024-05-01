function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getSession: function() {
            return _
        },
        setSessionExtendingEnabled: function() {
            return d
        },
        timestampOrZero: function() {
            return E
        }
    });
    var i = n("153832"),
        r = n("433517");
    let a = "LATEST_SESSION_TIMESTAMP",
        s = "LATEST_SESSION_UUID",
        o = "LATEST_SESSION_INITIALIZED_TIMESTAMP",
        l = Promise.resolve(),
        u = !1;

    function d(e) {
        u = e
    }

    function _() {
        return l = l.then(async () => {
            let e = await c();
            if (null == e || function(e) {
                    return 18e5 + e.lastUsed - Date.now() <= 0
                }(e)) {
                if (!u) return null;
                let t = {
                    uuid: (0, i.v4)(),
                    initialized: Date.now(),
                    lastUsed: Date.now()
                };
                r.Storage.set(s, t.uuid), r.Storage.set(o, t.initialized.toString()), r.Storage.set(a, Date.now().toString()), e = t
            } else u && r.Storage.set(a, Date.now().toString());
            return e
        })
    }
    async function c() {
        let e = await r.Storage.getAfterRefresh(s),
            t = await r.Storage.getAfterRefresh(o).then(E),
            n = await r.Storage.getAfterRefresh(a).then(E);
        return null != e && null != t ? {
            uuid: e,
            initialized: t,
            lastUsed: n
        } : null
    }

    function E(e) {
        return null != e ? Number(e) : 0
    }
}