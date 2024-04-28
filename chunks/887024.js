function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ConfettiCanvas: function() {
            return D
        },
        Environment: function() {
            return d
        },
        SpriteCanvas: function() {
            return O
        },
        useConfettiCannon: function() {
            return M
        }
    });
    var r = n("470079"),
        i = n("153832"),
        a = n("120356"),
        o = n.n(a);

    function s(e, t) {
        var n = e.x,
            r = e.y;
        return n > t.x && n < t.x + t.width && r > t.y && r < t.y + t.height
    }

    function u(e, t) {
        return e * t * t * (t > 0 ? -1 : 1)
    }
    var c = function() {
            function e(e) {
                this.id = e.id, this.position = e.position, this.velocity = e.velocity, this.rotation = e.rotation, this.dragCoefficient = e.dragCoefficient, this.size = e.size, this.opacity = e.opacity, this.spriteX = e.spriteX, this.spriteY = e.spriteY, this.spriteWidth = e.spriteWidth, this.spriteHeight = e.spriteHeight, this._lastUpdatedAt = Date.now()
            }
            return e.prototype.getNewForces = function(e, t) {
                var n, r, i, a, o = e.wind * t,
                    s = -e.gravity * t;
                return {
                    x: o + (n = this.dragCoefficient.x, n * (r = this.velocity.x) * r * (r > 0 ? -1 : 1)),
                    y: s + (i = this.dragCoefficient.y, i * (a = this.velocity.y) * a * (a > 0 ? -1 : 1))
                }
            }, e.prototype.update = function(e) {
                var t = Date.now(),
                    n = (t - this._lastUpdatedAt) / 100;
                this.rotation.update(n), this.dragCoefficient.update(n);
                var r = this.getNewForces(e, n),
                    i = r.x,
                    a = r.y;
                this.velocity.update(n), this.velocity.x += i, this.velocity.y += a, this.position.update(n), this.position.x += this.velocity.x * n, this.position.y += this.velocity.y * n, this.size.update(n), this.opacity.update(n), this._lastUpdatedAt = t
            }, e.prototype.previewPositionUpdate = function(e, t) {
                var n = t / 100,
                    r = this.velocity.previewUpdate(n),
                    i = this.getNewForces(e, n),
                    a = i.x,
                    o = i.y;
                r.x += a, r.y += o;
                var s = this.position.previewUpdate(n);
                return s.x += r.x * n, s.y += r.y * n, s
            }, e.prototype.draw = function(e, t) {
                t.save(), t.globalAlpha = this.opacity.value, t.setTransform((new DOMMatrix).translateSelf(this.position.x * n.g.devicePixelRatio, this.position.y * n.g.devicePixelRatio).rotateSelf(this.rotation.x, this.rotation.y, this.rotation.z)), t.drawImage(e, this.spriteX, this.spriteY, this.spriteWidth, this.spriteHeight, -this.width / 2 * n.g.devicePixelRatio, -this.height / 2 * n.g.devicePixelRatio, this.width * n.g.devicePixelRatio, this.height * n.g.devicePixelRatio), t.restore()
            }, e.prototype.shouldDestroy = function(e, t) {
                return this.opacity.value < 0 || t.gravity >= 0 && this.velocity.y < 0 && this.position.y + this.height < 0 || t.gravity <= 0 && this.velocity.y > 0 && this.position.y - this.height > e.height || t.wind >= 0 && this.velocity.x > 0 && this.position.x - this.width > e.width || t.wind <= 0 && this.velocity.x < 0 && this.position.x + this.width < 0
            }, Object.defineProperty(e.prototype, "width", {
                get: function() {
                    return this.size.x
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "height", {
                get: function() {
                    return this.size.y
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.addForce = function(e) {
                this.velocity.x += e.x, this.velocity.y += e.y
            }, e
        }(),
        l = {
            velocity: {
                type: "static",
                value: 0
            },
            rotation: {
                type: "static",
                value: 0
            },
            dragCoefficient: {
                type: "static",
                value: .001
            },
            opacity: {
                type: "static",
                value: 1
            }
        },
        d = function(e) {
            var t = void 0 === e ? {} : e,
                n = t.gravity,
                r = t.wind;
            this.gravity = -9.8, this.wind = 0, this.gravity = null != n ? n : this.gravity, this.wind = null != r ? r : this.wind
        },
        f = function(e, t) {
            return (f = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            })(e, t)
        };

    function p(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function n() {
            this.constructor = e
        }
        f(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }
    var h = function() {
            return (h = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }).apply(this, arguments)
        },
        m = function(e) {
            this.value = e
        },
        g = function() {
            function e(e, t) {
                this._x = e, this._y = t
            }
            return e.prototype.update = function(e) {
                this._x.update(e), this._y.update(e)
            }, e.prototype.previewUpdate = function(e) {
                return {
                    x: this._x.previewUpdate(e),
                    y: this._y.previewUpdate(e)
                }
            }, Object.defineProperty(e.prototype, "x", {
                get: function() {
                    return this._x.value
                },
                set: function(e) {
                    this._x.value = e
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "y", {
                get: function() {
                    return this._y.value
                },
                set: function(e) {
                    this._y.value = e
                },
                enumerable: !1,
                configurable: !0
            }), e
        }(),
        _ = function(e) {
            function t(t, n, r) {
                var i = e.call(this, t, n) || this;
                return i._z = r, i
            }
            return p(t, e), t.prototype.update = function(t) {
                e.prototype.update.call(this, t), this._z.update(t)
            }, t.prototype.previewUpdate = function(t) {
                var n = e.prototype.previewUpdate.call(this, t);
                return h(h({}, n), {
                    z: this._z.previewUpdate(t)
                })
            }, Object.defineProperty(t.prototype, "z", {
                get: function() {
                    return this._z.value
                },
                set: function(e) {
                    this._z.value = e
                },
                enumerable: !1,
                configurable: !0
            }), t
        }(g),
        b = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return p(t, e), t.prototype.update = function() {}, t.prototype.previewUpdate = function() {
                return this.value
            }, t
        }(m),
        v = function(e) {
            function t(t, n) {
                var r = e.call(this, t) || this;
                return r.addValue = n, r
            }
            return p(t, e), t.prototype.update = function(e) {
                this.value = this.previewUpdate(e)
            }, t.prototype.previewUpdate = function(e) {
                return this.value + this.addValue * e
            }, t
        }(m),
        y = function(e) {
            function t(t, n, r, i, a, o) {
                var s = e.call(this, t) || this;
                s.min = n, s.max = r, s.duration = i;
                var u = s.value / (s.max - s.min) * s.duration,
                    c = isNaN(u) ? 0 : u;
                return s.timePassed = c < 0 ? s.duration - c : c, s.directionMultiplier = a, s.easingFunction = o, s
            }
            return p(t, e), t.prototype.update = function(e) {
                var t = this.doUpdate(e),
                    n = t[0],
                    r = t[1],
                    i = t[2];
                this.value = n, this.directionMultiplier = i, this.timePassed = r
            }, t.prototype.previewUpdate = function(e) {
                return this.doUpdate(e)[0]
            }, t.prototype.doUpdate = function(e) {
                var t = this.max - this.min,
                    n = this.timePassed + e * this.directionMultiplier,
                    r = Math.min(Math.max(n, 0), this.duration),
                    i = n < 0 || n > this.duration ? -1 * this.directionMultiplier : this.directionMultiplier,
                    a = this.easingFunction(r, this.min, t, this.duration);
                return [isNaN(a) ? 0 : a, r, i]
            }, t
        }(m);

    function E(e, t) {
        return e === t ? e : Math.random() * (t - e + 1) + e
    }

    function S(e) {
        var t = Math.floor(E(0, e.length - 1));
        return [e[t], t]
    }

    function x(e, t) {
        return S([e, t])[0]
    }

    function w(e) {
        return "number" == typeof e ? {
            x: e,
            y: e
        } : e
    }

    function T(e) {
        return "number" == typeof e ? {
            x: e,
            y: e,
            z: e
        } : e
    }

    function C(e) {
        return function(e) {
            switch (e.type) {
                case "static":
                    var t = w(e.value);
                    return new g(new b(t.x), new b(t.y));
                case "static-random":
                    var n = w(e.minValue),
                        r = w(e.maxValue);
                    return new g(new b(E(n.x, r.x)), new b(E(n.y, r.y)));
                case "linear":
                    t = w(e.value);
                    var i = w(e.addValue);
                    return new g(new v(t.x, i.x), new v(t.y, i.y));
                case "linear-random":
                    n = w(e.minValue), r = w(e.maxValue);
                    var a = w(e.minAddValue),
                        o = w(e.maxAddValue);
                    return new g(new v(E(n.x, r.x), E(a.x, o.x)), new v(E(n.y, r.y), E(a.x, o.x)));
                case "oscillating":
                    t = w(e.value);
                    var s = w(e.start),
                        u = w(e.final),
                        c = w(e.duration),
                        l = w(e.direction);
                    return new g(new y(t.x, s.x, u.x, c.x, l.x, e.easingFunction), new y(t.y, s.y, u.y, c.x, l.y, e.easingFunction));
                case "oscillating-random":
                    n = w(e.minValue), r = w(e.maxValue);
                    var d = w(e.minStart),
                        f = w(e.maxStart),
                        p = w(e.minFinal),
                        h = w(e.maxFinal),
                        m = w(e.minDuration),
                        _ = w(e.maxDuration),
                        T = w(e.minDirection),
                        C = w(e.maxDirection);
                    return new g(new y(E(n.x, r.x), E(d.x, f.x), E(p.x, h.x), E(m.x, _.x), x(T.x, C.x), S(e.easingFunctions)[0]), new y(E(n.y, r.y), E(d.y, f.y), E(p.y, h.y), E(m.y, _.y), x(T.y, C.y), S(e.easingFunctions)[0]))
            }
        }(h(h({}, e), {
            valueType: "Vector2"
        }))
    }
    var D = r.forwardRef(function(e, t) {
        var a = e.className,
            o = e.environment,
            u = e.onClick,
            d = e.onMouseDown,
            f = e.onMouseMove,
            p = e.onMouseUp,
            m = e.onBeforeRender,
            g = e.onAfterRender,
            w = function(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) 0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                }
                return n
            }(e, ["className", "environment", "onClick", "onMouseDown", "onMouseMove", "onMouseUp", "onBeforeRender", "onAfterRender"]),
            D = r.useRef(null),
            O = r.useRef(new Map),
            M = r.useRef(null),
            A = r.useRef(0),
            k = r.useRef(0),
            R = r.useCallback(function() {
                var e = D.current;
                if (null != e) {
                    var t = e.getContext("2d");
                    if (null != t) {
                        t.clearRect(0, 0, e.width, e.height), null == m || m(t), O.current.forEach(function(n, r) {
                            var i = n.confetti,
                                a = n.spriteCanvas;
                            i.update(o), i.draw(a, t), i.shouldDestroy(e, o) && O.current.delete(r)
                        }), null == g || g(t), O.current.size > 0 ? M.current = window.requestAnimationFrame(R) : (t.clearRect(0, 0, e.width, e.height), M.current = null);
                        var n = Date.now();
                        0 !== A.current && (k.current = 1e3 / (n - A.current)), A.current = n
                    }
                }
            }, [o, g, m]);
        r.useEffect(function() {
            null != M.current && (window.cancelAnimationFrame(M.current), M.current = window.requestAnimationFrame(R))
        }, [R]);
        var N = r.useCallback(function(e, t) {
                O.current.set(e.id, {
                    confetti: e,
                    spriteCanvas: t
                }), null == M.current && R()
            }, [R]),
            I = r.useCallback(function(e, t, n, r, a) {
                var o, s, u, d, f, p, m, g, w, D, O, M, A, k, R, I = (o = null !== (R = e.id) && void 0 !== R ? R : (0, i.v4)(), s = e, u = n, d = r, f = a, g = C((m = (p = s, h(h({
                    id: o
                }, l), p))).size), D = (w = function(e, t) {
                    if (null != e) {
                        var n = t.sprites.findIndex(function(t) {
                            return "string" == typeof e ? t.src === e && t.colorize : t.src === e.src && t.colorize === e.colorize
                        });
                        if (-1 !== n) return [e, n]
                    }
                    return S(t.sprites)
                }(d, u))[0], O = w[1], M = function(e, t, n) {
                    if (!("string" == typeof(r = e) || r.colorize)) return 0;
                    var r, i = null != t ? n.colors.findIndex(function(e) {
                        return e === t
                    }) : -1;
                    return -1 !== i ? i : Math.floor(E(0, n.colors.length - 1))
                }(null != d ? d : D, f, u), new c({
                    id: o,
                    position: C(m.position),
                    velocity: C(m.velocity),
                    rotation: (A = m.rotation, function(e) {
                        switch (e.type) {
                            case "static":
                                var t = T(e.value);
                                return new _(new b(t.x), new b(t.y), new b(t.z));
                            case "static-random":
                                var n = T(e.minValue),
                                    r = T(e.maxValue);
                                return new _(new b(E(n.x, r.x)), new b(E(n.y, r.y)), new b(E(n.z, r.z)));
                            case "linear":
                                t = T(e.value);
                                var i = T(e.addValue);
                                return new _(new v(t.x, i.x), new v(t.y, i.y), new v(t.z, i.z));
                            case "linear-random":
                                n = T(e.minValue), r = T(e.maxValue);
                                var a = T(e.minAddValue),
                                    o = T(e.maxAddValue);
                                return new _(new v(E(n.x, r.x), E(a.x, o.x)), new v(E(n.y, r.y), E(a.y, o.y)), new v(E(n.z, r.z), E(a.z, o.z)));
                            case "oscillating":
                                t = T(e.value);
                                var s = T(e.start),
                                    u = T(e.final),
                                    c = T(e.duration),
                                    l = T(e.direction);
                                return new _(new y(t.x, s.x, u.x, c.x, l.x, e.easingFunction), new y(t.y, s.y, u.y, c.z, l.y, e.easingFunction), new y(t.z, s.z, u.z, c.z, l.z, e.easingFunction));
                            case "oscillating-random":
                                n = T(e.minValue), r = T(e.maxValue);
                                var d = T(e.minStart),
                                    f = T(e.maxStart),
                                    p = T(e.minFinal),
                                    h = T(e.maxFinal),
                                    m = T(e.minDuration),
                                    g = T(e.maxDuration),
                                    w = T(e.minDirection),
                                    C = T(e.maxDirection);
                                return new _(new y(E(n.x, r.x), E(d.x, f.x), E(p.x, h.x), E(m.x, g.x), x(w.x, C.x), S(e.easingFunctions)[0]), new y(E(n.y, r.y), E(d.y, f.y), E(p.y, h.y), E(m.y, g.y), x(w.y, C.y), S(e.easingFunctions)[0]), new y(E(n.z, r.z), E(d.z, f.z), E(p.z, h.z), E(m.z, g.z), x(w.z, C.z), S(e.easingFunctions)[0]))
                        }
                    }(h(h({}, A), {
                        valueType: "Vector3"
                    }))),
                    dragCoefficient: C(m.dragCoefficient),
                    size: g,
                    opacity: (k = m.opacity, function(e) {
                        switch (e.type) {
                            case "static":
                                return new b(e.value);
                            case "static-random":
                                return new b(E(e.minValue, e.maxValue));
                            case "linear":
                                return new v(e.value, e.addValue);
                            case "linear-random":
                                return new v(E(e.minValue, e.maxValue), E(e.minAddValue, e.maxAddValue));
                            case "oscillating":
                                return new y(e.value, e.start, e.final, e.duration, e.direction, e.easingFunction);
                            case "oscillating-random":
                                return new y(E(e.minValue, e.maxValue), E(e.minStart, e.maxStart), E(e.minFinal, e.maxFinal), E(e.minDuration, e.maxDuration), x(e.minDirection, e.maxDirection), S(e.easingFunctions)[0])
                        }
                    }(h(h({}, k), {
                        valueType: "number"
                    }))),
                    spriteX: M * u.spriteWidth + 2 * M,
                    spriteY: O * u.spriteHeight + 2 * O,
                    spriteWidth: u.spriteWidth,
                    spriteHeight: u.spriteHeight
                }));
                return N(I, t), I
            }, [N]),
            L = r.useCallback(function(e) {
                O.current.delete(e)
            }, []),
            P = r.useCallback(function() {
                return O.current.clear()
            }, []),
            F = r.useCallback(function() {
                return D.current
            }, []);
        r.useImperativeHandle(t, function() {
            return {
                createConfetti: I,
                addConfetti: N,
                deleteConfetti: L,
                clearConfetti: P,
                getCanvas: F
            }
        }, [I, N, L, P, F]);
        var B = r.useCallback(function(e, t) {
                var n, r, i = t.clickHandler,
                    a = t.mouseHandler;
                if (null != i || null != a) {
                    var u = null === (n = D.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                    if (null != u) {
                        var c = function(e, t) {
                            if (null == t) throw Error("element should not be null");
                            var n = t.getBoundingClientRect();
                            return {
                                x: e.clientX - n.left,
                                y: e.clientY - n.top
                            }
                        }(e, D.current);
                        if (s(c, {
                                x: u.left,
                                y: u.top,
                                width: u.width,
                                height: u.height
                            })) {
                            if (null != a) return a(e);
                            if (null != i) {
                                var l = -1e3 / k.current * 2,
                                    d = function(e, t) {
                                        for (var n = 0, r = Array.from(e.values()); n < r.length; n++) {
                                            var i = r[n];
                                            if (null != i && t(i)) return i
                                        }
                                        return null
                                    }(O.current, function(e) {
                                        var t = e.confetti,
                                            n = t.previewPositionUpdate(o, l);
                                        return s(c, {
                                            x: n.x - t.width / 2,
                                            y: n.y - t.height / 2,
                                            width: t.width,
                                            height: t.height
                                        })
                                    });
                                i(e, null !== (r = null == d ? void 0 : d.confetti) && void 0 !== r ? r : null)
                            }
                        }
                    }
                }
            }, [o]),
            U = r.useCallback(function(e) {
                return B(e, {
                    clickHandler: u
                })
            }, [B, u]),
            Y = r.useCallback(function(e) {
                return B(e, {
                    clickHandler: d
                })
            }, [B, d]),
            j = r.useCallback(function(e) {
                return B(e, {
                    mouseHandler: f
                })
            }, [B, f]),
            z = r.useCallback(function(e) {
                return B(e, {
                    mouseHandler: p
                })
            }, [B, p]);
        return r.useEffect(function() {
            var e = function(e, t, n) {
                null != n && window.addEventListener(e, t)
            };
            return e("click", U, u), e("mousedown", Y, d), e("mousemove", j, f), e("mouseup", z, p),
                function() {
                    window.removeEventListener("click", U), window.removeEventListener("mousedown", Y), window.removeEventListener("mousemove", j), window.removeEventListener("mouseup", j)
                }
        }, [U, Y, j, z, u, d, f, p]), r.useEffect(function() {
            var e = D.current,
                t = new ResizeObserver(function() {
                    ! function(e) {
                        if (null != e) {
                            var t = e.getBoundingClientRect(),
                                r = t.width,
                                i = t.height;
                            e.width = r * n.g.devicePixelRatio, e.height = i * n.g.devicePixelRatio
                        }
                    }(D.current)
                });
            return null != e && t.observe(e),
                function() {
                    null != e && t.unobserve(e)
                }
        }, []), r.createElement("canvas", h({}, w, {
            className: a,
            ref: D
        }))
    });
    ! function(e, t) {
        void 0 === t && (t = {});
        var n = t.insertAt;
        if (e && "undefined" != typeof document) {
            var r = document.head || document.getElementsByTagName("head")[0],
                i = document.createElement("style");
            i.type = "text/css", "top" === n && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e))
        }
    }(".SpriteCanvas-module_spriteCanvasHidden__ndzQV {\n  display: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: -100%;\n}\n");
    var O = r.forwardRef(function(e, t) {
        var n, a = e.className,
            s = e.visible,
            u = e.sprites,
            c = e.colors,
            l = e.spriteWidth,
            d = e.spriteHeight,
            f = r.useRef(null),
            p = r.useRef([]),
            h = r.useRef(!1),
            m = r.useRef({});
        r.useImperativeHandle(t, function() {
            return {
                getCanvas: function() {
                    return f.current
                },
                getCreateData: function() {
                    return {
                        sprites: p.current,
                        colors: c,
                        spriteWidth: l,
                        spriteHeight: d
                    }
                },
                addReadyListener: function(e) {
                    var t = (0, i.v4)();
                    return m.current[t] = e, t
                },
                removeReadyListener: function(e) {
                    delete m.current[e]
                },
                isReady: h.current
            }
        }, [c, d, l]);
        var g = r.useCallback(function() {
                var e = f.current,
                    t = null == e ? void 0 : e.getContext("2d", {
                        willReadFrequently: !0
                    });
                null != t && null != e && (t.clearRect(0, 0, e.width, e.height), p.current.forEach(function(e, n) {
                    var r = function(r, i) {
                        var a = l * i + 2 * i,
                            o = d * n + 2 * n;
                        if (t.drawImage(e.image, a, o, l, d), null != r) {
                            for (var s, u, c = t.getImageData(a, o, l, d), f = ("#" === (s = r)[0] && (s = s.slice(1)), {
                                    r: (u = parseInt(s, 16)) >> 16 & 255,
                                    g: u >> 8 & 255,
                                    b: 255 & u
                                }), p = 0; p < c.data.length; p += 4) c.data[p] = f.r, c.data[p + 1] = f.g, c.data[p + 2] = f.b;
                            t.putImageData(c, a, o)
                        }
                    };
                    e.colorize ? c.forEach(function(e, t) {
                        return r(e, t)
                    }) : r(null, 0)
                }))
            }, [c, d, l]),
            _ = r.useCallback(function() {
                var e = u.map(function(e) {
                    var t = new Image,
                        n = "string" == typeof e ? e : e.src,
                        r = "string" == typeof e || e.colorize;
                    t.src = n;
                    var i = new Promise(function(e) {
                        t.onload = e
                    });
                    return {
                        colorize: r,
                        image: t,
                        src: n,
                        loadPromise: i
                    }
                });
                return Promise.all(e.map(function(e) {
                    return e.loadPromise
                })).then(function() {
                    p.current = e.map(function(e) {
                        return {
                            colorize: e.colorize,
                            image: e.image,
                            src: e.src
                        }
                    })
                })
            }, [u]),
            b = r.useCallback(function(e) {
                for (var t in m.current) m.current[t](e)
            }, []),
            v = r.useCallback(function() {
                var e, t, n, r;
                return e = void 0, t = void 0, n = void 0, r = function() {
                    return function(e, t) {
                        var n, r, i, a, o = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return a = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                            return this
                        }), a;

                        function s(s) {
                            return function(u) {
                                return function(s) {
                                    if (n) throw TypeError("Generator is already executing.");
                                    for (; a && (a = 0, s[0] && (o = 0)), o;) try {
                                        if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
                                        switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
                                            case 0:
                                            case 1:
                                                i = s;
                                                break;
                                            case 4:
                                                return o.label++, {
                                                    value: s[1],
                                                    done: !1
                                                };
                                            case 5:
                                                o.label++, r = s[1], s = [0];
                                                continue;
                                            case 7:
                                                s = o.ops.pop(), o.trys.pop();
                                                continue;
                                            default:
                                                if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                                    o = 0;
                                                    continue
                                                }
                                                if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                                    o.label = s[1];
                                                    break
                                                }
                                                if (6 === s[0] && o.label < i[1]) {
                                                    o.label = i[1], i = s;
                                                    break
                                                }
                                                if (i && o.label < i[2]) {
                                                    o.label = i[2], o.ops.push(s);
                                                    break
                                                }
                                                i[2] && o.ops.pop(), o.trys.pop();
                                                continue
                                        }
                                        s = t.call(e, o)
                                    } catch (e) {
                                        s = [6, e], r = 0
                                    } finally {
                                        n = i = 0
                                    }
                                    if (5 & s[0]) throw s[1];
                                    return {
                                        value: s[0] ? s[1] : void 0,
                                        done: !0
                                    }
                                }([s, u])
                            }
                        }
                    }(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, _()];
                            case 1:
                                return e.sent(), g(), h.current = !0, b(!0), [2]
                        }
                    })
                }, new(n || (n = Promise))(function(i, a) {
                    function o(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? i(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                            e(t)
                        })).then(o, s)
                    }
                    u((r = r.apply(e, t || [])).next())
                })
            }, [b, _, g]);
        return r.useEffect(function() {
            v()
        }, [v]), r.useEffect(function() {
            return function() {
                return b(!1)
            }
        }, [b]), r.useEffect(function() {
            null != f.current && (f.current.width = (l + 2) * Math.max(c.length, 1), f.current.height = (d + 2) * u.length)
        }, [c.length, d, l, u.length]), r.createElement("canvas", {
            ref: f,
            className: o()(a, ((n = {})["SpriteCanvas-module_spriteCanvasHidden__ndzQV"] = !(void 0 !== s && s), n))
        })
    });

    function M(e, t) {
        var n, i = r.useState(null !== (n = null == t ? void 0 : t.isReady) && void 0 !== n && n),
            a = i[0],
            o = i[1];
        r.useEffect(function() {
            var e = null == t ? void 0 : t.addReadyListener(o);
            return function() {
                null != e && (null == t || t.removeReadyListener(e))
            }
        }, [t]);
        var s = r.useCallback(function(n, r) {
                var i = void 0 === r ? {} : r,
                    a = i.sprite,
                    o = i.color,
                    s = null == t ? void 0 : t.getCreateData(),
                    u = null == t ? void 0 : t.getCanvas();
                if (null != u && null != s && 0 !== s.sprites.length) return null == e ? void 0 : e.createConfetti(n, u, s, a, o)
            }, [e, t]),
            u = r.useCallback(function(e, t, n) {
                for (var r = [], i = 0; i < t; i++) {
                    var a = s(e, n);
                    a && r.push(a)
                }
                return r
            }, [s]),
            c = r.useCallback(function(n) {
                var r = null == t ? void 0 : t.getCanvas();
                null != r && (null == e || e.addConfetti(n, r))
            }, [e, t]),
            l = r.useCallback(function(t) {
                null == e || e.deleteConfetti(t)
            }, [e]),
            d = r.useCallback(function() {
                return null == e ? void 0 : e.clearConfetti()
            }, [e]);
        return r.useMemo(function() {
            return {
                createConfetti: s,
                createMultipleConfetti: u,
                addConfetti: c,
                clearConfetti: d,
                deleteConfetti: l,
                isReady: a && null != t && null != e
            }
        }, [c, d, e, s, u, l, a, t])
    }
}