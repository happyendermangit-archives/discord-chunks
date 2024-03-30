function(e, t, n) {
    "use strict";

    function r(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }
    n.r(t);

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var a = null == n.g.__getTotalRequireTime ? function() {
            return 0
        } : function() {
            return n.g.__getTotalRequireTime()
        },
        u = "undefined" != typeof performance,
        s = function() {
            var e, t, n;

            function s() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, s), i(this, "isTracing_", !0), i(this, "endTime_", Date.now() + 15e3), i(this, "lastImportDuration", 0), i(this, "logGroups", [{
                    index: 0,
                    timestamp: Date.now(),
                    logs: [],
                    nativeLogs: []
                }]), i(this, "logs", this.logGroups[0].logs), i(this, "prefix", "")
            }
            return e = s, t = [{
                key: "isTracing",
                get: function() {
                    return !!u && !!this.isTracing_ && (!(Date.now() > this.endTime_) || (this.isTracing_ = !1, !1))
                }
            }, {
                key: "endTime",
                get: function() {
                    return this.endTime_
                },
                set: function(e) {
                    this.endTime_ = e, this.isTracing_ = !0
                }
            }, {
                key: "resumeTracing",
                value: function() {
                    !this.isTracing && (this.logGroups.unshift({
                        index: this.logGroups.length,
                        timestamp: Date.now(),
                        logs: [],
                        nativeLogs: []
                    }), this.logs = this.logGroups[0].logs), this.endTime = Date.now() + 1e4
                }
            }, {
                key: "mark",
                value: function(e, t, n) {
                    this.isTracing && (this.logs.push({
                        emoji: e,
                        prefix: "".concat(this.prefix),
                        log: t,
                        delta: n,
                        timestamp: Date.now()
                    }), this.addImportLogDetail())
                }
            }, {
                key: "markAndLog",
                value: function(e, t, n, r) {
                    e.log(n), this.isTracing && (this.logs.push({
                        emoji: t,
                        prefix: this.prefix,
                        log: n,
                        delta: r,
                        timestamp: Date.now()
                    }), this.addImportLogDetail())
                }
            }, {
                key: "addImportLogDetail",
                value: function() {
                    var e = a();
                    e - this.lastImportDuration > 25 && (this.addDetail("JS Imports", Math.ceil(e) + "ms"), this.lastImportDuration = e)
                }
            }, {
                key: "markWithDelta",
                value: function(e, t) {
                    var n = this.logs[this.logs.length - 1];
                    this.mark(e, t, null != n && null != n.timestamp ? Date.now() - n.timestamp : void 0)
                }
            }, {
                key: "markAt",
                value: function(e, t, n) {
                    if (this.isTracing) {
                        for (var r, o, i = 0; i < this.logs.length; i++) {
                            var a = this.logs[i].timestamp;
                            if (null != a && a > n) break
                        }
                        this.logs.splice(i, 0, {
                            emoji: e,
                            log: t,
                            timestamp: n,
                            prefix: null !== (o = null === (r = this.logs[i]) || void 0 === r ? void 0 : r.prefix) && void 0 !== o ? o : ""
                        })
                    }
                }
            }, {
                key: "addDetail",
                value: function(e, t) {
                    this.isTracing && this.logs.push({
                        emoji: this.logs[this.logs.length - 1].emoji,
                        prefix: this.prefix,
                        log: "  ↪ ".concat(e, " ").concat(t)
                    })
                }
            }, {
                key: "time",
                value: function(e, t, n) {
                    if (!this.isTracing) return n();
                    var r = this.prefix;
                    this.mark(e, "Start ".concat(t)), this.prefix += "| ";
                    var o = Date.now(),
                        i = n(),
                        a = Date.now() - o;
                    return this.prefix = r, this.mark(e, "Finish ".concat(t), a), i
                }
            }, {
                key: "timeAsync",
                value: function(e, t, n) {
                    var o, i = this;
                    return (o = function() {
                        var r, o, a;
                        return function(e, t) {
                            var n, r, o, i, a = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: u(0),
                                throw: u(1),
                                return: u(2)
                            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }), i;

                            function u(i) {
                                return function(u) {
                                    return function(i) {
                                        if (n) throw TypeError("Generator is already executing.");
                                        for (; a;) try {
                                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return a.label++, {
                                                        value: i[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    a.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = a.ops.pop(), a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                        a.label = i[1];
                                                        break
                                                    }
                                                    if (6 === i[0] && a.label < o[1]) {
                                                        a.label = o[1], o = i;
                                                        break
                                                    }
                                                    if (o && a.label < o[2]) {
                                                        a.label = o[2], a.ops.push(i);
                                                        break
                                                    }
                                                    o[2] && a.ops.pop(), a.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, a)
                                        } catch (e) {
                                            i = [6, e], r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & i[0]) throw i[1];
                                        return {
                                            value: i[0] ? i[1] : void 0,
                                            done: !0
                                        }
                                    }([i, u])
                                }
                            }
                        }(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    if (!i.isTracing) return [2, n()];
                                    return i.mark(e, "Start ".concat(t)), r = Date.now(), [4, n()];
                                case 1:
                                    return o = u.sent(), a = Date.now() - r, i.mark(e, "Finish ".concat(t), a), [2, o]
                            }
                        })
                    }, function() {
                        var e = this,
                            t = arguments;
                        return new Promise(function(n, i) {
                            var a = o.apply(e, t);

                            function u(e) {
                                r(a, n, i, u, s, "next", e)
                            }

                            function s(e) {
                                r(a, n, i, u, s, "throw", e)
                            }
                            u(void 0)
                        })
                    })()
                }
            }, {
                key: "setServerTrace",
                value: function(e) {
                    this.logGroups[0].serverTrace = e
                }
            }], o(e.prototype, t), n && o(e, n), s
        }();
    t.default = new s
}