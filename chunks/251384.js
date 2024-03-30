function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        closeExpressionPicker: function() {
            return f
        },
        openExpressionPicker: function() {
            return c
        },
        setExpressionPickerView: function() {
            return E
        },
        setSearchQuery: function() {
            return p
        },
        toggleExpressionPicker: function() {
            return _
        },
        toggleMultiExpressionPicker: function() {
            return d
        },
        useExpressionPickerStore: function() {
            return m
        }
    });
    var r = n("97613"),
        o = n.n(r),
        i = n("652874"),
        a = n("868888"),
        u = n("980671"),
        s = Object.freeze({
            activeView: null,
            lastActiveView: null,
            activeViewType: null,
            searchQuery: "",
            isSearchSuggestion: !1,
            pickerId: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                return o()(e)
            }()
        }),
        l = (0, i.default)((0, a.persist)(function(e, t) {
            return s
        }, {
            name: "expression-picker-last-active-view",
            partialize: function(e) {
                return {
                    lastActiveView: e.lastActiveView
                }
            }
        })),
        c = function(e, t) {
            l.setState({
                activeView: e,
                activeViewType: t,
                lastActiveView: l.getState().activeView
            })
        },
        f = function(e) {
            var t = l.getState();
            if (void 0 === e || e === t.activeViewType) null !== t.activeView && l.setState({
                activeView: null,
                activeViewType: null,
                lastActiveView: t.activeView
            })
        },
        d = function(e) {
            var t, n = l.getState();
            null == n.activeView ? c(null !== (t = n.lastActiveView) && void 0 !== t ? t : u.ExpressionPickerViewType.EMOJI, e) : f()
        },
        _ = function(e, t) {
            l.getState().activeView === e ? f() : c(e, t)
        },
        E = function(e) {
            l.setState({
                activeView: e,
                lastActiveView: l.getState().activeView
            })
        },
        p = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            l.setState({
                searchQuery: e,
                isSearchSuggestion: t
            })
        },
        m = l
}