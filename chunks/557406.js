function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addResultListener: function() {
            return g
        },
        getCorrections: function() {
            return I
        },
        isMisspelled: function() {
            return m
        },
        isSupported: function() {
            return c
        },
        replaceWithCorrection: function() {
            return O
        },
        setAppLocale: function() {
            return S
        },
        setEnabled: function() {
            return d
        },
        setLearnedWords: function() {
            return E
        }
    });
    var r = n("517727"),
        o = n("331540"),
        i = n("374550");

    function a(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function u(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function u(e) {
                    a(i, r, o, u, s, "next", e)
                }

                function s(e) {
                    a(i, r, o, u, s, "throw", e)
                }
                u(void 0)
            })
        }
    }

    function s(e, t) {
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
    }

    function l() {
        return (null === r.default || void 0 === r.default ? void 0 : r.default.spellCheck) != null
    }

    function c() {
        return (0, i.isDesktop)() && l()
    }
    var f = c() ? (0, o.install)() : null;

    function d(e) {
        return _.apply(this, arguments)
    }

    function _() {
        return (_ = u(function(e) {
            var t;
            return s(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, f];
                    case 1:
                        if (null == (t = n.sent())) return [2];
                        return t.enabled = e, [2]
                }
            })
        })).apply(this, arguments)
    }

    function E(e) {
        return p.apply(this, arguments)
    }

    function p() {
        return (p = u(function(e) {
            var t;
            return s(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, f];
                    case 1:
                        if (null == (t = n.sent())) return [2];
                        return t.setLearnedWords(e), [2]
                }
            })
        })).apply(this, arguments)
    }

    function m(e) {
        return y.apply(this, arguments)
    }

    function y() {
        return (y = u(function(e) {
            var t, n, r = arguments;
            return s(this, function(o) {
                switch (o.label) {
                    case 0:
                        return t = r.length > 1 && void 0 !== r[1] && r[1], [4, f];
                    case 1:
                        if (null == (n = o.sent())) return [2, !1];
                        return [2, n.isMisspelled(e, t)]
                }
            })
        })).apply(this, arguments)
    }

    function I(e) {
        return h.apply(this, arguments)
    }

    function h() {
        return (h = u(function(e) {
            var t, n, r, o = arguments;
            return s(this, function(i) {
                switch (i.label) {
                    case 0:
                        return t = o.length > 1 && void 0 !== o[1] && o[1], n = o.length > 2 && void 0 !== o[2] ? o[2] : 5, [4, f];
                    case 1:
                        if (null == (r = i.sent())) return [2, []];
                        return [2, r.getCorrectionsForMisspelling(e, t).slice(0, n)]
                }
            })
        })).apply(this, arguments)
    }

    function O(e) {
        return T.apply(this, arguments)
    }

    function T() {
        return (T = u(function(e) {
            var t;
            return s(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, f];
                    case 1:
                        if (null == (t = n.sent())) return [2];
                        return t.replaceMisspelling(e), [2]
                }
            })
        })).apply(this, arguments)
    }

    function S(e) {
        return v.apply(this, arguments)
    }

    function v() {
        return (v = u(function(e) {
            var t;
            return s(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, f];
                    case 1:
                        if (null == (t = n.sent())) return [2];
                        return t.setAppLocale(e), [2]
                }
            })
        })).apply(this, arguments)
    }

    function g(e) {
        if (!l()) return function() {};
        var t = r.default.spellCheck.on("spellcheck-result", e);
        return null != t ? t : function() {}
    }
}