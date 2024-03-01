function(t, e, n) {
    "use strict";

    function r(t) {
        return t && "object" == typeof t && "default" in t ? t.default : t
    }
    n("70102"), n("222007"), Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n("103689"),
        o = r(n("356754")),
        a = r(n("707556")),
        u = r(n("630836")),
        s = n("397968"),
        c = n("884691"),
        l = n("437735"),
        f = Symbol.for("Animated:node"),
        h = function(t) {
            return !!t && t[f] === t
        },
        p = function(t, e) {
            return i.defineHidden(t, f, e)
        },
        d = function(t) {
            return t && t[f] && t[f].getPayload()
        },
        v = function() {
            function t() {
                this.payload = void 0, p(this, this)
            }
            return t.prototype.getPayload = function() {
                return this.payload || []
            }, t
        }(),
        y = function(t) {
            function e(e) {
                var n;
                return (n = t.call(this) || this)._value = e, n.done = !0, n.elapsedTime = void 0, n.lastPosition = void 0, n.lastVelocity = void 0, n.v0 = void 0, i.is.num(n._value) && (n.lastPosition = n._value), n
            }
            o(e, t), e.create = function(t, n) {
                return new e(t)
            };
            var n = e.prototype;
            return n.getPayload = function() {
                return [this]
            }, n.getValue = function() {
                return this._value
            }, n.setValue = function(t, e) {
                return i.is.num(t) && (this.lastPosition = t, e && (t = Math.round(t / e) * e, this.done && (this.lastPosition = t))), this._value !== t && (this._value = t, !0)
            }, n.reset = function() {
                var t = this.done;
                this.done = !1, i.is.num(this._value) && (this.elapsedTime = 0, this.lastPosition = this._value, t && (this.lastVelocity = null), this.v0 = null)
            }, e
        }(v),
        m = function(t) {
            function e(e, n) {
                var r;
                return (r = t.call(this, 0) || this)._value = void 0, r._string = null, r._toString = void 0, r._toString = i.createInterpolator({
                    output: [e, n]
                }), r
            }
            o(e, t), e.create = function(t, n) {
                if (void 0 === n && (n = t), i.is.str(t) && i.is.str(n)) return new e(t, n);
                throw TypeError('Expected "from" and "to" to be strings')
            };
            var n = e.prototype;
            return n.getValue = function() {
                var t = this._string;
                return null == t ? this._string = this._toString(this._value) : t
            }, n.setValue = function(e) {
                if (i.is.num(e)) {
                    if (!t.prototype.setValue.call(this, e)) return !1;
                    else this._string = null
                } else this._string = e, this._value = 1;
                return !0
            }, n.reset = function(e) {
                e && (this._toString = i.createInterpolator({
                    output: [this.getValue(), e]
                })), this._value = 0, t.prototype.reset.call(this)
            }, e
        }(y),
        g = {
            current: null
        },
        b = function(t) {
            function e(e) {
                var n;
                return void 0 === e && (e = null), (n = t.call(this) || this).source = void 0, n.setValue(e), n
            }
            o(e, t);
            var n = e.prototype;
            return n.getValue = function(t) {
                if (!this.source) return null;
                var e = {};
                return i.each(this.source, function(n, r) {
                    if (h(n)) e[r] = n.getValue(t);
                    else {
                        var o = i.getFluidConfig(n);
                        o ? e[r] = o.get() : !t && (e[r] = n)
                    }
                }), e
            }, n.setValue = function(t) {
                this.source = t, this.payload = this._makePayload(t)
            }, n.reset = function() {
                this.payload && i.each(this.payload, function(t) {
                    return t.reset()
                })
            }, n._makePayload = function(t) {
                if (t) {
                    var e = new Set;
                    return i.each(t, this._addToPayload, e), Array.from(e)
                }
            }, n._addToPayload = function(t) {
                var e = this;
                i.getFluidConfig(t) && g.current && g.current.dependencies.add(t);
                var n = d(t);
                n && i.each(n, function(t) {
                    return e.add(t)
                })
            }, e
        }(v),
        _ = function(t) {
            function e(e, n) {
                var r;
                return (r = t.call(this, null) || this).source = void 0, t.prototype.setValue.call(a(r), r._makeAnimated(e, n)), r
            }
            o(e, t), e.create = function(t, n) {
                return new e(t, n)
            };
            var n = e.prototype;
            return n.getValue = function() {
                return this.source.map(function(t) {
                    return t.getValue()
                })
            }, n.setValue = function(t) {
                var e = this.getPayload();
                t && t.length == e.length ? i.each(e, function(e, n) {
                    return e.setValue(t[n])
                }) : (this.source = this._makeAnimated(t), this.payload = this._makePayload(this.source))
            }, n._makeAnimated = function(t, e) {
                return void 0 === e && (e = t), t ? t.map(function(t, n) {
                    return (i.isAnimatedString(t) ? m : y).create(t, e[n])
                }) : []
            }, e
        }(b),
        x = function(t) {
            function e(e) {
                var n;
                return (n = t.call(this, null) || this).update = e, n.dirty = !1, n
            }
            o(e, t);
            var n = e.prototype;
            return n.setValue = function(e, n) {
                if (e) {
                    if (n && (g.current = n, e.style)) {
                        var r = n.host.createAnimatedStyle;
                        e = u(u({}, e), {}, {
                            style: r(e.style)
                        })
                    }
                    t.prototype.setValue.call(this, e), g.current = null
                }
            }, n.onParentChange = function(t) {
                var e = this,
                    n = t.type;
                !this.dirty && "change" === n && (this.dirty = !0, s.frameLoop.onFrame(function() {
                    e.dirty = !1, e.update()
                }))
            }, e
        }(b),
        w = function(t, e) {
            return c.forwardRef(function(n, r) {
                var o = c.useRef(null),
                    a = !i.is.fun(t) || t.prototype && t.prototype.isReactComponent,
                    s = i.useForceUpdate(),
                    f = new x(function() {
                        var t = o.current;
                        (!a || t) && !1 === (!!t && e.applyAnimatedValues(t, f.getValue(!0))) && s()
                    }),
                    h = new Set;
                return f.setValue(n, {
                    dependencies: h,
                    host: e
                }), l.useLayoutEffect(function() {
                    return i.each(h, function(t) {
                            return t.addChild(f)
                        }),
                        function() {
                            return i.each(h, function(t) {
                                return t.removeChild(f)
                            })
                        }
                }), c.createElement(t, u({}, e.getComponentProps(f.getValue()), {
                    ref: a && function(t) {
                        o.current = function(t, e) {
                            return t && (i.is.fun(t) ? t(e) : t.current = e), e
                        }(r, t)
                    }
                }))
            })
        },
        O = Symbol.for("AnimatedComponent"),
        k = function(t) {
            return i.is.str(t) ? t : t && i.is.str(t.displayName) ? t.displayName : i.is.fun(t) && t.name || null
        };
    e.Animated = v, e.AnimatedArray = _, e.AnimatedObject = b, e.AnimatedProps = x, e.AnimatedString = m, e.AnimatedValue = y, e.createHost = function(t, e) {
        var n = void 0 === e ? {} : e,
            r = n.applyAnimatedValues,
            o = n.createAnimatedStyle,
            a = void 0 === o ? function(t) {
                return new b(t)
            } : o,
            u = n.getComponentProps,
            s = {
                applyAnimatedValues: void 0 === r ? function() {
                    return !1
                } : r,
                createAnimatedStyle: a,
                getComponentProps: void 0 === u ? function(t) {
                    return t
                } : u
            },
            c = function(t) {
                var e = k(t) || "Anonymous";
                return (t = i.is.str(t) ? w(t, s) : t[O] || (t[O] = w(t, s))).displayName = "Animated(" + e + ")", t
            };
        return i.each(t, function(t, e) {
            !i.is.str(e) && (e = k(t)), c[e] = c(t)
        }), {
            animated: c
        }
    }, e.getAnimated = function(t) {
        return t && t[f]
    }, e.getPayload = d, e.isAnimated = h, e.setAnimated = p
}