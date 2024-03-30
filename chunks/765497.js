function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        makePromiseBuffer: function() {
            return a
        }
    });
    var r = n("303155"),
        i = n("880803");

    function a(t) {
        let e = [];

        function n(t) {
            return e.splice(e.indexOf(t), 1)[0]
        }
        return {
            $: e,
            add: function(a) {
                if (!(void 0 === t || e.length < t)) return (0, i.rejectedSyncPromise)(new r.SentryError("Not adding Promise because buffer limit was reached."));
                let o = a();
                return -1 === e.indexOf(o) && e.push(o), o.then(() => n(o)).then(null, () => n(o).then(null, () => {})), o
            },
            drain: function(t) {
                return new i.SyncPromise((n, r) => {
                    let a = e.length;
                    if (!a) return n(!0);
                    let o = setTimeout(() => {
                        t && t > 0 && n(!1)
                    }, t);
                    e.forEach(t => {
                        (0, i.resolvedSyncPromise)(t).then(() => {
                            !--a && (clearTimeout(o), n(!0))
                        }, r)
                    })
                })
            }
        }
    }
}