function(t, e, r) {
    "use strict";
    r.r(e), r.d(e, {
        DateWithZone: function() {
            return i
        }
    }), r("70102");
    var n = r("737912"),
        i = function() {
            function t(t, e) {
                if (isNaN(t.getTime())) throw RangeError("Invalid date passed to DateWithZone");
                this.date = t, this.tzid = e
            }
            return Object.defineProperty(t.prototype, "isUTC", {
                get: function() {
                    return !this.tzid || "UTC" === this.tzid.toUpperCase()
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.toString = function() {
                var t = (0, n.timeToUntilString)(this.date.getTime(), this.isUTC);
                return this.isUTC ? ":".concat(t) : ";TZID=".concat(this.tzid, ":").concat(t)
            }, t.prototype.getTime = function() {
                return this.date.getTime()
            }, t.prototype.rezonedDate = function() {
                return this.isUTC ? this.date : (0, n.dateInTimeZone)(this.date, this.tzid)
            }, t
        }()
}