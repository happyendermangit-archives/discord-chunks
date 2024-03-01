function(t, e, s) {
    "use strict";
    var r, i, n, c, o, f = s("390493");
    s("854508"), s("843762"), s("424973"), t.exports = k, k.ReadableState = S, s("44170").EventEmitter;
    var u = function(t, e) {
            return t.listeners(e).length
        },
        a = s("709570"),
        d = s("446825").Buffer,
        p = (void 0 !== s.g ? s.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {},
        b = s("503745");
    i = b && b.debuglog ? b.debuglog("stream") : function() {};
    var h = s("877388"),
        l = s("748557"),
        g = s("364620").getHighWaterMark,
        v = s("129752").codes,
        x = v.ERR_INVALID_ARG_TYPE,
        m = v.ERR_STREAM_PUSH_AFTER_EOF,
        y = v.ERR_METHOD_NOT_IMPLEMENTED,
        _ = v.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
    s("599235")(k, a);
    var w = l.errorOrDestroy,
        M = ["error", "close", "destroy", "pause", "resume"];

    function S(t, e, i) {
        r = r || s("388765"), t = t || {}, "boolean" != typeof i && (i = e instanceof r), this.objectMode = !!t.objectMode, i && (this.objectMode = this.objectMode || !!t.readableObjectMode), this.highWaterMark = g(this, t, "readableHighWaterMark", i), this.buffer = new h, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== t.emitClose, this.autoDestroy = !!t.autoDestroy, this.destroyed = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (!n && (n = s("394822").StringDecoder), this.decoder = new n(t.encoding), this.encoding = t.encoding)
    }

    function k(t) {
        if (r = r || s("388765"), !(this instanceof k)) return new k(t);
        var e = this instanceof r;
        this._readableState = new S(t, this, e), this.readable = !0, t && ("function" == typeof t.read && (this._read = t.read), "function" == typeof t.destroy && (this._destroy = t.destroy)), a.call(this)
    }

    function A(t, e, s, r, n) {
        i("readableAddChunk", e);
        var c, o, f = t._readableState;
        if (null === e) f.reading = !1,
            function(t, e) {
                if (i("onEofChunk"), !e.ended) {
                    if (e.decoder) {
                        var s = e.decoder.end();
                        s && s.length && (e.buffer.push(s), e.length += e.objectMode ? 1 : s.length)
                    }
                    e.ended = !0, e.sync ? I(t) : (e.needReadable = !1, !e.emittedReadable && (e.emittedReadable = !0, R(t)))
                }
            }(t, f);
        else if (!n && (o = function(t, e) {
                var s, r;
                if (r = e, !d.isBuffer(r) && !(r instanceof p) && "string" != typeof e && void 0 !== e && !t.objectMode) s = new x("chunk", ["string", "Buffer", "Uint8Array"], e);
                return s
            }(f, e)), o) w(t, o);
        else if (f.objectMode || e && e.length > 0) {
            if ("string" != typeof e && !f.objectMode && Object.getPrototypeOf(e) !== d.prototype) {
                ;
                c = e, e = d.from(c)
            }
            if (r) f.endEmitted ? w(t, new _) : E(t, f, e, !0);
            else if (f.ended) w(t, new m);
            else {
                if (f.destroyed) return !1;
                f.reading = !1, f.decoder && !s ? (e = f.decoder.write(e), f.objectMode || 0 !== e.length ? E(t, f, e, !1) : P(t, f)) : E(t, f, e, !1)
            }
        } else !r && (f.reading = !1, P(t, f));
        return !f.ended && (f.length < f.highWaterMark || 0 === f.length)
    }

    function E(t, e, s, r) {
        e.flowing && 0 === e.length && !e.sync ? (e.awaitDrain = 0, t.emit("data", s)) : (e.length += e.objectMode ? 1 : s.length, r ? e.buffer.unshift(s) : e.buffer.push(s), e.needReadable && I(t)), P(t, e)
    }
    Object.defineProperty(k.prototype, "destroyed", {
        enumerable: !1,
        get: function() {
            return void 0 !== this._readableState && this._readableState.destroyed
        },
        set: function(t) {
            this._readableState && (this._readableState.destroyed = t)
        }
    }), k.prototype.destroy = l.destroy, k.prototype._undestroy = l.undestroy, k.prototype._destroy = function(t, e) {
        e(t)
    }, k.prototype.push = function(t, e) {
        var s, r = this._readableState;
        return r.objectMode ? s = !0 : "string" == typeof t && ((e = e || r.defaultEncoding) !== r.encoding && (t = d.from(t, e), e = ""), s = !0), A(this, t, e, !1, s)
    }, k.prototype.unshift = function(t) {
        return A(this, t, null, !0, !1)
    };
    k.prototype.isPaused = function() {
        return !1 === this._readableState.flowing
    }, k.prototype.setEncoding = function(t) {
        !n && (n = s("394822").StringDecoder);
        var e = new n(t);
        this._readableState.decoder = e, this._readableState.encoding = this._readableState.decoder.encoding;
        for (var r = this._readableState.buffer.head, i = ""; null !== r;) i += e.write(r.data), r = r.next;
        return this._readableState.buffer.clear(), "" !== i && this._readableState.buffer.push(i), this._readableState.length = i.length, this
    };

    function B(t, e) {
        if (t <= 0 || 0 === e.length && e.ended) return 0;
        if (e.objectMode) return 1;
        if (t != t) return e.flowing && e.length ? e.buffer.head.data.length : e.length;
        if (t > e.highWaterMark) {
            var s;
            e.highWaterMark = ((s = t) >= 1073741824 ? s = 1073741824 : (s--, s |= s >>> 1, s |= s >>> 2, s |= s >>> 4, s |= s >>> 8, s |= s >>> 16, s++), s)
        }
        return t <= e.length ? t : e.ended ? e.length : (e.needReadable = !0, 0)
    }
    k.prototype.read = function(t) {
        i("read", t), t = parseInt(t, 10);
        var e, s = this._readableState,
            r = t;
        if (0 !== t && (s.emittedReadable = !1), 0 === t && s.needReadable && ((0 !== s.highWaterMark ? s.length >= s.highWaterMark : s.length > 0) || s.ended)) return i("read: emitReadable", s.length, s.ended), 0 === s.length && s.ended ? N(this) : I(this), null;
        if (0 === (t = B(t, s)) && s.ended) return 0 === s.length && N(this), null;
        var n = s.needReadable;
        return i("need readable", n), (0 === s.length || s.length - t < s.highWaterMark) && i("length less than watermark", n = !0), s.ended || s.reading ? i("reading or ended", n = !1) : n && (i("do read"), s.reading = !0, s.sync = !0, 0 === s.length && (s.needReadable = !0), this._read(s.highWaterMark), s.sync = !1, !s.reading && (t = B(r, s))), null === (e = t > 0 ? z(t, s) : null) ? (s.needReadable = s.length <= s.highWaterMark, t = 0) : (s.length -= t, s.awaitDrain = 0), 0 === s.length && (!s.ended && (s.needReadable = !0), r !== t && s.ended && N(this)), null !== e && this.emit("data", e), e
    };

    function I(t) {
        var e = t._readableState;
        i("emitReadable", e.needReadable, e.emittedReadable), e.needReadable = !1, !e.emittedReadable && (i("emitReadable", e.flowing), e.emittedReadable = !0, f.nextTick(R, t))
    }

    function R(t) {
        var e = t._readableState;
        i("emitReadable_", e.destroyed, e.length, e.ended), !e.destroyed && (e.length || e.ended) && (t.emit("readable"), e.emittedReadable = !1), e.needReadable = !e.flowing && !e.ended && e.length <= e.highWaterMark, D(t)
    }

    function P(t, e) {
        !e.readingMore && (e.readingMore = !0, f.nextTick(j, t, e))
    }

    function j(t, e) {
        for (; !e.reading && !e.ended && (e.length < e.highWaterMark || e.flowing && 0 === e.length);) {
            var s = e.length;
            if (i("maybeReadMore read 0"), t.read(0), s === e.length) break
        }
        e.readingMore = !1
    }
    k.prototype._read = function(t) {
        w(this, new y("_read()"))
    }, k.prototype.pipe = function(t, e) {
        var s = this,
            r = this._readableState;
        switch (r.pipesCount) {
            case 0:
                r.pipes = t;
                break;
            case 1:
                r.pipes = [r.pipes, t];
                break;
            default:
                r.pipes.push(t)
        }
        r.pipesCount += 1, i("pipe count=%d opts=%j", r.pipesCount, e);
        var n = e && !1 === e.end || t === f.stdout || t === f.stderr ? g : o;

        function c(e, n) {
            i("onunpipe"), e === s && n && !1 === n.hasUnpiped && (n.hasUnpiped = !0, function() {
                i("cleanup"), t.removeListener("close", h), t.removeListener("finish", l), t.removeListener("drain", a), t.removeListener("error", b), t.removeListener("unpipe", c), s.removeListener("end", o), s.removeListener("end", g), s.removeListener("data", p), d = !0, r.awaitDrain && (!t._writableState || t._writableState.needDrain) && a()
            }())
        }

        function o() {
            i("onend"), t.end()
        }
        r.endEmitted ? f.nextTick(n) : s.once("end", n), t.on("unpipe", c);
        var a = function(t) {
            return function() {
                var e = t._readableState;
                i("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && u(t, "data") && (e.flowing = !0, D(t))
            }
        }(s);
        t.on("drain", a);
        var d = !1;

        function p(e) {
            i("ondata");
            var n = t.write(e);
            i("dest.write", n), !1 === n && ((1 === r.pipesCount && r.pipes === t || r.pipesCount > 1 && -1 !== U(r.pipes, t)) && !d && (i("false write response, pause", r.awaitDrain), r.awaitDrain++), s.pause())
        }

        function b(e) {
            i("onerror", e), g(), t.removeListener("error", b), 0 === u(t, "error") && w(t, e)
        }

        function h() {
            t.removeListener("finish", l), g()
        }

        function l() {
            i("onfinish"), t.removeListener("close", h), g()
        }

        function g() {
            i("unpipe"), s.unpipe(t)
        }
        return s.on("data", p), ! function(t, e, s) {
            if ("function" == typeof t.prependListener) return t.prependListener(e, s);
            t._events && t._events[e] ? Array.isArray(t._events[e]) ? t._events[e].unshift(s) : t._events[e] = [s, t._events[e]] : t.on(e, s)
        }(t, "error", b), t.once("close", h), t.once("finish", l), t.emit("pipe", s), !r.flowing && (i("pipe resume"), s.resume()), t
    };

    function C(t) {
        var e = t._readableState;
        e.readableListening = t.listenerCount("readable") > 0, e.resumeScheduled && !e.paused ? e.flowing = !0 : t.listenerCount("data") > 0 && t.resume()
    }

    function O(t) {
        i("readable nexttick read 0"), t.read(0)
    }
    k.prototype.unpipe = function(t) {
        var e = this._readableState,
            s = {
                hasUnpiped: !1
            };
        if (0 === e.pipesCount) return this;
        if (1 === e.pipesCount) return t && t !== e.pipes ? this : (!t && (t = e.pipes), e.pipes = null, e.pipesCount = 0, e.flowing = !1, t && t.emit("unpipe", this, s), this);
        if (!t) {
            var r = e.pipes,
                i = e.pipesCount;
            e.pipes = null, e.pipesCount = 0, e.flowing = !1;
            for (var n = 0; n < i; n++) r[n].emit("unpipe", this, {
                hasUnpiped: !1
            });
            return this
        }
        var c = U(e.pipes, t);
        return -1 === c ? this : (e.pipes.splice(c, 1), e.pipesCount -= 1, 1 === e.pipesCount && (e.pipes = e.pipes[0]), t.emit("unpipe", this, s), this)
    }, k.prototype.on = function(t, e) {
        var s = a.prototype.on.call(this, t, e),
            r = this._readableState;
        return "data" === t ? (r.readableListening = this.listenerCount("readable") > 0, !1 !== r.flowing && this.resume()) : "readable" === t && !r.endEmitted && !r.readableListening && (r.readableListening = r.needReadable = !0, r.flowing = !1, r.emittedReadable = !1, i("on readable", r.length, r.reading), r.length ? I(this) : !r.reading && f.nextTick(O, this)), s
    }, k.prototype.addListener = k.prototype.on, k.prototype.removeListener = function(t, e) {
        var s = a.prototype.removeListener.call(this, t, e);
        return "readable" === t && f.nextTick(C, this), s
    }, k.prototype.removeAllListeners = function(t) {
        var e = a.prototype.removeAllListeners.apply(this, arguments);
        return ("readable" === t || void 0 === t) && f.nextTick(C, this), e
    }, k.prototype.resume = function() {
        var t = this._readableState;
        return !t.flowing && (i("resume"), t.flowing = !t.readableListening, function(t, e) {
            !e.resumeScheduled && (e.resumeScheduled = !0, f.nextTick(T, t, e))
        }(this, t)), t.paused = !1, this
    };

    function T(t, e) {
        i("resume", e.reading), !e.reading && t.read(0), e.resumeScheduled = !1, t.emit("resume"), D(t), e.flowing && !e.reading && t.read(0)
    }

    function D(t) {
        var e = t._readableState;
        for (i("flow", e.flowing); e.flowing && null !== t.read(););
    }

    function z(t, e) {
        var s;
        return 0 === e.length ? null : (e.objectMode ? s = e.buffer.shift() : !t || t >= e.length ? (s = e.decoder ? e.buffer.join("") : 1 === e.buffer.length ? e.buffer.first() : e.buffer.concat(e.length), e.buffer.clear()) : s = e.buffer.consume(t, e.decoder), s)
    }

    function N(t) {
        var e = t._readableState;
        i("endReadable", e.endEmitted), !e.endEmitted && (e.ended = !0, f.nextTick(L, e, t))
    }

    function L(t, e) {
        if (i("endReadableNT", t.endEmitted, t.length), !t.endEmitted && 0 === t.length && (t.endEmitted = !0, e.readable = !1, e.emit("end"), t.autoDestroy)) {
            var s = e._writableState;
            (!s || s.autoDestroy && s.finished) && e.destroy()
        }
    }

    function U(t, e) {
        for (var s = 0, r = t.length; s < r; s++)
            if (t[s] === e) return s;
        return -1
    }
    k.prototype.pause = function() {
        return i("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (i("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
    }, k.prototype.wrap = function(t) {
        var e = this,
            s = this._readableState,
            r = !1;
        for (var n in t.on("end", function() {
                if (i("wrapped end"), s.decoder && !s.ended) {
                    var t = s.decoder.end();
                    t && t.length && e.push(t)
                }
                e.push(null)
            }), t.on("data", function(n) {
                if (i("wrapped data"), s.decoder && (n = s.decoder.write(n)), s.objectMode && null == n) return;
                if (!!s.objectMode || !!n && !!n.length) !e.push(n) && (r = !0, t.pause())
            }), t) void 0 === this[n] && "function" == typeof t[n] && (this[n] = function(e) {
            return function() {
                return t[e].apply(t, arguments)
            }
        }(n));
        for (var c = 0; c < M.length; c++) t.on(M[c], this.emit.bind(this, M[c]));
        return this._read = function(e) {
            i("wrapped _read", e), r && (r = !1, t.resume())
        }, this
    }, "function" == typeof Symbol && (k.prototype[Symbol.asyncIterator] = function() {
        return void 0 === c && (c = s("471974")), c(this)
    }), Object.defineProperty(k.prototype, "readableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._readableState.highWaterMark
        }
    }), Object.defineProperty(k.prototype, "readableBuffer", {
        enumerable: !1,
        get: function() {
            return this._readableState && this._readableState.buffer
        }
    }), Object.defineProperty(k.prototype, "readableFlowing", {
        enumerable: !1,
        get: function() {
            return this._readableState.flowing
        },
        set: function(t) {
            this._readableState && (this._readableState.flowing = t)
        }
    }), k._fromList = z, Object.defineProperty(k.prototype, "readableLength", {
        enumerable: !1,
        get: function() {
            return this._readableState.length
        }
    }), "function" == typeof Symbol && (k.from = function(t, e) {
        return void 0 === o && (o = s("250701")), o(k, t, e)
    })
}