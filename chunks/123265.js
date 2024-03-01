function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("222007"), n("424973"), n("70102");
    var s, i, r, a = n("446674"),
        o = n("605250"),
        d = n("313915"),
        u = n("509065"),
        l = n("41642"),
        f = n("342797");
    let _ = new o.default("GatewaySocket"),
        c = new Set(["INITIAL_GUILD", "READY"]),
        g = new Set(["READY", "INITIAL_GUILD"]),
        m = new Set(["READY", "READY_SUPPLEMENTAL", "RESUMED"]);
    (r = s || (s = {}))[r.NotStarted = 0] = "NotStarted", r[r.Loading = 1] = "Loading", r[r.Loaded = 2] = "Loaded", i = class {
        hasStuffToDispatchNow() {
            return this.queue.length > 0 && 2 === this.queue[0].status
        }
        processFirstQueuedDispatch(e) {
            let t = [];
            for (; this.queue.length > 0 && e.has(this.queue[0].type) && 2 === this.queue[0].status;) t.push(this.queue.shift());
            this.dispatchMultiple(t)
        }
        unpauseDispatchQueue() {
            for (let e of (this.paused = !1, this.queue)) this.maybePreload(e);
            this.flush()
        }
        receiveDispatch(e, t, n) {
            if (null == this.getDispatchHandler) throw Error("getDispatchHandler needs to be passed in first!");
            let s = {
                data: e,
                type: t,
                compressionAnalytics: n,
                status: 0,
                preloadPromise: null,
                preloadedData: null
            };
            this.queue.push(s), !this.maybePreload(s) && this.scheduleFlush(t)
        }
        maybePreload(e) {
            if (this.paused && !c.has(e.type)) return !1;
            if (0 === e.status) {
                var t;
                let n = null === (t = this.getDispatchHandler(e.type)) || void 0 === t ? void 0 : t.preload(e.data);
                if (e.status = null == n ? 2 : 1, e.preloadPromise = n, null != n) return n.then(t => {
                    e.preloadedData = t, e.status = 2, this.scheduleFlush(e.type)
                }).catch(t => this.socket.resetSocketOnDispatchError({
                    error: t,
                    action: e.type
                })), !0
            }
            return !1
        }
        scheduleFlush(e) {
            !this.paused && (g.has(e) ? (null != this.dispatchTimeout && clearTimeout(this.dispatchTimeout), this.flush()) : null == this.dispatchTimeout && (this.dispatchTimeout = setTimeout(this.flush, this.nextDispatchTimeout)))
        }
        dispatchMultiple(e) {
            if (0 === e.length) return;
            let t = "none",
                n = !1;
            try {
                this.socket.connectionState === l.default.RESUMING && a.default.Emitter.pause(150), a.default.Emitter.batched(() => {
                    e.forEach(e => {
                        t = e.type, n = n || m.has(e.type), this.dispatchOne(e)
                    }), u.default.flush()
                }), n && a.default.Emitter.resume()
            } catch (e) {
                this.socket.resetSocketOnDispatchError({
                    error: e,
                    action: t
                })
            }
        }
        dispatchOne(e) {
            var t, n, s;
            let {
                data: i,
                type: r,
                compressionAnalytics: a,
                preloadedData: o
            } = e, c = performance.now();
            if (this.socket.connectionState === l.default.RESUMING) {
                let e = c - this.resumeAnalytics.lastUpdateTime;
                0 === this.resumeAnalytics.numEvents ? this.resumeAnalytics.initialWaitTime = e : e > this.resumeAnalytics.largestWaitTime && (this.resumeAnalytics.largestWaitTime = e), this.resumeAnalytics.totalWaitTime += e, this.resumeAnalytics.lastUpdateTime = c, this.resumeAnalytics.numEvents += 1
            }
            if (d.default.isLoggingGatewayEvents && _.verboseDangerously("<~", r, i), u.default.flush(r, i), "READY" === r) {
                let e = (0, f.getReadyPayloadByteSizeAnalytics)(i);
                null === (t = this.getDispatchHandler(r)) || void 0 === t || t.dispatch(i, r, o), (0, f.logReadyPayloadReceived)(this.socket, i, c, a, e)
            } else "RESUMED" === r ? (null === (n = this.getDispatchHandler(r)) || void 0 === n || n.dispatch(i, r, o), (0, f.logResumeAnalytics)(this.resumeAnalytics), this.resumeAnalytics = (0, f.createResumeAnalytics)(), this.socket.handleResumeDispatched()) : null === (s = this.getDispatchHandler(r)) || void 0 === s || s.dispatch(i, r, o);
            this.socket.connectionState === l.default.RESUMING && (this.resumeAnalytics.dispatchTime += performance.now() - c)
        }
        clear() {
            this.paused = !1, this.queue.length = 0
        }
        constructor(e) {
            this.socket = e, this.queue = [], this.dispatchTimeout = null, this.nextDispatchTimeout = 33, this.paused = !0, this.resumeAnalytics = (0, f.createResumeAnalytics)(), this.getDispatchHandler = null, this.flush = () => {
                if (this.paused) return;
                clearTimeout(this.dispatchTimeout), this.dispatchTimeout = null;
                let e = Date.now(),
                    t = 0;
                for (; t < this.queue.length && 2 === this.queue[t].status; t++);
                if (0 === t) return;
                let n = this.queue.splice(0, t);
                this.dispatchMultiple(n);
                let s = Date.now() - e;
                s > 100 ? (_.log("Dispatched ".concat(n.length, " messages in ").concat(s, "ms")), this.nextDispatchTimeout = 250) : this.nextDispatchTimeout = 33
            }
        }
    }
}