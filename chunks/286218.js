function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addCandidateContent: function() {
            return I
        },
        default: function() {
            return A
        },
        getCurrentlyShownCounts: function() {
            return v
        },
        isContentShown: function() {
            return O
        },
        removeCandidateContent: function() {
            return h
        },
        reset: function() {
            return g
        },
        useIsAnyContentShown: function() {
            return S
        },
        useIsContentShown: function() {
            return T
        }
    });
    var r = n("652874"),
        o = n("360636"),
        i = n("807286");

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function u(e) {
        return function(e) {
            if (Array.isArray(e)) return a(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var s = new i.TaskRunner,
        l = function() {
            return {
                candidates: new Map,
                shownFatigableCandidate: null,
                prevFatigableCandidate: null,
                recentlyShown: [],
                currentlyShown: new Set,
                currentlyShownGroup: new Set,
                lastWinnerTime: 0
            }
        },
        c = (0, r.default)(l),
        f = function(e) {
            var t, n;
            return t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r, o, i;
                        r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    })
                }
                return e
            }({}, e), n = (n = {
                candidates: new Map(e.candidates),
                currentlyShown: new Set(e.currentlyShown),
                currentlyShownGroup: new Set(e.currentlyShownGroup)
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
        },
        d = function(e, t) {
            var n;
            return null == t ? e : (null != t.content && e.currentlyShown.delete(t.content), null != t.groupName && e.currentlyShownGroup.delete(t.groupName), (null === (n = e.shownFatigableCandidate) || void 0 === n ? void 0 : n.content) === t.content && (e.shownFatigableCandidate = null), e)
        },
        _ = function(e, t) {
            if (null == t) return e;
            e.currentlyShown.add(t.content);
            var n, r, i = e.recentlyShown.filter(function(e) {
                return e !== t.content
            });
            return i.unshift(t.content), i.splice(5), e.recentlyShown = i, null != t.groupName && e.currentlyShownGroup.add(t.groupName), !o.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(t.content) && (e.shownFatigableCandidate = t, (null === (r = e.prevFatigableCandidate) || void 0 === r ? void 0 : r.content) !== t.content && (e.prevFatigableCandidate = t, e.lastWinnerTime = new Date().getTime())), null === (n = t.onAdded) || void 0 === n || n.call(t), e
        },
        E = function(e, t) {
            return e.candidates.delete(t.content), e
        },
        p = function(e, t) {
            return _(d(e, e.shownFatigableCandidate), t)
        },
        m = function(e) {
            var t = u(e.candidates.keys());
            return null !== e.prevFatigableCandidate && e.candidates.has(e.prevFatigableCandidate.content) && e.candidates.size > 1 && (t = t.filter(function(t) {
                var n;
                return t !== (null === (n = e.prevFatigableCandidate) || void 0 === n ? void 0 : n.content)
            })), e.candidates.get(t[Math.floor(Math.random() * t.length)])
        },
        y = function(e) {
            if (0 === e.candidates.size) return e;
            var t, n, r = new Date().getTime() - e.lastWinnerTime > 3e5;
            if (null != (t = e).prevFatigableCandidate && t.candidates.has(t.prevFatigableCandidate.content) && null == t.shownFatigableCandidate && !r) {
                ;
                return s.unschedule(), p(e, null != (n = e).prevFatigableCandidate ? n.candidates.get(n.prevFatigableCandidate.content) : void 0)
            }
            if (null != e.shownFatigableCandidate && !r || s.scheduled()) return e;
            var o = new Date().getTime();
            return null == e.shownFatigableCandidate && o - e.lastWinnerTime < 36e5 ? e : (s.schedule(function() {
                c.setState(function(e) {
                    var t = f(e);
                    return p(t, m(t))
                })
            }, 250), e)
        },
        I = function(e) {
            var t = o.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(e.content);
            c.setState(function(n) {
                var r, o, i = f(n);
                if (t) return _(i, e);
                return y((r = i, o = e, r.candidates.set(o.content, o), r))
            })
        },
        h = function(e, t) {
            c.setState(function(n) {
                var r = f(n);
                return t ? y(d(E(r, e), e)) : d(E(r, e), e)
            })
        },
        O = function(e) {
            return c.getState().currentlyShown.has(e)
        },
        T = function(e) {
            return c(function(t) {
                return t.currentlyShown.has(e)
            })
        },
        S = function(e) {
            return c(function(t) {
                return e.some(function(e) {
                    return t.currentlyShown.has(e)
                })
            })
        },
        v = function() {
            var e = u(c.getState().currentlyShown).filter(function(e) {
                return !o.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(e)
            }).length;
            return [c.getState().currentlyShown.size, e]
        },
        g = function() {
            c.setState(l), s.unschedule()
        };

    function A(e) {
        return c(e)
    }
}