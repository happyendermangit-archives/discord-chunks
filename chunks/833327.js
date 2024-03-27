function(e, t, n) {
    "use strict";
    var r, i, a = n("444675");

    function o(e) {
        var t = this;
        this.next = null, this.entry = null, this.finish = function() {
            (function(e, t, n) {
                var r = e.entry;
                for (e.entry = null; r;) {
                    var i = r.callback;
                    t.pendingcb--, i(n), r = r.next
                }
                t.corkedRequestsFree.next = e
            })(t, e)
        }
    }
    e.exports = T, T.WritableState = w;
    var s = {
            deprecate: n("220342")
        },
        u = n("138772"),
        c = n("413135").Buffer,
        l = (void 0 !== n.g ? n.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {},
        d = n("887866"),
        f = n("97703").getHighWaterMark,
        p = n("531478").codes,
        h = p.ERR_INVALID_ARG_TYPE,
        m = p.ERR_METHOD_NOT_IMPLEMENTED,
        g = p.ERR_MULTIPLE_CALLBACK,
        _ = p.ERR_STREAM_CANNOT_PIPE,
        b = p.ERR_STREAM_DESTROYED,
        v = p.ERR_STREAM_NULL_VALUES,
        y = p.ERR_STREAM_WRITE_AFTER_END,
        E = p.ERR_UNKNOWN_ENCODING,
        S = d.errorOrDestroy;

    function x() {}

    function w(e, t, i) {
        r = r || n("827664"), e = e || {}, "boolean" != typeof i && (i = t instanceof r), this.objectMode = !!e.objectMode, i && (this.objectMode = this.objectMode || !!e.writableObjectMode), this.highWaterMark = f(this, e, "writableHighWaterMark", i), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
        var s = !1 === e.decodeStrings;
        this.decodeStrings = !s, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
            (function(e, t) {
                var n, r, i, o, s, u, c = e._writableState,
                    l = c.sync,
                    d = c.writecb;
                if ("function" != typeof d) throw new g;
                if ((n = c).writing = !1, n.writecb = null, n.length -= n.writelen, n.writelen = 0, t) {
                    ;
                    r = e, i = c, o = l, s = t, u = d, --i.pendingcb, o ? (a.nextTick(u, s), a.nextTick(k, r, i), r._writableState.errorEmitted = !0, S(r, s)) : (u(s), r._writableState.errorEmitted = !0, S(r, s), k(r, i))
                } else {
                    var f = M(c) || e.destroyed;
                    !f && !c.corked && !c.bufferProcessing && c.bufferedRequest && O(e, c), l ? a.nextTick(D, e, c, f, d) : D(e, c, f, d)
                }
            })(t, e)
        }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new o(this)
    }

    function T(e) {
        var t = this instanceof(r = r || n("827664"));
        if (!t && !i.call(T, this)) return new T(e);
        this._writableState = new w(e, this, t), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), u.call(this)
    }
    n("689118")(T, u), w.prototype.getBuffer = function() {
        for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
        return t
    }, ! function() {
        try {
            Object.defineProperty(w.prototype, "buffer", {
                get: s.deprecate(function() {
                    return this.getBuffer()
                }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
            })
        } catch (e) {}
    }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (i = Function.prototype[Symbol.hasInstance], Object.defineProperty(T, Symbol.hasInstance, {
        value: function(e) {
            return !!i.call(this, e) || this === T && e && e._writableState instanceof w
        }
    })) : i = function(e) {
        return e instanceof this
    }, T.prototype.pipe = function() {
        S(this, new _)
    };
    T.prototype.write = function(e, t, n) {
        var r, i, o, s, u, d, f, p, m, g, _ = this._writableState,
            b = !1;
        var E = !_.objectMode && (r = e, c.isBuffer(r) || r instanceof l);
        if (E && !c.isBuffer(e)) {
            ;
            i = e, e = c.from(i)
        }
        if ("function" == typeof t && (n = t, t = null), E ? t = "buffer" : !t && (t = _.defaultEncoding), "function" != typeof n && (n = x), _.ending) {
            ;
            o = this, s = n, S(o, u = new y), a.nextTick(s, u)
        } else {
            ;
            if (E || (d = this, f = _, p = e, m = n, null === p ? g = new v : "string" != typeof p && !f.objectMode && (g = new h("chunk", ["string", "Buffer"], p)), !g || (S(d, g), a.nextTick(m, g), 0))) _.pendingcb++, b = function(e, t, n, r, i, a) {
                if (!n) {
                    var o, s, u, l = (o = t, s = r, u = i, !o.objectMode && !1 !== o.decodeStrings && "string" == typeof s && (s = c.from(s, u)), s);
                    r !== l && (n = !0, i = "buffer", r = l)
                }
                var d = t.objectMode ? 1 : r.length;
                t.length += d;
                var f = t.length < t.highWaterMark;
                if (!f && (t.needDrain = !0), t.writing || t.corked) {
                    var p = t.lastBufferedRequest;
                    t.lastBufferedRequest = {
                        chunk: r,
                        encoding: i,
                        isBuf: n,
                        callback: a,
                        next: null
                    }, p ? p.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                } else C(e, t, !1, d, r, i, a);
                return f
            }(this, _, E, e, t, n)
        }
        return b
    }, T.prototype.cork = function() {
        this._writableState.corked++
    }, T.prototype.uncork = function() {
        var e = this._writableState;
        e.corked && (e.corked--, !e.writing && !e.corked && !e.bufferProcessing && e.bufferedRequest && O(this, e))
    }, T.prototype.setDefaultEncoding = function(e) {
        if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new E(e);
        return this._writableState.defaultEncoding = e, this
    }, Object.defineProperty(T.prototype, "writableBuffer", {
        enumerable: !1,
        get: function() {
            return this._writableState && this._writableState.getBuffer()
        }
    });
    Object.defineProperty(T.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark
        }
    });

    function C(e, t, n, r, i, a, o) {
        t.writelen = r, t.writecb = o, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new b("write")) : n ? e._writev(i, t.onwrite) : e._write(i, a, t.onwrite), t.sync = !1
    }

    function D(e, t, n, r) {
        !n && function(e, t) {
            0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
        }(e, t), t.pendingcb--, r(), k(e, t)
    }

    function O(e, t) {
        t.bufferProcessing = !0;
        var n = t.bufferedRequest;
        if (e._writev && n && n.next) {
            var r = Array(t.bufferedRequestCount),
                i = t.corkedRequestsFree;
            i.entry = n;
            for (var a = 0, s = !0; n;) r[a] = n, !n.isBuf && (s = !1), n = n.next, a += 1;
            r.allBuffers = s, C(e, t, !0, t.length, r, "", i.finish), t.pendingcb++, t.lastBufferedRequest = null, i.next ? (t.corkedRequestsFree = i.next, i.next = null) : t.corkedRequestsFree = new o(t), t.bufferedRequestCount = 0
        } else {
            for (; n;) {
                var u = n.chunk,
                    c = n.encoding,
                    l = n.callback,
                    d = t.objectMode ? 1 : u.length;
                if (C(e, t, !1, d, u, c, l), n = n.next, t.bufferedRequestCount--, t.writing) break
            }
            null === n && (t.lastBufferedRequest = null)
        }
        t.bufferedRequest = n, t.bufferProcessing = !1
    }

    function M(e) {
        return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
    }

    function A(e, t) {
        e._final(function(n) {
            t.pendingcb--, n && S(e, n), t.prefinished = !0, e.emit("prefinish"), k(e, t)
        })
    }
    T.prototype._write = function(e, t, n) {
        n(new m("_write()"))
    }, T.prototype._writev = null, T.prototype.end = function(e, t, n) {
        var r = this._writableState;
        return "function" == typeof e ? (n = e, e = null, t = null) : "function" == typeof t && (n = t, t = null), null != e && this.write(e, t), r.corked && (r.corked = 1, this.uncork()), !r.ending && function(e, t, n) {
            t.ending = !0, k(e, t), n && (t.finished ? a.nextTick(n) : e.once("finish", n)), t.ended = !0, e.writable = !1
        }(this, r, n), this
    }, Object.defineProperty(T.prototype, "writableLength", {
        enumerable: !1,
        get: function() {
            return this._writableState.length
        }
    });

    function k(e, t) {
        var n, r, i = M(t);
        if (i) {
            ;
            if (n = e, (r = t).prefinished || r.finalCalled || ("function" != typeof n._final || r.destroyed ? (r.prefinished = !0, n.emit("prefinish")) : (r.pendingcb++, r.finalCalled = !0, a.nextTick(A, n, r))), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"), t.autoDestroy)) {
                var o = e._readableState;
                (!o || o.autoDestroy && o.endEmitted) && e.destroy()
            }
        }
        return i
    }
    Object.defineProperty(T.prototype, "destroyed", {
        enumerable: !1,
        get: function() {
            return void 0 !== this._writableState && this._writableState.destroyed
        },
        set: function(e) {
            this._writableState && (this._writableState.destroyed = e)
        }
    }), T.prototype.destroy = d.destroy, T.prototype._undestroy = d.undestroy, T.prototype._destroy = function(e, t) {
        t(e)
    }
}