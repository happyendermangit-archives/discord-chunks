function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("424973"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102"), n("222007");
    var i = n("917351"),
        s = n.n(i),
        r = n("605250"),
        a = n("197881");
    let {
        NativeModules: o
    } = {}, l = [];
    class u {
        static canUse() {
            return !1
        }
        bindWebSocket(e) {}
        feed(e) {}
        dataReady(e) {
            this._onDataReady = e
        }
        constructor(e) {
            this._onDataReady = null, this._gatewayEncoding = e
        }
    }
    l.push(class extends u {
        static canUse() {
            return void 0 !== window.Uint8Array
        }
        getAlgorithm() {
            return "zlib-stream"
        }
        usesLegacyCompression() {
            return !1
        }
        feed(e) {
            let t = this._pako,
                n = this._inflate;
            if (null == n) throw Error("Trying to feed to closed compression adapter");
            let i = this._onDataReady;
            if (null === i) throw Error("Cannot feed unless a data ready callback is registered.");
            if (e instanceof ArrayBuffer) {
                let i = new DataView(e),
                    s = i.byteLength >= 4 && 65535 === i.getUint32(i.byteLength - 4, !1);
                n.push(e, !!s && t.Z_SYNC_FLUSH)
            } else throw Error("Expected array buffer, but got " + typeof e)
        }
        close() {
            null != this._inflate && (this._inflate.onEnd = null, this._inflate.chunks = []), this._inflate = null
        }
        handleFlushEnd(e) {
            let t;
            let n = this._pako,
                i = this._inflate;
            if (null == i) {
                new(0, r.default)("GatewayCompressionHandler").error("flush end happened on closed compression adapter");
                return
            }
            if (e !== n.Z_OK) throw Error("zlib error, ".concat(e, ", ").concat(i.strm.msg));
            let {
                chunks: s
            } = i, a = s.length;
            if (this._gatewayEncoding.wantsString()) t = a > 1 ? s.join("") : s[0];
            else if (a > 1) {
                let e = 0;
                for (let t = 0; t < a; t++) e += s[t].length;
                let n = new Uint8Array(e),
                    i = 0;
                for (let e = 0; e < a; e++) {
                    let t = s[e];
                    n.set(t, i), i += t.length
                }
                t = n
            } else t = s[0];
            s.length = 0, null != this._onDataReady && this._onDataReady(t)
        }
        constructor(e) {
            super(e), this._pako = n("181905");
            let t = this._pako,
                i = this._inflate = new t.Inflate({
                    chunkSize: 65536,
                    to: this._gatewayEncoding.wantsString() ? "string" : ""
                });
            i.onEnd = this.handleFlushEnd.bind(this)
        }
    }), l.push(class extends u {
        static canUse() {
            return !0
        }
        getAlgorithm() {
            return null
        }
        usesLegacyCompression() {
            return !0
        }
        feed(e) {
            let t = this._pako;
            if (e instanceof ArrayBuffer && this._gatewayEncoding.wantsString() && (e = t.inflate(e, {
                    to: "string"
                })), null == this._onDataReady) throw Error("Cannot feed unless a data ready callback is registered.");
            this._onDataReady(e)
        }
        close() {}
        constructor(...e) {
            super(...e), this._pako = n("181905")
        }
    }), l.push(class extends u {
        static canUse() {
            return !1
        }
        bindWebSocket(e) {
            this.close(), this._socketId = e._socketId, o.DCDCompressionManager.enableZlibStreamSupport(this._socketId)
        }
        getAlgorithm() {
            return "zlib-stream"
        }
        usesLegacyCompression() {
            return !1
        }
        feed(e) {
            if (null == this._onDataReady) throw Error("Cannot feed unless a data ready callback is registered.");
            null !== e && this._onDataReady(e)
        }
        close() {
            let e = this._socketId;
            this._socketId = null, null !== e && o.DCDCompressionManager.disableZlibStreamSupport(e)
        }
        constructor(e) {
            super(e), this._socketId = null
        }
    });
    class d extends u {
        static canUse() {
            return !0
        }
        getAlgorithm() {
            return null
        }
        usesLegacyCompression() {
            return !1
        }
        feed(e) {
            if (null == this._onDataReady) throw Error("Cannot feed unless a data ready callback is registered.");
            this._onDataReady(e)
        }
        close() {}
    }
    l.push(d);
    let c = s.find(l, e => e.canUse());
    a.ProcessArgs.isDiscordGatewayPlaintextSet() && (c = d);
    var _ = c
}