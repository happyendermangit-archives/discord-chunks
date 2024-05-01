function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    }), n("47120");
    var i = n("512722"),
        r = n.n(i),
        s = n("129508"),
        a = n("921608"),
        o = n("693824");

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class u extends s.default {
        getCanvasForExport() {
            return this.canvas
        }
        setContextProperties() {
            null != this.context && (this.context.fillStyle = this.color, this.context.strokeStyle = this.color, this.context.font = "".concat(this.font.style, " ").concat(this.font.weight, " ").concat(this.font.size, "px ").concat(this.font.family.join(", ")))
        }
        setSize(e, t) {
            let {
                w: n,
                h: i
            } = e;
            null != this.context && null != t ? (this.canvas.width = n * t, this.canvas.height = i * t, this.context.scale(t, t)) : (this.canvas.width = n, this.canvas.height = i)
        }
        clearRect(e) {
            if (null == this.context) return;
            let {
                x: t,
                y: n,
                w: i,
                h: r
            } = e;
            this.context.clearRect(t, n, i, r)
        }
        drawRect(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            if (null == this.context) return;
            let {
                x: i,
                y: r,
                w: s,
                h: a
            } = e;
            n && this.setContextProperties(), t ? this.context.fillRect(i, r, s, a) : this.context.strokeRect(i, r, s, a)
        }
        drawRoundedRect(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
            if (null == this.context) return;
            let {
                x: r,
                y: s,
                w: a,
                h: o
            } = e;
            i && this.setContextProperties(), this.context.beginPath(), this.context.roundRect(r, s, a, o, t), n ? this.context.fill() : this.context.stroke()
        }
        drawText(e, t, n) {
            var i, s;
            if (null == this.context) return;
            this.setContextProperties();
            let l = null !== (i = t.w) && void 0 !== i ? i : this.canvas.width - t.x,
                u = this.context.measureText(e),
                d = !1,
                _ = this.font.size,
                c = (e, t) => {
                    null != this.context && (n ? this.context.fillText(e, t.x, t.y) : this.context.strokeText(e, t.x, t.y))
                },
                E = e => {
                    if (null == this.context || u.width <= a.TEXT_TRUNCATION_PADDING_PX) return "";
                    let t = "".concat(e);
                    for (; u.width + a.TEXT_TRUNCATION_PADDING_PX > l;) t = t.slice(0, -4), u = this.context.measureText(t), d = !0;
                    return d && (t += "..."), t
                };
            if (this.font.truncate === o.TextTruncationMethod.None && c(e, t), this.font.truncate === o.TextTruncationMethod.Truncate && c(e = E(e), t), this.font.truncate === o.TextTruncationMethod.Wrap) {
                let n = e.split(" "),
                    i = 1 / 0,
                    a = "",
                    o = 0;
                for (null != t.h && (i = t.h / _, r()(i > 0, "DiscordCavas: boundingBox.h of ".concat(t.h, " results in 0 visible lines with font size of ").concat(_))); n.length > 0;)
                    if ((u = this.context.measureText(a + " " + n[0])).width > l) {
                        let e = !1;
                        if (o + 1 >= i && n.length > 0 && (e = !0), "" !== a ? (c(e ? E(a + "...") : a, {
                                x: t.x,
                                y: t.y + _ * o
                            }), a = "") : c(E(null !== (s = n.shift()) && void 0 !== s ? s : ""), {
                                x: t.x,
                                y: t.y + _ * o
                            }), e) break;
                        o += 1
                    } else a += " ".concat(n.shift()), 0 === n.length && c(a, {
                        x: t.x,
                        y: t.y + _ * o
                    })
            }
            return {
                x: t.x,
                y: t.y,
                w: u.width,
                h: u.actualBoundingBoxAscent + u.actualBoundingBoxDescent
            }
        }
        drawFormattedMessage(e, t, n) {
            this.font.truncate === o.TextTruncationMethod.Wrap && console.warn("DiscordCavas: `drawFormattedMessage` doesn't currently support wrapping formatted text. The results of this draw likely won't match your expectations.");
            let i = this.font.weight,
                r = (e, t, n) => {
                    let r;
                    if ("strong" === e.type) this.setFont({
                        weight: 700
                    });
                    return Array.isArray(e.content) ? r = s(e.content, t, n) : r = this.drawText(e.content, t, n), this.setFont({
                        weight: i
                    }), r
                },
                s = (e, t, n) => {
                    let i = 0;
                    return e.forEach(e => {
                        let {
                            x: s,
                            y: a,
                            w: o,
                            h: l
                        } = t, u = null != o ? o - i : void 0, d = r(e, {
                            x: s + i,
                            y: a,
                            w: u,
                            h: l
                        }, n);
                        null != d && (i += d.w)
                    }), {
                        x: t.x + i,
                        y: t.y,
                        w: i,
                        h: this.font.size
                    }
                };
            Array.isArray(e) ? s(e, t, n) : r(e, t, n)
        }
        drawImage(e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                fillMode: o.FillMode.Stretch
            };
            r()(null != this.assetMap, "DiscordCavas: `drawImage` requires an AssetMap to be initialized.");
            let {
                fillMode: s
            } = i;
            if (null == this.context) return o.DrawResultStatus.Failure;
            let a = this.assetMap.get(e);
            if (null == a) return o.DrawResultStatus.ImageNotLoaded;
            if (null != n) {
                if (s === o.FillMode.Contain) {
                    let i;
                    let r = {
                            w: a.width,
                            h: a.height
                        },
                        s = +(r.w / r.h).toFixed(1);
                    if (+(n.w / n.h).toFixed(1) > s) {
                        let e = n.h * s;
                        i = {
                            x: t.x + (n.w - e) / 2,
                            y: t.y,
                            w: e,
                            h: n.h
                        }
                    } else {
                        let e = n.w / s;
                        i = {
                            x: t.x,
                            y: t.y + (n.h - e) / 2,
                            w: n.w,
                            h: e
                        }
                    }
                    return this.drawCroppedImage(e, {
                        x: 0,
                        y: 0,
                        w: r.w,
                        h: r.h
                    }, {
                        x: i.x,
                        y: i.y,
                        w: i.w,
                        h: i.h
                    }), o.DrawResultStatus.Success
                }
                if (s === o.FillMode.Cover) {
                    var l, u, d, _;
                    let r;
                    let s = {
                            w: a.width,
                            h: a.height
                        },
                        c = +(s.w / s.h).toFixed(1),
                        E = +(n.w / n.h).toFixed(1);
                    if (E > c) {
                        let e = s.w / E;
                        r = {
                            x: 0,
                            y: (s.h - e) * (null !== (u = null == i ? void 0 : null === (l = i.focus) || void 0 === l ? void 0 : l.y) && void 0 !== u ? u : .5),
                            w: a.width,
                            h: e
                        }
                    } else {
                        let e = s.h * E;
                        r = {
                            x: (a.width - e) * (null !== (_ = null == i ? void 0 : null === (d = i.focus) || void 0 === d ? void 0 : d.x) && void 0 !== _ ? _ : .5),
                            y: 0,
                            w: e,
                            h: a.height
                        }
                    }
                    return this.drawCroppedImage(e, r, {
                        x: t.x,
                        y: t.y,
                        w: n.w,
                        h: n.h
                    }), o.DrawResultStatus.Success
                }
                this.context.drawImage(a, t.x, t.y, n.w, n.h)
            } else this.context.drawImage(a, t.x, t.y);
            return o.DrawResultStatus.Success
        }
        drawRoundedImage(e, t, n, i, r) {
            if (null == this.context) return o.DrawResultStatus.Failure;
            let {
                x: s,
                y: a
            } = t, {
                w: l,
                h: u
            } = n;
            this.context.save();
            let d = new Path2D;
            d.roundRect(s, a, l, u, i), this.context.clip(d);
            let _ = this.drawImage(e, t, n, r);
            return this.context.restore(), _
        }
        drawCroppedImage(e, t, n) {
            var i;
            if (null == this.context) return o.DrawResultStatus.Failure;
            let r = null === (i = this.assetMap) || void 0 === i ? void 0 : i.get(e);
            if (null == r) return o.DrawResultStatus.ImageNotLoaded;
            let {
                x: s,
                y: a,
                w: l,
                h: u
            } = t, {
                x: d,
                y: _,
                w: c,
                h: E
            } = n;
            return this.context.drawImage(r, s, a, l, u, d, _, c, E), o.DrawResultStatus.Success
        }
        drawPath(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
            if (null == this.context) return o.DrawResultStatus.Failure;
            this.setContextProperties(), this.context.save();
            let r = new Path2D(e);
            return this.context.translate(t.x, t.y), this.context.scale(i, i), n ? this.context.fill(r, "evenodd") : this.context.stroke(r), this.context.restore(), o.DrawResultStatus.Success
        }
        setGradientFillStyle(e, t, n) {
            if (null == this.context) return;
            let i = this.context.createLinearGradient(t.x, t.y, n.x, n.y);
            for (let {
                    color: t,
                    stop: n
                }
                of e) i.addColorStop(n, t);
            this.context.fillStyle = i
        }
        drawGradientRect(e, t, n, i) {
            return null == this.context ? o.DrawResultStatus.Failure : (this.setGradientFillStyle(e, t, n), this.drawRect(i, !0, !1), o.DrawResultStatus.Success)
        }
        drawRoundedGradientRect(e, t, n, i, r) {
            return null == this.context ? o.DrawResultStatus.Failure : (this.setGradientFillStyle(e, t, n), this.drawRoundedRect(i, r, !0, !1), o.DrawResultStatus.Success)
        }
        constructor(e, t) {
            super(e, t), l(this, "canvas", void 0), l(this, "context", void 0), this.canvas = e, this.context = this.canvas.getContext("2d"), null != this.context && (this.context.imageSmoothingQuality = "high")
        }
    }
}