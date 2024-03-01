function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return r
        }
    }), s("424973");
    var r = class e {
        getElement() {
            return 0 === this._elements.length ? this._createElement() : this._elements.pop()
        }
        poolElement(e) {
            this._cleanElement(e), this._elements.push(e)
        }
        clearPool() {
            this._elements.length = 0
        }
        constructor(e, t) {
            this._elements = [], this._createElement = e, this._cleanElement = t
        }
    }
}