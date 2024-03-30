function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("148837"),
        a = n("533963"),
        u = n("121669");

    function s(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function f(e) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                c(e, t, n[t])
            })
        }
        return e
    }

    function _(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var p = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && E(e, t)
        }(y, e);
        var t, n, r, i, p, m = (t = y, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = f(t);
            if (n) {
                var a = f(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : s(e)
        });

        function y(e, t) {
            var n;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, y), c(s(n = m.call(this, e, t)), "canvas", void 0), c(s(n), "context", void 0), n.canvas = e, n.context = n.canvas.getContext("2d"), null != n.context && (n.context.imageSmoothingQuality = "high"), n
        }
        return r = y, i = [{
            key: "getCanvasForExport",
            value: function() {
                return this.canvas
            }
        }, {
            key: "setContextProperties",
            value: function() {
                null != this.context && (this.context.fillStyle = this.color, this.context.strokeStyle = this.color, this.context.font = "".concat(this.font.style, " ").concat(this.font.weight, " ").concat(this.font.size, "px ").concat(this.font.family))
            }
        }, {
            key: "setSize",
            value: function(e, t) {
                var n = e.w,
                    r = e.h;
                null != this.context && null != t ? (this.canvas.width = n * t, this.canvas.height = r * t, this.context.scale(t, t)) : (this.canvas.width = n, this.canvas.height = r)
            }
        }, {
            key: "clearRect",
            value: function(e) {
                if (null != this.context) {
                    var t = e.x,
                        n = e.y,
                        r = e.w,
                        o = e.h;
                    this.context.clearRect(t, n, r, o)
                }
            }
        }, {
            key: "drawRect",
            value: function(e) {
                var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                if (null != this.context) {
                    var r = e.x,
                        o = e.y,
                        i = e.w,
                        a = e.h;
                    n && this.setContextProperties(), t ? this.context.fillRect(r, o, i, a) : this.context.strokeRect(r, o, i, a)
                }
            }
        }, {
            key: "drawRoundedRect",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                if (null != this.context) {
                    var o = e.x,
                        i = e.y,
                        a = e.w,
                        u = e.h;
                    r && this.setContextProperties(), this.context.beginPath(), this.context.roundRect(o, i, a, u, t), n ? this.context.fill() : this.context.stroke()
                }
            }
        }, {
            key: "drawText",
            value: function(e, t, n) {
                var r = this;
                if (null != this.context) {
                    this.setContextProperties();
                    var i = null !== (y = t.w) && void 0 !== y ? y : this.canvas.width - t.x,
                        s = this.context.measureText(e),
                        l = !1,
                        c = this.font.size,
                        f = function(e, t) {
                            null != r.context && (n ? r.context.fillText(e, t.x, t.y) : r.context.strokeText(e, t.x, t.y))
                        },
                        d = function(e) {
                            if (null == r.context || s.width <= a.TEXT_TRUNCATION_PADDING_PX) return "";
                            for (var t = "".concat(e); s.width + a.TEXT_TRUNCATION_PADDING_PX > i;) t = t.slice(0, -4), s = r.context.measureText(t), l = !0;
                            return l && (t += "..."), t
                        };
                    if (this.font.truncate === u.TextTruncationMethod.None && f(e, t), this.font.truncate === u.TextTruncationMethod.Truncate && f(e = d(e), t), this.font.truncate === u.TextTruncationMethod.Wrap) {
                        var _ = e.split(" "),
                            E = 1 / 0,
                            p = "",
                            m = 0;
                        for (null != t.h && (E = t.h / c, o()(E > 0, "DiscordCavas: boundingBox.h of ".concat(t.h, " results in 0 visible lines with font size of ").concat(c))); _.length > 0;)
                            if ((s = this.context.measureText(p + " " + _[0])).width > i) {
                                var y, I, h = !1;
                                if (m + 1 >= E && _.length > 0 && (h = !0), "" !== p) f(h ? d(p + "...") : p, {
                                    x: t.x,
                                    y: t.y + c * m
                                }), p = "";
                                else {
                                    ;
                                    f(d(null !== (I = _.shift()) && void 0 !== I ? I : ""), {
                                        x: t.x,
                                        y: t.y + c * m
                                    })
                                }
                                if (h) break;
                                m += 1
                            } else p += " ".concat(_.shift()), 0 === _.length && f(p, {
                                x: t.x,
                                y: t.y + c * m
                            })
                    }
                    return {
                        x: t.x,
                        y: t.y,
                        w: s.width,
                        h: s.actualBoundingBoxAscent + s.actualBoundingBoxDescent
                    }
                }
            }
        }, {
            key: "drawFormattedMessage",
            value: function(e, t, n) {
                var r = this;
                this.font.truncate === u.TextTruncationMethod.Wrap && console.warn("DiscordCavas: `drawFormattedMessage` doesn't currently support wrapping formatted text. The results of this draw likely won't match your expectations.");
                var o = this.font.weight,
                    i = function(e, t, n) {
                        var i;
                        if ("strong" === e.type) r.setFont({
                            weight: 700
                        });
                        return Array.isArray(e.content) ? i = a(e.content, t, n) : i = r.drawText(e.content, t, n), r.setFont({
                            weight: o
                        }), i
                    },
                    a = function(e, t, n) {
                        var o = 0;
                        return e.forEach(function(e) {
                            var r = t.x,
                                a = t.y,
                                u = t.w,
                                s = t.h,
                                l = null != u ? u - o : void 0,
                                c = i(e, {
                                    x: r + o,
                                    y: a,
                                    w: l,
                                    h: s
                                }, n);
                            null != c && (o += c.w)
                        }), {
                            x: t.x + o,
                            y: t.y,
                            w: o,
                            h: r.font.size
                        }
                    };
                Array.isArray(e) ? a(e, t, n) : i(e, t, n)
            }
        }, {
            key: "drawImage",
            value: function(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                    fillMode: u.FillMode.Stretch
                };
                o()(null != this.assetMap, "DiscordCavas: `drawImage` requires an AssetMap to be initialized.");
                var i = r.fillMode;
                if (null == this.context) return u.DrawResultStatus.Failure;
                var a = this.assetMap.get(e);
                if (null == a) return u.DrawResultStatus.ImageNotLoaded;
                if (null != n) {
                    if (i === u.FillMode.Contain) {
                        var s, l = {
                                w: a.width,
                                h: a.height
                            },
                            c = +(l.w / l.h).toFixed(1);
                        if (+(n.w / n.h).toFixed(1) > c) {
                            var f = n.h * c;
                            s = {
                                x: t.x + (n.w - f) / 2,
                                y: t.y,
                                w: f,
                                h: n.h
                            }
                        } else {
                            var E = n.w / c;
                            s = {
                                x: t.x,
                                y: t.y + (n.h - E) / 2,
                                w: n.w,
                                h: E
                            }
                        }
                        return this.drawCroppedImage(e, {
                            x: 0,
                            y: 0,
                            w: l.w,
                            h: l.h
                        }, {
                            x: s.x,
                            y: s.y,
                            w: s.w,
                            h: s.h
                        }), u.DrawResultStatus.Success
                    }
                    if (i === u.FillMode.Cover) {
                        var p = {
                                w: a.width,
                                h: a.height
                            },
                            m = +(p.w / p.h).toFixed(1),
                            y = +(n.w / n.h).toFixed(1);
                        if (y > m) {
                            var I, h, O, T = p.w / y;
                            I = _(d({}, {
                                x: 0,
                                y: (p.h - T) * (null !== (O = null == r ? void 0 : null === (h = r.focus) || void 0 === h ? void 0 : h.y) && void 0 !== O ? O : .5)
                            }), {
                                w: a.width,
                                h: T
                            })
                        } else {
                            var S, v, g = p.h * y;
                            I = _(d({}, {
                                x: (a.width - g) * (null !== (v = null == r ? void 0 : null === (S = r.focus) || void 0 === S ? void 0 : S.x) && void 0 !== v ? v : .5),
                                y: 0
                            }), {
                                w: g,
                                h: a.height
                            })
                        }
                        return this.drawCroppedImage(e, I, {
                            x: t.x,
                            y: t.y,
                            w: n.w,
                            h: n.h
                        }), u.DrawResultStatus.Success
                    }
                    this.context.drawImage(a, t.x, t.y, n.w, n.h)
                } else this.context.drawImage(a, t.x, t.y);
                return u.DrawResultStatus.Success
            }
        }, {
            key: "drawRoundedImage",
            value: function(e, t, n, r, o) {
                if (null == this.context) return u.DrawResultStatus.Failure;
                var i = t.x,
                    a = t.y,
                    s = n.w,
                    l = n.h;
                this.context.save();
                var c = new Path2D;
                c.roundRect(i, a, s, l, r), this.context.clip(c);
                var f = this.drawImage(e, t, n, o);
                return this.context.restore(), f
            }
        }, {
            key: "drawCroppedImage",
            value: function(e, t, n) {
                if (null == this.context) return u.DrawResultStatus.Failure;
                var r, o = null === (r = this.assetMap) || void 0 === r ? void 0 : r.get(e);
                if (null == o) return u.DrawResultStatus.ImageNotLoaded;
                var i = t.x,
                    a = t.y,
                    s = t.w,
                    l = t.h,
                    c = n.x,
                    f = n.y,
                    d = n.w,
                    _ = n.h;
                return this.context.drawImage(o, i, a, s, l, c, f, d, _), u.DrawResultStatus.Success
            }
        }, {
            key: "drawPath",
            value: function(e, t) {
                var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                if (null == this.context) return u.DrawResultStatus.Failure;
                this.setContextProperties(), this.context.save();
                var o = new Path2D(e);
                return this.context.translate(t.x, t.y), this.context.scale(r, r), n ? this.context.fill(o, "evenodd") : this.context.stroke(o), this.context.restore(), u.DrawResultStatus.Success
            }
        }, {
            key: "setGradientFillStyle",
            value: function(e, t, n) {
                if (null != this.context) {
                    var r = this.context.createLinearGradient(t.x, t.y, n.x, n.y),
                        o = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var u, s = e[Symbol.iterator](); !(o = (u = s.next()).done); o = !0) {
                            var l = u.value,
                                c = l.color,
                                f = l.stop;
                            r.addColorStop(f, c)
                        }
                    } catch (e) {
                        i = !0, a = e
                    } finally {
                        try {
                            !o && null != s.return && s.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    this.context.fillStyle = r
                }
            }
        }, {
            key: "drawGradientRect",
            value: function(e, t, n, r) {
                return null == this.context ? u.DrawResultStatus.Failure : (this.setGradientFillStyle(e, t, n), this.drawRect(r, !0, !1), u.DrawResultStatus.Success)
            }
        }, {
            key: "drawRoundedGradientRect",
            value: function(e, t, n, r, o) {
                return null == this.context ? u.DrawResultStatus.Failure : (this.setGradientFillStyle(e, t, n), this.drawRoundedRect(r, o, !0, !1), u.DrawResultStatus.Success)
            }
        }], l(r.prototype, i), p && l(r, p), y
    }(i.default)
}