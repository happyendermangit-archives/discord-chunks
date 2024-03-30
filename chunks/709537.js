function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isOnNewPanels: function() {
            return u
        },
        isSplitMessagesTab: function() {
            return s
        },
        isSplitMessagesTabAndOnMessagesTab: function() {
            return l
        },
        shouldHandleNewPanelsRoute: function() {
            return c
        }
    });
    var r = n("895517"),
        o = n("807696"),
        i = n("167618"),
        a = n("281767");

    function u() {
        return (0, r.isInMainTabsExperiment)()
    }

    function s() {
        return (0, r.isInMainTabsExperiment)() && !(0, o.getNavYouBarExperiment)({
            location: "isSplitMessagesTab"
        }).showYouBar
    }

    function l() {
        if (!s()) return !1;
        var e = (0, i.default)();
        return (null == e ? void 0 : e.name) === "messages"
    }

    function c(e) {
        return !!u() && (!s() || null != e && e !== a.ME)
    }
}