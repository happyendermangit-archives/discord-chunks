function(t, e, r) {
    "use strict";
    r.r(e), r.d(e, {
        RRuleSet: function() {
            return c
        }
    }), r("781738"), r("424973"), r("70102");
    var n = r("676730"),
        i = r("191899"),
        a = r("737912"),
        o = r("871111"),
        s = r("924287"),
        u = r("10961"),
        d = r("984413");

    function y(t) {
        var e = this;
        return function(r) {
            if (void 0 !== r && (e["_".concat(t)] = r), void 0 !== e["_".concat(t)]) return e["_".concat(t)];
            for (var n = 0; n < e._rrule.length; n++) {
                var i = e._rrule[n].origOptions[t];
                if (i) return i
            }
        }
    }
    var c = function(t) {
        function e(e) {
            void 0 === e && (e = !1);
            var r = t.call(this, {}, e) || this;
            return r.dtstart = y.apply(r, ["dtstart"]), r.tzid = y.apply(r, ["tzid"]), r._rrule = [], r._rdate = [], r._exrule = [], r._exdate = [], r
        }
        return (0, n.__extends)(e, t), e.prototype._iter = function(t) {
            return (0, s.iterSet)(t, this._rrule, this._exrule, this._rdate, this._exdate, this.tzid())
        }, e.prototype.rrule = function(t) {
            h(t, this._rrule)
        }, e.prototype.exrule = function(t) {
            h(t, this._exrule)
        }, e.prototype.rdate = function(t) {
            l(t, this._rdate)
        }, e.prototype.exdate = function(t) {
            l(t, this._exdate)
        }, e.prototype.rrules = function() {
            return this._rrule.map(function(t) {
                return (0, u.rrulestr)(t.toString())
            })
        }, e.prototype.exrules = function() {
            return this._exrule.map(function(t) {
                return (0, u.rrulestr)(t.toString())
            })
        }, e.prototype.rdates = function() {
            return this._rdate.map(function(t) {
                return new Date(t.getTime())
            })
        }, e.prototype.exdates = function() {
            return this._exdate.map(function(t) {
                return new Date(t.getTime())
            })
        }, e.prototype.valueOf = function() {
            var t = [];
            return !this._rrule.length && this._dtstart && (t = t.concat((0, d.optionsToString)({
                dtstart: this._dtstart
            }))), this._rrule.forEach(function(e) {
                t = t.concat(e.toString().split("\n"))
            }), this._exrule.forEach(function(e) {
                t = t.concat(e.toString().split("\n").map(function(t) {
                    return t.replace(/^RRULE:/, "EXRULE:")
                }).filter(function(t) {
                    return !/^DTSTART/.test(t)
                }))
            }), this._rdate.length && t.push(f("RDATE", this._rdate, this.tzid())), this._exdate.length && t.push(f("EXDATE", this._exdate, this.tzid())), t
        }, e.prototype.toString = function() {
            return this.valueOf().join("\n")
        }, e.prototype.clone = function() {
            var t = new e(!!this._cache);
            return this._rrule.forEach(function(e) {
                return t.rrule(e.clone())
            }), this._exrule.forEach(function(e) {
                return t.exrule(e.clone())
            }), this._rdate.forEach(function(e) {
                return t.rdate(new Date(e.getTime()))
            }), this._exdate.forEach(function(e) {
                return t.exdate(new Date(e.getTime()))
            }), t
        }, e
    }(i.RRule);

    function h(t, e) {
        if (!(t instanceof i.RRule)) throw TypeError(String(t) + " is not RRule instance");
        !(0, o.includes)(e.map(String), String(t)) && e.push(t)
    }

    function l(t, e) {
        if (!(t instanceof Date)) throw TypeError(String(t) + " is not Date instance");
        !(0, o.includes)(e.map(Number), Number(t)) && (e.push(t), (0, a.sort)(e))
    }

    function f(t, e, r) {
        var n = !r || "UTC" === r.toUpperCase(),
            i = n ? "".concat(t, ":") : "".concat(t, ";TZID=").concat(r, ":"),
            o = e.map(function(t) {
                return (0, a.timeToUntilString)(t.valueOf(), n)
            }).join(",");
        return "".concat(i).concat(o)
    }
}