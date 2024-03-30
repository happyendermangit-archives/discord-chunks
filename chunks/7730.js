function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canEnableForcedColors: function() {
            return O
        }
    });
    var r = n("470079"),
        o = n("784184"),
        i = n("629815"),
        a = n("208454"),
        u = n("870331"),
        s = n("374550"),
        l = n("357337"),
        c = n("622780"),
        f = n("281767");

    function d(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }
    var _ = window.matchMedia("(prefers-reduced-motion: reduce)"),
        E = window.matchMedia("(prefers-contrast: more)"),
        p = window.matchMedia("(prefers-contrast: less)"),
        m = window.matchMedia("(prefers-color-scheme: dark)"),
        y = window.matchMedia("(prefers-color-scheme: light)"),
        I = window.matchMedia("(forced-colors: active)"),
        h = 5;

    function O() {
        return "windows" === (0, s.getOS)()
    }
    t.default = {
        initBasic: function() {
            _.addListener(this.handleSystemPrefersReducedMotionChanged), this.handleSystemPrefersReducedMotionChanged(_), m.addListener(this.handleSystemColorPreferencesChanged), y.addListener(this.handleSystemColorPreferencesChanged), I.addListener(this.handleSystemColorPreferencesChanged), this.handleSystemColorPreferencesChanged(), E.addListener(this.handleSystemPrefersContrastChanged), p.addListener(this.handleSystemPrefersContrastChanged), this.handleSystemPrefersContrastChanged()
        },
        init: function() {
            this.initBasic(), i.default.subscribe("ACCESSIBILITY_COLORBLIND_TOGGLE", function() {
                u.default.track(f.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
                    colorblind_enabled: c.default.colorblindMode
                })
            }), i.default.subscribe("ACCESSIBILITY_SET_SATURATION", function(e) {
                u.default.track(f.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
                    saturation_level: e.saturation
                })
            })
        },
        maybeShowKeyboardNavigationExplainerModal: function() {
            var e, t;
            if (h = Math.max(h - 1, 0), !(null == (e = a.default.getCurrentUser()) || Date.now() - +e.createdAt < 864e5) && !c.default.keyboardNavigationExplainerModalSeen && 0 === h) {
                ;
                (0, o.openModalLazy)((t = function() {
                    var e;
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
                    }(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, Promise.all([n.e("99387"), n.e("81730"), n.e("80777")]).then(n.bind(n, "862065"))];
                            case 1:
                                return e = t.sent().default, [2, function(t) {
                                    return r.createElement(e, t)
                                }]
                        }
                    })
                }, function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var i = t.apply(e, n);

                        function a(e) {
                            d(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            d(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    })
                }))
            }
        },
        handleSystemPrefersReducedMotionChanged: function(e) {
            i.default.wait(function() {
                l.systemPrefersReducedMotionChanged(e.matches ? "reduce" : "no-preference")
            })
        },
        handleSystemColorPreferencesChanged: function() {
            m.matches ? e = f.ThemeTypes.DARK : y.matches && (e = f.ThemeTypes.LIGHT);
            var e, t = (!s.isPlatformEmbedded || O()) && I.matches ? "active" : "none";
            i.default.wait(function() {
                l.systemColorPreferencesChanged(e, t)
            })
        },
        handleSystemPrefersContrastChanged: function() {
            var e = "no-preference";
            E.matches ? e = "more" : p.matches && (e = "less"), i.default.wait(function() {
                l.systemPrefersContrastChanged(e)
            })
        }
    }
}