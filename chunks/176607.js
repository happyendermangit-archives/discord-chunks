function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        KV_RAW: function() {
            return o
        }
    });

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var o = new(function() {
        var e, t, n;

        function o() {
            var e, t, n;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, o), e = this, n = null, (t = "callback") in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        }
        return e = o, t = [{
            key: "raise",
            value: function(e) {
                throw e
            }
        }, {
            key: "setCallbacks",
            value: function(e) {
                this.callback = e.response
            }
        }, {
            key: "databaseOpen",
            value: function(e, t, n) {
                var r = 'kv_storage: platform "web" is not supported at this time.';
                if (null == n ? void 0 : n.synchronous) throw Error(r);
                return this.reply({
                    requestId: e,
                    synchronous: !1,
                    ok: !1,
                    data: r
                })
            }
        }, {
            key: "databaseList",
            value: function(e, t) {
                return this.reply({
                    requestId: e,
                    synchronous: null == t ? void 0 : t.synchronous,
                    ok: !0,
                    data: []
                })
            }
        }, {
            key: "databaseDelete",
            value: function(e, t, n) {
                return this.reply({
                    requestId: e,
                    synchronous: null == n ? void 0 : n.synchronous,
                    ok: !0,
                    data: void 0
                })
            }
        }, {
            key: "databaseOptimize",
            value: function(e, t, n) {
                return this.reply({
                    requestId: e,
                    synchronous: null == n ? void 0 : n.synchronous,
                    ok: !0,
                    data: void 0
                })
            }
        }, {
            key: "reply",
            value: function(e) {
                if (e.synchronous) return e.data;
                if (null != e.requestId) {
                    var t;
                    null === (t = this.callback) || void 0 === t || t.call(this, {
                        id: e.requestId,
                        ok: e.ok,
                        data: e.data,
                        timings: {
                            queueTimeNanoseconds: 0,
                            executionTimeNanoseconds: 0,
                            materializationTimeNanoseconds: 0,
                            totalTimeNanoseconds: 0
                        }
                    }, 0)
                }
            }
        }], r(e.prototype, t), n && r(e, n), o
    }())
}