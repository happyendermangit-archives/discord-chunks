function(t, e, r) {
    "use strict";
    r.r(e), r.d(e, {
        default: function() {
            return i
        }
    }), r("424973");
    var n = r("676730"),
        i = function(t) {
            function e(e, r, n) {
                var i = t.call(this, e, r) || this;
                return i.iterator = n, i
            }
            return (0, n.__extends)(e, t), e.prototype.add = function(t) {
                return !!this.iterator(t, this._result.length) && (this._result.push(t), !0)
            }, e
        }(r("926218").default)
}