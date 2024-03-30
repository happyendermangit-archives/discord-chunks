function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("718017");

    function o(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function u(e) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function s(e, t) {
        return (s = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var l = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && s(e, t)
        }(E, e);
        var t, n, l, f, d, _ = (t = E, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, i, a = u(t);
            if (n) {
                var s = u(this).constructor;
                i = Reflect.construct(a, arguments, s)
            } else i = a.apply(this, arguments);
            return e = this, (r = i) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : o(e)
        });

        function E() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, E), e = _.apply(this, arguments), a(o(e), "_requestAnimationFrame", function(e) {
                return requestAnimationFrame(e)
            }), a(o(e), "_cancelAnimationFrame", function(e) {
                return cancelAnimationFrame(e)
            }), a(o(e), "writing", !1), a(o(e), "id", 0), a(o(e), "lastTime", 0), a(o(e), "animations", []), a(o(e), "priority", 0), a(o(e), "startQueue", new Set), a(o(e), "frameQueue", new Set), a(o(e), "writeQueue", new Set), a(o(e), "timeoutQueue", []), a(o(e), "addAnimation", function(t) {
                var n = e.animations.indexOf(t);
                n < 0 && (n = e.animations.findIndex(function(e) {
                    return e.priority > t.priority
                }), e.animations.splice(0 != ~n ? n : e.animations.length, 0, t))
            }), a(o(e), "loop", function() {
                if (0 !== e.lastTime) try {
                    e.advance()
                } catch (e) {
                    console.error(e)
                } finally {
                    e.animations.length > 0 || e.startQueue.size > 0 || e.frameQueue.size > 0 || e.writeQueue.size > 0 || e.timeoutQueue.length > 0 ? e.id = e._requestAnimationFrame(e.loop) : (e.lastTime = 0, e.id = 0)
                }
            }), a(o(e), "startLoop", function() {
                !(e.lastTime > 0) && (e.lastTime = r.Globals.now(), e.id = e._requestAnimationFrame(e.loop))
            }), a(o(e), "advance", function() {
                var t = r.Globals.now();
                if (e.startQueue.size > 0 && (e.startQueue.forEach(e.addAnimation), e.startQueue.clear()), e.timeoutQueue.length > 0 && r.Globals.batchedUpdates(function() {
                        var n = c(e.timeoutQueue, function(e) {
                            return e.time > t
                        });
                        e.timeoutQueue.splice(0, n).forEach(function(e) {
                            return e.handler()
                        })
                    }), t > e.lastTime) {
                    var n = Math.min(64, t - e.lastTime);
                    e.lastTime = t, r.Globals.batchedUpdates(function() {
                        e.animations.length > 0 && (r.Globals.willAdvance(e.animations), e.animations = e.animations.filter(function(t) {
                            return e.priority = t.priority, !t.idle && t.advance(n), !t.idle
                        }), e.priority = 0), e.frameQueue.size > 0 && (e.frameQueue.forEach(function(e) {
                            return e(t)
                        }), e.frameQueue.clear()), e.writeQueue.size > 0 && (e.writing = !0, e.writeQueue.forEach(function(e) {
                            return e(t)
                        }), e.writeQueue.clear(), e.writing = !1)
                    })
                }
            }), a(o(e), "start", function(t) {
                e.priority > t.priority ? e.startQueue.add(t) : (e.addAnimation(t), e.startLoop())
            }), a(o(e), "setTimeout", function(t, n) {
                var o = r.Globals.now() + n,
                    i = function() {
                        var t = e.timeoutQueue.findIndex(function(e) {
                            return e.cancel === i
                        });
                        t >= 0 && e.timeoutQueue.splice(t, 1)
                    },
                    a = c(e.timeoutQueue, function(e) {
                        return e.time > o
                    }),
                    u = {
                        time: o,
                        handler: t,
                        cancel: i
                    };
                return e.timeoutQueue.splice(a, 0, u), e.startLoop(), u
            }), a(o(e), "onFrame", function(t) {
                e.frameQueue.add(t), e.startLoop()
            }), a(o(e), "onWrite", function(t) {
                e.writing ? t(e.lastTime) : e.writeQueue.add(t)
            }), e
        }
        return l = E, f = [{
            key: "setRAF",
            value: function(e, t) {
                0 !== this.id && (this._cancelAnimationFrame(this.id), this.id = 0), this._requestAnimationFrame = e, this._cancelAnimationFrame = t, this.loop()
            }
        }], i(l.prototype, f), d && i(l, d), E
    }(r.FrameLoop);

    function c(e, t) {
        var n = e.findIndex(t);
        return n < 0 ? e.length : n
    }
}