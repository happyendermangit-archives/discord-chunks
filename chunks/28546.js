function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        closeExpressionPicker: function() {
            return _
        },
        openExpressionPicker: function() {
            return d
        },
        setExpressionPickerView: function() {
            return I
        },
        setSearchQuery: function() {
            return T
        },
        toggleExpressionPicker: function() {
            return E
        },
        toggleMultiExpressionPicker: function() {
            return c
        },
        useExpressionPickerStore: function() {
            return f
        }
    });
    var i = n("97613"),
        r = n.n(i),
        a = n("652874"),
        s = n("868888"),
        o = n("957825");
    let l = Object.freeze({
            activeView: null,
            lastActiveView: null,
            activeViewType: null,
            searchQuery: "",
            isSearchSuggestion: !1,
            pickerId: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                return r()(e)
            }()
        }),
        u = (0, a.default)((0, s.persist)((e, t) => l, {
            name: "expression-picker-last-active-view",
            partialize: e => ({
                lastActiveView: e.lastActiveView
            })
        })),
        d = (e, t) => {
            u.setState({
                activeView: e,
                activeViewType: t,
                lastActiveView: u.getState().activeView
            })
        },
        _ = e => {
            let t = u.getState();
            if (void 0 === e || e === t.activeViewType) null !== t.activeView && u.setState({
                activeView: null,
                activeViewType: null,
                lastActiveView: t.activeView
            })
        },
        c = e => {
            let t = u.getState();
            if (null == t.activeView) {
                var n;
                d(null !== (n = t.lastActiveView) && void 0 !== n ? n : o.ExpressionPickerViewType.EMOJI, e)
            } else _()
        },
        E = (e, t) => {
            u.getState().activeView === e ? _() : d(e, t)
        },
        I = e => {
            u.setState({
                activeView: e,
                lastActiveView: u.getState().activeView
            })
        },
        T = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            u.setState({
                searchQuery: e,
                isSearchSuggestion: t
            })
        },
        f = u
}