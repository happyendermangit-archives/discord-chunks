function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("222007");
    var l, i = n("627445"),
        a = n.n(i),
        s = n("335609"),
        r = n("113149"),
        o = n("695412");
    l = class extends s.default {
        getCanvasForExport() {
            return this.canvas
        }
        setContextProperties() {
            null != this.context && (this.context.fillStyle = this.color, this.context.strokeStyle = this.color, this.context.font = "".concat(this.font.style, " ").concat(this.font.weight, " ").concat(this.font.size, "px ").concat(this.font.family))
        }
        setSize(e, t) {
            let {
                w: n,
                h: l
            } = e;
            null != this.context && null != t ? (this.canvas.width = n * t, this.canvas.height = l * t, this.context.scale(t, t)) : (this.canvas.width = n, this.canvas.height = l)
        }
        clearRect(e) {
            if (null == this.context) return;
            let {
                x: t,
                y: n,
                w: l,
                h: i
            } = e;
            this.context.clearRect(t, n, l, i)
        }
        drawRect(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            if (null == this.context) return;
            let {
                x: l,
                y: i,
                w: a,
                h: s
            } = e;
            n && this.setContextProperties(), t ? this.context.fillRect(l, i, a, s) : this.context.strokeRect(l, i, a, s)
        }
        drawRoundedRect(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                l = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
            if (null == this.context) return;
            let {
                x: i,
                y: a,
                w: s,
                h: r
            } = e;
            l && this.setContextProperties(), this.context.beginPath(), this.context.roundRect(i, a, s, r, t), n ? this.context.fill() : this.context.stroke()
        }
        drawText(e, t, n, l) {
            if (null == this.context) return;
            this.setContextProperties();
            let i = null != l ? l : this.canvas.width - t.x,
                a = this.context.measureText(e),
                s = !1;
            if (this.font.truncate) {
                for (; a.width + r.TEXT_TRUNCATION_PADDING_PX > i;) e = e.slice(0, -4), a = this.context.measureText(e), s = !0;
                s && (e += "...")
            }
            n ? this.context.fillText(e, t.x, t.y) : this.context.strokeText(e, t.x, t.y)
        }
        drawImage(e, t, n) {
            if (a(null != this.assetMap, "DiscordCavas: `drawImage` requires an AssetMap to be initialized."), null == this.context) return o.DrawResultStatus.Failure;
            let l = this.assetMap.get(e);
            return null == l ? o.DrawResultStatus.ImageNotLoaded : (null != n ? this.context.drawImage(l, t.x, t.y, n.w, n.h) : this.context.drawImage(l, t.x, t.y), o.DrawResultStatus.Success)
        }
        drawRoundedImage(e, t, n, l) {
            if (null == this.context) return o.DrawResultStatus.Failure;
            let {
                x: i,
                y: a
            } = t, {
                w: s,
                h: r
            } = n;
            this.context.save();
            let u = new Path2D;
            u.roundRect(i, a, s, r, l), this.context.clip(u);
            let d = this.drawImage(e, t, n);
            return this.context.restore(), d
        }
        drawCroppedImage(e, t, n) {
            var l;
            if (null == this.context) return o.DrawResultStatus.Failure;
            let i = null === (l = this.assetMap) || void 0 === l ? void 0 : l.get(e);
            if (null == i) return o.DrawResultStatus.ImageNotLoaded;
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
            return this.context.drawImage(i, a, s, r, u, d, c, f, m), o.DrawResultStatus.Success
        }
        drawPath(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
            if (null == this.context) return o.DrawResultStatus.Failure;
            this.setContextProperties(), this.context.save();
            let i = new Path2D(e);
            return this.context.translate(t.x, t.y), this.context.scale(l, l), n ? this.context.fill(i, "evenodd") : this.context.stroke(i), this.context.restore(), o.DrawResultStatus.Success
        }
        setGradientFillStyle(e, t, n) {
            if (null == this.context) return;
            let l = this.context.createLinearGradient(t.x, t.y, n.x, n.y);
            for (let {
                    color: t,
                    stop: n
                }
                of e) l.addColorStop(n, t);
            this.context.fillStyle = l
        }
        drawGradientRect(e, t, n, l) {
            return null == this.context ? o.DrawResultStatus.Failure : (this.setGradientFillStyle(e, t, n), this.drawRect(l, !0, !1), o.DrawResultStatus.Success)
        }
        drawGradientRoundedRect(e, t, n, l, i) {
            return null == this.context ? o.DrawResultStatus.Failure : (this.setGradientFillStyle(e, t, n), this.drawRoundedRect(l, i, !0, !1), o.DrawResultStatus.Success)
        }
        constructor(e, t) {
            super(e, t), this.canvas = e, this.context = this.canvas.getContext("2d"), null != this.context && (this.context.imageSmoothingQuality = "high")
        }
    }
}