function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addCandidateContent: function() {
            return S
        },
        removeCandidateContent: function() {
            return v
        },
        isContentShown: function() {
            return T
        },
        useIsContentShown: function() {
            return I
        },
        useIsAnyContentShown: function() {
            return A
        },
        getCurrentlyShownCounts: function() {
            return C
        },
        reset: function() {
            return y
        },
        default: function() {
            return N
        }
    }), n("222007"), n("843762");
    var i = n("308503"),
        s = n("495226"),
        r = n("543322");
    let a = new r.TaskRunner,
        o = () => ({
            candidates: new Map,
            shownFatigableCandidate: null,
            prevFatigableCandidate: null,
            recentlyShown: [],
            currentlyShown: new Set,
            currentlyShownGroup: new Set,
            lastWinnerTime: 0
        }),
        l = (0, i.default)(o),
        u = e => ({
            ...e,
            candidates: new Map(e.candidates),
            currentlyShown: new Set(e.currentlyShown),
            currentlyShownGroup: new Set(e.currentlyShownGroup)
        }),
        d = (e, t) => {
            var n;
            return null == t ? e : (null != t.content && e.currentlyShown.delete(t.content), null != t.groupName && e.currentlyShownGroup.delete(t.groupName), (null === (n = e.shownFatigableCandidate) || void 0 === n ? void 0 : n.content) === t.content && (e.shownFatigableCandidate = null), e)
        },
        c = (e, t) => {
            var n, i;
            if (null == t) return e;
            e.currentlyShown.add(t.content);
            let r = e.recentlyShown.filter(e => e !== t.content);
            return r.unshift(t.content), r.splice(5), e.recentlyShown = r, null != t.groupName && e.currentlyShownGroup.add(t.groupName), !s.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(t.content) && (e.shownFatigableCandidate = t, (null === (i = e.prevFatigableCandidate) || void 0 === i ? void 0 : i.content) !== t.content && (e.prevFatigableCandidate = t, e.lastWinnerTime = new Date().getTime())), null === (n = t.onAdded) || void 0 === n || n.call(t), e
        },
        f = (e, t) => (e.candidates.set(t.content, t), e),
        _ = (e, t) => (e.candidates.delete(t.content), e),
        E = (e, t) => c(d(e, e.shownFatigableCandidate), t),
        h = e => null != e.prevFatigableCandidate ? e.candidates.get(e.prevFatigableCandidate.content) : void 0,
        g = e => {
            let t = [...e.candidates.keys()];
            return null !== e.prevFatigableCandidate && e.candidates.has(e.prevFatigableCandidate.content) && e.candidates.size > 1 && (t = t.filter(t => {
                var n;
                return t !== (null === (n = e.prevFatigableCandidate) || void 0 === n ? void 0 : n.content)
            })), e.candidates.get(t[Math.floor(Math.random() * t.length)])
        },
        m = e => null != e.prevFatigableCandidate && e.candidates.has(e.prevFatigableCandidate.content) && null == e.shownFatigableCandidate,
        p = e => {
            if (0 === e.candidates.size) return e;
            let t = new Date().getTime() - e.lastWinnerTime > 3e5;
            if (m(e) && !t) return a.unschedule(), E(e, h(e));
            if (null != e.shownFatigableCandidate && !t || a.scheduled()) return e;
            let n = new Date().getTime();
            return null == e.shownFatigableCandidate && n - e.lastWinnerTime < 36e5 ? e : (a.schedule(() => {
                l.setState(e => {
                    let t = u(e);
                    return E(t, g(t))
                })
            }, 250), e)
        },
        S = e => {
            let t = s.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(e.content);
            l.setState(n => {
                let i = u(n);
                return t ? c(i, e) : p(f(i, e))
            })
        },
        v = (e, t) => {
            l.setState(n => {
                let i = u(n);
                return t ? p(d(_(i, e), e)) : d(_(i, e), e)
            })
        },
        T = e => l.getState().currentlyShown.has(e),
        I = e => l(t => t.currentlyShown.has(e)),
        A = e => l(t => e.some(e => t.currentlyShown.has(e))),
        C = () => {
            let e = [...l.getState().currentlyShown].filter(e => !s.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(e)).length,
                t = l.getState().currentlyShown.size;
            return [t, e]
        },
        y = () => {
            l.setState(o), a.unschedule()
        };

    function N(e) {
        return l(e)
    }
}