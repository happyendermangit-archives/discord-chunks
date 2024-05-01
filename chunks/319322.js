function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("309749");
    var i = n("328865");
    n("2831");
    var r = n("264344"),
        a = n.n(r);

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    window.platform = a(), null == window.ResizeObserver && (window.ResizeObserver = i.ResizeObserver), "object" != typeof globalThis && (window.globalThis = window), Map.prototype.toJSON = function() {
        return Array.from(this)
    }, Set.prototype.toJSON = function() {
        return Array.from(this)
    };
    {
        class e {
            static fromPoint(t) {
                return new e(t.x, t.y, void 0 !== t.z ? t.z : 0, void 0 !== t.w ? t.w : 1)
            }
            matrixTransform(t) {
                return (t.is2D || t instanceof SVGMatrix) && 0 === this.z && 1 === this.w ? new e(this.x * t.a + this.y * t.c + t.e, this.x * t.b + this.y * t.d + t.f, 0, 1) : new e(this.x * t.m11 + this.y * t.m21 + this.z * t.m31 + this.w * t.m41, this.x * t.m12 + this.y * t.m22 + this.z * t.m32 + this.w * t.m42, this.x * t.m13 + this.y * t.m23 + this.z * t.m33 + this.w * t.m43, this.x * t.m14 + this.y * t.m24 + this.z * t.m34 + this.w * t.m44)
            }
            toJSON() {
                return {
                    x: this.x,
                    y: this.y,
                    z: this.z,
                    w: this.w
                }
            }
            constructor(e = 0, t = 0, n = 0, i = 1) {
                s(this, "x", void 0), s(this, "y", void 0), s(this, "z", void 0), s(this, "w", void 0), this.x = e, this.y = t, this.z = n, this.w = i
            }
        }
        null == window.DOMPoint && (window.DOMPoint = e)
    } {
        class e {
            static fromRect(t) {
                return new e(t.x, t.y, t.width, t.height)
            }
            get top() {
                return this.y
            }
            get left() {
                return this.x
            }
            get right() {
                return this.x + this.width
            }
            get bottom() {
                return this.y + this.height
            }
            toJSON() {
                return {
                    x: this.x,
                    y: this.y,
                    width: this.width,
                    height: this.height,
                    top: this.top,
                    left: this.left,
                    right: this.right,
                    bottom: this.bottom
                }
            }
            constructor(e = 0, t = 0, n = 0, i = 0) {
                s(this, "x", void 0), s(this, "y", void 0), s(this, "width", void 0), s(this, "height", void 0), this.x = e, this.y = t, this.width = n, this.height = i
            }
        }
        null == window.DOMRect && (window.DOMRect = e)
    }
    null == window.TextEncoder && n("251171")
}