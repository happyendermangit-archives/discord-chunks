function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var i = function() {
        var e, t, n;

        function i(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, i), o(this, "container", void 0), o(this, "svg", void 0), o(this, "foreignObject", void 0), this.container = null == e ? void 0 : e.createElement("div");
            var t = this.svg = null == e ? void 0 : e.createElement("svg");
            null != t && (t.style.contain = "paint"), this.foreignObject = null == e ? void 0 : e.createElement("foreignObject"), null != this.container && null != this.svg && null != this.foreignObject && (this.container.className = "drag-previewer", this.container.style.cssText = "z-index: 1000; filter: drop-shadow(0 0 0 var(--background-floating)) drop-shadow(var(--elevation-high))", this.svg.appendChild(this.foreignObject), this.container.appendChild(this.svg), null == e || e.body.appendChild(this.container))
        }
        return e = i, t = [{
            key: "createDragPreview",
            value: function(e) {
                if (null != this.container && null != this.svg && null != this.foreignObject) {
                    var t = e.getBoundingClientRect(),
                        n = t.width,
                        r = t.height;
                    this.svg.setAttribute("viewBox", "0 0 ".concat(n, " ").concat(r)), this.svg.setAttribute("width", "".concat(n)), this.svg.setAttribute("height", "".concat(r)), this.foreignObject.setAttribute("x", "0"), this.foreignObject.setAttribute("y", "0"), this.foreignObject.setAttribute("width", "".concat(n)), this.foreignObject.setAttribute("height", "".concat(r));
                    var o = e.cloneNode(!0);
                    this.foreignObject.appendChild(o)
                }
            }
        }, {
            key: "render",
            value: function(e) {
                var t = this.container;
                if (null == t) return;
                var n = e.getSourceClientOffset();
                if (null != n) e.isDragging() && (t.style.position = "fixed", t.style.left = "".concat(n.x + 30, "px"), t.style.top = "".concat(n.y + 15, "px"))
            }
        }, {
            key: "clear",
            value: function() {
                null != this.foreignObject && (this.foreignObject.innerHTML = "")
            }
        }], r(e.prototype, t), n && r(e, n), i
    }()
}