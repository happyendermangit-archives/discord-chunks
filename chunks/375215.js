function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return y
        }
    });
    var r, o, i = n("898511"),
        a = n("35523"),
        u = n("306191"),
        s = n("843682"),
        l = n("779250"),
        c = n("53465");

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var _ = new a.default("GatewaySocket"),
        E = new Set(["INITIAL_GUILD", "READY"]),
        p = new Set(["READY", "INITIAL_GUILD"]),
        m = new Set(["READY", "READY_SUPPLEMENTAL", "RESUMED"]);
    (r = o || (o = {}))[r.NotStarted = 0] = "NotStarted", r[r.Loading = 1] = "Loading", r[r.Loaded = 2] = "Loaded";
    var y = function() {
        var e, t, n;

        function r(e) {
            var t = this;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r), d(this, "socket", void 0), d(this, "queue", void 0), d(this, "dispatchTimeout", void 0), d(this, "nextDispatchTimeout", void 0), d(this, "paused", void 0), d(this, "resumeAnalytics", void 0), d(this, "getDispatchHandler", void 0), d(this, "flush", void 0), this.socket = e, this.queue = [], this.dispatchTimeout = null, this.nextDispatchTimeout = 33, this.paused = !0, this.resumeAnalytics = (0, c.createResumeAnalytics)(), this.getDispatchHandler = null, this.flush = function() {
                if (!t.paused) {
                    clearTimeout(t.dispatchTimeout), t.dispatchTimeout = null;
                    for (var e = Date.now(), n = 0; n < t.queue.length && 2 === t.queue[n].status; n++);
                    if (0 !== n) {
                        var r = t.queue.splice(0, n);
                        t.dispatchMultiple(r);
                        var o = Date.now() - e;
                        o > 100 ? (_.log("Dispatched ".concat(r.length, " messages in ").concat(o, "ms")), t.nextDispatchTimeout = 250) : t.nextDispatchTimeout = 33
                    }
                }
            }
        }
        return e = r, t = [{
            key: "hasStuffToDispatchNow",
            value: function() {
                return this.queue.length > 0 && 2 === this.queue[0].status
            }
        }, {
            key: "processFirstQueuedDispatch",
            value: function(e) {
                for (var t = []; this.queue.length > 0 && e.has(this.queue[0].type) && 2 === this.queue[0].status;) t.push(this.queue.shift());
                this.dispatchMultiple(t)
            }
        }, {
            key: "unpauseDispatchQueue",
            value: function() {
                this.paused = !1;
                var e = !0,
                    t = !1,
                    n = void 0;
                try {
                    for (var r, o = this.queue[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                        var i = r.value;
                        this.maybePreload(i)
                    }
                } catch (e) {
                    t = !0, n = e
                } finally {
                    try {
                        !e && null != o.return && o.return()
                    } finally {
                        if (t) throw n
                    }
                }
                this.flush()
            }
        }, {
            key: "receiveDispatch",
            value: function(e, t, n) {
                if (null == this.getDispatchHandler) throw Error("getDispatchHandler needs to be passed in first!");
                var r = {
                    data: e,
                    type: t,
                    compressionAnalytics: n,
                    status: 0,
                    preloadPromise: null,
                    preloadedData: null
                };
                this.queue.push(r), !this.maybePreload(r) && this.scheduleFlush(t)
            }
        }, {
            key: "maybePreload",
            value: function(e) {
                var t = this;
                if (this.paused && !E.has(e.type)) return !1;
                if (0 === e.status) {
                    var n, r = null === (n = this.getDispatchHandler(e.type)) || void 0 === n ? void 0 : n.preload(e.data);
                    if (e.status = null == r ? 2 : 1, e.preloadPromise = r, null != r) return r.then(function(n) {
                        e.preloadedData = n, e.status = 2, t.scheduleFlush(e.type)
                    }).catch(function(n) {
                        return t.socket.resetSocketOnDispatchError({
                            error: n,
                            action: e.type
                        })
                    }), !0
                }
                return !1
            }
        }, {
            key: "scheduleFlush",
            value: function(e) {
                !this.paused && (p.has(e) ? (null != this.dispatchTimeout && clearTimeout(this.dispatchTimeout), this.flush()) : null == this.dispatchTimeout && (this.dispatchTimeout = setTimeout(this.flush, this.nextDispatchTimeout)))
            }
        }, {
            key: "dispatchMultiple",
            value: function(e) {
                var t = this;
                if (0 !== e.length) {
                    var n = "none",
                        r = !1;
                    try {
                        this.socket.connectionState === l.default.RESUMING && i.default.Emitter.pause(150), i.default.Emitter.batched(function() {
                            e.forEach(function(e) {
                                n = e.type, r = r || m.has(e.type), t.dispatchOne(e)
                            }), s.default.flush()
                        }), r && i.default.Emitter.resume()
                    } catch (e) {
                        this.socket.resetSocketOnDispatchError({
                            error: e,
                            action: n
                        })
                    }
                }
            }
        }, {
            key: "dispatchOne",
            value: function(e) {
                var t, n, r = e.data,
                    o = e.type,
                    i = e.compressionAnalytics,
                    a = e.preloadedData,
                    f = performance.now();
                if (this.socket.connectionState === l.default.RESUMING) {
                    var d = f - this.resumeAnalytics.lastUpdateTime;
                    0 === this.resumeAnalytics.numEvents ? this.resumeAnalytics.initialWaitTime = d : d > this.resumeAnalytics.largestWaitTime && (this.resumeAnalytics.largestWaitTime = d), this.resumeAnalytics.totalWaitTime += d, this.resumeAnalytics.lastUpdateTime = f, this.resumeAnalytics.numEvents += 1
                }
                if (u.default.isLoggingGatewayEvents && _.verboseDangerously("<~", o, r), s.default.flush(o, r), "READY" === o) {
                    var E, p = (0, c.getReadyPayloadByteSizeAnalytics)(r);
                    null === (E = this.getDispatchHandler(o)) || void 0 === E || E.dispatch(r, o, a), (0, c.logReadyPayloadReceived)(this.socket, r, f, i, p)
                } else "RESUMED" === o ? (null === (t = this.getDispatchHandler(o)) || void 0 === t || t.dispatch(r, o, a), (0, c.logResumeAnalytics)(this.resumeAnalytics), this.resumeAnalytics = (0, c.createResumeAnalytics)(), this.socket.handleResumeDispatched()) : null === (n = this.getDispatchHandler(o)) || void 0 === n || n.dispatch(r, o, a);
                this.socket.connectionState === l.default.RESUMING && (this.resumeAnalytics.dispatchTime += performance.now() - f)
            }
        }, {
            key: "clear",
            value: function() {
                this.paused = !1, this.queue.length = 0
            }
        }], f(e.prototype, t), n && f(e, n), r
    }()
}