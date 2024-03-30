function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ElementPool: function() {
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

        function i(e, t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, i), o(this, "_elements", void 0), o(this, "_createElement", void 0), o(this, "_cleanElement", void 0), this._elements = [], this._createElement = e, this._cleanElement = t
        }
        return e = i, t = [{
            key: "getElement",
            value: function() {
                return 0 === this._elements.length ? this._createElement() : this._elements.pop()
            }
        }, {
            key: "poolElement",
            value: function(e) {
                this._cleanElement(e), this._elements.push(e)
            }
        }, {
            key: "clearPool",
            value: function() {
                this._elements.length = 0
            }
        }], r(e.prototype, t), n && r(e, n), i
    }()
}