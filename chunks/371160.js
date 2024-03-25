function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        setSessionExtendingEnabled: function() {
            return s
        },
        getSession: function() {
            return T
        },
        timestampOrZero: function() {
            return N
        }
    });
    var t = E("748820"),
        o = E("95410");
    let n = "LATEST_SESSION_TIMESTAMP",
        r = "LATEST_SESSION_UUID",
        a = "LATEST_SESSION_INITIALIZED_TIMESTAMP",
        i = Promise.resolve(),
        I = !1;

    function s(e) {
        I = e
    }

    function T() {
        let e = i.then(async () => {
            let e = await S();
            if (null == e || function(e) {
                    let _ = 18e5 + e.lastUsed - Date.now();
                    return _ <= 0
                }(e)) {
                if (!I) return null;
                let _ = {
                    uuid: (0, t.v4)(),
                    initialized: Date.now(),
                    lastUsed: Date.now()
                };
                o.Storage.set(r, _.uuid), o.Storage.set(a, _.initialized.toString()), o.Storage.set(n, Date.now().toString()), e = _
            } else I && o.Storage.set(n, Date.now().toString());
            return e
        });
        return i = e
    }
    async function S() {
        let e = await o.Storage.getAfterRefresh(r),
            _ = await o.Storage.getAfterRefresh(a).then(N),
            E = await o.Storage.getAfterRefresh(n).then(N);
        return null != e && null != _ ? {
            uuid: e,
            initialized: _,
            lastUsed: E
        } : null
    }

    function N(e) {
        return null != e ? Number(e) : 0
    }
}