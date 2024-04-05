function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addCandidateContent: function() {
            return A
        },
        default: function() {
            return C
        },
        getCurrentlyShownCounts: function() {
            return p
        },
        isContentShown: function() {
            return m
        },
        removeCandidateContent: function() {
            return h
        },
        reset: function() {
            return R
        },
        useIsAnyContentShown: function() {
            return O
        },
        useIsContentShown: function() {
            return N
        }
    }), n("47120"), n("733860");
    var i = n("652874"),
        r = n("261376");
    let s = new(n("499303")).TaskRunner,
        a = () => ({
            candidates: new Map,
            shownFatigableCandidate: null,
            prevFatigableCandidate: null,
            recentlyShown: [],
            currentlyShown: new Set,
            currentlyShownGroup: new Set,
            lastWinnerTime: 0
        }),
        o = (0, i.default)(a),
        l = e => ({
            ...e,
            candidates: new Map(e.candidates),
            currentlyShown: new Set(e.currentlyShown),
            currentlyShownGroup: new Set(e.currentlyShownGroup)
        }),
        u = (e, t) => {
            var n;
            return null == t ? e : (null != t.content && e.currentlyShown.delete(t.content), null != t.groupName && e.currentlyShownGroup.delete(t.groupName), (null === (n = e.shownFatigableCandidate) || void 0 === n ? void 0 : n.content) === t.content && (e.shownFatigableCandidate = null), e)
        },
        d = (e, t) => {
            var n, i;
            if (null == t) return e;
            e.currentlyShown.add(t.content);
            let s = e.recentlyShown.filter(e => e !== t.content);
            return s.unshift(t.content), s.splice(5), e.recentlyShown = s, null != t.groupName && e.currentlyShownGroup.add(t.groupName), !r.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(t.content) && (e.shownFatigableCandidate = t, (null === (i = e.prevFatigableCandidate) || void 0 === i ? void 0 : i.content) !== t.content && (e.prevFatigableCandidate = t, e.lastWinnerTime = new Date().getTime())), null === (n = t.onAdded) || void 0 === n || n.call(t), e
        },
        _ = (e, t) => (e.candidates.set(t.content, t), e),
        c = (e, t) => (e.candidates.delete(t.content), e),
        E = (e, t) => d(u(e, e.shownFatigableCandidate), t),
        I = e => null != e.prevFatigableCandidate ? e.candidates.get(e.prevFatigableCandidate.content) : void 0,
        T = e => {
            let t = [...e.candidates.keys()];
            return null !== e.prevFatigableCandidate && e.candidates.has(e.prevFatigableCandidate.content) && e.candidates.size > 1 && (t = t.filter(t => {
                var n;
                return t !== (null === (n = e.prevFatigableCandidate) || void 0 === n ? void 0 : n.content)
            })), e.candidates.get(t[Math.floor(Math.random() * t.length)])
        },
        f = e => null != e.prevFatigableCandidate && e.candidates.has(e.prevFatigableCandidate.content) && null == e.shownFatigableCandidate,
        S = e => {
            if (0 === e.candidates.size) return e;
            let t = new Date().getTime() - e.lastWinnerTime > 3e5;
            if (f(e) && !t) return s.unschedule(), E(e, I(e));
            if (null != e.shownFatigableCandidate && !t || s.scheduled()) return e;
            let n = new Date().getTime();
            return null == e.shownFatigableCandidate && n - e.lastWinnerTime < 36e5 ? e : (s.schedule(() => {
                o.setState(e => {
                    let t = l(e);
                    return E(t, T(t))
                })
            }, 250), e)
        },
        A = e => {
            let t = r.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(e.content);
            o.setState(n => {
                let i = l(n);
                return t ? d(i, e) : S(_(i, e))
            })
        },
        h = (e, t) => {
            o.setState(n => {
                let i = l(n);
                return t ? S(u(c(i, e), e)) : u(c(i, e), e)
            })
        },
        m = e => o.getState().currentlyShown.has(e),
        N = e => o(t => t.currentlyShown.has(e)),
        O = e => o(t => e.some(e => t.currentlyShown.has(e))),
        p = () => {
            let e = [...o.getState().currentlyShown].filter(e => !r.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(e)).length;
            return [o.getState().currentlyShown.size, e]
        },
        R = () => {
            o.setState(a), s.unschedule()
        };

    function C(e) {
        return o(e)
    }
}