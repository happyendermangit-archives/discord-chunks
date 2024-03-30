function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TimeOptions: function() {
            return O
        },
        convertToTimeOfADay: function() {
            return m
        },
        timeAtSpecificDay: function() {
            return I
        }
    });
    var r = n("913527"),
        o = n.n(r),
        i = n("170030");

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var l = /^[0]+/,
        c = /:00/,
        f = /(AM|ΠΜ|सुबह)/i,
        d = /(PM|ΜΜ|शाम)/i,
        _ = /\s+/,
        E = function(e) {
            return e.replace(l, "").replace(c, "").replace(f, "").replace(_, "")
        },
        p = function(e) {
            return e.replace(l, "").replace(d, "").replace(_, "")
        },
        m = function(e, t) {
            var n = t.toUpperCase().trim();
            if (n.length > 0) {
                var r = o()("".concat(null == e ? void 0 : e.format("YYYY-MM-DD"), " ").concat(n), "YYYY-MM-DD LT");
                if (E(r.format("LT")) === E(n)) return r
            }
        },
        y = o()("2021-04-12T00:00:00"),
        I = function(e, t) {
            return e.clone().hours(t.hour()).minutes(t.minutes()).seconds(0)
        },
        h = function(e, t) {
            return e.value.unix() - t.value.unix()
        },
        O = function() {
            var e, t, n;

            function r() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.intervalInMinutes,
                    n = void 0 === t ? 15 : t,
                    o = e.labelFormat;
                if (! function(e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                    }(this, r), s(this, "intervalInMinutes", void 0), s(this, "labelFormat", void 0), s(this, "options", []), s(this, "_index", {}), n <= 0) throw Error("intervalInMinutes should be positive number, got ".concat(n));
                this.intervalInMinutes = n, this.labelFormat = void 0 === o ? "LT" : o, this._generateTimeOptions()
            }
            return e = r, t = [{
                key: "lookupByValue",
                value: function(e) {
                    if (null != e) {
                        var t = I(y, e);
                        return this._index[t.unix()]
                    }
                }
            }, {
                key: "_createLabel",
                value: function(e) {
                    return (0, i.dateFormat)(e.locale(o().locale()), this.labelFormat)
                }
            }, {
                key: "_generateTimeOptions",
                value: function() {
                    this.options = [], this._index = {};
                    for (var e = o()(y), t = o()(e).add(1, "day"), n = o()(e); n < t;) {
                        var r = this._createNewOption(n.clone());
                        this.options.push(r), this._index[r.value.unix()] = r.value, n.add(this.intervalInMinutes, "minutes")
                    }
                }
            }, {
                key: "_createNewOption",
                value: function(e) {
                    var t = I(y, e);
                    return {
                        label: this._createLabel(t),
                        value: t
                    }
                }
            }, {
                key: "_addNewOption",
                value: function(e) {
                    var t = I(y, e),
                        n = this._createLabel(t);
                    return this._index[t.unix()] = t, this.options.push({
                        label: n,
                        value: t
                    }), this.options.sort(h), e
                }
            }, {
                key: "_guessOptions",
                value: function(e) {
                    var t = [];
                    if (/[:\\.]/.test(e)) {
                        var n = m(y, e);
                        if (null != n) {
                            t.push(n.clone());
                            var r = n.add({
                                hours: 12
                            });
                            r.isBefore(y.clone().add({
                                hours: 24
                            })) && p(r.format("LT")) === p(e) && t.push(r)
                        }
                    }
                    return t
                }
            }, {
                key: "getOptions",
                value: function(e) {
                    var t, n = this,
                        r = this._guessOptions(e);
                    if (!(r.length > 0)) return this.options;
                    var o = function(e) {
                        if (Array.isArray(e)) return a(e)
                    }(t = this.options) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(t) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return a(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                        }
                    }(t) || function() {
                        throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }();
                    return r.forEach(function(e) {
                        null == n.lookupByValue(e) && o.push(n._createNewOption(e))
                    }), o.sort(h), o
                }
            }, {
                key: "selectValue",
                value: function(e) {
                    var t = this.lookupByValue(e);
                    return null == t ? this._addNewOption(e) : t
                }
            }], u(e.prototype, t), n && u(e, n), r
        }()
}