function(e, t, n) {
    "use strict";

    function r(e) {
        return e && "object" == typeof e && "default" in e ? e.default : e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n("672268"),
        a = n("698091"),
        o = r(n("566318")),
        s = n("470079"),
        u = r(n("630715")),
        c = r(n("741174")),
        l = r(n("485352")),
        d = r(n("44035")),
        f = n("560656"),
        p = n("239189"),
        h = n("482033"),
        m = r(n("836005")),
        g = n("640809"),
        _ = r(n("229195")),
        b = r(n("29086")),
        v = n("179237"),
        y = n("467568"),
        E = {
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
        S = o(o({}, E.default), {}, {
            mass: 1,
            damping: 1,
            easing: function(e) {
                return e
            },
            clamp: !1
        }),
        x = function() {
            this.tension = void 0, this.friction = void 0, this.frequency = void 0, this.damping = void 0, this.mass = void 0, this.velocity = 0, this.restVelocity = void 0, this.precision = void 0, this.progress = void 0, this.duration = void 0, this.easing = void 0, this.clamp = void 0, this.bounce = void 0, this.decay = void 0, this.round = void 0, Object.assign(this, S)
        };

    function w(e, t) {
        if (a.is.und(t.decay)) {
            var n = !a.is.und(t.tension) || !a.is.und(t.friction);
            (n || !a.is.und(t.frequency) || !a.is.und(t.damping) || !a.is.und(t.mass)) && (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
        } else e.duration = void 0
    }
    var T = [],
        C = function() {
            this.changed = !1, this.values = T, this.toValues = null, this.fromValues = T, this.to = void 0, this.from = void 0, this.config = new x, this.immediate = !1, this.onStart = void 0, this.onChange = void 0, this.onRest = []
        };

    function D(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var O = function(e, t) {
        return h.useMemoOne(e, t || [{}])
    };

    function M(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return a.is.fun(e) ? e.apply(void 0, n) : e
    }
    var A = function(e, t) {
            return !0 === e || !!(t && e && (a.is.fun(e) ? e(t) : a.toArray(e).includes(t)))
        },
        k = function(e, t, n) {
            return e && (a.is.fun(e) ? e(t, n) : a.is.arr(e) ? e[t] : o({}, e))
        },
        R = function(e, t) {
            return !0 === e.default ? e[t] : e.default ? e.default[t] : void 0
        },
        N = function(e, t, n) {
            void 0 === t && (t = []), void 0 === n && (n = {});
            var r = I;
            e.default && !0 !== e.default && (r = Object.keys(e = e.default));
            for (var i, o = function(e) {
                    var t = 0;
                    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                        if (Array.isArray(e) || (e = function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return D(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return D(e, t)
                                }
                            }(e))) return function() {
                            return t >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[t++]
                            }
                        };
                        throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    return (t = e[Symbol.iterator]()).next.bind(t)
                }(r); !(i = o()).done;) {
                var s = i.value,
                    u = e[s];
                !a.is.und(u) && !t.includes(s) && (n[s] = u)
            }
            return n
        },
        I = ["pause", "cancel", "config", "immediate", "onDelayEnd", "onProps", "onStart", "onChange", "onRest"],
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

    function P(e) {
        var t = function(e) {
            var t = {},
                n = 0;
            if (a.each(e, function(e, r) {
                    !L[r] && (t[r] = e, n++)
                }), n) return t
        }(e);
        if (t) {
            var n = {
                to: t
            };
            return a.each(e, function(e, r) {
                return r in t || (n[r] = e)
            }), n
        }
        return o({}, e)
    }

    function F(e) {
        var t = a.getFluidConfig(e);
        return t ? F(t.get()) : a.is.arr(e) ? e.map(F) : a.isAnimatedString(e) ? p.createStringInterpolator({
            range: [0, 1],
            output: [e, e]
        })(1) : e
    }

    function B(e, t) {
        var n = t.key,
            r = t.props,
            i = t.state,
            s = t.actions;
        return new Promise(function(t, u) {
            var c, l, d = !1,
                f = A(r.cancel, n);

            function p() {
                i.resumeQueue.add(h), l.cancel(), c = l.time - a.Globals.now()
            }

            function h() {
                c > 0 ? (i.pauseQueue.add(p), l = a.Globals.frameLoop.setTimeout(m, c)) : m()
            }

            function m() {
                i.pauseQueue.delete(p), e <= (i.cancelId || 0) && (f = !0);
                try {
                    s.start(o(o({}, r), {}, {
                        callId: e,
                        delay: c,
                        cancel: f,
                        pause: d
                    }), t)
                } catch (e) {
                    u(e)
                }
            }
            f ? m() : (c = M(r.delay || 0, n), (d = A(r.pause, n)) ? (i.resumeQueue.add(h), s.pause()) : (s.resume(), h()))
        })
    }
    var U = function(e, t) {
            return 1 == t.length ? t[0] : t.some(function(e) {
                return e.cancelled
            }) ? z(e) : t.every(function(e) {
                return e.noop
            }) ? Y(e) : j(e, t.every(function(e) {
                return e.finished
            }))
        },
        Y = function(e, t) {
            return void 0 === t && (t = e.get()), {
                value: t,
                noop: !0,
                finished: !0,
                target: e
            }
        },
        j = function(e, t, n) {
            return void 0 === n && (n = e.get()), {
                value: n,
                finished: t,
                target: e
            }
        },
        z = function(e, t) {
            return void 0 === t && (t = e.get()), {
                value: t,
                cancelled: !0,
                target: e
            }
        };

    function H(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function G(e, t, n, r) {
        return V.apply(this, arguments)
    }

    function V() {
        return (V = c(u.mark(function e(t, n, r, i) {
            var s, l, d, f, h;
            return u.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (!n.pause) {
                            e.next = 3;
                            break
                        }
                        return e.next = 3, new Promise(function(e) {
                            r.resumeQueue.add(e)
                        });
                    case 3:
                        if (s = n.callId, l = n.parentId, d = n.onRest, f = r.asyncTo, h = r.promise, !(!l && t === f && !n.reset)) {
                            e.next = 7;
                            break
                        }
                        return e.abrupt("return", h);
                    case 7:
                        return e.abrupt("return", r.promise = c(u.mark(function e() {
                            var m, g, _, b, v, y, E, S, x;
                            return u.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r.asyncId = s, r.asyncTo = t, m = N(n, ["onRest"]), b = new Promise(function(e, t) {
                                            return g = e, _ = t
                                        }), v = function(e) {
                                            return function() {
                                                var t = function(e) {
                                                    throw e instanceof W && _(e), e
                                                };
                                                try {
                                                    return e.apply(void 0, arguments).catch(t)
                                                } catch (e) {
                                                    t(e)
                                                }
                                            }
                                        }, y = function(e) {
                                            var t = s <= (r.cancelId || 0) && z(i) || s !== r.asyncId && j(i, !1);
                                            if (t) throw e.result = t, e
                                        }, E = v(function(e, t) {
                                            var n = new W;
                                            y(n);
                                            var l = a.is.obj(e) ? o({}, e) : o(o({}, t), {}, {
                                                to: e
                                            });
                                            return l.parentId = s, a.each(m, function(e, t) {
                                                a.is.und(l[t]) && (l[t] = e)
                                            }), i.start(l).then(function() {
                                                var e = c(u.mark(function e(t) {
                                                    return u.wrap(function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                if (y(n), !i.is("PAUSED")) {
                                                                    e.next = 4;
                                                                    break
                                                                }
                                                                return e.next = 4, new Promise(function(e) {
                                                                    r.resumeQueue.add(e)
                                                                });
                                                            case 4:
                                                                return e.abrupt("return", t);
                                                            case 5:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }, e)
                                                }));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }())
                                        }), e.prev = 7, a.is.arr(t) ? x = (function() {
                                            var e = c(u.mark(function e(t) {
                                                var n, r, i;
                                                return u.wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            n = function(e) {
                                                                var t = 0;
                                                                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                                                                    if (Array.isArray(e) || (e = function(e, t) {
                                                                            if (e) {
                                                                                if ("string" == typeof e) return H(e, t);
                                                                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                                                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                                                                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return H(e, t)
                                                                            }
                                                                        }(e))) return function() {
                                                                        return t >= e.length ? {
                                                                            done: !0
                                                                        } : {
                                                                            done: !1,
                                                                            value: e[t++]
                                                                        }
                                                                    };
                                                                    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                                                }
                                                                return (t = e[Symbol.iterator]()).next.bind(t)
                                                            }(t);
                                                        case 1:
                                                            if ((r = n()).done) {
                                                                e.next = 7;
                                                                break
                                                            }
                                                            return i = r.value, e.next = 5, E(i);
                                                        case 5:
                                                            e.next = 1;
                                                            break;
                                                        case 7:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }, e)
                                            }));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        })()(t) : a.is.fun(t) && (x = Promise.resolve(t(E, i.stop.bind(i)))), e.next = 11, Promise.all([x.then(g), b]);
                                    case 11:
                                        S = j(i, !0), e.next = 21;
                                        break;
                                    case 14:
                                        if (e.prev = 14, e.t0 = e.catch(7), !(e.t0 instanceof W)) {
                                            e.next = 20;
                                            break
                                        }
                                        S = e.t0.result, e.next = 21;
                                        break;
                                    case 20:
                                        throw e.t0;
                                    case 21:
                                        return e.prev = 21, s == r.asyncId && (r.asyncId = l, r.asyncTo = l ? f : void 0, r.promise = l ? h : void 0), e.finish(21);
                                    case 24:
                                        return a.is.fun(d) && p.batchedUpdates(function() {
                                            d(S)
                                        }), e.abrupt("return", S);
                                    case 26:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [7, 14, 21, 24]
                            ])
                        }))());
                    case 8:
                    case "end":
                        return e.stop()
                }
            }, e)
        }))).apply(this, arguments)
    }

    function $(e, t) {
        e.cancelId = t, e.asyncId = e.asyncTo = e.promise = void 0
    }
    var W = function(e) {
            function t() {
                var t;
                return (t = e.call(this, "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.") || this).result = void 0, t
            }
            return d(t, e), t
        }(m(Error)),
        K = function(e) {
            return e instanceof Q
        },
        q = 1,
        Q = function(e) {
            function t() {
                for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                return (t = e.call.apply(e, [this].concat(r)) || this).id = q++, t.key = void 0, t._priority = 0, t._children = new Set, t
            }
            d(t, e);
            var n = t.prototype;
            return n.get = function() {
                var e = f.getAnimated(this);
                return e && e.getValue()
            }, n.to = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return p.to(this, t)
            }, n.interpolate = function() {
                g.deprecateInterpolate();
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return p.to(this, t)
            }, n.addChild = function(e) {
                !this._children.size && this._attach(), this._children.add(e)
            }, n.removeChild = function(e) {
                this._children.delete(e), !this._children.size && this._detach()
            }, n.onParentChange = function(e) {
                var t = e.type;
                this.idle ? "start" == t && (this._reset(), this._start()) : "reset" == t && this._reset()
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
            }, n._onChange = function(e, t) {
                void 0 === t && (t = !1), this._emit({
                    type: "change",
                    parent: this,
                    value: e,
                    idle: t
                })
            }, n._onPriorityChange = function(e) {
                !this.idle && p.frameLoop.start(this), this._emit({
                    type: "priority",
                    parent: this,
                    priority: e
                })
            }, n._emit = function(e) {
                a.each(Array.from(this._children), function(t) {
                    t.onParentChange(e)
                })
            }, l(t, [{
                key: "priority",
                get: function() {
                    return this._priority
                },
                set: function(e) {
                    this._priority != e && (this._priority = e, this._onPriorityChange(e))
                }
            }]), t
        }(a.FluidValue),
        Z = "CREATED",
        X = "IDLE",
        J = "ACTIVE",
        ee = "PAUSED",
        et = "DISPOSED",
        en = function(e) {
            function t(t, n) {
                var r;
                if ((r = e.call(this) || this).key = void 0, r.animation = new C, r.queue = void 0, r._phase = Z, r._state = {
                        pauseQueue: new Set,
                        resumeQueue: new Set
                    }, r._defaultProps = {}, r._lastCallId = 0, r._lastToId = 0, !a.is.und(t) || !a.is.und(n)) {
                    var i = a.is.obj(t) ? o({}, t) : o(o({}, n), {}, {
                        from: t
                    });
                    i.default = !0, r.start(i)
                }
                return r
            }
            d(t, e);
            var n, r = t.prototype;
            return r.advance = function(e) {
                var t = this,
                    n = !0,
                    r = !1,
                    i = this.animation,
                    o = i.config,
                    s = i.toValues,
                    u = f.getPayload(i.to);
                if (!u) {
                    var c = a.getFluidConfig(i.to);
                    c && (s = a.toArray(c.get()))
                }
                return i.values.forEach(function(c, l) {
                    if (!c.done) {
                        var d = u ? u[l].lastPosition : s[l],
                            f = i.immediate,
                            p = d;
                        if (!f) {
                            if (p = c.lastPosition, o.tension <= 0) {
                                c.done = !0;
                                return
                            }
                            var h = c.elapsedTime += e,
                                m = i.fromValues[l],
                                g = null != c.v0 ? c.v0 : c.v0 = a.is.arr(o.velocity) ? o.velocity[l] : o.velocity;
                            if (a.is.und(o.duration)) {
                                if (o.decay) {
                                    var _ = !0 === o.decay ? .998 : o.decay,
                                        b = Math.exp(-(1 - _) * h);
                                    p = m + g / (1 - _) * (1 - b), f = .1 > Math.abs(c.lastPosition - p), v = g * b
                                } else {
                                    v = null == c.lastVelocity ? g : c.lastVelocity;
                                    for (var v, y = o.precision || (m == d ? .005 : Math.min(1, .001 * Math.abs(d - m))), E = o.restVelocity || y / 10, S = o.clamp ? 0 : o.bounce, x = !a.is.und(S), w = m == d ? c.v0 > 0 : m < d, T = !1, C = Math.ceil(e / 1), D = 0; D < C && !(!(Math.abs(v) > E) && (f = Math.abs(d - p) <= y)); ++D) {
                                        ;
                                        x && (T = p == d || p > d == w) && (v = -v * S, p = d);
                                        var O = (-(1e-6 * o.tension) * (p - d) + -(.001 * o.friction) * v) / o.mass;
                                        v += 1 * O, p += 1 * v
                                    }
                                }
                            } else {
                                var M = o.progress || 0;
                                o.duration <= 0 ? M = 1 : M += (1 - M) * Math.min(1, h / o.duration), v = ((p = m + o.easing(M) * (d - m)) - c.lastPosition) / e, f = 1 == M
                            }
                            c.lastVelocity = v, Number.isNaN(p) && (console.warn("Got NaN while animating:", t), f = !0)
                        }
                        u && !u[l].done && (f = !1), f ? c.done = !0 : n = !1, c.setValue(p, o.round) && (r = !0)
                    }
                }), n ? this.finish() : r && this._onChange(this.get()), n
            }, r.is = function(e) {
                return this._phase == e
            }, r.set = function(e) {
                var t = this;
                return p.batchedUpdates(function() {
                    if (t._focus(e), t._set(e) && !t.is(J)) return t._onChange(t.get(), !0);
                    t._stop()
                }), this
            }, r.pause = function() {
                er(this, "pause"), !this.is(ee) && (this._phase = ee, a.flush(this._state.pauseQueue, function(e) {
                    return e()
                }))
            }, r.resume = function() {
                er(this, "resume"), this.is(ee) && (this._start(), a.flush(this._state.resumeQueue, function(e) {
                    return e()
                }))
            }, r.finish = function(e) {
                var t = this;
                if (this.resume(), this.is(J)) {
                    var n = this.animation;
                    !n.config.decay && a.is.und(e) && (e = n.to), !a.is.und(e) && this._set(e), p.batchedUpdates(function() {
                        !n.changed && (n.changed = !0, n.onStart && n.onStart(t)), t._stop()
                    })
                }
                return this
            }, r.update = function(e) {
                return er(this, "update"), (this.queue || (this.queue = [])).push(e), this
            }, r.start = (n = c(u.mark(function e(t, n) {
                var r, i, s = this;
                return u.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return er(this, "start"), a.is.und(t) ? (r = this.queue || [], this.queue = []) : r = [a.is.obj(t) ? t : o(o({}, n), {}, {
                                to: t
                            })], e.next = 4, Promise.all(r.map(function(e) {
                                return s._update(e)
                            }));
                        case 4:
                            return i = e.sent, e.abrupt("return", U(this, i));
                        case 6:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            })), function(e, t) {
                return n.apply(this, arguments)
            }), r.stop = function(e) {
                var t = this;
                return !this.is(et) && ($(this._state, this._lastCallId), this._focus(this.get()), p.batchedUpdates(function() {
                    return t._stop(e)
                })), this
            }, r.reset = function() {
                this._update({
                    reset: !0
                })
            }, r.dispose = function() {
                !this.is(et) && (this.animation && (this.animation.onRest = []), this.stop(), this._phase = et)
            }, r.onParentChange = function(t) {
                e.prototype.onParentChange.call(this, t), "change" == t.type ? !this.is(J) && (this._reset(), !this.is(ee) && this._start()) : "priority" == t.type && (this.priority = t.priority + 1)
            }, r._prepareNode = function(e) {
                var t = e.to,
                    n = e.from,
                    r = e.reverse,
                    i = this.key || "";
                t = !a.is.obj(t) || a.getFluidConfig(t) ? t : t[i];
                var o = {
                    to: t,
                    from: n = !a.is.obj(n) || a.getFluidConfig(n) ? n : n[i]
                };
                if (this.is(Z)) {
                    if (r) {
                        var s = [n, t];
                        t = s[0], n = s[1]
                    }
                    n = a.getFluidValue(n);
                    var u = this._updateNode(a.is.und(n) ? a.getFluidValue(t) : n);
                    u && !a.is.und(n) && u.setValue(n)
                }
                return o
            }, r._updateNode = function(e) {
                var t = f.getAnimated(this);
                if (!a.is.und(e)) {
                    var n = this._getNodeType(e);
                    (!t || t.constructor !== n) && f.setAnimated(this, t = n.create(e))
                }
                return t
            }, r._getNodeType = function(e) {
                var t = f.getAnimated(e);
                return t ? t.constructor : a.is.arr(e) ? f.AnimatedArray : a.isAnimatedString(e) ? f.AnimatedString : f.AnimatedValue
            }, r._update = function(e, t) {
                var n = this,
                    r = this._defaultProps,
                    i = function(t) {
                        var n = R(e, t);
                        !a.is.und(n) && (r[t] = n), r[t] && (e[t] = r[t])
                    };
                i("cancel"), i("pause");
                var o = this._prepareNode(e);
                return B(++this._lastCallId, {
                    key: this.key,
                    props: e,
                    state: this._state,
                    actions: {
                        pause: this.pause.bind(this),
                        resume: this.resume.bind(this),
                        start: this._merge.bind(this, o)
                    }
                }).then(function(r) {
                    if (e.loop && r.finished && !(t && r.noop)) {
                        var i = eo(e);
                        if (i) return n._update(i, !0)
                    }
                    return r
                })
            }, r._merge = function(e, t, n) {
                if (t.cancel) return this.stop(!0), n(z(this));
                var r = this.key,
                    i = this.animation,
                    s = this._defaultProps,
                    u = !a.is.und(e.to),
                    c = !a.is.und(e.from);
                if (u || c) {
                    if (!(t.callId > this._lastToId)) return n(z(this));
                    this._lastToId = t.callId
                }
                var l = function(e) {
                        return a.is.und(t[e]) ? s[e] : t[e]
                    },
                    d = ei(l("onDelayEnd"), r);
                if (d && d(t, this), t.default) N(t, ["pause", "cancel"], s);
                var h = i.to,
                    m = i.from,
                    g = e.to,
                    _ = void 0 === g ? h : g,
                    b = e.from,
                    v = void 0 === b ? m : b;
                if (c && !u && (_ = v), t.reverse) {
                    var y = [v, _];
                    _ = y[0], v = y[1]
                }
                var E = !a.isEqual(v, m);
                E && (i.from = v);
                var x = !a.isEqual(_, h);
                x && this._focus(_);
                var T = a.getFluidConfig(_),
                    C = a.getFluidConfig(v);
                C && (v = C.get());
                var D = a.is.arr(t.to) || a.is.fun(t.to),
                    O = i.config,
                    k = O.decay,
                    R = O.velocity;
                t.config && !D && ! function(e, t, n) {
                    for (var r in n && (w(n = o({}, n), t), t = o(o({}, n), t)), w(e, t), Object.assign(e, t), S) null == e[r] && (e[r] = S[r]);
                    var i = e.mass,
                        s = e.frequency,
                        u = e.damping;
                    !a.is.und(s) && (s < .01 && (s = .01), u < 0 && (u = 0), e.tension = Math.pow(2 * Math.PI / s, 2) * i, e.friction = 4 * Math.PI * u * i / s)
                }(O, M(t.config, r), t.config !== s.config ? M(s.config, r) : void 0);
                var I = f.getAnimated(this);
                if (!I || a.is.und(_)) return n(j(this, !0));
                var L = a.is.und(t.reset) ? c && !t.default : !a.is.und(v) && A(t.reset, r),
                    P = L ? v : this.get(),
                    B = F(_),
                    U = a.is.num(B) || a.is.arr(B) || a.isAnimatedString(B),
                    H = !D && (!U || A(s.immediate || t.immediate, r));
                if (x) {
                    if (H) I = this._updateNode(B);
                    else {
                        var V = this._getNodeType(_);
                        if (V !== I.constructor) throw Error("Cannot animate between " + I.constructor.name + " and " + V.name + ', as the "to" prop suggests')
                    }
                }
                var $ = I.constructor,
                    W = !!T,
                    K = !1;
                if (!W) {
                    var q = L || this.is(Z) && E;
                    (x || q) && (W = !(K = a.isEqual(F(P), B))), (!a.isEqual(O.decay, k) || !a.isEqual(O.velocity, R)) && (W = !0)
                }
                if (K && this.is(J) && (i.changed && !L ? W = !0 : !W && this._stop()), !D) {
                    (W || a.getFluidConfig(h)) && (i.values = I.getPayload(), i.toValues = T ? null : $ == f.AnimatedString ? [1] : a.toArray(B)), i.immediate = H, i.onStart = ei(l("onStart"), r), i.onChange = ei(l("onChange"), r);
                    var Q = i.onRest,
                        ee = L && !t.onRest ? Q[0] || a.noop : ea(ei(l("onRest"), r), this);
                    if (W) {
                        i.onRest = [ee, ea(n, this)];
                        var et = L ? 0 : 1;
                        et < Q.length && p.batchedUpdates(function() {
                            for (; et < Q.length; et++) Q[et]()
                        })
                    } else(L || t.onRest) && (i.onRest[0] = ee)
                }
                var en = ei(l("onProps"), r);
                if (en && en(t, this), L && I.setValue(P), D) n(G(t.to, t, this._state, this));
                else if (W) L && (this._phase = X), this._reset(), this._start();
                else if (this.is(J) && !x) i.onRest.push(ea(n, this));
                else {
                    let e = Y(this, P),
                        t = ei(l("onNoopRest"), r);
                    null != t && t(e), n(e)
                }
            }, r._focus = function(e) {
                var t = this.animation;
                if (e !== t.to) {
                    var n = a.getFluidConfig(t.to);
                    n && n.removeChild(this), t.to = e;
                    var r = 0;
                    (n = a.getFluidConfig(e)) && (n.addChild(this), K(e) && (r = (e.priority || 0) + 1)), this.priority = r
                }
            }, r._set = function(e) {
                var t = a.getFluidConfig(e);
                t && (e = t.get());
                var n = f.getAnimated(this),
                    r = n && n.getValue();
                return n ? n.setValue(e) : this._updateNode(e), !a.isEqual(e, r)
            }, r._onChange = function(t, n) {
                void 0 === n && (n = !1);
                var r = this.animation;
                !r.changed && !n && (r.changed = !0, r.onStart && r.onStart(this)), r.onChange && r.onChange(t, this), e.prototype._onChange.call(this, t, n)
            }, r._reset = function() {
                var t = this.animation;
                f.getAnimated(this).reset(t.to), !this.is(J) && (t.changed = !1), !t.immediate && (t.fromValues = t.values.map(function(e) {
                    return e.lastPosition
                })), e.prototype._reset.call(this)
            }, r._start = function() {
                !this.is(J) && (this._phase = J, e.prototype._start.call(this), p.skipAnimation ? this.finish() : p.frameLoop.start(this))
            }, r._stop = function(e) {
                if (this.resume(), this.is(J)) {
                    this._phase = X, this._onChange(this.get(), !0);
                    var t = this.animation;
                    a.each(t.values, function(e) {
                        e.done = !0
                    });
                    var n = t.onRest;
                    n.length && (t.onRest = [t.toValues ? a.noop : n[0]], !t.changed && (n[0] = a.noop), a.each(n, function(t) {
                        return t(e)
                    }))
                }
            }, l(t, [{
                key: "idle",
                get: function() {
                    return !this.is(J) && !this._state.asyncTo
                }
            }, {
                key: "goal",
                get: function() {
                    return a.getFluidValue(this.animation.to)
                }
            }, {
                key: "velocity",
                get: function() {
                    var e = f.getAnimated(this);
                    return e instanceof f.AnimatedValue ? e.lastVelocity || 0 : e.getPayload().map(function(e) {
                        return e.lastVelocity || 0
                    })
                }
            }]), t
        }(Q);

    function er(e, t) {
        if (e.is(et)) throw Error('Cannot call "' + t + '" of disposed "' + e.constructor.name + '" object')
    }

    function ei(e, t) {
        return a.is.fun(e) ? e : t && e ? e[t] : void 0
    }
    var ea = function(e, t) {
        var n = t.animation.to;
        return e ? function(r) {
            if (r) e(z(t));
            else {
                var i = F(n),
                    o = F(t.get());
                e(j(t, a.isEqual(o, i)))
            }
        } : a.noop
    };

    function eo(e, t, n) {
        void 0 === t && (t = e.loop), void 0 === n && (n = e.to);
        var r = M(t);
        if (r) {
            var i = !0 !== r && P(r),
                s = (i || e).reverse,
                u = !i || i.reset;
            return es(o(o({}, e), {}, {
                loop: t,
                default: !1,
                to: !s || a.is.arr(n) || a.is.fun(n) ? n : void 0,
                from: u ? e.from : void 0,
                reset: u
            }, i))
        }
    }

    function es(e) {
        var t = e = P(e),
            n = t.to,
            r = t.from,
            i = new Set;
        return r ? eu(r, i) : delete e.from, a.is.obj(n) ? eu(n, i) : !n && delete e.to, e.keys = i.size ? Array.from(i) : null, e
    }

    function eu(e, t) {
        a.each(e, function(e, n) {
            return null != e && t.add(n)
        })
    }
    var ec = ["onStart", "onChange", "onRest"],
        el = 1,
        ed = function() {
            function e(e, t) {
                this.id = el++, this.springs = {}, this.queue = [], this._flush = void 0, this._initialProps = void 0, this._phase = Z, this._lastAsyncId = 0, this._active = new Set, this._state = {
                    pauseQueue: new Set,
                    resumeQueue: new Set
                }, this._events = {
                    onStart: new Set,
                    onChange: new Set,
                    onRest: new Map
                }, this._onFrame = this._onFrame.bind(this), t && (this._flush = t), e && this.start(e)
            }
            var t = e.prototype;
            return t.is = function(e) {
                return this._phase == e
            }, t.get = function() {
                var e = {};
                return this.each(function(t, n) {
                    return e[n] = t.get()
                }), e
            }, t.update = function(e) {
                return e && this.queue.push(es(e)), this
            }, t.start = function(e) {
                var t = e ? a.toArray(e).map(es) : this.queue;
                return (!e && (this.queue = []), this._flush) ? this._flush(this, t) : (e_(this, t), ef(this, t))
            }, t.stop = function(e) {
                if (a.is.und(e)) this.each(function(e) {
                    return e.stop()
                }), $(this._state, this._lastAsyncId);
                else {
                    var t = this.springs;
                    a.each(a.toArray(e), function(e) {
                        return t[e].stop()
                    })
                }
                return this
            }, t.pause = function(e) {
                if (a.is.und(e)) this.each(function(e) {
                    return e.pause()
                });
                else {
                    var t = this.springs;
                    a.each(a.toArray(e), function(e) {
                        return t[e].pause()
                    })
                }
                return this
            }, t.resume = function(e) {
                if (a.is.und(e)) this.each(function(e) {
                    return e.resume()
                });
                else {
                    var t = this.springs;
                    a.each(a.toArray(e), function(e) {
                        return t[e].resume()
                    })
                }
                return this
            }, t.reset = function() {
                return this.each(function(e) {
                    return e.reset()
                }), this
            }, t.each = function(e) {
                a.each(this.springs, e)
            }, t.dispose = function() {
                this._state.asyncTo = void 0, this.each(function(e) {
                    return e.dispose()
                }), this.springs = {}
            }, t._onFrame = function() {
                var e = this,
                    t = this._events,
                    n = t.onStart,
                    r = t.onChange,
                    i = t.onRest,
                    o = this._active.size > 0;
                o && this._phase != J && (this._phase = J, a.flush(n, function(t) {
                    return t(e)
                }));
                var s = (r.size || !o && i.size) && this.get();
                a.flush(r, function(e) {
                    return e(s)
                }), !o && (this._phase = X, a.flush(i, function(e) {
                    var t = e[0],
                        n = e[1];
                    n.value = s, t(n)
                }))
            }, t.onParentChange = function(e) {
                "change" == e.type && (this._active[e.idle ? "delete" : "add"](e.parent), p.frameLoop.onFrame(this._onFrame))
            }, l(e, [{
                key: "idle",
                get: function() {
                    return !this._state.asyncTo && Object.values(this.springs).every(function(e) {
                        return e.idle
                    })
                }
            }]), e
        }();

    function ef(e, t) {
        return Promise.all(t.map(function(t) {
            return function e(t, n, r) {
                var i = n.to,
                    o = n.loop,
                    s = n.onRest;
                o && (n.loop = !1);
                var u = a.is.arr(i) || a.is.fun(i) ? i : void 0;
                u ? (n.to = void 0, n.onRest = void 0) : a.each(ec, function(e) {
                    var r = n[e];
                    if (a.is.fun(r)) {
                        var i = t._events[e];
                        i instanceof Set ? n[e] = function() {
                            return i.add(r)
                        } : n[e] = function(e) {
                            var t = e.finished,
                                n = e.cancelled,
                                a = i.get(r);
                            a ? (!t && (a.finished = !1), n && (a.cancelled = !0)) : i.set(r, {
                                value: null,
                                finished: t,
                                cancelled: n
                            })
                        }
                    }
                });
                var c = (n.keys || Object.keys(t.springs)).map(function(e) {
                        return t.springs[e].start(n)
                    }),
                    l = t._state;
                return u ? c.push(B(++t._lastAsyncId, {
                    props: n,
                    state: l,
                    actions: {
                        pause: a.noop,
                        resume: a.noop,
                        start: function(e, n) {
                            if (e.onRest = s, e.cancel) {
                                var r, i;
                                if (r = e, i = "cancel", !a.is.und(R(r, i))) $(l, e.callId)
                            } else n(G(u, e, l, t))
                        }
                    }
                })) : !n.keys && !0 === n.cancel && $(l, t._lastAsyncId), Promise.all(c).then(function(a) {
                    var s = U(t, a);
                    if (o && s.finished && !(r && s.noop)) {
                        var u = eo(n, o, i);
                        if (u) return e_(t, [u]), e(t, u, !0)
                    }
                    return s
                })
            }(e, t)
        })).then(function(t) {
            return U(e, t)
        })
    }

    function ep(e, t) {
        var n = o({}, e.springs);
        return t && a.each(a.toArray(t), function(e) {
            a.is.und(e.keys) && (e = es(e)), !a.is.obj(e.to) && (e = o(o({}, e), {}, {
                to: void 0
            })), eg(n, e, function(e) {
                return em(e)
            })
        }), n
    }

    function eh(e, t) {
        a.each(t, function(t, n) {
            !e.springs[n] && (e.springs[n] = t, t.addChild(e))
        })
    }

    function em(e, t) {
        var n = new en;
        return n.key = e, t && n.addChild(t), n
    }

    function eg(e, t, n) {
        t.keys && a.each(t.keys, function(r) {
            (e[r] || (e[r] = n(r)))._prepareNode(t)
        })
    }

    function e_(e, t) {
        a.each(t, function(t) {
            eg(e.springs, t, function(t) {
                return em(t, e)
            })
        })
    }
    var eb = s.createContext({}),
        ev = function(e) {
            var t = e.children,
                n = _(e, ["children"]),
                r = s.useContext(eb);
            n = O(function() {
                return o(o({}, r), n)
            }, [r, n.pause, n.cancel, n.immediate, n.config]);
            var i = eb.Provider;
            return s.createElement(i, {
                value: n
            }, t)
        };
    ev.Provider = eb.Provider, ev.Consumer = eb.Consumer;
    var ey = function() {
            return s.useContext(eb)
        },
        eE = {
            create: function(e) {
                return {
                    get controllers() {
                        return e()
                    },
                    update: function(t) {
                        return a.each(e(), function(e, n) {
                            e.update(k(t, n, e))
                        }), this
                    },
                    start: function(t) {
                        return c(u.mark(function n() {
                            var r;
                            return u.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, Promise.all(e().map(function(e, n) {
                                            var r = k(t, n, e);
                                            return e.start(r)
                                        }));
                                    case 2:
                                        return r = n.sent, n.abrupt("return", {
                                            value: r.map(function(e) {
                                                return e.value
                                            }),
                                            finished: r.every(function(e) {
                                                return e.finished
                                            })
                                        });
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }, n)
                        }))()
                    },
                    stop: function(t) {
                        return a.each(e(), function(e) {
                            return e.stop(t)
                        })
                    },
                    pause: function(t) {
                        return a.each(e(), function(e) {
                            return e.pause(t)
                        })
                    },
                    resume: function(t) {
                        return a.each(e(), function(e) {
                            return e.resume(t)
                        })
                    }
                }
            }
        };

    function eS(e, t, n) {
        var r = a.is.fun(t) && t;
        r && !n && (n = []);
        var u = s.useRef(0),
            c = a.useForceUpdate(),
            l = s.useState(function() {
                return {
                    ctrls: [],
                    queue: [],
                    flush: function(e, t) {
                        var n = ep(e, t);
                        return !(u.current > 0) || l.queue.length || Object.keys(n).some(function(t) {
                            return !e.springs[t]
                        }) ? new Promise(function(r) {
                            eh(e, n), l.queue.push(function() {
                                r(ef(e, t))
                            }), c()
                        }) : ef(e, t)
                    }
                }
            })[0],
            d = s.useRef(),
            f = [].concat(l.ctrls),
            p = [],
            h = a.usePrev(e) || 0,
            m = f.slice(e, h);

        function g(e, n) {
            for (var i = e; i < n; i++) {
                var o = f[i] || (f[i] = new ed(null, l.flush)),
                    s = r ? r(i, o) : t[i];
                s && (s = p[i] = function(e) {
                    var t = es(e);
                    return a.is.und(t.default) && (t.default = N(t, [!0 === t.immediate && "immediate"])), t
                }(s), 0 == i && (d.current = s.ref, s.ref = void 0))
            }
        }
        O(function() {
            f.length = e, g(h, e)
        }, [e]), O(function() {
            g(0, Math.min(h, e))
        }, n);
        var _ = s.useMemo(function() {
                return eE.create(function() {
                    return l.ctrls
                })
            }, []),
            b = f.map(function(e, t) {
                return ep(e, p[t])
            }),
            v = ey();
        i.useLayoutEffect(function() {
            u.current++, l.ctrls = f, d.current && (d.current.current = _);
            var e = l.queue;
            e.length && (l.queue = [], a.each(e, function(e) {
                return e()
            })), a.each(m, function(e) {
                return e.dispose()
            }), a.each(f, function(e, t) {
                eh(e, b[t]), e.start({
                    default: v
                });
                var n = p[t];
                n && (d.current ? e.queue.push(n) : e.start(n))
            })
        }), a.useOnce(function() {
            return function() {
                a.each(l.ctrls, function(e) {
                    return e.dispose()
                })
            }
        });
        var y = b.map(function(e) {
            return o({}, e)
        });
        return r || 3 == arguments.length ? [y, _.start, _.stop] : y
    }

    function ex(e, t) {
        var n = a.is.fun(e),
            r = eS(1, n ? e : [e], n ? t || [] : t),
            i = r[0][0],
            o = r[1],
            s = r[2];
        return n || 2 == arguments.length ? [i, o, s] : i
    }

    function ew(e, t, n) {
        var r = a.is.fun(t) && t;
        r && !n && (n = []);
        var o = [],
            s = eS(e, function(e, n) {
                return o[e] = n, k(t, e, n)
            }, n || [{}]);
        if (i.useLayoutEffect(function() {
                for (var e = a.is.obj(t) && t.reverse, n = 0; n < o.length; n++) {
                    var r = o[n + (e ? 1 : -1)];
                    r && o[n].update({
                        to: r.springs
                    }).start()
                }
            }, n), r || 3 == arguments.length) {
            var u = s[1];
            return s[1] = h.useCallbackOne(function(e) {
                var t = a.is.obj(e) && e.reverse;
                return u(function(n, r) {
                    var i = k(e, n, r),
                        a = o[n + (t ? 1 : -1)];
                    return a && (i.to = a.springs), i
                })
            }, n), s
        }
        return s[0]
    }
    var eT = "mount",
        eC = "enter",
        eD = "update",
        eO = "leave";

    function eM(e, t, n) {
        var r = t.ref,
            u = t.reset,
            c = t.sort,
            l = t.trail,
            d = void 0 === l ? 0 : l,
            f = t.expires,
            p = void 0 === f || f,
            h = a.toArray(e),
            m = [],
            g = function(e, t) {
                var n = t.key,
                    r = t.keys,
                    i = void 0 === r ? n : r;
                return a.is.und(i) ? e : a.is.fun(i) ? e.map(i) : a.toArray(i)
            }(h, t),
            _ = s.useRef(null),
            b = u ? null : _.current;
        i.useLayoutEffect(function() {
            _.current = m
        }), a.useOnce(function() {
            return function() {
                return a.each(_.current, function(e) {
                    e.expired && clearTimeout(e.expirationId), e.ctrl.dispose()
                })
            }
        });
        var v = [];
        if (b && a.each(b, function(e, t) {
                e.expired ? clearTimeout(e.expirationId) : ~(t = v[t] = g.indexOf(e.key)) && (m[t] = e)
            }), a.each(h, function(e, t) {
                m[t] || (m[t] = {
                    key: g[t],
                    item: e,
                    phase: eT,
                    ctrl: new ed
                })
            }), v.length) {
            var y = -1;
            a.each(v, function(e, n) {
                var r = b[n];
                ~e ? (y = m.indexOf(r), m[y] = o(o({}, r), {}, {
                    item: h[e]
                })) : t.leave && m.splice(++y, 0, r)
            })
        }
        a.is.fun(c) && m.sort(function(e, t) {
            return c(e.item, t.item)
        });
        var E = -d,
            S = a.useForceUpdate(),
            x = N(t),
            w = new Map;
        a.each(m, function(e, n) {
            var r, i, s = e.key,
                u = e.phase;
            if (u == eT) r = t.enter, i = eC;
            else {
                var c = 0 > g.indexOf(s);
                if (u != eO) {
                    if (c) r = t.leave, i = eO;
                    else {
                        if (!(r = t.update)) return;
                        i = eD
                    }
                } else {
                    if (c) return;
                    r = t.enter, i = eC
                }
            }
            if (r = M(r, e.item, n), !(r = a.is.obj(r) ? P(r) : {
                    to: r
                }).config) {
                var l = t.config || x.config;
                r.config = M(l, e.item, n)
            }
            var f = o(o({}, x), {}, {
                delay: E += d,
                reset: !1
            }, r);
            if (i == eC && a.is.und(f.from)) {
                var h = a.is.und(t.initial) || b ? t.from : t.initial;
                f.from = M(h, e.item, n)
            }
            var m = f.onRest;
            f.onRest = f.onNoopRest = function(e) {
                var t = _.current,
                    n = t.find(function(e) {
                        return e.key === s
                    });
                if (n) {
                    if (a.is.fun(m) && !0 !== e.noop && m(e, n), e.cancelled && n.phase != eD) {
                        n.phase = u;
                        return
                    }
                    if (n.ctrl.idle) {
                        var r = t.every(function(e) {
                            return e.ctrl.idle
                        });
                        if (n.phase == eO) {
                            var i = M(p, n.item);
                            if (!1 !== i) {
                                var o = !0 === i ? 0 : i;
                                if (n.expired = !0, !r && o > 0) {
                                    o <= 2147483647 && (n.expirationId = setTimeout(S, o));
                                    return
                                }
                            }
                        }
                        r && t.some(function(e) {
                            return e.expired
                        }) && S()
                    }
                }
            };
            var v = ep(e.ctrl, f);
            w.set(e, {
                phase: i,
                springs: v,
                payload: f
            })
        });
        var T = ey();
        i.useLayoutEffect(function() {
            a.each(m, function(e) {
                e.ctrl.start({
                    default: T
                })
            })
        }, [T]);
        var C = s.useMemo(function() {
            return eE.create(function() {
                return _.current.map(function(e) {
                    return e.ctrl
                })
            })
        }, []);
        s.useImperativeHandle(r, function() {
            return C
        }), i.useLayoutEffect(function() {
            a.each(w, function(e, t) {
                var n = e.phase,
                    i = e.springs,
                    a = e.payload;
                eh(t.ctrl, i), !T.cancel && (t.phase = n, n == eC && t.ctrl.start({
                    default: T
                }), t.ctrl[r ? "update" : "start"](a))
            })
        }, u ? void 0 : n);
        var D = function(e) {
            return s.createElement(s.Fragment, null, m.map(function(t, n) {
                var r = e(o({}, (w.get(t) || t.ctrl).springs), t.item, t, n);
                return r && r.type ? s.createElement(r.type, o({}, r.props, {
                    key: a.is.str(t.key) || a.is.num(t.key) ? t.key : t.ctrl.id,
                    ref: r.ref
                })) : r
            }))
        };
        return 3 == arguments.length ? [D, C.start, C.stop] : D
    }
    var eA = function(e) {
        function t(t, n) {
            (r = e.call(this) || this).source = t, r.key = void 0, r.idle = !0, r.calc = void 0, r.calc = a.createInterpolator.apply(void 0, n);
            var r, i = r._get(),
                o = a.is.arr(i) ? f.AnimatedArray : f.AnimatedValue;
            return f.setAnimated(b(r), o.create(i)), r
        }
        d(t, e);
        var n = t.prototype;
        return n.advance = function(e) {
            var t = this._get(),
                n = this.get();
            !a.isEqual(t, n) && (f.getAnimated(this).setValue(t), this._onChange(t, this.idle))
        }, n._get = function() {
            var e = a.is.arr(this.source) ? this.source.map(function(e) {
                return e.get()
            }) : a.toArray(this.source.get());
            return this.calc.apply(this, e)
        }, n._reset = function() {
            a.each(f.getPayload(this), function(e) {
                return e.reset()
            }), e.prototype._reset.call(this)
        }, n._start = function() {
            this.idle = !1, e.prototype._start.call(this), p.skipAnimation ? (this.idle = !0, this.advance()) : p.frameLoop.start(this)
        }, n._attach = function() {
            var e = this,
                t = !0,
                n = 1;
            a.each(a.toArray(this.source), function(r) {
                K(r) && (!r.idle && (t = !1), n = Math.max(n, r.priority + 1)), r.addChild(e)
            }), this.priority = n, !t && (this._reset(), this._start())
        }, n._detach = function() {
            var e = this;
            a.each(a.toArray(this.source), function(t) {
                t.removeChild(e)
            }), this.idle = !0
        }, n.onParentChange = function(t) {
            "start" == t.type ? this.advance() : "change" == t.type ? this.idle ? this.advance() : t.idle && (this.idle = a.toArray(this.source).every(function(e) {
                return !1 !== e.idle
            }), this.idle && (this.advance(), a.each(f.getPayload(this), function(e) {
                e.done = !0
            }))) : "priority" == t.type && (this.priority = a.toArray(this.source).reduce(function(e, t) {
                return Math.max(e, (t.priority || 0) + 1)
            }, 0)), e.prototype.onParentChange.call(this, t)
        }, t
    }(Q);
    a.Globals.assign({
        createStringInterpolator: v.createStringInterpolator,
        to: function(e, t) {
            return new eA(e, t)
        }
    });
    Object.keys(y).forEach(function(e) {
        "default" !== e && Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
                return y[e]
            }
        })
    }), Object.defineProperty(t, "FrameLoop", {
        enumerable: !0,
        get: function() {
            return a.FrameLoop
        }
    }), Object.defineProperty(t, "Globals", {
        enumerable: !0,
        get: function() {
            return a.Globals
        }
    }), Object.defineProperty(t, "createInterpolator", {
        enumerable: !0,
        get: function() {
            return a.createInterpolator
        }
    }), t.BailSignal = W, t.Controller = ed, t.FrameValue = Q, t.Interpolation = eA, t.Spring = function(e) {
        return (0, e.children)(ex(_(e, ["children"])))
    }, t.SpringContext = ev, t.SpringHandle = eE, t.SpringValue = en, t.Trail = function(e) {
        var t = e.items,
            n = e.children,
            r = _(e, ["items", "children"]),
            i = ew(t.length, r);
        return t.map(function(e, t) {
            var r = n(e, t);
            return a.is.fun(r) ? r(i[t]) : r
        })
    }, t.Transition = function(e) {
        var t = e.items,
            n = e.children,
            r = _(e, ["items", "children"]);
        return s.createElement(s.Fragment, null, eM(t, r)(n))
    }, t.config = E, t.inferTo = P, t.interpolate = function(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return g.deprecateInterpolate(), new eA(e, n)
    }, t.to = function(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return new eA(e, n)
    }, t.update = function() {
        return a.Globals.frameLoop.advance()
    }, t.useChain = function(e, t, n) {
        void 0 === n && (n = 1e3), i.useLayoutEffect(function() {
            if (t) {
                var r = 0;
                a.each(e, function(e, i) {
                    if (e.current) {
                        var o = e.current.controllers;
                        if (o.length) {
                            var s = n * t[i];
                            isNaN(s) ? s = r : r = s, a.each(o, function(e) {
                                a.each(e.queue, function(e) {
                                    e.delay = s + (e.delay || 0)
                                }), e.start()
                            })
                        }
                    }
                })
            } else {
                var i = Promise.resolve();
                a.each(e, function(e) {
                    var t = e.current || {},
                        n = t.controllers,
                        r = t.start;
                    if (n && n.length) {
                        var o = n.map(function(e) {
                            var t = e.queue;
                            return e.queue = [], t
                        });
                        i = i.then(function() {
                            return a.each(n, function(e, t) {
                                var n;
                                return (n = e.queue).push.apply(n, o[t])
                            }), r()
                        })
                    }
                })
            }
        })
    }, t.useSpring = ex, t.useSprings = eS, t.useTrail = ew, t.useTransition = eM
}