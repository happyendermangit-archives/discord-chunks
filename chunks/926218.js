function(t, e, r) {
    "use strict";
    r.r(e), r.d(e, {
        default: function() {
            return n
        }
    }), r("424973");
    var n = function() {
        function t(t, e) {
            this.minDate = null, this.maxDate = null, this._result = [], this.total = 0, this.method = t, this.args = e, "between" === t ? (this.maxDate = e.inc ? e.before : new Date(e.before.getTime() - 1), this.minDate = e.inc ? e.after : new Date(e.after.getTime() + 1)) : "before" === t ? this.maxDate = e.inc ? e.dt : new Date(e.dt.getTime() - 1) : "after" === t && (this.minDate = e.inc ? e.dt : new Date(e.dt.getTime() + 1))
        }
        return t.prototype.accept = function(t) {
            ++this.total;
            var e = this.minDate && t < this.minDate,
                r = this.maxDate && t > this.maxDate;
            if ("between" === this.method) {
                if (e) return !0;
                if (r) return !1
            } else if ("before" === this.method) {
                if (r) return !1
            } else if ("after" === this.method) return !!e || (this.add(t), !1);
            return this.add(t)
        }, t.prototype.add = function(t) {
            return this._result.push(t), !0
        }, t.prototype.getValue = function() {
            var t = this._result;
            switch (this.method) {
                case "all":
                case "between":
                    return t;
                default:
                    return t.length ? t[t.length - 1] : null
            }
        }, t.prototype.clone = function() {
            return new t(this.method, this.args)
        }, t
    }()
}