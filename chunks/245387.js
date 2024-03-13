function(e, t, n) {
    "use strict";
    var r, i, o, s, a, c = n("390493");
    n("854508"), n("843762"), n("424973"), e.exports = _, _.ReadableState = E, n("44170").EventEmitter;
    var u = function(e, t) {
            return e.listeners(t).length
        },
        d = n("709570"),
        l = n("446825").Buffer,
        f = (void 0 !== n.g ? n.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {},
        p = n("503745");
    i = p && p.debuglog ? p.debuglog("stream") : function() {};
    var h = n("877388"),
        v = n("748557"),
        g = n("364620").getHighWaterMark,
        b = n("129752").codes,
        m = b.ERR_INVALID_ARG_TYPE,
        y = b.ERR_STREAM_PUSH_AFTER_EOF,
        x = b.ERR_METHOD_NOT_IMPLEMENTED,
        w = b.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
    n("599235")(_, d);
    var S = v.errorOrDestroy,
        k = ["error", "close", "destroy", "pause", "resume"];

    function E(e, t, i) {
        r = r || n("388765"), e = e || {}, "boolean" != typeof i && (i = t instanceof r), this.objectMode = !!e.objectMode, i && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.highWaterMark = g(this, e, "readableHighWaterMark", i), this.buffer = new h, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (!o && (o = n("394822").StringDecoder), this.decoder = new o(e.encoding), this.encoding = e.encoding)
    }

    function _(e) {
        if (r = r || n("388765"), !(this instanceof _)) return new _(e);
        var t = this instanceof r;
        this._readableState = new E(e, this, t), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), d.call(this)
    }

    function M(e, t, n, r, o) {
        i("readableAddChunk", t);
        var s, a, c = e._readableState;
        if (null === t) c.reading = !1,
            function(e, t) {
                if (i("onEofChunk"), !t.ended) {
                    if (t.decoder) {
                        var n = t.decoder.end();
                        n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length)
                    }
                    t.ended = !0, t.sync ? P(e) : (t.needReadable = !1, !t.emittedReadable && (t.emittedReadable = !0, T(e)))
                }
            }(e, c);
        else if (!o && (a = function(e, t) {
                var n, r;
                if (r = t, !l.isBuffer(r) && !(r instanceof f) && "string" != typeof t && void 0 !== t && !e.objectMode) n = new m("chunk", ["string", "Buffer", "Uint8Array"], t);
                return n
            }(c, t)), a) S(e, a);
        else if (c.objectMode || t && t.length > 0) {
            if ("string" != typeof t && !c.objectMode && Object.getPrototypeOf(t) !== l.prototype) {
                ;
                s = t, t = l.from(s)
            }
            if (r) c.endEmitted ? S(e, new w) : D(e, c, t, !0);
            else if (c.ended) S(e, new y);
            else {
                if (c.destroyed) return !1;
                c.reading = !1, c.decoder && !n ? (t = c.decoder.write(t), c.objectMode || 0 !== t.length ? D(e, c, t, !1) : A(e, c)) : D(e, c, t, !1)
            }
        } else !r && (c.reading = !1, A(e, c));
        return !c.ended && (c.length < c.highWaterMark || 0 === c.length)
    }

    function D(e, t, n, r) {
        t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0, e.emit("data", n)) : (t.length += t.objectMode ? 1 : n.length, r ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && P(e)), A(e, t)
    }
    Object.defineProperty(_.prototype, "destroyed", {
        enumerable: !1,
        get: function() {
            return void 0 !== this._readableState && this._readableState.destroyed
        },
        set: function(e) {
            this._readableState && (this._readableState.destroyed = e)
        }
    }), _.prototype.destroy = v.destroy, _.prototype._undestroy = v.undestroy, _.prototype._destroy = function(e, t) {
        t(e)
    }, _.prototype.push = function(e, t) {
        var n, r = this._readableState;
        return r.objectMode ? n = !0 : "string" == typeof e && ((t = t || r.defaultEncoding) !== r.encoding && (e = l.from(e, t), t = ""), n = !0), M(this, e, t, !1, n)
    }, _.prototype.unshift = function(e) {
        return M(this, e, null, !0, !1)
    };
    _.prototype.isPaused = function() {
        return !1 === this._readableState.flowing
    }, _.prototype.setEncoding = function(e) {
        !o && (o = n("394822").StringDecoder);
        var t = new o(e);
        this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
        for (var r = this._readableState.buffer.head, i = ""; null !== r;) i += t.write(r.data), r = r.next;
        return this._readableState.buffer.clear(), "" !== i && this._readableState.buffer.push(i), this._readableState.length = i.length, this
    };

    function C(e, t) {
        if (e <= 0 || 0 === t.length && t.ended) return 0;
        if (t.objectMode) return 1;
        if (e != e) return t.flowing && t.length ? t.buffer.head.data.length : t.length;
        if (e > t.highWaterMark) {
            var n;
            t.highWaterMark = ((n = e) >= 1073741824 ? n = 1073741824 : (n--, n |= n >>> 1, n |= n >>> 2, n |= n >>> 4, n |= n >>> 8, n |= n >>> 16, n++), n)
        }
        return e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0)
    }
    _.prototype.read = function(e) {
        i("read", e), e = parseInt(e, 10);
        var t, n = this._readableState,
            r = e;
        if (0 !== e && (n.emittedReadable = !1), 0 === e && n.needReadable && ((0 !== n.highWaterMark ? n.length >= n.highWaterMark : n.length > 0) || n.ended)) return i("read: emitReadable", n.length, n.ended), 0 === n.length && n.ended ? F(this) : P(this), null;
        if (0 === (e = C(e, n)) && n.ended) return 0 === n.length && F(this), null;
        var o = n.needReadable;
        return i("need readable", o), (0 === n.length || n.length - e < n.highWaterMark) && i("length less than watermark", o = !0), n.ended || n.reading ? i("reading or ended", o = !1) : o && (i("do read"), n.reading = !0, n.sync = !0, 0 === n.length && (n.needReadable = !0), this._read(n.highWaterMark), n.sync = !1, !n.reading && (e = C(r, n))), null === (t = e > 0 ? N(e, n) : null) ? (n.needReadable = n.length <= n.highWaterMark, e = 0) : (n.length -= e, n.awaitDrain = 0), 0 === n.length && (!n.ended && (n.needReadable = !0), r !== e && n.ended && F(this)), null !== t && this.emit("data", t), t
    };

    function P(e) {
        var t = e._readableState;
        i("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, !t.emittedReadable && (i("emitReadable", t.flowing), t.emittedReadable = !0, c.nextTick(T, e))
    }

    function T(e) {
        var t = e._readableState;
        i("emitReadable_", t.destroyed, t.length, t.ended), !t.destroyed && (t.length || t.ended) && (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, L(e)
    }

    function A(e, t) {
        !t.readingMore && (t.readingMore = !0, c.nextTick(R, e, t))
    }

    function R(e, t) {
        for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) {
            var n = t.length;
            if (i("maybeReadMore read 0"), e.read(0), n === t.length) break
        }
        t.readingMore = !1
    }
    _.prototype._read = function(e) {
        S(this, new x("_read()"))
    }, _.prototype.pipe = function(e, t) {
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
        var o = t && !1 === t.end || e === c.stdout || e === c.stderr ? g : a;

        function s(t, o) {
            i("onunpipe"), t === n && o && !1 === o.hasUnpiped && (o.hasUnpiped = !0, function() {
                i("cleanup"), e.removeListener("close", h), e.removeListener("finish", v), e.removeListener("drain", d), e.removeListener("error", p), e.removeListener("unpipe", s), n.removeListener("end", a), n.removeListener("end", g), n.removeListener("data", f), l = !0, r.awaitDrain && (!e._writableState || e._writableState.needDrain) && d()
            }())
        }

        function a() {
            i("onend"), e.end()
        }
        r.endEmitted ? c.nextTick(o) : n.once("end", o), e.on("unpipe", s);
        var d = function(e) {
            return function() {
                var t = e._readableState;
                i("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && u(e, "data") && (t.flowing = !0, L(e))
            }
        }(n);
        e.on("drain", d);
        var l = !1;

        function f(t) {
            i("ondata");
            var o = e.write(t);
            i("dest.write", o), !1 === o && ((1 === r.pipesCount && r.pipes === e || r.pipesCount > 1 && -1 !== z(r.pipes, e)) && !l && (i("false write response, pause", r.awaitDrain), r.awaitDrain++), n.pause())
        }

        function p(t) {
            i("onerror", t), g(), e.removeListener("error", p), 0 === u(e, "error") && S(e, t)
        }

        function h() {
            e.removeListener("finish", v), g()
        }

        function v() {
            i("onfinish"), e.removeListener("close", h), g()
        }

        function g() {
            i("unpipe"), n.unpipe(e)
        }
        return n.on("data", f), ! function(e, t, n) {
            if ("function" == typeof e.prependListener) return e.prependListener(t, n);
            e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [n, e._events[t]] : e.on(t, n)
        }(e, "error", p), e.once("close", h), e.once("finish", v), e.emit("pipe", n), !r.flowing && (i("pipe resume"), n.resume()), e
    };

    function I(e) {
        var t = e._readableState;
        t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume()
    }

    function O(e) {
        i("readable nexttick read 0"), e.read(0)
    }
    _.prototype.unpipe = function(e) {
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
            for (var o = 0; o < i; o++) r[o].emit("unpipe", this, {
                hasUnpiped: !1
            });
            return this
        }
        var s = z(t.pipes, e);
        return -1 === s ? this : (t.pipes.splice(s, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, n), this)
    }, _.prototype.on = function(e, t) {
        var n = d.prototype.on.call(this, e, t),
            r = this._readableState;
        return "data" === e ? (r.readableListening = this.listenerCount("readable") > 0, !1 !== r.flowing && this.resume()) : "readable" === e && !r.endEmitted && !r.readableListening && (r.readableListening = r.needReadable = !0, r.flowing = !1, r.emittedReadable = !1, i("on readable", r.length, r.reading), r.length ? P(this) : !r.reading && c.nextTick(O, this)), n
    }, _.prototype.addListener = _.prototype.on, _.prototype.removeListener = function(e, t) {
        var n = d.prototype.removeListener.call(this, e, t);
        return "readable" === e && c.nextTick(I, this), n
    }, _.prototype.removeAllListeners = function(e) {
        var t = d.prototype.removeAllListeners.apply(this, arguments);
        return ("readable" === e || void 0 === e) && c.nextTick(I, this), t
    }, _.prototype.resume = function() {
        var e = this._readableState;
        return !e.flowing && (i("resume"), e.flowing = !e.readableListening, function(e, t) {
            !t.resumeScheduled && (t.resumeScheduled = !0, c.nextTick(j, e, t))
        }(this, e)), e.paused = !1, this
    };

    function j(e, t) {
        i("resume", t.reading), !t.reading && e.read(0), t.resumeScheduled = !1, e.emit("resume"), L(e), t.flowing && !t.reading && e.read(0)
    }

    function L(e) {
        var t = e._readableState;
        for (i("flow", t.flowing); t.flowing && null !== e.read(););
    }

    function N(e, t) {
        var n;
        return 0 === t.length ? null : (t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : n = t.buffer.consume(e, t.decoder), n)
    }

    function F(e) {
        var t = e._readableState;
        i("endReadable", t.endEmitted), !t.endEmitted && (t.ended = !0, c.nextTick(B, t, e))
    }

    function B(e, t) {
        if (i("endReadableNT", e.endEmitted, e.length), !e.endEmitted && 0 === e.length && (e.endEmitted = !0, t.readable = !1, t.emit("end"), e.autoDestroy)) {
            var n = t._writableState;
            (!n || n.autoDestroy && n.finished) && t.destroy()
        }
    }

    function z(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            if (e[n] === t) return n;
        return -1
    }
    _.prototype.pause = function() {
        return i("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (i("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
    }, _.prototype.wrap = function(e) {
        var t = this,
            n = this._readableState,
            r = !1;
        for (var o in e.on("end", function() {
                if (i("wrapped end"), n.decoder && !n.ended) {
                    var e = n.decoder.end();
                    e && e.length && t.push(e)
                }
                t.push(null)
            }), e.on("data", function(o) {
                if (i("wrapped data"), n.decoder && (o = n.decoder.write(o)), n.objectMode && null == o) return;
                if (!!n.objectMode || !!o && !!o.length) !t.push(o) && (r = !0, e.pause())
            }), e) void 0 === this[o] && "function" == typeof e[o] && (this[o] = function(t) {
            return function() {
                return e[t].apply(e, arguments)
            }
        }(o));
        for (var s = 0; s < k.length; s++) e.on(k[s], this.emit.bind(this, k[s]));
        return this._read = function(t) {
            i("wrapped _read", t), r && (r = !1, e.resume())
        }, this
    }, "function" == typeof Symbol && (_.prototype[Symbol.asyncIterator] = function() {
        return void 0 === s && (s = n("471974")), s(this)
    }), Object.defineProperty(_.prototype, "readableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._readableState.highWaterMark
        }
    }), Object.defineProperty(_.prototype, "readableBuffer", {
        enumerable: !1,
        get: function() {
            return this._readableState && this._readableState.buffer
        }
    }), Object.defineProperty(_.prototype, "readableFlowing", {
        enumerable: !1,
        get: function() {
            return this._readableState.flowing
        },
        set: function(e) {
            this._readableState && (this._readableState.flowing = e)
        }
    }), _._fromList = N, Object.defineProperty(_.prototype, "readableLength", {
        enumerable: !1,
        get: function() {
            return this._readableState.length
        }
    }), "function" == typeof Symbol && (_.from = function(e, t) {
        return void 0 === a && (a = n("250701")), a(_, e, t)
    })
}