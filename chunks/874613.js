function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("427786"),
        o = n.n(r),
        i = n("35523");

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var s = new i.default("Queue"),
        l = function() {
            var e, t, n;

            function r() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, r), u(this, "logger", void 0), u(this, "defaultRetryAfter", void 0), u(this, "queue", void 0), u(this, "timeout", void 0), u(this, "draining", void 0), this.logger = e, this.defaultRetryAfter = t, this.queue = new(o()), this.timeout = null, this.draining = !1
            }
            return e = r, t = [{
                key: "enqueue",
                value: function(e, t, n) {
                    this.queue.push({
                        message: e,
                        success: t,
                        logId: n
                    }), this._drainIfNecessary()
                }
            }, {
                key: "length",
                get: function() {
                    return this.queue.length
                }
            }, {
                key: "_drainIfNecessary",
                value: function() {
                    var e = this;
                    if (null === this.timeout && 0 !== this.queue.length) {
                        if (!0 !== this.draining) {
                            this.draining = !0;
                            var t = this.queue.shift(),
                                n = t.message,
                                r = t.success,
                                o = t.logId;
                            this.logger.log("Draining message from queue LogId:".concat(o, " QueueLength: ").concat(this.queue.length)), this.drain(n, function(n, i) {
                                if (e.logger.log("Finished draining message from queue LogId:".concat(o, " QueueLength: ").concat(e.queue.length)), e.draining = !1, null == n) {
                                    setImmediate(function() {
                                        return e._drainIfNecessary()
                                    });
                                    try {
                                        r(i)
                                    } catch (t) {
                                        e.logger.error("", t)
                                    }
                                } else {
                                    var a, u = null !== (a = n.retryAfter) && void 0 !== a ? a : e.defaultRetryAfter;
                                    e.logger.info("Rate limited. Delaying draining of queue for ".concat(u, " ms. LogId:").concat(o, " QueueLength: ").concat(e.queue.length)), e.timeout = setTimeout(function() {
                                        e.queue.unshift(t), e.timeout = null, e._drainIfNecessary()
                                    }, u)
                                }
                            })
                        }
                    }
                }
            }], a(e.prototype, t), n && a(e, n), r
        }()
}