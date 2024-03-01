function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        DOMRectReadOnly: function() {
            return DOMRectReadOnly
        }
    }), r("274635");
    var n = r("26098"),
        DOMRectReadOnly = function() {
            function DOMRectReadOnly(e, t, r, i) {
                return this.x = e, this.y = t, this.width = r, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, (0, n.freeze)(this)
            }
            return DOMRectReadOnly.prototype.toJSON = function() {
                return {
                    x: this.x,
                    y: this.y,
                    top: this.top,
                    right: this.right,
                    bottom: this.bottom,
                    left: this.left,
                    width: this.width,
                    height: this.height
                }
            }, DOMRectReadOnly.fromRect = function(e) {
                return new DOMRectReadOnly(e.x, e.y, e.width, e.height)
            }, DOMRectReadOnly
        }()
}