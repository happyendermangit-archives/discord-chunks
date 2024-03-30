function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("392711"),
        o = n.n(r),
        i = n("913527"),
        a = n.n(i);

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return u(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var f = function() {
        var e, t, n;

        function r(e) {
            var t = e.computeBonus,
                n = e.computeWeight,
                o = e.lookupKey,
                i = e.afterCompute,
                a = e.numFrequentlyItems,
                u = e.maxSamples;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r), l(this, "dirty", void 0), l(this, "_frequently", void 0), l(this, "numFrequentlyItems", void 0), l(this, "maxSamples", void 0), l(this, "computeBonus", void 0), l(this, "computeWeight", void 0), l(this, "lookupKey", void 0), l(this, "usageHistory", void 0), l(this, "afterCompute", void 0), this.computeBonus = t, this.computeWeight = n, this.afterCompute = i, this.lookupKey = o, this.usageHistory = {}, this.frequently = [], this.maxSamples = void 0 === u ? 10 : u, this.numFrequentlyItems = void 0 === a ? 32 : a, this.dirty = !1
        }
        return e = r, t = [{
            key: "overwriteHistory",
            value: function(e, t) {
                var n = this;
                this.usageHistory = o().mapValues(null != e ? e : {}, function(e) {
                    var t, n;
                    return t = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                l(e, t, n[t])
                            })
                        }
                        return e
                    }({}, e), n = (n = {
                        frecency: -1
                    }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }), t
                }), null == t || t.forEach(function(e) {
                    var t = e.key,
                        r = e.timestamp;
                    return n.track(t, r)
                }), this.markDirty()
            }
        }, {
            key: "markDirty",
            value: function() {
                this.dirty = !0
            }
        }, {
            key: "isDirty",
            value: function() {
                return this.dirty
            }
        }, {
            key: "track",
            value: function(e, t) {
                if (null != e) {
                    var n = Object.prototype.hasOwnProperty.call(this.usageHistory, e) ? this.usageHistory[e] : void 0;
                    if (null == n) n = {
                        totalUses: 1,
                        recentUses: [null != t ? t : Date.now()],
                        frecency: -1,
                        score: 0
                    };
                    else
                        for (n.frecency = -1, n.totalUses += 1, null == t ? n.recentUses.push(Date.now()) : (n.recentUses.push(t), n.recentUses.sort()); n.recentUses.length > this.maxSamples;) n.recentUses.shift();
                    this.usageHistory[e] = n, this.markDirty()
                }
            }
        }, {
            key: "getEntry",
            value: function(e) {
                return null == e ? null : (this.dirty && this.compute(), Object.prototype.hasOwnProperty.call(this.usageHistory, e) ? this.usageHistory[e] : void 0)
            }
        }, {
            key: "getScore",
            value: function(e) {
                var t = this.getEntry(e);
                return null != t ? t.score : null
            }
        }, {
            key: "getFrecency",
            value: function(e) {
                var t = this.getEntry(e);
                return null != t ? t.frecency : null
            }
        }, {
            key: "compute",
            value: function() {
                var e = this,
                    t = a()();
                o().forEach(this.usageHistory, function(n, r) {
                    var i = n.totalUses,
                        u = n.recentUses;
                    if (-1 === n.frecency) {
                        var s = e.computeBonus(r) / 100;
                        n.score = 0, o().forEach(u, function(r, o) {
                            if (o >= e.maxSamples) return !1;
                            var i = e.computeWeight(t.diff(a()(r), "days"));
                            n.score += s * i
                        }), n.score > 0 ? (n.recentUses.length > 0 && (n.frecency = Math.ceil(n.score / u.length * i)), e.usageHistory[r] = n) : delete e.usageHistory[r]
                    }
                }), this.frequently = o()(this.usageHistory).map(function(t, n) {
                    var r = e.lookupKey(n);
                    return null == r ? null : [r, t.frecency]
                }).filter(function(e) {
                    return null !== e
                }).sortBy(function(e) {
                    var t = c(e, 2);
                    return -(t[0], t[1])
                }).map(function(e) {
                    return c(e, 1)[0]
                }).take(this.numFrequentlyItems).value(), this.dirty = !1, this.afterCompute(this.usageHistory, this._frequently)
            }
        }, {
            key: "frequently",
            get: function() {
                return this.dirty && this.compute(), this._frequently
            },
            set: function(e) {
                this._frequently = e
            }
        }], s(e.prototype, t), n && s(e, n), r
    }();
    t.default = f
}