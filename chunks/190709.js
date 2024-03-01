function(e, _, E) {
    "use strict";
    E.r(_), E("222007"), E("274635");
    var t = E("464324");
    E("985745");
    var o = E("383536"),
        n = E.n(o);
    window.platform = n, null == window.ResizeObserver && (window.ResizeObserver = t.ResizeObserver), "object" != typeof globalThis && (window.globalThis = window), Map.prototype.toJSON = function() {
        return Array.from(this)
    }, Set.prototype.toJSON = function() {
        return Array.from(this)
    };
    {
        class DOMPoint {
            static fromPoint(e) {
                return new DOMPoint(e.x, e.y, void 0 !== e.z ? e.z : 0, void 0 !== e.w ? e.w : 1)
            }
            matrixTransform(e) {
                return (e.is2D || e instanceof SVGMatrix) && 0 === this.z && 1 === this.w ? new DOMPoint(this.x * e.a + this.y * e.c + e.e, this.x * e.b + this.y * e.d + e.f, 0, 1) : new DOMPoint(this.x * e.m11 + this.y * e.m21 + this.z * e.m31 + this.w * e.m41, this.x * e.m12 + this.y * e.m22 + this.z * e.m32 + this.w * e.m42, this.x * e.m13 + this.y * e.m23 + this.z * e.m33 + this.w * e.m43, this.x * e.m14 + this.y * e.m24 + this.z * e.m34 + this.w * e.m44)
            }
            toJSON() {
                return {
                    x: this.x,
                    y: this.y,
                    z: this.z,
                    w: this.w
                }
            }
            constructor(e = 0, _ = 0, E = 0, t = 1) {
                this.x = e, this.y = _, this.z = E, this.w = t
            }
        }
        null == window.DOMPoint && (window.DOMPoint = DOMPoint)
    } {
        class DOMRect {
            static fromRect(e) {
                return new DOMRect(e.x, e.y, e.width, e.height)
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
            constructor(e = 0, _ = 0, E = 0, t = 0) {
                this.x = e, this.y = _, this.width = E, this.height = t
            }
        }
        null == window.DOMRect && (window.DOMRect = DOMRect)
    }
    null == window.TextEncoder && E("705479")
}