function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("710659"),
        i = n("812975"),
        a = function() {
            function e(e) {
                this.done = !0, this.rules = e
            }
            return e.prototype.start = function(e) {
                return this.text = e, this.done = !1, this.nextSymbol()
            }, e.prototype.isDone = function() {
                return this.done && null === this.symbol
            }, e.prototype.nextSymbol = function() {
                this.symbol = null, this.value = null;
                do {
                    if (this.done) return !1;
                    var e, t, n = void 0;
                    for (var r in e = null, this.rules) {
                        var i = (n = this.rules[r]).exec(this.text);
                        i && (null === e || i[0].length > e[0].length) && (e = i, t = r)
                    }
                    if (null != e && (this.text = this.text.substr(e[0].length), "" === this.text && (this.done = !0)), null == e) {
                        this.done = !0, this.symbol = null, this.value = null;
                        return
                    }
                } while ("SKIP" === t);
                return this.symbol = t, this.value = e, !0
            }, e.prototype.accept = function(e) {
                if (this.symbol === e) {
                    if (this.value) {
                        var t = this.value;
                        return this.nextSymbol(), t
                    }
                    return this.nextSymbol(), !0
                }
                return !1
            }, e.prototype.acceptNumber = function() {
                return this.accept("number")
            }, e.prototype.expect = function(e) {
                if (this.accept(e)) return !0;
                throw Error("expected " + e + " but found " + this.symbol)
            }, e
        }();

    function o(e, t) {
        void 0 === t && (t = r.default);
        var n = {},
            o = new a(t.tokens);
        if (!o.start(e)) return null;
        return function() {
            o.expect("every");
            var e = o.acceptNumber();
            if (e && (n.interval = parseInt(e[0], 10)), o.isDone()) throw Error("Unexpected end");
            switch (o.symbol) {
                case "day(s)":
                    n.freq = i.RRule.DAILY, o.nextSymbol() && (function() {
                        if (o.accept("at"))
                            do {
                                var e = o.acceptNumber();
                                if (!e) throw Error("Unexpected symbol " + o.symbol + ", expected hour");
                                for (n.byhour = [parseInt(e[0], 10)]; o.accept("comma");) {
                                    if (!(e = o.acceptNumber())) throw Error("Unexpected symbol " + o.symbol + "; expected hour");
                                    n.byhour.push(parseInt(e[0], 10))
                                }
                            } while (o.accept("comma") || o.accept("at"))
                    }(), d());
                    break;
                case "weekday(s)":
                    n.freq = i.RRule.WEEKLY, n.byweekday = [i.RRule.MO, i.RRule.TU, i.RRule.WE, i.RRule.TH, i.RRule.FR], o.nextSymbol(), d();
                    break;
                case "week(s)":
                    n.freq = i.RRule.WEEKLY, o.nextSymbol() && (s(), d());
                    break;
                case "hour(s)":
                    n.freq = i.RRule.HOURLY, o.nextSymbol() && (s(), d());
                    break;
                case "minute(s)":
                    n.freq = i.RRule.MINUTELY, o.nextSymbol() && (s(), d());
                    break;
                case "month(s)":
                    n.freq = i.RRule.MONTHLY, o.nextSymbol() && (s(), d());
                    break;
                case "year(s)":
                    n.freq = i.RRule.YEARLY, o.nextSymbol() && (s(), d());
                    break;
                case "monday":
                case "tuesday":
                case "wednesday":
                case "thursday":
                case "friday":
                case "saturday":
                case "sunday":
                    n.freq = i.RRule.WEEKLY;
                    var t = o.symbol.substr(0, 2).toUpperCase();
                    if (n.byweekday = [i.RRule[t]], !o.nextSymbol()) return;
                    for (; o.accept("comma");) {
                        if (o.isDone()) throw Error("Unexpected end");
                        var r = c();
                        if (!r) throw Error("Unexpected symbol " + o.symbol + ", expected weekday");
                        n.byweekday.push(i.RRule[r]), o.nextSymbol()
                    }(function() {
                        o.accept("on"), o.accept("the");
                        var e = l();
                        if (e)
                            for (n.bymonthday = [e], o.nextSymbol(); o.accept("comma");) {
                                if (!(e = l())) throw Error("Unexpected symbol " + o.symbol + "; expected monthday");
                                n.bymonthday.push(e), o.nextSymbol()
                            }
                    })(), d();
                    break;
                case "january":
                case "february":
                case "march":
                case "april":
                case "may":
                case "june":
                case "july":
                case "august":
                case "september":
                case "october":
                case "november":
                case "december":
                    if (n.freq = i.RRule.YEARLY, n.bymonth = [u()], !o.nextSymbol()) return;
                    for (; o.accept("comma");) {
                        if (o.isDone()) throw Error("Unexpected end");
                        var a = u();
                        if (!a) throw Error("Unexpected symbol " + o.symbol + ", expected month");
                        n.bymonth.push(a), o.nextSymbol()
                    }
                    s(), d();
                    break;
                default:
                    throw Error("Unknown symbol")
            }
        }(), n;

        function s() {
            var e = o.accept("on"),
                t = o.accept("the");
            if (e || t)
                do {
                    var r = l(),
                        a = c(),
                        s = u();
                    if (r) a ? (o.nextSymbol(), !n.byweekday && (n.byweekday = []), n.byweekday.push((0, i.RRule)[a].nth(r))) : (!n.bymonthday && (n.bymonthday = []), n.bymonthday.push(r), o.accept("day(s)"));
                    else if (a) o.nextSymbol(), !n.byweekday && (n.byweekday = []), n.byweekday.push(i.RRule[a]);
                    else if ("weekday(s)" === o.symbol) o.nextSymbol(), !n.byweekday && (n.byweekday = [i.RRule.MO, i.RRule.TU, i.RRule.WE, i.RRule.TH, i.RRule.FR]);
                    else if ("week(s)" === o.symbol) {
                        o.nextSymbol();
                        var d = o.acceptNumber();
                        if (!d) throw Error("Unexpected symbol " + o.symbol + ", expected week number");
                        for (n.byweekno = [parseInt(d[0], 10)]; o.accept("comma");) {
                            if (!(d = o.acceptNumber())) throw Error("Unexpected symbol " + o.symbol + "; expected monthday");
                            n.byweekno.push(parseInt(d[0], 10))
                        }
                    } else {
                        if (!s) return;
                        o.nextSymbol(), !n.bymonth && (n.bymonth = []), n.bymonth.push(s)
                    }
                } while (o.accept("comma") || o.accept("the") || o.accept("on"))
        }

        function u() {
            switch (o.symbol) {
                case "january":
                    return 1;
                case "february":
                    return 2;
                case "march":
                    return 3;
                case "april":
                    return 4;
                case "may":
                    return 5;
                case "june":
                    return 6;
                case "july":
                    return 7;
                case "august":
                    return 8;
                case "september":
                    return 9;
                case "october":
                    return 10;
                case "november":
                    return 11;
                case "december":
                    return 12;
                default:
                    return !1
            }
        }

        function c() {
            switch (o.symbol) {
                case "monday":
                case "tuesday":
                case "wednesday":
                case "thursday":
                case "friday":
                case "saturday":
                case "sunday":
                    return o.symbol.substr(0, 2).toUpperCase();
                default:
                    return !1
            }
        }

        function l() {
            switch (o.symbol) {
                case "last":
                    return o.nextSymbol(), -1;
                case "first":
                    return o.nextSymbol(), 1;
                case "second":
                    return o.nextSymbol(), o.accept("last") ? -2 : 2;
                case "third":
                    return o.nextSymbol(), o.accept("last") ? -3 : 3;
                case "nth":
                    var e = parseInt(o.value[1], 10);
                    if (e < -366 || e > 366) throw Error("Nth out of range: " + e);
                    return o.nextSymbol(), o.accept("last") ? -e : e;
                default:
                    return !1
            }
        }

        function d() {
            if ("until" === o.symbol) {
                var e = Date.parse(o.text);
                if (!e) throw Error("Cannot parse until date:" + o.text);
                n.until = new Date(e)
            } else o.accept("for") && (n.count = parseInt(o.value[0], 10), o.expect("number"))
        }
    }
}