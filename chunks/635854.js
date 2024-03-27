function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("146150"),
        i = function(e) {
            function t(t, n, r) {
                var i = e.call(this, t, n) || this;
                return i.iterator = r, i
            }
            return (0, r.__extends)(t, e), t.prototype.add = function(e) {
                return !!this.iterator(e, this._result.length) && (this._result.push(e), !0)
            }, t
        }(n("135891").default);
    t.default = i
}