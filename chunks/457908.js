function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MediaSinkWantsLadder: function() {
            return a
        }
    });
    var r = n("439386");

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var a = function() {
        var e, t, n;

        function a() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.defaultVideoQualityOptions;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, a), i(this, "pixelBudget", void 0), i(this, "ladder", void 0), i(this, "orderedLadder", void 0);
            var t = e.videoBudget,
                n = t.width,
                o = t.height;
            if (n <= 0 || o <= 0) throw Error("Invalid argument");
            this.pixelBudget = n * o, this.ladder = a.calculateLadder(this.pixelBudget), this.orderedLadder = a.calculateOrderedLadder(this.ladder)
        }
        return e = a, t = [{
            key: "getMaxSinkValue",
            value: function(e) {
                if (e < 0) throw Error("getMaxSinkValue: Requested " + e);
                var t = this.orderedLadder[0].wantValue,
                    n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var i, a = this.orderedLadder[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                        var u = i.value,
                            s = u.pixelCount,
                            l = u.wantValue;
                        if (s * e > this.pixelBudget) break;
                        t = l
                    }
                } catch (e) {
                    r = !0, o = e
                } finally {
                    try {
                        !n && null != a.return && a.return()
                    } finally {
                        if (r) throw o
                    }
                }
                return t
            }
        }, {
            key: "getResolution",
            value: function(e) {
                var t = null,
                    n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var i, a = this.orderedLadder[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                        var u = i.value;
                        if (e >= u.wantValue) t = u;
                        else break
                    }
                } catch (e) {
                    r = !0, o = e
                } finally {
                    try {
                        !n && null != a.return && a.return()
                    } finally {
                        if (r) throw o
                    }
                }
                return {
                    width: (t = null != t ? t : this.orderedLadder[0]).width,
                    height: t.height,
                    budgetPortion: t.budgetPortion,
                    mutedFramerate: t.mutedFramerate,
                    framerate: t.framerate
                }
            }
        }], n = [{
            key: "calculateLadder",
            value: function(e) {
                for (var t = new Set([0, 4, 8, 10]), n = [], o = 1; o < 4096; ++o) {
                    var i = 16 * o / 9;
                    if (t.has(i % 16) && t.has(o % 16)) {
                        var u = i * o;
                        n.push({
                            pixelCount: u,
                            width: i,
                            height: o,
                            budgetPortion: u / e,
                            wantValue: 0
                        })
                    }
                }
                for (var s = {}, l = 0, c = 100, f = 1; f <= 25; ++f) {
                    var d = 0,
                        _ = 0,
                        E = 0,
                        p = !0,
                        m = !1,
                        y = void 0;
                    try {
                        for (var I, h = n[Symbol.iterator](); !(p = (I = h.next()).done); p = !0) {
                            var O = I.value;
                            if (O.pixelCount * f > e) break;
                            d = O.width, _ = O.height, E = O.budgetPortion
                        }
                    } catch (e) {
                        m = !0, y = e
                    } finally {
                        try {
                            !p && null != h.return && h.return()
                        } finally {
                            if (m) throw y
                        }
                    }
                    if (l !== d) {
                        var T = a.getMutedFramerate(c);
                        s[c] = {
                            width: d,
                            height: _,
                            budgetPortion: E,
                            mutedFramerate: T,
                            framerate: r.VIDEO_QUALITY_FRAMERATE
                        }, c -= 10, l = d
                    }
                }
                return s
            }
        }, {
            key: "getMutedFramerate",
            value: function(e) {
                return e <= 20 ? r.VIDEO_QUALITY_FRAMERATE_MUTED_2 : r.VIDEO_QUALITY_FRAMERATE_MUTED
            }
        }, {
            key: "calculateOrderedLadder",
            value: function(e) {
                var t = [],
                    n = Object.keys(e).map(function(e) {
                        return Number(e)
                    }).sort(function(e, t) {
                        return e - t
                    }),
                    r = !0,
                    o = !1,
                    a = void 0;
                try {
                    for (var u, s = n[Symbol.iterator](); !(r = (u = s.next()).done); r = !0) {
                        var l = u.value;
                        if (0 !== l) {
                            var c = e[l];
                            t.push(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))), r.forEach(function(t) {
                                        i(e, t, n[t])
                                    })
                                }
                                return e
                            }({
                                pixelCount: c.width * c.height,
                                wantValue: l
                            }, c))
                        }
                    }
                } catch (e) {
                    o = !0, a = e
                } finally {
                    try {
                        !r && null != s.return && s.return()
                    } finally {
                        if (o) throw a
                    }
                }
                return t
            }
        }], t && o(e.prototype, t), n && o(e, n), a
    }()
}