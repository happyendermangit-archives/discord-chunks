function(t, e, n) {
    "use strict";

    function r(t) {
        return t && "object" == typeof t && "default" in t ? t.default : t
    }
    n("424973"), n("222007"), n("70102"), n("808653"), Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n("437735"),
        o = n("103689"),
        a = r(n("630836")),
        u = n("884691"),
        s = r(n("106464")),
        c = r(n("827657")),
        l = r(n("179243")),
        f = r(n("356754")),
        h = n("439823"),
        p = n("397968"),
        d = n("841076"),
        v = r(n("855207")),
        y = n("35481"),
        m = r(n("726082")),
        g = r(n("707556")),
        b = n("361671"),
        _ = n("354968"),
        x = {
            default: {
                tension: 170,
                friction: 26
            },
            gentle: {
                tension: 120,
                friction: 14
            },
            wobbly: {
                tension: 180,
                friction: 12
            },
            stiff: {
                tension: 210,
                friction: 20
            },
            slow: {
                tension: 280,
                friction: 60
            },
            molasses: {
                tension: 280,
                friction: 120
            }
        },
        w = a(a({}, x.default), {}, {
            mass: 1,
            damping: 1,
            easing: function(t) {
                return t
            },
            clamp: !1
        }),
        O = function() {
            this.tension = void 0, this.friction = void 0, this.frequency = void 0, this.damping = void 0, this.mass = void 0, this.velocity = 0, this.restVelocity = void 0, this.precision = void 0, this.progress = void 0, this.duration = void 0, this.easing = void 0, this.clamp = void 0, this.bounce = void 0, this.decay = void 0, this.round = void 0, Object.assign(this, w)
        };

    function k(t, e) {
        if (o.is.und(e.decay)) {
            var n = !o.is.und(e.tension) || !o.is.und(e.friction);
            (n || !o.is.und(e.frequency) || !o.is.und(e.damping) || !o.is.und(e.mass)) && (t.duration = void 0, t.decay = void 0), n && (t.frequency = void 0)
        } else t.duration = void 0
    }
    var S = [],
        Animation = function() {
            this.changed = !1, this.values = S, this.toValues = null, this.fromValues = S, this.to = void 0, this.from = void 0, this.config = new O, this.immediate = !1, this.onStart = void 0, this.onChange = void 0, this.onRest = []
        };

    function E(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r
    }
    var P = function(t, e) {
        return d.useMemoOne(t, e || [{}])
    };

    function C(t) {
        for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
        return o.is.fun(t) ? t.apply(void 0, n) : t
    }
    var A = function(t, e) {
            return !0 === t || !!(e && t && (o.is.fun(t) ? t(e) : o.toArray(t).includes(e)))
        },
        j = function(t, e, n) {
            return t && (o.is.fun(t) ? t(e, n) : o.is.arr(t) ? t[e] : a({}, t))
        },
        R = function(t, e) {
            return !0 === t.default ? t[e] : t.default ? t.default[e] : void 0
        },
        T = function(t, e, n) {
            void 0 === e && (e = []), void 0 === n && (n = {});
            var r = M;
            t.default && !0 !== t.default && (r = Object.keys(t = t.default));
            for (var i, a = function(t) {
                    var e = 0;
                    if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                        if (Array.isArray(t) || (t = function(t, e) {
                                if (t) {
                                    if ("string" == typeof t) return E(t, e);
                                    var n = Object.prototype.toString.call(t).slice(8, -1);
                                    if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(t);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(t, e)
                                }
                            }(t))) return function() {
                            return e >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[e++]
                            }
                        };
                        throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    return (e = t[Symbol.iterator]()).next.bind(e)
                }(r); !(i = a()).done;) {
                var u = i.value,
                    s = t[u];
                !o.is.und(s) && !e.includes(u) && (n[u] = s)
            }
            return n
        },
        M = ["pause", "cancel", "config", "immediate", "onDelayEnd", "onProps", "onStart", "onChange", "onRest"],
        L = {
            config: 1,
            from: 1,
            to: 1,
            ref: 1,
            loop: 1,
            reset: 1,
            pause: 1,
            cancel: 1,
            reverse: 1,
            immediate: 1,
            default: 1,
            delay: 1,
            onDelayEnd: 1,
            onProps: 1,
            onStart: 1,
            onChange: 1,
            onRest: 1,
            onNoopRest: 1,
            items: 1,
            trail: 1,
            sort: 1,
            expires: 1,
            initial: 1,
            enter: 1,
            update: 1,
            leave: 1,
            children: 1,
            keys: 1,
            callId: 1,
            parentId: 1
        };

    function V(t) {
        var e = function(t) {
            var e = {},
                n = 0;
            if (o.each(t, function(t, r) {
                    !L[r] && (e[r] = t, n++)
                }), n) return e
        }(t);
        if (e) {
            var n = {
                to: e
            };
            return o.each(t, function(t, r) {
                return r in e || (n[r] = t)
            }), n
        }
        return a({}, t)
    }

    function F(t) {
        var e = o.getFluidConfig(t);
        return e ? F(e.get()) : o.is.arr(t) ? t.map(F) : o.isAnimatedString(t) ? p.createStringInterpolator({
            range: [0, 1],
            output: [t, t]
        })(1) : t
    }

    function I(t, e) {
        var n = e.key,
            r = e.props,
            i = e.state,
            u = e.actions;
        return new Promise(function(e, s) {
            var c, l, f = !1,
                h = A(r.cancel, n);

            function p() {
                i.resumeQueue.add(d), l.cancel(), c = l.time - o.Globals.now()
            }

            function d() {
                c > 0 ? (i.pauseQueue.add(p), l = o.Globals.frameLoop.setTimeout(v, c)) : v()
            }

            function v() {
                i.pauseQueue.delete(p), t <= (i.cancelId || 0) && (h = !0);
                try {
                    u.start(a(a({}, r), {}, {
                        callId: t,
                        delay: c,
                        cancel: h,
                        pause: f
                    }), e)
                } catch (t) {
                    s(t)
                }
            }
            h ? v() : (c = C(r.delay || 0, n), (f = A(r.pause, n)) ? (i.resumeQueue.add(d), u.pause()) : (u.resume(), d()))
        })
    }
    var N = function(t, e) {
            return 1 == e.length ? e[0] : e.some(function(t) {
                return t.cancelled
            }) ? U(t) : e.every(function(t) {
                return t.noop
            }) ? z(t) : B(t, e.every(function(t) {
                return t.finished
            }))
        },
        z = function(t, e) {
            return void 0 === e && (e = t.get()), {
                value: e,
                noop: !0,
                finished: !0,
                target: t
            }
        },
        B = function(t, e, n) {
            return void 0 === n && (n = t.get()), {
                value: n,
                finished: e,
                target: t
            }
        },
        U = function(t, e) {
            return void 0 === e && (e = t.get()), {
                value: e,
                cancelled: !0,
                target: t
            }
        };

    function W(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    function q(t, e, n, r) {
        return D.apply(this, arguments)
    }

    function D() {
        return (D = c(s.mark(function t(e, n, r, i) {
            var u, l, f, h, d;
            return s.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        if (!n.pause) {
                            t.next = 3;
                            break
                        }
                        return t.next = 3, new Promise(function(t) {
                            r.resumeQueue.add(t)
                        });
                    case 3:
                        if (u = n.callId, l = n.parentId, f = n.onRest, h = r.asyncTo, d = r.promise, !(!l && e === h && !n.reset)) {
                            t.next = 7;
                            break
                        }
                        return t.abrupt("return", d);
                    case 7:
                        return t.abrupt("return", r.promise = c(s.mark(function t() {
                            var v, y, m, g, b, _, x, w, O;
                            return s.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return r.asyncId = u, r.asyncTo = e, v = T(n, ["onRest"]), g = new Promise(function(t, e) {
                                            return y = t, m = e
                                        }), b = function(t) {
                                            return function() {
                                                var e = function(t) {
                                                    throw t instanceof G && m(t), t
                                                };
                                                try {
                                                    return t.apply(void 0, arguments).catch(e)
                                                } catch (t) {
                                                    e(t)
                                                }
                                            }
                                        }, _ = function(t) {
                                            var e = u <= (r.cancelId || 0) && U(i) || u !== r.asyncId && B(i, !1);
                                            if (e) throw t.result = e, t
                                        }, x = b(function(t, e) {
                                            var n = new G;
                                            _(n);
                                            var l = o.is.obj(t) ? a({}, t) : a(a({}, e), {}, {
                                                to: t
                                            });
                                            return l.parentId = u, o.each(v, function(t, e) {
                                                o.is.und(l[e]) && (l[e] = t)
                                            }), i.start(l).then(function() {
                                                var t = c(s.mark(function t(e) {
                                                    return s.wrap(function(t) {
                                                        for (;;) switch (t.prev = t.next) {
                                                            case 0:
                                                                if (_(n), !i.is("PAUSED")) {
                                                                    t.next = 4;
                                                                    break
                                                                }
                                                                return t.next = 4, new Promise(function(t) {
                                                                    r.resumeQueue.add(t)
                                                                });
                                                            case 4:
                                                                return t.abrupt("return", e);
                                                            case 5:
                                                            case "end":
                                                                return t.stop()
                                                        }
                                                    }, t)
                                                }));
                                                return function(e) {
                                                    return t.apply(this, arguments)
                                                }
                                            }())
                                        }), t.prev = 7, o.is.arr(e) ? O = (function() {
                                            var t = c(s.mark(function t(e) {
                                                var n, r, i;
                                                return s.wrap(function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            n = function(t) {
                                                                var e = 0;
                                                                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                                                                    if (Array.isArray(t) || (t = function(t, e) {
                                                                            if (t) {
                                                                                if ("string" == typeof t) return W(t, e);
                                                                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                                                                if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(t);
                                                                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return W(t, e)
                                                                            }
                                                                        }(t))) return function() {
                                                                        return e >= t.length ? {
                                                                            done: !0
                                                                        } : {
                                                                            done: !1,
                                                                            value: t[e++]
                                                                        }
                                                                    };
                                                                    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                                                }
                                                                return (e = t[Symbol.iterator]()).next.bind(e)
                                                            }(e);
                                                        case 1:
                                                            if ((r = n()).done) {
                                                                t.next = 7;
                                                                break
                                                            }
                                                            return i = r.value, t.next = 5, x(i);
                                                        case 5:
                                                            t.next = 1;
                                                            break;
                                                        case 7:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }, t)
                                            }));
                                            return function(e) {
                                                return t.apply(this, arguments)
                                            }
                                        })()(e) : o.is.fun(e) && (O = Promise.resolve(e(x, i.stop.bind(i)))), t.next = 11, Promise.all([O.then(y), g]);
                                    case 11:
                                        w = B(i, !0), t.next = 21;
                                        break;
                                    case 14:
                                        if (t.prev = 14, t.t0 = t.catch(7), !(t.t0 instanceof G)) {
                                            t.next = 20;
                                            break
                                        }
                                        w = t.t0.result, t.next = 21;
                                        break;
                                    case 20:
                                        throw t.t0;
                                    case 21:
                                        return t.prev = 21, u == r.asyncId && (r.asyncId = l, r.asyncTo = l ? h : void 0, r.promise = l ? d : void 0), t.finish(21);
                                    case 24:
                                        return o.is.fun(f) && p.batchedUpdates(function() {
                                            f(w)
                                        }), t.abrupt("return", w);
                                    case 26:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, null, [
                                [7, 14, 21, 24]
                            ])
                        }))());
                    case 8:
                    case "end":
                        return t.stop()
                }
            }, t)
        }))).apply(this, arguments)
    }

    function $(t, e) {
        t.cancelId = e, t.asyncId = t.asyncTo = t.promise = void 0
    }
    var G = function(t) {
            function e() {
                var e;
                return (e = t.call(this, "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.") || this).result = void 0, e
            }
            return f(e, t), e
        }(v(Error)),
        H = function(t) {
            return t instanceof K
        },
        X = 1,
        K = function(t) {
            function e() {
                for (var e, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                return (e = t.call.apply(t, [this].concat(r)) || this).id = X++, e.key = void 0, e._priority = 0, e._children = new Set, e
            }
            f(e, t);
            var n = e.prototype;
            return n.get = function() {
                var t = h.getAnimated(this);
                return t && t.getValue()
            }, n.to = function() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return p.to(this, e)
            }, n.interpolate = function() {
                y.deprecateInterpolate();
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return p.to(this, e)
            }, n.addChild = function(t) {
                !this._children.size && this._attach(), this._children.add(t)
            }, n.removeChild = function(t) {
                this._children.delete(t), !this._children.size && this._detach()
            }, n.onParentChange = function(t) {
                var e = t.type;
                this.idle ? "start" == e && (this._reset(), this._start()) : "reset" == e && this._reset()
            }, n._attach = function() {}, n._detach = function() {}, n._reset = function() {
                this._emit({
                    type: "reset",
                    parent: this
                })
            }, n._start = function() {
                this._emit({
                    type: "start",
                    parent: this
                })
            }, n._onChange = function(t, e) {
                void 0 === e && (e = !1), this._emit({
                    type: "change",
                    parent: this,
                    value: t,
                    idle: e
                })
            }, n._onPriorityChange = function(t) {
                !this.idle && p.frameLoop.start(this), this._emit({
                    type: "priority",
                    parent: this,
                    priority: t
                })
            }, n._emit = function(t) {
                o.each(Array.from(this._children), function(e) {
                    e.onParentChange(t)
                })
            }, l(e, [{
                key: "priority",
                get: function() {
                    return this._priority
                },
                set: function(t) {
                    this._priority != t && (this._priority = t, this._onPriorityChange(t))
                }
            }]), e
        }(o.FluidValue),
        Y = "CREATED",
        Q = "IDLE",
        J = "ACTIVE",
        Z = "PAUSED",
        tt = "DISPOSED",
        te = function(t) {
            function e(e, n) {
                var r;
                if ((r = t.call(this) || this).key = void 0, r.animation = new Animation, r.queue = void 0, r._phase = Y, r._state = {
                        pauseQueue: new Set,
                        resumeQueue: new Set
                    }, r._defaultProps = {}, r._lastCallId = 0, r._lastToId = 0, !o.is.und(e) || !o.is.und(n)) {
                    var i = o.is.obj(e) ? a({}, e) : a(a({}, n), {}, {
                        from: e
                    });
                    i.default = !0, r.start(i)
                }
                return r
            }
            f(e, t);
            var n, r = e.prototype;
            return r.advance = function(t) {
                var e = this,
                    n = !0,
                    r = !1,
                    i = this.animation,
                    a = i.config,
                    u = i.toValues,
                    s = h.getPayload(i.to);
                if (!s) {
                    var c = o.getFluidConfig(i.to);
                    c && (u = o.toArray(c.get()))
                }
                return i.values.forEach(function(c, l) {
                    if (!c.done) {
                        var f = s ? s[l].lastPosition : u[l],
                            h = i.immediate,
                            p = f;
                        if (!h) {
                            if (p = c.lastPosition, a.tension <= 0) {
                                c.done = !0;
                                return
                            }
                            var d = c.elapsedTime += t,
                                v = i.fromValues[l],
                                y = null != c.v0 ? c.v0 : c.v0 = o.is.arr(a.velocity) ? a.velocity[l] : a.velocity;
                            if (o.is.und(a.duration)) {
                                if (a.decay) {
                                    var m = !0 === a.decay ? .998 : a.decay,
                                        g = Math.exp(-(1 - m) * d);
                                    p = v + y / (1 - m) * (1 - g), h = .1 > Math.abs(c.lastPosition - p), b = y * g
                                } else {
                                    b = null == c.lastVelocity ? y : c.lastVelocity;
                                    for (var b, _ = a.precision || (v == f ? .005 : Math.min(1, .001 * Math.abs(f - v))), x = a.restVelocity || _ / 10, w = a.clamp ? 0 : a.bounce, O = !o.is.und(w), k = v == f ? c.v0 > 0 : v < f, S = !1, E = Math.ceil(t / 1), P = 0; P < E && !(!(Math.abs(b) > x) && (h = Math.abs(f - p) <= _)); ++P) {
                                        ;
                                        O && (S = p == f || p > f == k) && (b = -b * w, p = f);
                                        var C = (-(1e-6 * a.tension) * (p - f) + -(.001 * a.friction) * b) / a.mass;
                                        b += 1 * C, p += 1 * b
                                    }
                                }
                            } else {
                                var A = a.progress || 0;
                                a.duration <= 0 ? A = 1 : A += (1 - A) * Math.min(1, d / a.duration), b = ((p = v + a.easing(A) * (f - v)) - c.lastPosition) / t, h = 1 == A
                            }
                            c.lastVelocity = b, Number.isNaN(p) && (console.warn("Got NaN while animating:", e), h = !0)
                        }
                        s && !s[l].done && (h = !1), h ? c.done = !0 : n = !1, c.setValue(p, a.round) && (r = !0)
                    }
                }), n ? this.finish() : r && this._onChange(this.get()), n
            }, r.is = function(t) {
                return this._phase == t
            }, r.set = function(t) {
                var e = this;
                return p.batchedUpdates(function() {
                    if (e._focus(t), e._set(t) && !e.is(J)) return e._onChange(e.get(), !0);
                    e._stop()
                }), this
            }, r.pause = function() {
                tn(this, "pause"), !this.is(Z) && (this._phase = Z, o.flush(this._state.pauseQueue, function(t) {
                    return t()
                }))
            }, r.resume = function() {
                tn(this, "resume"), this.is(Z) && (this._start(), o.flush(this._state.resumeQueue, function(t) {
                    return t()
                }))
            }, r.finish = function(t) {
                var e = this;
                if (this.resume(), this.is(J)) {
                    var n = this.animation;
                    !n.config.decay && o.is.und(t) && (t = n.to), !o.is.und(t) && this._set(t), p.batchedUpdates(function() {
                        !n.changed && (n.changed = !0, n.onStart && n.onStart(e)), e._stop()
                    })
                }
                return this
            }, r.update = function(t) {
                return tn(this, "update"), (this.queue || (this.queue = [])).push(t), this
            }, r.start = (n = c(s.mark(function t(e, n) {
                var r, i, u = this;
                return s.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return tn(this, "start"), o.is.und(e) ? (r = this.queue || [], this.queue = []) : r = [o.is.obj(e) ? e : a(a({}, n), {}, {
                                to: e
                            })], t.next = 4, Promise.all(r.map(function(t) {
                                return u._update(t)
                            }));
                        case 4:
                            return i = t.sent, t.abrupt("return", N(this, i));
                        case 6:
                        case "end":
                            return t.stop()
                    }
                }, t, this)
            })), function(t, e) {
                return n.apply(this, arguments)
            }), r.stop = function(t) {
                var e = this;
                return !this.is(tt) && ($(this._state, this._lastCallId), this._focus(this.get()), p.batchedUpdates(function() {
                    return e._stop(t)
                })), this
            }, r.reset = function() {
                this._update({
                    reset: !0
                })
            }, r.dispose = function() {
                !this.is(tt) && (this.animation && (this.animation.onRest = []), this.stop(), this._phase = tt)
            }, r.onParentChange = function(e) {
                t.prototype.onParentChange.call(this, e), "change" == e.type ? !this.is(J) && (this._reset(), !this.is(Z) && this._start()) : "priority" == e.type && (this.priority = e.priority + 1)
            }, r._prepareNode = function(t) {
                var e = t.to,
                    n = t.from,
                    r = t.reverse,
                    i = this.key || "";
                e = !o.is.obj(e) || o.getFluidConfig(e) ? e : e[i];
                var a = {
                    to: e,
                    from: n = !o.is.obj(n) || o.getFluidConfig(n) ? n : n[i]
                };
                if (this.is(Y)) {
                    if (r) {
                        var u = [n, e];
                        e = u[0], n = u[1]
                    }
                    n = o.getFluidValue(n);
                    var s = this._updateNode(o.is.und(n) ? o.getFluidValue(e) : n);
                    s && !o.is.und(n) && s.setValue(n)
                }
                return a
            }, r._updateNode = function(t) {
                var e = h.getAnimated(this);
                if (!o.is.und(t)) {
                    var n = this._getNodeType(t);
                    (!e || e.constructor !== n) && h.setAnimated(this, e = n.create(t))
                }
                return e
            }, r._getNodeType = function(t) {
                var e = h.getAnimated(t);
                return e ? e.constructor : o.is.arr(t) ? h.AnimatedArray : o.isAnimatedString(t) ? h.AnimatedString : h.AnimatedValue
            }, r._update = function(t, e) {
                var n = this,
                    r = this._defaultProps,
                    i = function(e) {
                        var n = R(t, e);
                        !o.is.und(n) && (r[e] = n), r[e] && (t[e] = r[e])
                    };
                i("cancel"), i("pause");
                var a = this._prepareNode(t);
                return I(++this._lastCallId, {
                    key: this.key,
                    props: t,
                    state: this._state,
                    actions: {
                        pause: this.pause.bind(this),
                        resume: this.resume.bind(this),
                        start: this._merge.bind(this, a)
                    }
                }).then(function(r) {
                    if (t.loop && r.finished && !(e && r.noop)) {
                        var i = to(t);
                        if (i) return n._update(i, !0)
                    }
                    return r
                })
            }, r._merge = function(t, e, n) {
                if (e.cancel) return this.stop(!0), n(U(this));
                var r = this.key,
                    i = this.animation,
                    u = this._defaultProps,
                    s = !o.is.und(t.to),
                    c = !o.is.und(t.from);
                if (s || c) {
                    if (!(e.callId > this._lastToId)) return n(U(this));
                    this._lastToId = e.callId
                }
                var l = function(t) {
                        return o.is.und(e[t]) ? u[t] : e[t]
                    },
                    f = tr(l("onDelayEnd"), r);
                if (f && f(e, this), e.default) T(e, ["pause", "cancel"], u);
                var d = i.to,
                    v = i.from,
                    y = t.to,
                    m = void 0 === y ? d : y,
                    g = t.from,
                    b = void 0 === g ? v : g;
                if (c && !s && (m = b), e.reverse) {
                    var _ = [b, m];
                    m = _[0], b = _[1]
                }
                var x = !o.isEqual(b, v);
                x && (i.from = b);
                var O = !o.isEqual(m, d);
                O && this._focus(m);
                var S = o.getFluidConfig(m),
                    E = o.getFluidConfig(b);
                E && (b = E.get());
                var P = o.is.arr(e.to) || o.is.fun(e.to),
                    j = i.config,
                    R = j.decay,
                    M = j.velocity;
                e.config && !P && ! function(t, e, n) {
                    for (var r in n && (k(n = a({}, n), e), e = a(a({}, n), e)), k(t, e), Object.assign(t, e), w) null == t[r] && (t[r] = w[r]);
                    var i = t.mass,
                        u = t.frequency,
                        s = t.damping;
                    !o.is.und(u) && (u < .01 && (u = .01), s < 0 && (s = 0), t.tension = Math.pow(2 * Math.PI / u, 2) * i, t.friction = 4 * Math.PI * s * i / u)
                }(j, C(e.config, r), e.config !== u.config ? C(u.config, r) : void 0);
                var L = h.getAnimated(this);
                if (!L || o.is.und(m)) return n(B(this, !0));
                var V = o.is.und(e.reset) ? c && !e.default : !o.is.und(b) && A(e.reset, r),
                    I = V ? b : this.get(),
                    N = F(m),
                    W = o.is.num(N) || o.is.arr(N) || o.isAnimatedString(N),
                    D = !P && (!W || A(u.immediate || e.immediate, r));
                if (O) {
                    if (D) L = this._updateNode(N);
                    else {
                        var $ = this._getNodeType(m);
                        if ($ !== L.constructor) throw Error("Cannot animate between " + L.constructor.name + " and " + $.name + ', as the "to" prop suggests')
                    }
                }
                var G = L.constructor,
                    H = !!S,
                    X = !1;
                if (!H) {
                    var K = V || this.is(Y) && x;
                    (O || K) && (H = !(X = o.isEqual(F(I), N))), (!o.isEqual(j.decay, R) || !o.isEqual(j.velocity, M)) && (H = !0)
                }
                if (X && this.is(J) && (i.changed && !V ? H = !0 : !H && this._stop()), !P) {
                    (H || o.getFluidConfig(d)) && (i.values = L.getPayload(), i.toValues = S ? null : G == h.AnimatedString ? [1] : o.toArray(N)), i.immediate = D, i.onStart = tr(l("onStart"), r), i.onChange = tr(l("onChange"), r);
                    var Z = i.onRest,
                        tt = V && !e.onRest ? Z[0] || o.noop : ti(tr(l("onRest"), r), this);
                    if (H) {
                        i.onRest = [tt, ti(n, this)];
                        var te = V ? 0 : 1;
                        te < Z.length && p.batchedUpdates(function() {
                            for (; te < Z.length; te++) Z[te]()
                        })
                    } else(V || e.onRest) && (i.onRest[0] = tt)
                }
                var tn = tr(l("onProps"), r);
                if (tn && tn(e, this), V && L.setValue(I), P) n(q(e.to, e, this._state, this));
                else if (H) V && (this._phase = Q), this._reset(), this._start();
                else if (this.is(J) && !O) i.onRest.push(ti(n, this));
                else {
                    let t = z(this, I),
                        e = tr(l("onNoopRest"), r);
                    null != e && e(t), n(t)
                }
            }, r._focus = function(t) {
                var e = this.animation;
                if (t !== e.to) {
                    var n = o.getFluidConfig(e.to);
                    n && n.removeChild(this), e.to = t;
                    var r = 0;
                    (n = o.getFluidConfig(t)) && (n.addChild(this), H(t) && (r = (t.priority || 0) + 1)), this.priority = r
                }
            }, r._set = function(t) {
                var e = o.getFluidConfig(t);
                e && (t = e.get());
                var n = h.getAnimated(this),
                    r = n && n.getValue();
                return n ? n.setValue(t) : this._updateNode(t), !o.isEqual(t, r)
            }, r._onChange = function(e, n) {
                void 0 === n && (n = !1);
                var r = this.animation;
                !r.changed && !n && (r.changed = !0, r.onStart && r.onStart(this)), r.onChange && r.onChange(e, this), t.prototype._onChange.call(this, e, n)
            }, r._reset = function() {
                var e = this.animation;
                h.getAnimated(this).reset(e.to), !this.is(J) && (e.changed = !1), !e.immediate && (e.fromValues = e.values.map(function(t) {
                    return t.lastPosition
                })), t.prototype._reset.call(this)
            }, r._start = function() {
                !this.is(J) && (this._phase = J, t.prototype._start.call(this), p.skipAnimation ? this.finish() : p.frameLoop.start(this))
            }, r._stop = function(t) {
                if (this.resume(), this.is(J)) {
                    this._phase = Q, this._onChange(this.get(), !0);
                    var e = this.animation;
                    o.each(e.values, function(t) {
                        t.done = !0
                    });
                    var n = e.onRest;
                    n.length && (e.onRest = [e.toValues ? o.noop : n[0]], !e.changed && (n[0] = o.noop), o.each(n, function(e) {
                        return e(t)
                    }))
                }
            }, l(e, [{
                key: "idle",
                get: function() {
                    return !this.is(J) && !this._state.asyncTo
                }
            }, {
                key: "goal",
                get: function() {
                    return o.getFluidValue(this.animation.to)
                }
            }, {
                key: "velocity",
                get: function() {
                    var t = h.getAnimated(this);
                    return t instanceof h.AnimatedValue ? t.lastVelocity || 0 : t.getPayload().map(function(t) {
                        return t.lastVelocity || 0
                    })
                }
            }]), e
        }(K);

    function tn(t, e) {
        if (t.is(tt)) throw Error('Cannot call "' + e + '" of disposed "' + t.constructor.name + '" object')
    }

    function tr(t, e) {
        return o.is.fun(t) ? t : e && t ? t[e] : void 0
    }
    var ti = function(t, e) {
        var n = e.animation.to;
        return t ? function(r) {
            if (r) t(U(e));
            else {
                var i = F(n),
                    a = F(e.get());
                t(B(e, o.isEqual(a, i)))
            }
        } : o.noop
    };

    function to(t, e, n) {
        void 0 === e && (e = t.loop), void 0 === n && (n = t.to);
        var r = C(e);
        if (r) {
            var i = !0 !== r && V(r),
                u = (i || t).reverse,
                s = !i || i.reset;
            return ta(a(a({}, t), {}, {
                loop: e,
                default: !1,
                to: !u || o.is.arr(n) || o.is.fun(n) ? n : void 0,
                from: s ? t.from : void 0,
                reset: s
            }, i))
        }
    }

    function ta(t) {
        var e = t = V(t),
            n = e.to,
            r = e.from,
            i = new Set;
        return r ? tu(r, i) : delete t.from, o.is.obj(n) ? tu(n, i) : !n && delete t.to, t.keys = i.size ? Array.from(i) : null, t
    }

    function tu(t, e) {
        o.each(t, function(t, n) {
            return null != t && e.add(n)
        })
    }
    var ts = ["onStart", "onChange", "onRest"],
        tc = 1,
        tl = function() {
            function t(t, e) {
                this.id = tc++, this.springs = {}, this.queue = [], this._flush = void 0, this._initialProps = void 0, this._phase = Y, this._lastAsyncId = 0, this._active = new Set, this._state = {
                    pauseQueue: new Set,
                    resumeQueue: new Set
                }, this._events = {
                    onStart: new Set,
                    onChange: new Set,
                    onRest: new Map
                }, this._onFrame = this._onFrame.bind(this), e && (this._flush = e), t && this.start(t)
            }
            var e = t.prototype;
            return e.is = function(t) {
                return this._phase == t
            }, e.get = function() {
                var t = {};
                return this.each(function(e, n) {
                    return t[n] = e.get()
                }), t
            }, e.update = function(t) {
                return t && this.queue.push(ta(t)), this
            }, e.start = function(t) {
                var e = t ? o.toArray(t).map(ta) : this.queue;
                return (!t && (this.queue = []), this._flush) ? this._flush(this, e) : (ty(this, e), tf(this, e))
            }, e.stop = function(t) {
                if (o.is.und(t)) this.each(function(t) {
                    return t.stop()
                }), $(this._state, this._lastAsyncId);
                else {
                    var e = this.springs;
                    o.each(o.toArray(t), function(t) {
                        return e[t].stop()
                    })
                }
                return this
            }, e.pause = function(t) {
                if (o.is.und(t)) this.each(function(t) {
                    return t.pause()
                });
                else {
                    var e = this.springs;
                    o.each(o.toArray(t), function(t) {
                        return e[t].pause()
                    })
                }
                return this
            }, e.resume = function(t) {
                if (o.is.und(t)) this.each(function(t) {
                    return t.resume()
                });
                else {
                    var e = this.springs;
                    o.each(o.toArray(t), function(t) {
                        return e[t].resume()
                    })
                }
                return this
            }, e.reset = function() {
                return this.each(function(t) {
                    return t.reset()
                }), this
            }, e.each = function(t) {
                o.each(this.springs, t)
            }, e.dispose = function() {
                this._state.asyncTo = void 0, this.each(function(t) {
                    return t.dispose()
                }), this.springs = {}
            }, e._onFrame = function() {
                var t = this,
                    e = this._events,
                    n = e.onStart,
                    r = e.onChange,
                    i = e.onRest,
                    a = this._active.size > 0;
                a && this._phase != J && (this._phase = J, o.flush(n, function(e) {
                    return e(t)
                }));
                var u = (r.size || !a && i.size) && this.get();
                o.flush(r, function(t) {
                    return t(u)
                }), !a && (this._phase = Q, o.flush(i, function(t) {
                    var e = t[0],
                        n = t[1];
                    n.value = u, e(n)
                }))
            }, e.onParentChange = function(t) {
                "change" == t.type && (this._active[t.idle ? "delete" : "add"](t.parent), p.frameLoop.onFrame(this._onFrame))
            }, l(t, [{
                key: "idle",
                get: function() {
                    return !this._state.asyncTo && Object.values(this.springs).every(function(t) {
                        return t.idle
                    })
                }
            }]), t
        }();

    function tf(t, e) {
        return Promise.all(e.map(function(e) {
            return function t(e, n, r) {
                var i = n.to,
                    a = n.loop,
                    u = n.onRest;
                a && (n.loop = !1);
                var s = o.is.arr(i) || o.is.fun(i) ? i : void 0;
                s ? (n.to = void 0, n.onRest = void 0) : o.each(ts, function(t) {
                    var r = n[t];
                    if (o.is.fun(r)) {
                        var i = e._events[t];
                        i instanceof Set ? n[t] = function() {
                            return i.add(r)
                        } : n[t] = function(t) {
                            var e = t.finished,
                                n = t.cancelled,
                                o = i.get(r);
                            o ? (!e && (o.finished = !1), n && (o.cancelled = !0)) : i.set(r, {
                                value: null,
                                finished: e,
                                cancelled: n
                            })
                        }
                    }
                });
                var c = (n.keys || Object.keys(e.springs)).map(function(t) {
                        return e.springs[t].start(n)
                    }),
                    l = e._state;
                return s ? c.push(I(++e._lastAsyncId, {
                    props: n,
                    state: l,
                    actions: {
                        pause: o.noop,
                        resume: o.noop,
                        start: function(t, n) {
                            if (t.onRest = u, t.cancel) {
                                var r, i;
                                if (r = t, i = "cancel", !o.is.und(R(r, i))) $(l, t.callId)
                            } else n(q(s, t, l, e))
                        }
                    }
                })) : !n.keys && !0 === n.cancel && $(l, e._lastAsyncId), Promise.all(c).then(function(o) {
                    var u = N(e, o);
                    if (a && u.finished && !(r && u.noop)) {
                        var s = to(n, a, i);
                        if (s) return ty(e, [s]), t(e, s, !0)
                    }
                    return u
                })
            }(t, e)
        })).then(function(e) {
            return N(t, e)
        })
    }

    function th(t, e) {
        var n = a({}, t.springs);
        return e && o.each(o.toArray(e), function(t) {
            o.is.und(t.keys) && (t = ta(t)), !o.is.obj(t.to) && (t = a(a({}, t), {}, {
                to: void 0
            })), tv(n, t, function(t) {
                return td(t)
            })
        }), n
    }

    function tp(t, e) {
        o.each(e, function(e, n) {
            !t.springs[n] && (t.springs[n] = e, e.addChild(t))
        })
    }

    function td(t, e) {
        var n = new te;
        return n.key = t, e && n.addChild(e), n
    }

    function tv(t, e, n) {
        e.keys && o.each(e.keys, function(r) {
            (t[r] || (t[r] = n(r)))._prepareNode(e)
        })
    }

    function ty(t, e) {
        o.each(e, function(e) {
            tv(t.springs, e, function(e) {
                return td(e, t)
            })
        })
    }
    var tm = u.createContext({}),
        tg = function(t) {
            var e = t.children,
                n = m(t, ["children"]),
                r = u.useContext(tm);
            n = P(function() {
                return a(a({}, r), n)
            }, [r, n.pause, n.cancel, n.immediate, n.config]);
            var i = tm.Provider;
            return u.createElement(i, {
                value: n
            }, e)
        };
    tg.Provider = tm.Provider, tg.Consumer = tm.Consumer;
    var tb = function() {
            return u.useContext(tm)
        },
        t_ = {
            create: function(t) {
                return {
                    get controllers() {
                        return t()
                    },
                    update: function(e) {
                        return o.each(t(), function(t, n) {
                            t.update(j(e, n, t))
                        }), this
                    },
                    start: function(e) {
                        return c(s.mark(function n() {
                            var r;
                            return s.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, Promise.all(t().map(function(t, n) {
                                            var r = j(e, n, t);
                                            return t.start(r)
                                        }));
                                    case 2:
                                        return r = n.sent, n.abrupt("return", {
                                            value: r.map(function(t) {
                                                return t.value
                                            }),
                                            finished: r.every(function(t) {
                                                return t.finished
                                            })
                                        });
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }, n)
                        }))()
                    },
                    stop: function(e) {
                        return o.each(t(), function(t) {
                            return t.stop(e)
                        })
                    },
                    pause: function(e) {
                        return o.each(t(), function(t) {
                            return t.pause(e)
                        })
                    },
                    resume: function(e) {
                        return o.each(t(), function(t) {
                            return t.resume(e)
                        })
                    }
                }
            }
        };

    function tx(t, e, n) {
        var r = o.is.fun(e) && e;
        r && !n && (n = []);
        var s = u.useRef(0),
            c = o.useForceUpdate(),
            l = u.useState(function() {
                return {
                    ctrls: [],
                    queue: [],
                    flush: function(t, e) {
                        var n = th(t, e);
                        return !(s.current > 0) || l.queue.length || Object.keys(n).some(function(e) {
                            return !t.springs[e]
                        }) ? new Promise(function(r) {
                            tp(t, n), l.queue.push(function() {
                                r(tf(t, e))
                            }), c()
                        }) : tf(t, e)
                    }
                }
            })[0],
            f = u.useRef(),
            h = [].concat(l.ctrls),
            p = [],
            d = o.usePrev(t) || 0,
            v = h.slice(t, d);

        function y(t, n) {
            for (var i = t; i < n; i++) {
                var a = h[i] || (h[i] = new tl(null, l.flush)),
                    u = r ? r(i, a) : e[i];
                u && (u = p[i] = function(t) {
                    var e = ta(t);
                    return o.is.und(e.default) && (e.default = T(e, [!0 === e.immediate && "immediate"])), e
                }(u), 0 == i && (f.current = u.ref, u.ref = void 0))
            }
        }
        P(function() {
            h.length = t, y(d, t)
        }, [t]), P(function() {
            y(0, Math.min(d, t))
        }, n);
        var m = u.useMemo(function() {
                return t_.create(function() {
                    return l.ctrls
                })
            }, []),
            g = h.map(function(t, e) {
                return th(t, p[e])
            }),
            b = tb();
        i.useLayoutEffect(function() {
            s.current++, l.ctrls = h, f.current && (f.current.current = m);
            var t = l.queue;
            t.length && (l.queue = [], o.each(t, function(t) {
                return t()
            })), o.each(v, function(t) {
                return t.dispose()
            }), o.each(h, function(t, e) {
                tp(t, g[e]), t.start({
                    default: b
                });
                var n = p[e];
                n && (f.current ? t.queue.push(n) : t.start(n))
            })
        }), o.useOnce(function() {
            return function() {
                o.each(l.ctrls, function(t) {
                    return t.dispose()
                })
            }
        });
        var _ = g.map(function(t) {
            return a({}, t)
        });
        return r || 3 == arguments.length ? [_, m.start, m.stop] : _
    }

    function tw(t, e) {
        var n = o.is.fun(t),
            r = tx(1, n ? t : [t], n ? e || [] : e),
            i = r[0][0],
            a = r[1],
            u = r[2];
        return n || 2 == arguments.length ? [i, a, u] : i
    }

    function tO(t, e, n) {
        var r = o.is.fun(e) && e;
        r && !n && (n = []);
        var a = [],
            u = tx(t, function(t, n) {
                return a[t] = n, j(e, t, n)
            }, n || [{}]);
        if (i.useLayoutEffect(function() {
                for (var t = o.is.obj(e) && e.reverse, n = 0; n < a.length; n++) {
                    var r = a[n + (t ? 1 : -1)];
                    r && a[n].update({
                        to: r.springs
                    }).start()
                }
            }, n), r || 3 == arguments.length) {
            var s = u[1];
            return u[1] = d.useCallbackOne(function(t) {
                var e = o.is.obj(t) && t.reverse;
                return s(function(n, r) {
                    var i = j(t, n, r),
                        o = a[n + (e ? 1 : -1)];
                    return o && (i.to = o.springs), i
                })
            }, n), u
        }
        return u[0]
    }
    var tk = "mount",
        tS = "enter",
        tE = "update",
        tP = "leave";

    function tC(t, e, n) {
        var r = e.ref,
            s = e.reset,
            c = e.sort,
            l = e.trail,
            f = void 0 === l ? 0 : l,
            h = e.expires,
            p = void 0 === h || h,
            d = o.toArray(t),
            v = [],
            y = function(t, e) {
                var n = e.key,
                    r = e.keys,
                    i = void 0 === r ? n : r;
                return o.is.und(i) ? t : o.is.fun(i) ? t.map(i) : o.toArray(i)
            }(d, e),
            m = u.useRef(null),
            g = s ? null : m.current;
        i.useLayoutEffect(function() {
            m.current = v
        }), o.useOnce(function() {
            return function() {
                return o.each(m.current, function(t) {
                    t.expired && clearTimeout(t.expirationId), t.ctrl.dispose()
                })
            }
        });
        var b = [];
        if (g && o.each(g, function(t, e) {
                t.expired ? clearTimeout(t.expirationId) : ~(e = b[e] = y.indexOf(t.key)) && (v[e] = t)
            }), o.each(d, function(t, e) {
                v[e] || (v[e] = {
                    key: y[e],
                    item: t,
                    phase: tk,
                    ctrl: new tl
                })
            }), b.length) {
            var _ = -1;
            o.each(b, function(t, n) {
                var r = g[n];
                ~t ? (_ = v.indexOf(r), v[_] = a(a({}, r), {}, {
                    item: d[t]
                })) : e.leave && v.splice(++_, 0, r)
            })
        }
        o.is.fun(c) && v.sort(function(t, e) {
            return c(t.item, e.item)
        });
        var x = -f,
            w = o.useForceUpdate(),
            O = T(e),
            k = new Map;
        o.each(v, function(t, n) {
            var r, i, u = t.key,
                s = t.phase;
            if (s == tk) r = e.enter, i = tS;
            else {
                var c = 0 > y.indexOf(u);
                if (s != tP) {
                    if (c) r = e.leave, i = tP;
                    else {
                        if (!(r = e.update)) return;
                        i = tE
                    }
                } else {
                    if (c) return;
                    r = e.enter, i = tS
                }
            }
            if (r = C(r, t.item, n), !(r = o.is.obj(r) ? V(r) : {
                    to: r
                }).config) {
                var l = e.config || O.config;
                r.config = C(l, t.item, n)
            }
            var h = a(a({}, O), {}, {
                delay: x += f,
                reset: !1
            }, r);
            if (i == tS && o.is.und(h.from)) {
                var d = o.is.und(e.initial) || g ? e.from : e.initial;
                h.from = C(d, t.item, n)
            }
            var v = h.onRest;
            h.onRest = h.onNoopRest = function(t) {
                var e = m.current,
                    n = e.find(function(t) {
                        return t.key === u
                    });
                if (n) {
                    if (o.is.fun(v) && !0 !== t.noop && v(t, n), t.cancelled && n.phase != tE) {
                        n.phase = s;
                        return
                    }
                    if (n.ctrl.idle) {
                        var r = e.every(function(t) {
                            return t.ctrl.idle
                        });
                        if (n.phase == tP) {
                            var i = C(p, n.item);
                            if (!1 !== i) {
                                var a = !0 === i ? 0 : i;
                                if (n.expired = !0, !r && a > 0) {
                                    a <= 2147483647 && (n.expirationId = setTimeout(w, a));
                                    return
                                }
                            }
                        }
                        r && e.some(function(t) {
                            return t.expired
                        }) && w()
                    }
                }
            };
            var b = th(t.ctrl, h);
            k.set(t, {
                phase: i,
                springs: b,
                payload: h
            })
        });
        var S = tb();
        i.useLayoutEffect(function() {
            o.each(v, function(t) {
                t.ctrl.start({
                    default: S
                })
            })
        }, [S]);
        var E = u.useMemo(function() {
            return t_.create(function() {
                return m.current.map(function(t) {
                    return t.ctrl
                })
            })
        }, []);
        u.useImperativeHandle(r, function() {
            return E
        }), i.useLayoutEffect(function() {
            o.each(k, function(t, e) {
                var n = t.phase,
                    i = t.springs,
                    o = t.payload;
                tp(e.ctrl, i), !S.cancel && (e.phase = n, n == tS && e.ctrl.start({
                    default: S
                }), e.ctrl[r ? "update" : "start"](o))
            })
        }, s ? void 0 : n);
        var P = function(t) {
            return u.createElement(u.Fragment, null, v.map(function(e, n) {
                var r = t(a({}, (k.get(e) || e.ctrl).springs), e.item, e, n);
                return r && r.type ? u.createElement(r.type, a({}, r.props, {
                    key: o.is.str(e.key) || o.is.num(e.key) ? e.key : e.ctrl.id,
                    ref: r.ref
                })) : r
            }))
        };
        return 3 == arguments.length ? [P, E.start, E.stop] : P
    }
    var tA = function(t) {
        function e(e, n) {
            (r = t.call(this) || this).source = e, r.key = void 0, r.idle = !0, r.calc = void 0, r.calc = o.createInterpolator.apply(void 0, n);
            var r, i = r._get(),
                a = o.is.arr(i) ? h.AnimatedArray : h.AnimatedValue;
            return h.setAnimated(g(r), a.create(i)), r
        }
        f(e, t);
        var n = e.prototype;
        return n.advance = function(t) {
            var e = this._get(),
                n = this.get();
            !o.isEqual(e, n) && (h.getAnimated(this).setValue(e), this._onChange(e, this.idle))
        }, n._get = function() {
            var t = o.is.arr(this.source) ? this.source.map(function(t) {
                return t.get()
            }) : o.toArray(this.source.get());
            return this.calc.apply(this, t)
        }, n._reset = function() {
            o.each(h.getPayload(this), function(t) {
                return t.reset()
            }), t.prototype._reset.call(this)
        }, n._start = function() {
            this.idle = !1, t.prototype._start.call(this), p.skipAnimation ? (this.idle = !0, this.advance()) : p.frameLoop.start(this)
        }, n._attach = function() {
            var t = this,
                e = !0,
                n = 1;
            o.each(o.toArray(this.source), function(r) {
                H(r) && (!r.idle && (e = !1), n = Math.max(n, r.priority + 1)), r.addChild(t)
            }), this.priority = n, !e && (this._reset(), this._start())
        }, n._detach = function() {
            var t = this;
            o.each(o.toArray(this.source), function(e) {
                e.removeChild(t)
            }), this.idle = !0
        }, n.onParentChange = function(e) {
            "start" == e.type ? this.advance() : "change" == e.type ? this.idle ? this.advance() : e.idle && (this.idle = o.toArray(this.source).every(function(t) {
                return !1 !== t.idle
            }), this.idle && (this.advance(), o.each(h.getPayload(this), function(t) {
                t.done = !0
            }))) : "priority" == e.type && (this.priority = o.toArray(this.source).reduce(function(t, e) {
                return Math.max(t, (e.priority || 0) + 1)
            }, 0)), t.prototype.onParentChange.call(this, e)
        }, e
    }(K);
    o.Globals.assign({
        createStringInterpolator: b.createStringInterpolator,
        to: function(t, e) {
            return new tA(t, e)
        }
    });
    Object.keys(_).forEach(function(t) {
        "default" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function() {
                return _[t]
            }
        })
    }), Object.defineProperty(e, "FrameLoop", {
        enumerable: !0,
        get: function() {
            return o.FrameLoop
        }
    }), Object.defineProperty(e, "Globals", {
        enumerable: !0,
        get: function() {
            return o.Globals
        }
    }), Object.defineProperty(e, "createInterpolator", {
        enumerable: !0,
        get: function() {
            return o.createInterpolator
        }
    }), e.BailSignal = G, e.Controller = tl, e.FrameValue = K, e.Interpolation = tA, e.Spring = function(t) {
        return (0, t.children)(tw(m(t, ["children"])))
    }, e.SpringContext = tg, e.SpringHandle = t_, e.SpringValue = te, e.Trail = function(t) {
        var e = t.items,
            n = t.children,
            r = m(t, ["items", "children"]),
            i = tO(e.length, r);
        return e.map(function(t, e) {
            var r = n(t, e);
            return o.is.fun(r) ? r(i[e]) : r
        })
    }, e.Transition = function(t) {
        var e = t.items,
            n = t.children,
            r = m(t, ["items", "children"]);
        return u.createElement(u.Fragment, null, tC(e, r)(n))
    }, e.config = x, e.inferTo = V, e.interpolate = function(t) {
        for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
        return y.deprecateInterpolate(), new tA(t, n)
    }, e.to = function(t) {
        for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
        return new tA(t, n)
    }, e.update = function() {
        return o.Globals.frameLoop.advance()
    }, e.useChain = function(t, e, n) {
        void 0 === n && (n = 1e3), i.useLayoutEffect(function() {
            if (e) {
                var r = 0;
                o.each(t, function(t, i) {
                    if (t.current) {
                        var a = t.current.controllers;
                        if (a.length) {
                            var u = n * e[i];
                            isNaN(u) ? u = r : r = u, o.each(a, function(t) {
                                o.each(t.queue, function(t) {
                                    t.delay = u + (t.delay || 0)
                                }), t.start()
                            })
                        }
                    }
                })
            } else {
                var i = Promise.resolve();
                o.each(t, function(t) {
                    var e = t.current || {},
                        n = e.controllers,
                        r = e.start;
                    if (n && n.length) {
                        var a = n.map(function(t) {
                            var e = t.queue;
                            return t.queue = [], e
                        });
                        i = i.then(function() {
                            return o.each(n, function(t, e) {
                                var n;
                                return (n = t.queue).push.apply(n, a[e])
                            }), r()
                        })
                    }
                })
            }
        })
    }, e.useSpring = tw, e.useSprings = tx, e.useTrail = tO, e.useTransition = tC
}