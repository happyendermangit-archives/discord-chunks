function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("686942"),
        i = n("707908"),
        a = n("747337"),
        o = n("117089"),
        s = n("109766"),
        u = n("68808"),
        c = n("695170"),
        l = function() {
            function e(e) {
                this.options = e
            }
            return e.prototype.rebuild = function(e, t) {
                var n = this.options;
                if (e !== this.lastyear && (this.yearinfo = (0, a.rebuildYear)(e, n)), (0, r.notEmpty)(n.bynweekday) && (t !== this.lastmonth || e !== this.lastyear)) {
                    var i = this.yearinfo,
                        u = i.yearlen,
                        c = i.mrange,
                        l = i.wdaymask;
                    this.monthinfo = (0, o.rebuildMonth)(e, t, u, c, l, n)
                }(0, r.isPresent)(n.byeaster) && (this.eastermask = (0, s.easter)(e, n.byeaster))
            }, Object.defineProperty(e.prototype, "lastyear", {
                get: function() {
                    return this.monthinfo ? this.monthinfo.lastyear : null
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "lastmonth", {
                get: function() {
                    return this.monthinfo ? this.monthinfo.lastmonth : null
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "yearlen", {
                get: function() {
                    return this.yearinfo.yearlen
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "yearordinal", {
                get: function() {
                    return this.yearinfo.yearordinal
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "mrange", {
                get: function() {
                    return this.yearinfo.mrange
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "wdaymask", {
                get: function() {
                    return this.yearinfo.wdaymask
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "mmask", {
                get: function() {
                    return this.yearinfo.mmask
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "wnomask", {
                get: function() {
                    return this.yearinfo.wnomask
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "nwdaymask", {
                get: function() {
                    return this.monthinfo ? this.monthinfo.nwdaymask : []
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "nextyearlen", {
                get: function() {
                    return this.yearinfo.nextyearlen
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "mdaymask", {
                get: function() {
                    return this.yearinfo.mdaymask
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "nmdaymask", {
                get: function() {
                    return this.yearinfo.nmdaymask
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.ydayset = function() {
                return [(0, r.range)(this.yearlen), 0, this.yearlen]
            }, e.prototype.mdayset = function(e, t) {
                for (var n = this.mrange[t - 1], i = this.mrange[t], a = (0, r.repeat)(null, this.yearlen), o = n; o < i; o++) a[o] = o;
                return [a, n, i]
            }, e.prototype.wdayset = function(e, t, n) {
                for (var i = (0, r.repeat)(null, this.yearlen + 7), a = (0, c.toOrdinal)((0, c.datetime)(e, t, n)) - this.yearordinal, o = a, s = 0; s < 7 && (i[a] = a, ++a, this.wdaymask[a] !== this.options.wkst); s++);
                return [i, o, a]
            }, e.prototype.ddayset = function(e, t, n) {
                var i = (0, r.repeat)(null, this.yearlen),
                    a = (0, c.toOrdinal)((0, c.datetime)(e, t, n)) - this.yearordinal;
                return i[a] = a, [i, a, a + 1]
            }, e.prototype.htimeset = function(e, t, n, r) {
                var i = this,
                    a = [];
                return this.options.byminute.forEach(function(t) {
                    a = a.concat(i.mtimeset(e, t, n, r))
                }), (0, c.sort)(a), a
            }, e.prototype.mtimeset = function(e, t, n, r) {
                var i = this.options.bysecond.map(function(n) {
                    return new u.Time(e, t, n, r)
                });
                return (0, c.sort)(i), i
            }, e.prototype.stimeset = function(e, t, n, r) {
                return [new u.Time(e, t, n, r)]
            }, e.prototype.getdayset = function(e) {
                switch (e) {
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
            }, e.prototype.gettimeset = function(e) {
                switch (e) {
                    case i.Frequency.HOURLY:
                        return this.htimeset.bind(this);
                    case i.Frequency.MINUTELY:
                        return this.mtimeset.bind(this);
                    case i.Frequency.SECONDLY:
                        return this.stimeset.bind(this)
                }
            }, e
        }();
    t.default = l
}