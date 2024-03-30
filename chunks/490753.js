function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        makeBrowserOfflineTransport: function() {
            return u
        }
    });
    var r = n("91320"),
        i = n("648238");

    function a(t) {
        return new Promise((e, n) => {
            t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => n(t.error)
        })
    }

    function o(t) {
        return a(t.getAllKeys())
    }

    function s(t) {
        let e;

        function n() {
            return void 0 == e && (e = function(t, e) {
                let n = indexedDB.open(t);
                n.onupgradeneeded = () => n.result.createObjectStore(e);
                let r = a(n);
                return t => r.then(n => t(n.transaction(e, "readwrite").objectStore(e)))
            }(t.dbName || "sentry-offline", t.storeName || "queue")), e
        }
        return {
            insert: async e => {
                try {
                    var r, s, u;
                    let l = await (0, i.serializeEnvelope)(e, t.textEncoder);
                    await (r = n(), s = l, u = t.maxQueueSize || 30, r(t => o(t).then(e => {
                        if (!(e.length >= u)) return t.put(s, Math.max(...e, 0) + 1), a(t.transaction)
                    })))
                } catch (t) {}
            },
            pop: async () => {
                try {
                    let e = await n()(t => o(t).then(e => {
                        if (0 !== e.length) return a(t.get(e[0])).then(n => (t.delete(e[0]), a(t.transaction).then(() => n)))
                    }));
                    if (e) return (0, i.parseEnvelope)(e, t.textEncoder || new TextEncoder, t.textDecoder || new TextDecoder)
                } catch (t) {}
            }
        }
    }

    function u(t) {
        var e;
        return e = (0, r.makeOfflineTransport)(t), t => e({
            ...t,
            createStore: s
        })
    }
}