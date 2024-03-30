function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("328865");
    n("2831");
    var o = n("264344"),
        i = n.n(o);

    function a(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t && u(e.prototype, t), n && u(e, n), e
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    window.platform = i(), null == window.ResizeObserver && (window.ResizeObserver = r.ResizeObserver), "object" != typeof globalThis && (window.globalThis = window), Map.prototype.toJSON = function() {
        return Array.from(this)
    }, Set.prototype.toJSON = function() {
        return Array.from(this)
    };
    var c = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
            a(this, e), l(this, "x", void 0), l(this, "y", void 0), l(this, "z", void 0), l(this, "w", void 0), this.x = t, this.y = n, this.z = r, this.w = o
        }
        return s(e, [{
            key: "matrixTransform",
            value: function(t) {
                var n, r;
                return (t.is2D || (n = t, null != (r = SVGMatrix) && "undefined" != typeof Symbol && r[Symbol.hasInstance] ? !!r[Symbol.hasInstance](n) : n instanceof r)) && 0 === this.z && 1 === this.w ? new e(this.x * t.a + this.y * t.c + t.e, this.x * t.b + this.y * t.d + t.f, 0, 1) : new e(this.x * t.m11 + this.y * t.m21 + this.z * t.m31 + this.w * t.m41, this.x * t.m12 + this.y * t.m22 + this.z * t.m32 + this.w * t.m42, this.x * t.m13 + this.y * t.m23 + this.z * t.m33 + this.w * t.m43, this.x * t.m14 + this.y * t.m24 + this.z * t.m34 + this.w * t.m44)
            }
        }, {
            key: "toJSON",
            value: function() {
                return {
                    x: this.x,
                    y: this.y,
                    z: this.z,
                    w: this.w
                }
            }
        }], [{
            key: "fromPoint",
            value: function(t) {
                return new e(t.x, t.y, void 0 !== t.z ? t.z : 0, void 0 !== t.w ? t.w : 1)
            }
        }]), e
    }();
    null == window.DOMPoint && (window.DOMPoint = c);
    var f = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            a(this, e), l(this, "x", void 0), l(this, "y", void 0), l(this, "width", void 0), l(this, "height", void 0), this.x = t, this.y = n, this.width = r, this.height = o
        }
        return s(e, [{
            key: "top",
            get: function() {
                return this.y
            }
        }, {
            key: "left",
            get: function() {
                return this.x
            }
        }, {
            key: "right",
            get: function() {
                return this.x + this.width
            }
        }, {
            key: "bottom",
            get: function() {
                return this.y + this.height
            }
        }, {
            key: "toJSON",
            value: function() {
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
        }], [{
            key: "fromRect",
            value: function(t) {
                return new e(t.x, t.y, t.width, t.height)
            }
        }]), e
    }();
    null == window.DOMRect && (window.DOMRect = f), null == window.TextEncoder && n("251171")
}