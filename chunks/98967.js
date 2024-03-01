function(t, e, r) {
    "use strict";
    r.r(e), r.d(e, {
        default: function() {
            return y
        }
    });
    var n = r("871111"),
        i = r("868892"),
        a = r("253409"),
        o = r("271132"),
        s = r("347807"),
        u = r("823135"),
        d = r("737912"),
        y = function() {
            function t(t) {
                this.options = t
            }
            return t.prototype.rebuild = function(t, e) {
                var r = this.options;
                if (t !== this.lastyear && (this.yearinfo = (0, a.rebuildYear)(t, r)), (0, n.notEmpty)(r.bynweekday) && (e !== this.lastmonth || t !== this.lastyear)) {
                    var i = this.yearinfo,
                        u = i.yearlen,
                        d = i.mrange,
                        y = i.wdaymask;
                    this.monthinfo = (0, o.rebuildMonth)(t, e, u, d, y, r)
                }(0, n.isPresent)(r.byeaster) && (this.eastermask = (0, s.easter)(t, r.byeaster))
            }, Object.defineProperty(t.prototype, "lastyear", {
                get: function() {
                    return this.monthinfo ? this.monthinfo.lastyear : null
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "lastmonth", {
                get: function() {
                    return this.monthinfo ? this.monthinfo.lastmonth : null
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "yearlen", {
                get: function() {
                    return this.yearinfo.yearlen
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "yearordinal", {
                get: function() {
                    return this.yearinfo.yearordinal
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "mrange", {
                get: function() {
                    return this.yearinfo.mrange
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "wdaymask", {
                get: function() {
                    return this.yearinfo.wdaymask
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "mmask", {
                get: function() {
                    return this.yearinfo.mmask
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "wnomask", {
                get: function() {
                    return this.yearinfo.wnomask
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "nwdaymask", {
                get: function() {
                    return this.monthinfo ? this.monthinfo.nwdaymask : []
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "nextyearlen", {
                get: function() {
                    return this.yearinfo.nextyearlen
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "mdaymask", {
                get: function() {
                    return this.yearinfo.mdaymask
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(t.prototype, "nmdaymask", {
                get: function() {
                    return this.yearinfo.nmdaymask
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.ydayset = function() {
                return [(0, n.range)(this.yearlen), 0, this.yearlen]
            }, t.prototype.mdayset = function(t, e) {
                for (var r = this.mrange[e - 1], i = this.mrange[e], a = (0, n.repeat)(null, this.yearlen), o = r; o < i; o++) a[o] = o;
                return [a, r, i]
            }, t.prototype.wdayset = function(t, e, r) {
                for (var i = (0, n.repeat)(null, this.yearlen + 7), a = (0, d.toOrdinal)((0, d.datetime)(t, e, r)) - this.yearordinal, o = a, s = 0; s < 7 && (i[a] = a, ++a, this.wdaymask[a] !== this.options.wkst); s++);
                return [i, o, a]
            }, t.prototype.ddayset = function(t, e, r) {
                var i = (0, n.repeat)(null, this.yearlen),
                    a = (0, d.toOrdinal)((0, d.datetime)(t, e, r)) - this.yearordinal;
                return i[a] = a, [i, a, a + 1]
            }, t.prototype.htimeset = function(t, e, r, n) {
                var i = this,
                    a = [];
                return this.options.byminute.forEach(function(e) {
                    a = a.concat(i.mtimeset(t, e, r, n))
                }), (0, d.sort)(a), a
            }, t.prototype.mtimeset = function(t, e, r, n) {
                var i = this.options.bysecond.map(function(r) {
                    return new u.Time(t, e, r, n)
                });
                return (0, d.sort)(i), i
            }, t.prototype.stimeset = function(t, e, r, n) {
                return [new u.Time(t, e, r, n)]
            }, t.prototype.getdayset = function(t) {
                switch (t) {
                    case i.Frequency.YEARLY:
                        return this.ydayset.bind(this);
                    case i.Frequency.MONTHLY:
                        return this.mdayset.bind(this);
                    case i.Frequency.WEEKLY:
                        return this.wdayset.bind(this);
                    case i.Frequency.DAILY:
                    default:
                        return this.ddayset.bind(this)
                }
            }, t.prototype.gettimeset = function(t) {
                switch (t) {
                    case i.Frequency.HOURLY:
                        return this.htimeset.bind(this);
                    case i.Frequency.MINUTELY:
                        return this.mtimeset.bind(this);
                    case i.Frequency.SECONDLY:
                        return this.stimeset.bind(this)
                }
            }, t
        }()
}