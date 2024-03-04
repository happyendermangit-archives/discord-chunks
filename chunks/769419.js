function(e, t, n) {
    "use strict";
    var r, i, o = n("390493");

    function s(e) {
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
    n("854508"), n("424973"), e.exports = _, _.WritableState = E;
    var a = {
            deprecate: n("56845")
        },
        c = n("709570"),
        u = n("446825").Buffer,
        d = (void 0 !== n.g ? n.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {},
        l = n("748557"),
        f = n("364620").getHighWaterMark,
        p = n("129752").codes,
        h = p.ERR_INVALID_ARG_TYPE,
        v = p.ERR_METHOD_NOT_IMPLEMENTED,
        g = p.ERR_MULTIPLE_CALLBACK,
        b = p.ERR_STREAM_CANNOT_PIPE,
        m = p.ERR_STREAM_DESTROYED,
        y = p.ERR_STREAM_NULL_VALUES,
        x = p.ERR_STREAM_WRITE_AFTER_END,
        w = p.ERR_UNKNOWN_ENCODING,
        S = l.errorOrDestroy;

    function k() {}

    function E(e, t, i) {
        r = r || n("388765"), e = e || {}, "boolean" != typeof i && (i = t instanceof r), this.objectMode = !!e.objectMode, i && (this.objectMode = this.objectMode || !!e.writableObjectMode), this.highWaterMark = f(this, e, "writableHighWaterMark", i), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
        var a = !1 === e.decodeStrings;
        this.decodeStrings = !a, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
            (function(e, t) {
                var n, r, i, s, a, c, u = e._writableState,
                    d = u.sync,
                    l = u.writecb;
                if ("function" != typeof l) throw new g;
                if ((n = u).writing = !1, n.writecb = null, n.length -= n.writelen, n.writelen = 0, t) {
                    ;
                    r = e, i = u, s = d, a = t, c = l, --i.pendingcb, s ? (o.nextTick(c, a), o.nextTick(A, r, i), r._writableState.errorEmitted = !0, S(r, a)) : (c(a), r._writableState.errorEmitted = !0, S(r, a), A(r, i))
                } else {
                    var f = P(u) || e.destroyed;
                    !f && !u.corked && !u.bufferProcessing && u.bufferedRequest && C(e, u), d ? o.nextTick(D, e, u, f, l) : D(e, u, f, l)
                }
            })(t, e)
        }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new s(this)
    }

    function _(e) {
        var t = this instanceof(r = r || n("388765"));
        if (!t && !i.call(_, this)) return new _(e);
        this._writableState = new E(e, this, t), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), c.call(this)
    }
    n("599235")(_, c), E.prototype.getBuffer = function() {
        for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
        return t
    }, ! function() {
        try {
            Object.defineProperty(E.prototype, "buffer", {
                get: a.deprecate(function() {
                    return this.getBuffer()
                }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
            })
        } catch (e) {}
    }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (i = Function.prototype[Symbol.hasInstance], Object.defineProperty(_, Symbol.hasInstance, {
        value: function(e) {
            return !!i.call(this, e) || this === _ && e && e._writableState instanceof E
        }
    })) : i = function(e) {
        return e instanceof this
    }, _.prototype.pipe = function() {
        S(this, new b)
    };
    _.prototype.write = function(e, t, n) {
        var r, i, s, a, c, l, f, p, v, g, b = this._writableState,
            m = !1;
        var w = !b.objectMode && (r = e, u.isBuffer(r) || r instanceof d);
        if (w && !u.isBuffer(e)) {
            ;
            i = e, e = u.from(i)
        }
        if ("function" == typeof t && (n = t, t = null), w ? t = "buffer" : !t && (t = b.defaultEncoding), "function" != typeof n && (n = k), b.ending) {
            ;
            s = this, a = n, S(s, c = new x), o.nextTick(a, c)
        } else {
            ;
            if (w || (l = this, f = b, p = e, v = n, null === p ? g = new y : "string" != typeof p && !f.objectMode && (g = new h("chunk", ["string", "Buffer"], p)), !g || (S(l, g), o.nextTick(v, g), 0))) b.pendingcb++, m = function(e, t, n, r, i, o) {
                if (!n) {
                    var s, a, c, d = (s = t, a = r, c = i, !s.objectMode && !1 !== s.decodeStrings && "string" == typeof a && (a = u.from(a, c)), a);
                    r !== d && (n = !0, i = "buffer", r = d)
                }
                var l = t.objectMode ? 1 : r.length;
                t.length += l;
                var f = t.length < t.highWaterMark;
                if (!f && (t.needDrain = !0), t.writing || t.corked) {
                    var p = t.lastBufferedRequest;
                    t.lastBufferedRequest = {
                        chunk: r,
                        encoding: i,
                        isBuf: n,
                        callback: o,
                        next: null
                    }, p ? p.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                } else M(e, t, !1, l, r, i, o);
                return f
            }(this, b, w, e, t, n)
        }
        return m
    }, _.prototype.cork = function() {
        this._writableState.corked++
    }, _.prototype.uncork = function() {
        var e = this._writableState;
        e.corked && (e.corked--, !e.writing && !e.corked && !e.bufferProcessing && e.bufferedRequest && C(this, e))
    }, _.prototype.setDefaultEncoding = function(e) {
        if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new w(e);
        return this._writableState.defaultEncoding = e, this
    }, Object.defineProperty(_.prototype, "writableBuffer", {
        enumerable: !1,
        get: function() {
            return this._writableState && this._writableState.getBuffer()
        }
    });
    Object.defineProperty(_.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark
        }
    });

    function M(e, t, n, r, i, o, s) {
        t.writelen = r, t.writecb = s, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new m("write")) : n ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1
    }

    function D(e, t, n, r) {
        !n && function(e, t) {
            0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
        }(e, t), t.pendingcb--, r(), A(e, t)
    }

    function C(e, t) {
        t.bufferProcessing = !0;
        var n = t.bufferedRequest;
        if (e._writev && n && n.next) {
            var r = Array(t.bufferedRequestCount),
                i = t.corkedRequestsFree;
            i.entry = n;
            for (var o = 0, a = !0; n;) r[o] = n, !n.isBuf && (a = !1), n = n.next, o += 1;
            r.allBuffers = a, M(e, t, !0, t.length, r, "", i.finish), t.pendingcb++, t.lastBufferedRequest = null, i.next ? (t.corkedRequestsFree = i.next, i.next = null) : t.corkedRequestsFree = new s(t), t.bufferedRequestCount = 0
        } else {
            for (; n;) {
                var c = n.chunk,
                    u = n.encoding,
                    d = n.callback,
                    l = t.objectMode ? 1 : c.length;
                if (M(e, t, !1, l, c, u, d), n = n.next, t.bufferedRequestCount--, t.writing) break
            }
            null === n && (t.lastBufferedRequest = null)
        }
        t.bufferedRequest = n, t.bufferProcessing = !1
    }

    function P(e) {
        return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
    }

    function T(e, t) {
        e._final(function(n) {
            t.pendingcb--, n && S(e, n), t.prefinished = !0, e.emit("prefinish"), A(e, t)
        })
    }
    _.prototype._write = function(e, t, n) {
        n(new v("_write()"))
    }, _.prototype._writev = null, _.prototype.end = function(e, t, n) {
        var r = this._writableState;
        return "function" == typeof e ? (n = e, e = null, t = null) : "function" == typeof t && (n = t, t = null), null != e && this.write(e, t), r.corked && (r.corked = 1, this.uncork()), !r.ending && function(e, t, n) {
            t.ending = !0, A(e, t), n && (t.finished ? o.nextTick(n) : e.once("finish", n)), t.ended = !0, e.writable = !1
        }(this, r, n), this
    }, Object.defineProperty(_.prototype, "writableLength", {
        enumerable: !1,
        get: function() {
            return this._writableState.length
        }
    });

    function A(e, t) {
        var n, r, i = P(t);
        if (i) {
            ;
            if (n = e, (r = t).prefinished || r.finalCalled || ("function" != typeof n._final || r.destroyed ? (r.prefinished = !0, n.emit("prefinish")) : (r.pendingcb++, r.finalCalled = !0, o.nextTick(T, n, r))), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"), t.autoDestroy)) {
                var s = e._readableState;
                (!s || s.autoDestroy && s.endEmitted) && e.destroy()
            }
        }
        return i
    }
    Object.defineProperty(_.prototype, "destroyed", {
        enumerable: !1,
        get: function() {
            return void 0 !== this._writableState && this._writableState.destroyed
        },
        set: function(e) {
            this._writableState && (this._writableState.destroyed = e)
        }
    }), _.prototype.destroy = l.destroy, _.prototype._undestroy = l.undestroy, _.prototype._destroy = function(e, t) {
        t(e)
    }
}