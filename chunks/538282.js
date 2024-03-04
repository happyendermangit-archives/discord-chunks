function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        openExpressionPicker: function() {
            return c
        },
        closeExpressionPicker: function() {
            return d
        },
        toggleMultiExpressionPicker: function() {
            return h
        },
        toggleExpressionPicker: function() {
            return f
        },
        setExpressionPickerView: function() {
            return m
        },
        setSearchQuery: function() {
            return p
        },
        useExpressionPickerStore: function() {
            return I
        }
    });
    var s = r("995008"),
        n = r.n(s),
        l = r("308503"),
        i = r("136759"),
        a = r("13030");
    let o = Object.freeze({
            activeView: null,
            lastActiveView: null,
            activeViewType: null,
            searchQuery: "",
            isSearchSuggestion: !1,
            pickerId: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                return n(e)
            }()
        }),
        u = (0, l.default)((0, i.persist)((e, t) => o, {
            name: "expression-picker-last-active-view",
            partialize: e => ({
                lastActiveView: e.lastActiveView
            })
        })),
        c = (e, t) => {
            u.setState({
                activeView: e,
                activeViewType: t,
                lastActiveView: u.getState().activeView
            })
        },
        d = e => {
            let t = u.getState();
            if (void 0 === e || e === t.activeViewType) null !== t.activeView && u.setState({
                activeView: null,
                activeViewType: null,
                lastActiveView: t.activeView
            })
        },
        h = e => {
            let t = u.getState();
            if (null == t.activeView) {
                var r;
                c(null !== (r = t.lastActiveView) && void 0 !== r ? r : a.ExpressionPickerViewType.EMOJI, e)
            } else d()
        },
        f = (e, t) => {
            u.getState().activeView === e ? d() : c(e, t)
        },
        m = e => {
            u.setState({
                activeView: e,
                lastActiveView: u.getState().activeView
            })
        },
        p = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            u.setState({
                searchQuery: e,
                isSearchSuggestion: t
            })
        },
        I = u
}