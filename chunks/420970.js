function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ActionLogger: function() {
            return l
        }
    }), n("653041"), n("47120"), n("411104");
    var i = n("836560"),
        r = n("259443"),
        s = n("643191");

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let o = new r.Logger("Flux");
    class l extends i.EventEmitter {
        log(e, t) {
            let n = new d(e);
            n.startTime = s.performance.now();
            try {
                t((t, i) => {
                    let r;
                    let a = {
                            name: t,
                            time: -1
                        },
                        o = s.performance.now();
                    try {
                        r = i()
                    } finally {
                        a.time = s.performance.now() - o, this.persist && n.traces.push(a), this.emit("trace", e.type, t, a.time)
                    }
                    return r
                })
            } catch (e) {
                throw n.error = e, e
            } finally {
                n.totalTime = s.performance.now() - n.startTime, this.persist && n.totalTime > 0 && this.logs.push(n), this.logs.length > 1e3 && this.logs.shift(), this.emit("log", e)
            }
            return n
        }
        getSlowestActions(e) {
            var t;
            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                r = [];
            for (let t of this.logs)
                if (null == e || t.name === e)
                    for (let e of t.traces) r.push([e.name, t.name, e.time]);
            r.sort((e, t) => t[2] - e[2]), r.length > i && (r.length = i);
            let s = 0,
                a = 0,
                l = r.map(t => {
                    let [n, i, r] = t, a = "".concat(n);
                    return null == e && (a += "<".concat(i, ">")), s = Math.max(a.length, s), [a, r]
                }).map(e => {
                    let [t, n] = e;
                    return a += n, "".concat(t.padEnd(s + 1, " "), " - ").concat(n, "ms")
                }).join("\n");
            return 0 === r.length || r[0][2] < 10 || a < 20 ? r : (o.log("Using Hermes:", void 0 !== (null === (t = n.g) || void 0 === t ? void 0 : t.HermesInternal)), o.log("".concat(null != e ? "\n\n=== ".concat(e, " ===") : "", "\n").concat(l, "\n")), o.log("Total Time: ".concat(a, "ms")), r)
        }
        getLastActionMetrics(e) {
            var t;
            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                r = {};
            for (let e of this.logs)
                for (let t of e.traces) r[t.name] = [t.name, e.name, t.time];
            let s = Object.values(r);
            s.sort((e, t) => t[2] - e[2]), s.length > i && (s.length = i);
            let a = 0,
                l = 0,
                u = s.map(e => {
                    let [t, n, i] = e;
                    return a = Math.max(t.length, a), [t, i]
                }).map(e => {
                    let [t, n] = e;
                    return l += n, "".concat(t.padEnd(a + 1, " "), " - ").concat(n, "ms")
                }).join("\n");
            return 0 === s.length || l < 8 ? s : (o.log("\nUsing Hermes: ".concat(void 0 !== (null === (t = n.g) || void 0 === t ? void 0 : t.HermesInternal)), "\n\n=== ".concat(e, " ===\n").concat(u), "\nTotal Time: ".concat(l, "ms\n\n")), s)
        }
        constructor({
            persist: e = !1
        } = {}) {
            super(), a(this, "logs", []), a(this, "persist", void 0), this.persist = e
        }
    }
    let u = 0;
    class d {
        get name() {
            return this.action.type
        }
        toJSON() {
            if (null == this.createdAt) throw Error("ActionLog.toJSON: You must complete your logging before calling toJSON");
            return {
                actionType: this.action.type,
                created_at: this.createdAt,
                totalTime: this.totalTime,
                traces: this.traces
            }
        }
        constructor(e) {
            a(this, "id", void 0), a(this, "action", void 0), a(this, "createdAt", void 0), a(this, "startTime", 0), a(this, "totalTime", 0), a(this, "traces", []), a(this, "error", void 0), this.id = u++, this.action = e, this.createdAt = new Date
        }
    }
}