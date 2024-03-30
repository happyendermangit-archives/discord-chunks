function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("392711"),
        o = n.n(r),
        i = n("35523"),
        a = n("10132"),
        u = n("341604");

    function s(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function l(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function f(e, t, n) {
        return t && c(e.prototype, t), n && c(e, n), e
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e) {
        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function E(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && m(e, t)
    }

    function p(e, t) {
        return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
    }

    function m(e, t) {
        return (m = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function y(e) {
        return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
    }

    function I(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r, o, i = _(e);
            if (t) {
                var a = _(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return n = this, (r = o) && ("object" === y(r) || "function" == typeof r) ? r : s(n)
        }
    }
    var h = {}.NativeModules,
        O = [],
        T = function() {
            function e(t) {
                l(this, e), d(this, "_onDataReady", void 0), d(this, "_gatewayEncoding", void 0), this._onDataReady = null, this._gatewayEncoding = t
            }
            return f(e, [{
                key: "bindWebSocket",
                value: function(e) {}
            }, {
                key: "feed",
                value: function(e) {}
            }, {
                key: "recomputeAlgorithm",
                value: function() {}
            }, {
                key: "dataReady",
                value: function(e) {
                    this._onDataReady = e
                }
            }], [{
                key: "canUse",
                value: function() {
                    return !1
                }
            }]), e
        }();
    O.push(function(e) {
        E(r, e);
        var t = I(r);

        function r(e) {
            l(this, r), d(s(o = t.call(this, e)), "_inflate", void 0), d(s(o), "_pako", n("457854"));
            var o, i = o._pako;
            return (o._inflate = new i.Inflate({
                chunkSize: 65536,
                to: o._gatewayEncoding.wantsString() ? "string" : ""
            })).onEnd = o.handleFlushEnd.bind(s(o)), o
        }
        return f(r, [{
            key: "getAlgorithm",
            value: function() {
                return "zlib-stream"
            }
        }, {
            key: "usesLegacyCompression",
            value: function() {
                return !1
            }
        }, {
            key: "feed",
            value: function(e) {
                var t = this._pako,
                    n = this._inflate;
                if (null == n) throw Error("Trying to feed to closed compression adapter");
                if (null === this._onDataReady) throw Error("Cannot feed unless a data ready callback is registered.");
                if (p(e, ArrayBuffer)) {
                    var r = new DataView(e),
                        o = r.byteLength >= 4 && 65535 === r.getUint32(r.byteLength - 4, !1);
                    n.push(e, !!o && t.Z_SYNC_FLUSH)
                } else throw Error("Expected array buffer, but got " + (void 0 === e ? "undefined" : y(e)))
            }
        }, {
            key: "close",
            value: function() {
                null != this._inflate && (this._inflate.onEnd = null, this._inflate.chunks = []), this._inflate = null
            }
        }, {
            key: "handleFlushEnd",
            value: function(e) {
                var t, n = this._pako,
                    r = this._inflate;
                if (null == r) {
                    new i.default("GatewayCompressionHandler").error("flush end happened on closed compression adapter");
                    return
                }
                if (e !== n.Z_OK) throw Error("zlib error, ".concat(e, ", ").concat(r.strm.msg));
                var o = r.chunks,
                    a = o.length;
                if (this._gatewayEncoding.wantsString()) t = a > 1 ? o.join("") : o[0];
                else if (a > 1) {
                    for (var u = 0, s = 0; s < a; s++) u += o[s].length;
                    for (var l = new Uint8Array(u), c = 0, f = 0; f < a; f++) {
                        var d = o[f];
                        l.set(d, c), c += d.length
                    }
                    t = l
                } else t = o[0];
                o.length = 0, null != this._onDataReady && this._onDataReady(t)
            }
        }], [{
            key: "canUse",
            value: function() {
                return void 0 !== window.Uint8Array
            }
        }]), r
    }(T)), O.push(function(e) {
        E(r, e);
        var t = I(r);

        function r() {
            var e;
            return l(this, r), e = t.apply(this, arguments), d(s(e), "_pako", n("457854")), e
        }
        return f(r, [{
            key: "getAlgorithm",
            value: function() {
                return null
            }
        }, {
            key: "usesLegacyCompression",
            value: function() {
                return !0
            }
        }, {
            key: "feed",
            value: function(e) {
                var t = this._pako;
                if (p(e, ArrayBuffer) && this._gatewayEncoding.wantsString() && (e = t.inflate(e, {
                        to: "string"
                    })), null == this._onDataReady) throw Error("Cannot feed unless a data ready callback is registered.");
                this._onDataReady(e)
            }
        }, {
            key: "close",
            value: function() {}
        }], [{
            key: "canUse",
            value: function() {
                return !0
            }
        }]), r
    }(T)), O.push(function(e) {
        E(n, e);
        var t = I(n);

        function n(e) {
            var r;
            return l(this, n), d(s(r = t.call(this, e)), "_socketId", void 0), d(s(r), "_usesZstd", void 0), r._usesZstd = !1, r._socketId = null, r
        }
        return f(n, [{
            key: "bindWebSocket",
            value: function(e) {
                this.close(), this._socketId = e._socketId, this._usesZstd ? h.DCDCompressionManager.enableZstdStreamSupport(this._socketId, 0) : h.DCDCompressionManager.enableZlibStreamSupport(this._socketId)
            }
        }, {
            key: "recomputeAlgorithm",
            value: function() {
                this._usesZstd = u.default.shouldUseZstd()
            }
        }, {
            key: "getAlgorithm",
            value: function() {
                return this._usesZstd ? "zstd-stream" : "zlib-stream"
            }
        }, {
            key: "usesLegacyCompression",
            value: function() {
                return !1
            }
        }, {
            key: "feed",
            value: function(e) {
                if (null == this._onDataReady) throw Error("Cannot feed unless a data ready callback is registered.");
                null !== e && this._onDataReady(e)
            }
        }, {
            key: "close",
            value: function() {
                var e = this._socketId;
                this._socketId = null, null !== e && h.DCDCompressionManager.disableZlibStreamSupport(e)
            }
        }], [{
            key: "canUse",
            value: function() {
                return !1
            }
        }]), n
    }(T));
    var S = function(e) {
        E(n, e);
        var t = I(n);

        function n() {
            return l(this, n), t.apply(this, arguments)
        }
        return f(n, [{
            key: "getAlgorithm",
            value: function() {
                return null
            }
        }, {
            key: "usesLegacyCompression",
            value: function() {
                return !1
            }
        }, {
            key: "feed",
            value: function(e) {
                if (null == this._onDataReady) throw Error("Cannot feed unless a data ready callback is registered.");
                this._onDataReady(e)
            }
        }, {
            key: "close",
            value: function() {}
        }], [{
            key: "canUse",
            value: function() {
                return !0
            }
        }]), n
    }(T);
    O.push(S);
    var v = o().find(O, function(e) {
        return e.canUse()
    });
    a.ProcessArgs.isDiscordGatewayPlaintextSet() && (v = S), t.default = v
}