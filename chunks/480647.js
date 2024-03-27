function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("222007");
    var i, l = n("627445"),
        a = n.n(l),
        s = n("335609"),
        r = n("113149"),
        o = n("695412");
    i = class extends s.default {
        getCanvasForExport() {
            return this.canvas
        }
        setContextProperties() {
            null != this.context && (this.context.fillStyle = this.color, this.context.strokeStyle = this.color, this.context.font = "".concat(this.font.style, " ").concat(this.font.weight, " ").concat(this.font.size, "px ").concat(this.font.family))
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
                h: l
            } = e;
            this.context.clearRect(t, n, i, l)
        }
        drawRect(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            if (null == this.context) return;
            let {
                x: i,
                y: l,
                w: a,
                h: s
            } = e;
            n && this.setContextProperties(), t ? this.context.fillRect(i, l, a, s) : this.context.strokeRect(i, l, a, s)
        }
        drawRoundedRect(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
            if (null == this.context) return;
            let {
                x: l,
                y: a,
                w: s,
                h: r
            } = e;
            i && this.setContextProperties(), this.context.beginPath(), this.context.roundRect(l, a, s, r, t), n ? this.context.fill() : this.context.stroke()
        }
        drawText(e, t, n) {
            var i, l;
            if (null == this.context) return;
            this.setContextProperties();
            let s = null !== (i = t.w) && void 0 !== i ? i : this.canvas.width - t.x,
                u = this.context.measureText(e),
                d = !1,
                c = this.font.size,
                f = (e, t) => {
                    null != this.context && (n ? this.context.fillText(e, t.x, t.y) : this.context.strokeText(e, t.x, t.y))
                },
                m = e => {
                    if (null == this.context || u.width <= r.TEXT_TRUNCATION_PADDING_PX) return "";
                    let t = "".concat(e);
                    for (; u.width + r.TEXT_TRUNCATION_PADDING_PX > s;) t = t.slice(0, -4), u = this.context.measureText(t), d = !0;
                    return d && (t += "..."), t
                };
            if (this.font.truncate === o.TextTruncationMethod.None && f(e, t), this.font.truncate === o.TextTruncationMethod.Truncate && f(e = m(e), t), this.font.truncate === o.TextTruncationMethod.Wrap) {
                let n = e.split(" "),
                    i = 1 / 0,
                    r = "",
                    o = 0;
                for (null != t.h && a((i = t.h / c) > 0, "DiscordCavas: boundingBox.h of ".concat(t.h, " results in 0 visible lines with font size of ").concat(c)); n.length > 0;)
                    if ((u = this.context.measureText(r + " " + n[0])).width > s) {
                        let e = !1;
                        if (o + 1 >= i && n.length > 0 && (e = !0), "" !== r) f(e ? m(r + "...") : r, {
                            x: t.x,
                            y: t.y + c * o
                        }), r = "";
                        else {
                            let e = m(null !== (l = n.shift()) && void 0 !== l ? l : "");
                            f(e, {
                                x: t.x,
                                y: t.y + c * o
                            })
                        }
                        if (e) break;
                        o += 1
                    } else r += " ".concat(n.shift()), 0 === n.length && f(r, {
                        x: t.x,
                        y: t.y + c * o
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
                l = (e, t, n) => {
                    let l;
                    if ("strong" === e.type) this.setFont({
                        weight: 700
                    });
                    return Array.isArray(e.content) ? l = a(e.content, t, n) : l = this.drawText(e.content, t, n), this.setFont({
                        weight: i
                    }), l
                },
                a = (e, t, n) => {
                    let i = 0;
                    return e.forEach(e => {
                        let {
                            x: a,
                            y: s,
                            w: r,
                            h: o
                        } = t, u = null != r ? r - i : void 0, d = {
                            x: a + i,
                            y: s,
                            w: u,
                            h: o
                        }, c = l(e, d, n);
                        null != c && (i += c.w)
                    }), {
                        x: t.x + i,
                        y: t.y,
                        w: i,
                        h: this.font.size
                    }
                };
            Array.isArray(e) ? a(e, t, n) : l(e, t, n)
        }
        drawImage(e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                fillMode: o.FillMode.Stretch
            };
            a(null != this.assetMap, "DiscordCavas: `drawImage` requires an AssetMap to be initialized.");
            let {
                fillMode: l
            } = i;
            if (null == this.context) return o.DrawResultStatus.Failure;
            let s = this.assetMap.get(e);
            if (null == s) return o.DrawResultStatus.ImageNotLoaded;
            if (null != n) {
                if (l === o.FillMode.Contain) {
                    let i;
                    let l = {
                            w: s.width,
                            h: s.height
                        },
                        a = +(l.w / l.h).toFixed(1),
                        r = +(n.w / n.h).toFixed(1);
                    if (r > a) {
                        let e = n.h * a;
                        i = {
                            x: t.x + (n.w - e) / 2,
                            y: t.y,
                            w: e,
                            h: n.h
                        }
                    } else {
                        let e = n.w / a;
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
                        w: l.w,
                        h: l.h
                    }, {
                        x: i.x,
                        y: i.y,
                        w: i.w,
                        h: i.h
                    }), o.DrawResultStatus.Success
                }
                if (l === o.FillMode.Cover) {
                    var r, u, d, c;
                    let l;
                    let a = {
                            w: s.width,
                            h: s.height
                        },
                        f = +(a.w / a.h).toFixed(1),
                        m = +(n.w / n.h).toFixed(1);
                    if (m > f) {
                        let e = a.w / m,
                            t = {
                                x: 0,
                                y: (a.h - e) * (null !== (u = null == i ? void 0 : null === (r = i.focus) || void 0 === r ? void 0 : r.y) && void 0 !== u ? u : .5)
                            };
                        l = {
                            ...t,
                            w: s.width,
                            h: e
                        }
                    } else {
                        let e = a.h * m,
                            t = {
                                x: (s.width - e) * (null !== (c = null == i ? void 0 : null === (d = i.focus) || void 0 === d ? void 0 : d.x) && void 0 !== c ? c : .5),
                                y: 0
                            };
                        l = {
                            ...t,
                            w: e,
                            h: s.height
                        }
                    }
                    return this.drawCroppedImage(e, l, {
                        x: t.x,
                        y: t.y,
                        w: n.w,
                        h: n.h
                    }), o.DrawResultStatus.Success
                }
                this.context.drawImage(s, t.x, t.y, n.w, n.h)
            } else this.context.drawImage(s, t.x, t.y);
            return o.DrawResultStatus.Success
        }
        drawRoundedImage(e, t, n, i, l) {
            if (null == this.context) return o.DrawResultStatus.Failure;
            let {
                x: a,
                y: s
            } = t, {
                w: r,
                h: u
            } = n;
            this.context.save();
            let d = new Path2D;
            d.roundRect(a, s, r, u, i), this.context.clip(d);
            let c = this.drawImage(e, t, n, l);
            return this.context.restore(), c
        }
        drawCroppedImage(e, t, n) {
            var i;
            if (null == this.context) return o.DrawResultStatus.Failure;
            let l = null === (i = this.assetMap) || void 0 === i ? void 0 : i.get(e);
            if (null == l) return o.DrawResultStatus.ImageNotLoaded;
            let {
                x: a,
                y: s,
                w: r,
                h: u
            } = t, {
                x: d,
                y: c,
                w: f,
                h: m
            } = n;
            return this.context.drawImage(l, a, s, r, u, d, c, f, m), o.DrawResultStatus.Success
        }
        drawPath(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
            if (null == this.context) return o.DrawResultStatus.Failure;
            this.setContextProperties(), this.context.save();
            let l = new Path2D(e);
            return this.context.translate(t.x, t.y), this.context.scale(i, i), n ? this.context.fill(l, "evenodd") : this.context.stroke(l), this.context.restore(), o.DrawResultStatus.Success
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
        drawRoundedGradientRect(e, t, n, i, l) {
            return null == this.context ? o.DrawResultStatus.Failure : (this.setGradientFillStyle(e, t, n), this.drawRoundedRect(i, l, !0, !1), o.DrawResultStatus.Success)
        }
        constructor(e, t) {
            super(e, t), this.canvas = e, this.context = this.canvas.getContext("2d"), null != this.context && (this.context.imageSmoothingQuality = "high")
        }
    }
}