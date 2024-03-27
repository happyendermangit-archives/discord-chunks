function(e, t, n) {
    "use strict";
    var r, i, a, o, s, u = n("444675");
    e.exports = T, T.ReadableState = w, n("836560").EventEmitter;
    var c = function(e, t) {
            return e.listeners(t).length
        },
        l = n("138772"),
        d = n("413135").Buffer,
        f = (void 0 !== n.g ? n.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {},
        p = n("260907");
    i = p && p.debuglog ? p.debuglog("stream") : function() {};
    var h = n("443551"),
        m = n("887866"),
        g = n("97703").getHighWaterMark,
        _ = n("531478").codes,
        b = _.ERR_INVALID_ARG_TYPE,
        v = _.ERR_STREAM_PUSH_AFTER_EOF,
        y = _.ERR_METHOD_NOT_IMPLEMENTED,
        E = _.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
    n("689118")(T, l);
    var S = m.errorOrDestroy,
        x = ["error", "close", "destroy", "pause", "resume"];

    function w(e, t, i) {
        r = r || n("827664"), e = e || {}, "boolean" != typeof i && (i = t instanceof r), this.objectMode = !!e.objectMode, i && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.highWaterMark = g(this, e, "readableHighWaterMark", i), this.buffer = new h, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (!a && (a = n("2682").StringDecoder), this.decoder = new a(e.encoding), this.encoding = e.encoding)
    }

    function T(e) {
        if (r = r || n("827664"), !(this instanceof T)) return new T(e);
        var t = this instanceof r;
        this._readableState = new w(e, this, t), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), l.call(this)
    }

    function C(e, t, n, r, a) {
        i("readableAddChunk", t);
        var o, s, u = e._readableState;
        if (null === t) u.reading = !1,
            function(e, t) {
                if (i("onEofChunk"), !t.ended) {
                    if (t.decoder) {
                        var n = t.decoder.end();
                        n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length)
                    }
                    t.ended = !0, t.sync ? M(e) : (t.needReadable = !1, !t.emittedReadable && (t.emittedReadable = !0, A(e)))
                }
            }(e, u);
        else if (!a && (s = function(e, t) {
                var n, r;
                if (r = t, !d.isBuffer(r) && !(r instanceof f) && "string" != typeof t && void 0 !== t && !e.objectMode) n = new b("chunk", ["string", "Buffer", "Uint8Array"], t);
                return n
            }(u, t)), s) S(e, s);
        else if (u.objectMode || t && t.length > 0) {
            if ("string" != typeof t && !u.objectMode && Object.getPrototypeOf(t) !== d.prototype) {
                ;
                o = t, t = d.from(o)
            }
            if (r) u.endEmitted ? S(e, new E) : D(e, u, t, !0);
            else if (u.ended) S(e, new v);
            else {
                if (u.destroyed) return !1;
                u.reading = !1, u.decoder && !n ? (t = u.decoder.write(t), u.objectMode || 0 !== t.length ? D(e, u, t, !1) : k(e, u)) : D(e, u, t, !1)
            }
        } else !r && (u.reading = !1, k(e, u));
        return !u.ended && (u.length < u.highWaterMark || 0 === u.length)
    }

    function D(e, t, n, r) {
        t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0, e.emit("data", n)) : (t.length += t.objectMode ? 1 : n.length, r ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && M(e)), k(e, t)
    }
    Object.defineProperty(T.prototype, "destroyed", {
        enumerable: !1,
        get: function() {
            return void 0 !== this._readableState && this._readableState.destroyed
        },
        set: function(e) {
            this._readableState && (this._readableState.destroyed = e)
        }
    }), T.prototype.destroy = m.destroy, T.prototype._undestroy = m.undestroy, T.prototype._destroy = function(e, t) {
        t(e)
    }, T.prototype.push = function(e, t) {
        var n, r = this._readableState;
        return r.objectMode ? n = !0 : "string" == typeof e && ((t = t || r.defaultEncoding) !== r.encoding && (e = d.from(e, t), t = ""), n = !0), C(this, e, t, !1, n)
    }, T.prototype.unshift = function(e) {
        return C(this, e, null, !0, !1)
    };
    T.prototype.isPaused = function() {
        return !1 === this._readableState.flowing
    }, T.prototype.setEncoding = function(e) {
        !a && (a = n("2682").StringDecoder);
        var t = new a(e);
        this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
        for (var r = this._readableState.buffer.head, i = ""; null !== r;) i += t.write(r.data), r = r.next;
        return this._readableState.buffer.clear(), "" !== i && this._readableState.buffer.push(i), this._readableState.length = i.length, this
    };

    function O(e, t) {
        if (e <= 0 || 0 === t.length && t.ended) return 0;
        if (t.objectMode) return 1;
        if (e != e) return t.flowing && t.length ? t.buffer.head.data.length : t.length;
        if (e > t.highWaterMark) {
            var n;
            t.highWaterMark = ((n = e) >= 1073741824 ? n = 1073741824 : (n--, n |= n >>> 1, n |= n >>> 2, n |= n >>> 4, n |= n >>> 8, n |= n >>> 16, n++), n)
        }
        return e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0)
    }
    T.prototype.read = function(e) {
        i("read", e), e = parseInt(e, 10);
        var t, n = this._readableState,
            r = e;
        if (0 !== e && (n.emittedReadable = !1), 0 === e && n.needReadable && ((0 !== n.highWaterMark ? n.length >= n.highWaterMark : n.length > 0) || n.ended)) return i("read: emitReadable", n.length, n.ended), 0 === n.length && n.ended ? B(this) : M(this), null;
        if (0 === (e = O(e, n)) && n.ended) return 0 === n.length && B(this), null;
        var a = n.needReadable;
        return i("need readable", a), (0 === n.length || n.length - e < n.highWaterMark) && i("length less than watermark", a = !0), n.ended || n.reading ? i("reading or ended", a = !1) : a && (i("do read"), n.reading = !0, n.sync = !0, 0 === n.length && (n.needReadable = !0), this._read(n.highWaterMark), n.sync = !1, !n.reading && (e = O(r, n))), null === (t = e > 0 ? F(e, n) : null) ? (n.needReadable = n.length <= n.highWaterMark, e = 0) : (n.length -= e, n.awaitDrain = 0), 0 === n.length && (!n.ended && (n.needReadable = !0), r !== e && n.ended && B(this)), null !== t && this.emit("data", t), t
    };

    function M(e) {
        var t = e._readableState;
        i("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, !t.emittedReadable && (i("emitReadable", t.flowing), t.emittedReadable = !0, u.nextTick(A, e))
    }

    function A(e) {
        var t = e._readableState;
        i("emitReadable_", t.destroyed, t.length, t.ended), !t.destroyed && (t.length || t.ended) && (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, P(e)
    }

    function k(e, t) {
        !t.readingMore && (t.readingMore = !0, u.nextTick(R, e, t))
    }

    function R(e, t) {
        for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) {
            var n = t.length;
            if (i("maybeReadMore read 0"), e.read(0), n === t.length) break
        }
        t.readingMore = !1
    }
    T.prototype._read = function(e) {
        S(this, new y("_read()"))
    }, T.prototype.pipe = function(e, t) {
        var n = this,
            r = this._readableState;
        switch (r.pipesCount) {
            case 0:
                r.pipes = e;
                break;
            case 1:
                r.pipes = [r.pipes, e];
                break;
            default:
                r.pipes.push(e)
        }
        r.pipesCount += 1, i("pipe count=%d opts=%j", r.pipesCount, t);
        var a = t && !1 === t.end || e === u.stdout || e === u.stderr ? g : s;

        function o(t, a) {
            i("onunpipe"), t === n && a && !1 === a.hasUnpiped && (a.hasUnpiped = !0, function() {
                i("cleanup"), e.removeListener("close", h), e.removeListener("finish", m), e.removeListener("drain", l), e.removeListener("error", p), e.removeListener("unpipe", o), n.removeListener("end", s), n.removeListener("end", g), n.removeListener("data", f), d = !0, r.awaitDrain && (!e._writableState || e._writableState.needDrain) && l()
            }())
        }

        function s() {
            i("onend"), e.end()
        }
        r.endEmitted ? u.nextTick(a) : n.once("end", a), e.on("unpipe", o);
        var l = function(e) {
            return function() {
                var t = e._readableState;
                i("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && c(e, "data") && (t.flowing = !0, P(e))
            }
        }(n);
        e.on("drain", l);
        var d = !1;

        function f(t) {
            i("ondata");
            var a = e.write(t);
            i("dest.write", a), !1 === a && ((1 === r.pipesCount && r.pipes === e || r.pipesCount > 1 && -1 !== Y(r.pipes, e)) && !d && (i("false write response, pause", r.awaitDrain), r.awaitDrain++), n.pause())
        }

        function p(t) {
            i("onerror", t), g(), e.removeListener("error", p), 0 === c(e, "error") && S(e, t)
        }

        function h() {
            e.removeListener("finish", m), g()
        }

        function m() {
            i("onfinish"), e.removeListener("close", h), g()
        }

        function g() {
            i("unpipe"), n.unpipe(e)
        }
        return n.on("data", f), ! function(e, t, n) {
            if ("function" == typeof e.prependListener) return e.prependListener(t, n);
            e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [n, e._events[t]] : e.on(t, n)
        }(e, "error", p), e.once("close", h), e.once("finish", m), e.emit("pipe", n), !r.flowing && (i("pipe resume"), n.resume()), e
    };

    function N(e) {
        var t = e._readableState;
        t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume()
    }

    function I(e) {
        i("readable nexttick read 0"), e.read(0)
    }
    T.prototype.unpipe = function(e) {
        var t = this._readableState,
            n = {
                hasUnpiped: !1
            };
        if (0 === t.pipesCount) return this;
        if (1 === t.pipesCount) return e && e !== t.pipes ? this : (!e && (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, n), this);
        if (!e) {
            var r = t.pipes,
                i = t.pipesCount;
            t.pipes = null, t.pipesCount = 0, t.flowing = !1;
            for (var a = 0; a < i; a++) r[a].emit("unpipe", this, {
                hasUnpiped: !1
            });
            return this
        }
        var o = Y(t.pipes, e);
        return -1 === o ? this : (t.pipes.splice(o, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, n), this)
    }, T.prototype.on = function(e, t) {
        var n = l.prototype.on.call(this, e, t),
            r = this._readableState;
        return "data" === e ? (r.readableListening = this.listenerCount("readable") > 0, !1 !== r.flowing && this.resume()) : "readable" === e && !r.endEmitted && !r.readableListening && (r.readableListening = r.needReadable = !0, r.flowing = !1, r.emittedReadable = !1, i("on readable", r.length, r.reading), r.length ? M(this) : !r.reading && u.nextTick(I, this)), n
    }, T.prototype.addListener = T.prototype.on, T.prototype.removeListener = function(e, t) {
        var n = l.prototype.removeListener.call(this, e, t);
        return "readable" === e && u.nextTick(N, this), n
    }, T.prototype.removeAllListeners = function(e) {
        var t = l.prototype.removeAllListeners.apply(this, arguments);
        return ("readable" === e || void 0 === e) && u.nextTick(N, this), t
    }, T.prototype.resume = function() {
        var e = this._readableState;
        return !e.flowing && (i("resume"), e.flowing = !e.readableListening, function(e, t) {
            !t.resumeScheduled && (t.resumeScheduled = !0, u.nextTick(L, e, t))
        }(this, e)), e.paused = !1, this
    };

    function L(e, t) {
        i("resume", t.reading), !t.reading && e.read(0), t.resumeScheduled = !1, e.emit("resume"), P(e), t.flowing && !t.reading && e.read(0)
    }

    function P(e) {
        var t = e._readableState;
        for (i("flow", t.flowing); t.flowing && null !== e.read(););
    }

    function F(e, t) {
        var n;
        return 0 === t.length ? null : (t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : n = t.buffer.consume(e, t.decoder), n)
    }

    function B(e) {
        var t = e._readableState;
        i("endReadable", t.endEmitted), !t.endEmitted && (t.ended = !0, u.nextTick(U, t, e))
    }

    function U(e, t) {
        if (i("endReadableNT", e.endEmitted, e.length), !e.endEmitted && 0 === e.length && (e.endEmitted = !0, t.readable = !1, t.emit("end"), e.autoDestroy)) {
            var n = t._writableState;
            (!n || n.autoDestroy && n.finished) && t.destroy()
        }
    }

    function Y(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            if (e[n] === t) return n;
        return -1
    }
    T.prototype.pause = function() {
        return i("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (i("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
    }, T.prototype.wrap = function(e) {
        var t = this,
            n = this._readableState,
            r = !1;
        for (var a in e.on("end", function() {
                if (i("wrapped end"), n.decoder && !n.ended) {
                    var e = n.decoder.end();
                    e && e.length && t.push(e)
                }
                t.push(null)
            }), e.on("data", function(a) {
                if (i("wrapped data"), n.decoder && (a = n.decoder.write(a)), n.objectMode && null == a) return;
                if (!!n.objectMode || !!a && !!a.length) !t.push(a) && (r = !0, e.pause())
            }), e) void 0 === this[a] && "function" == typeof e[a] && (this[a] = function(t) {
            return function() {
                return e[t].apply(e, arguments)
            }
        }(a));
        for (var o = 0; o < x.length; o++) e.on(x[o], this.emit.bind(this, x[o]));
        return this._read = function(t) {
            i("wrapped _read", t), r && (r = !1, e.resume())
        }, this
    }, "function" == typeof Symbol && (T.prototype[Symbol.asyncIterator] = function() {
        return void 0 === o && (o = n("634587")), o(this)
    }), Object.defineProperty(T.prototype, "readableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._readableState.highWaterMark
        }
    }), Object.defineProperty(T.prototype, "readableBuffer", {
        enumerable: !1,
        get: function() {
            return this._readableState && this._readableState.buffer
        }
    }), Object.defineProperty(T.prototype, "readableFlowing", {
        enumerable: !1,
        get: function() {
            return this._readableState.flowing
        },
        set: function(e) {
            this._readableState && (this._readableState.flowing = e)
        }
    }), T._fromList = F, Object.defineProperty(T.prototype, "readableLength", {
        enumerable: !1,
        get: function() {
            return this._readableState.length
        }
    }), "function" == typeof Symbol && (T.from = function(e, t) {
        return void 0 === s && (s = n("787838")), s(T, e, t)
    })
}