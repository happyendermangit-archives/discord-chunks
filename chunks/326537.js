function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("807471"),
        o = n("517727"),
        i = n("94498"),
        a = n("131900");

    function u(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function s(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var d = [0, 0];

    function _(e) {
        for (var t = e.toString(16); t.length < 4;) t = "0" + t;
        return t
    }

    function E(e) {
        return [4098, e]
    }
    var p = [function(e, t, n, r) {
        for (var o = [], a = n.map(function(e) {
                return e.map(_).join(":")
            }).join(", "), u = 0; u < r.length; u++) {
            var s = {};
            s[r[u]] = "1", o.push({
                id: u + 1,
                label: r[u],
                config: s
            })
        }
        return {
            gpus: n,
            experiment: (0, i.createExperiment)({
                kind: "user",
                id: e,
                label: "GPU Workarounds: ".concat(t, " (").concat(a, ")"),
                defaultConfig: {},
                treatments: o
            })
        }
    }("2024-03_amd_vdec_tests_1", "AMD video decode tests 1", [
        [4098, 5686],
        [4098, 5688]
    ], ["disable_media_foundation_clear_playback", "disable_d3d11_video_decoder"])];

    function m(e) {
        var t = !0,
            n = !1,
            r = void 0;
        try {
            for (var o, i = e[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                var a = o.value;
                if (a[0] === d[0] && a[1] === d[1]) return !0
            }
        } catch (e) {
            n = !0, r = e
        } finally {
            try {
                !t && null != i.return && i.return()
            } finally {
                if (n) throw r
            }
        }
        return !1
    }
    var y = !1;

    function I() {
        var e = {},
            t = !0,
            n = !1,
            r = void 0;
        try {
            for (var o, i = p[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                var u = o.value;
                if (m(u.gpus)) {
                    var s = u.experiment.getCurrentConfig({
                        location: "updateFlags"
                    });
                    e = function(e) {
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
                    }({}, e, s)
                }
            }
        } catch (e) {
            n = !0, r = e
        } finally {
            try {
                !t && null != i.return && i.return()
            } finally {
                if (n) throw r
            }
        }
        a.default.setChromiumSwitches(e)
    }
    var h = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && f(e, t)
        }(i, e);
        var t, n, r = (t = i, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = c(t);
            if (n) {
                var a = c(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : u(e)
        });

        function i() {
            var e, t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, i), e = r.apply(this, arguments), l(u(e), "actions", {
                POST_CONNECTION_OPEN: (t = function() {
                    var e, t, n, r, i, a, u, s, l, c, f, _, E, h, O, T, S, v;
                    return function(e, t) {
                        var n, r, o, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: u(0),
                            throw: u(1),
                            return: u(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function u(i) {
                            return function(u) {
                                return function(i) {
                                    if (n) throw TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, r = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1], o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, a)
                                    } catch (e) {
                                        i = [6, e], r = 0
                                    } finally {
                                        n = o = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, u])
                            }
                        }
                    }(this, function(v) {
                        switch (v.label) {
                            case 0:
                                if (v.trys.push([0, 2, , 3]), y || (null === (t = window.DiscordNative) || void 0 === t ? void 0 : null === (e = t.gpuSettings) || void 0 === e ? void 0 : e.setChromiumSwitches) == null) return [2];
                                return [4, o.default.processUtils.getSystemInfo()];
                            case 1:
                                r = v.sent(), a = !0, u = !1, s = void 0;
                                try {
                                    for (l = (null !== (i = null === (n = r.electronGPUInfo) || void 0 === n ? void 0 : n.gpuDevice) && void 0 !== i ? i : [])[Symbol.iterator](); !(a = (c = l.next()).done); a = !0) f = c.value, !0 === f.active && (d = [f.vendorId, f.deviceId])
                                } catch (e) {
                                    u = !0, s = e
                                } finally {
                                    try {
                                        !a && null != l.return && l.return()
                                    } finally {
                                        if (u) throw s
                                    }
                                }
                                y = !0, _ = !0, E = !1, h = void 0;
                                try {
                                    for (O = p[Symbol.iterator](); !(_ = (T = O.next()).done); _ = !0) S = T.value, m(S.gpus) && S.experiment.subscribe({
                                        location: "GPU experiment subscription"
                                    }, I)
                                } catch (e) {
                                    E = !0, h = e
                                } finally {
                                    try {
                                        !_ && null != O.return && O.return()
                                    } finally {
                                        if (E) throw h
                                    }
                                }
                                return I(), [3, 3];
                            case 2:
                                return v.sent(), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                }, function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var i = t.apply(e, n);

                        function a(e) {
                            s(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            s(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    })
                })
            }), e
        }
        return i
    }(r.default);
    t.default = new h
}