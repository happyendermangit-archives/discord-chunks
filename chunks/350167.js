function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Runtime: function() {
            return u
        }
    }), n("653041"), n("47120"), n("411104");
    var i = n("259443"),
        r = n("198584"),
        s = n("444675");

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let o = "1" === s.env.KV_STORAGE_LOGGING,
        l = new i.Logger("Runtime");
    class u {
        static nextId() {
            return ++this.counter
        }
        static executeAsync(e, t) {
            return this.initialize(), new Promise((n, i) => {
                let r = this.nextId();
                t(r), this.pending.set(r, {
                    id: r,
                    tag: e,
                    started: performance.now(),
                    resolve: n,
                    reject: i
                })
            })
        }
        static addCompletionCallback(e) {
            return this.completionCallbacks.push(e), e
        }
        static addDatabaseStateCallback(e) {
            return this.dbStateCallbacks.push(e), e
        }
        static removeCompletionCallback(e) {
            this.completionCallbacks = this.completionCallbacks.filter(t => t !== e)
        }
        static removeDatabaseStateCallback(e) {
            this.dbStateCallbacks = this.dbStateCallbacks.filter(t => t !== e)
        }
        static onResponse(e, t) {
            let n = performance.now(),
                i = this.pending.get(e.id);
            null != i && (this.pending.delete(e.id), e.timings.materializationTimeNanoseconds = null != t ? t : 0, this.completeOperation(i, e, n), this.resolveOperation(i, e))
        }
        static onStatus(e) {
            for (let t of this.dbStateCallbacks) t(e.handle, e.state)
        }
        static resolveOperation(e, t) {
            t.ok ? e.resolve(t.data) : e.reject("string" == typeof t.data ? Error(t.data) : t.data)
        }
        static completeOperation(e, t, n) {
            if (this.completionCallbacks.length > 0) {
                let i = {
                    id: e.id,
                    tag: e.tag,
                    ok: t.ok,
                    value: t.data,
                    timings: {
                        queue: t.timings.queueTimeNanoseconds / 1e6,
                        execution: t.timings.executionTimeNanoseconds / 1e6,
                        materialization: t.timings.materializationTimeNanoseconds / 1e6,
                        ccTotal: t.timings.totalTimeNanoseconds / 1e6,
                        jsTotal: n - e.started
                    }
                };
                for (let e of this.completionCallbacks) e(i)
            }
        }
        static initialize() {
            !this.initialized && (r.KV_RAW.setCallbacks({
                status: e => this.onStatus(e),
                response: (e, t) => this.onResponse(e, t)
            }), o && (this.addCompletionCallback(e => {
                let t = e.ok ? "completed" : "failed",
                    n = ["".concat(e.timings.execution.toFixed(3), "ms execution"), "".concat(e.timings.materialization.toFixed(3), "ms js materialization"), "".concat(e.timings.ccTotal.toFixed(3), "ms cc completion"), "".concat(e.timings.jsTotal.toFixed(3), "ms js reception")].join(", ");
                l.info("".concat(e.tag, " (#").concat(e.id, ") ").concat(t, " in ").concat(e.timings.ccTotal.toFixed(3), "ms (").concat(n, ")."))
            }), this.addDatabaseStateCallback((e, t) => l.info("".concat(e, " (state: ").concat(t, ")")))), this.initialized = !0)
        }
    }
    a(u, "counter", 0), a(u, "pending", new Map), a(u, "initialized", !1), a(u, "dbStateCallbacks", []), a(u, "completionCallbacks", [])
}