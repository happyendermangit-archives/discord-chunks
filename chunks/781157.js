function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isOnNewPanels: function() {
            return o
        },
        isSplitMessagesTab: function() {
            return l
        },
        isSplitMessagesTabAndOnMessagesTab: function() {
            return u
        },
        shouldHandleNewPanelsRoute: function() {
            return d
        }
    });
    var i = n("57132"),
        r = n("215355"),
        a = n("289551"),
        s = n("981631");

    function o() {
        return (0, i.isInMainTabsExperiment)()
    }

    function l() {
        return (0, i.isInMainTabsExperiment)() && !(0, r.getMergedTabsExperiment)({
            location: "isSplitMessagesTab"
        }).mergeTabs
    }

    function u() {
        if (!l()) return !1;
        let e = (0, a.default)();
        return (null == e ? void 0 : e.name) === "messages"
    }

    function d(e) {
        return !!o() && (!l() || null != e && e !== s.ME)
    }
}