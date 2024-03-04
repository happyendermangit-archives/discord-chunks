function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        ActionLogger: function() {
            return a
        }
    }), E("424973"), E("222007"), E("70102");
    var t = E("44170"),
        o = E("811022"),
        n = E("279295");
    let r = new o.default("Flux");
    class a extends t.EventEmitter {
        log(e, _) {
            let E = new I(e);
            E.startTime = n.performance.now();
            try {
                _((_, t) => {
                    let o;
                    let r = {
                            name: _,
                            time: -1
                        },
                        a = n.performance.now();
                    try {
                        o = t()
                    } finally {
                        r.time = n.performance.now() - a, this.persist && E.traces.push(r), this.emit("trace", e.type, _, r.time)
                    }
                    return o
                })
            } catch (e) {
                throw E.error = e, e
            } finally {
                E.totalTime = n.performance.now() - E.startTime, this.persist && E.totalTime > 0 && this.logs.push(E), this.logs.length > 1e3 && this.logs.shift(), this.emit("log", e)
            }
            return E
        }
        getSlowestActions(e) {
            var _;
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                o = [];
            for (let _ of this.logs)
                if (null == e || _.name === e)
                    for (let e of _.traces) o.push([e.name, _.name, e.time]);
            o.sort((e, _) => _[2] - e[2]), o.length > t && (o.length = t);
            let n = 0,
                a = 0,
                i = o.map(_ => {
                    let [E, t, o] = _, r = "".concat(E);
                    return null == e && (r += "<".concat(t, ">")), n = Math.max(r.length, n), [r, o]
                }).map(e => {
                    let [_, E] = e;
                    return a += E, "".concat(_.padEnd(n + 1, " "), " - ").concat(E, "ms")
                }).join("\n");
            return 0 === o.length || o[0][2] < 10 || a < 20 ? o : (r.log("Using Hermes:", void 0 !== (null === (_ = E.g) || void 0 === _ ? void 0 : _.HermesInternal)), r.log("".concat(null != e ? "\n\n=== ".concat(e, " ===") : "", "\n").concat(i, "\n")), r.log("Total Time: ".concat(a, "ms")), o)
        }
        getLastActionMetrics(e) {
            var _;
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                o = {};
            for (let e of this.logs)
                for (let _ of e.traces) o[_.name] = [_.name, e.name, _.time];
            let n = Object.values(o);
            n.sort((e, _) => _[2] - e[2]), n.length > t && (n.length = t);
            let a = 0,
                i = 0,
                I = n.map(e => {
                    let [_, E, t] = e;
                    return a = Math.max(_.length, a), [_, t]
                }).map(e => {
                    let [_, E] = e;
                    return i += E, "".concat(_.padEnd(a + 1, " "), " - ").concat(E, "ms")
                }).join("\n");
            return 0 === n.length || i < 8 ? n : (r.log("\nUsing Hermes: ".concat(void 0 !== (null === (_ = E.g) || void 0 === _ ? void 0 : _.HermesInternal)), "\n\n=== ".concat(e, " ===\n").concat(I), "\nTotal Time: ".concat(i, "ms\n\n")), n)
        }
        constructor({
            persist: e = !1
        } = {}) {
            super(), this.logs = [], this.persist = e
        }
    }
    let i = 0;
    class I {
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
            this.startTime = 0, this.totalTime = 0, this.traces = [], this.id = i++, this.action = e, this.createdAt = new Date
        }
    }
}