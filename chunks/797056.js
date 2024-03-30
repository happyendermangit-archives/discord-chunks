function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ApplicationCommandDiscoveryPickerStore: function() {
            return c
        },
        EmojiPickerStore: function() {
            return u
        },
        INACTIVE_CATEGORY_INDEX: function() {
            return o
        },
        SoundboardPickerStore: function() {
            return l
        },
        StickerPickerStore: function() {
            return s
        }
    });
    var r = n("652874"),
        o = -1,
        i = Object.freeze({
            inspectedExpressionPosition: {
                rowIndex: 0,
                columnIndex: 0
            },
            activeCategoryIndex: 0,
            searchPlaceholder: null
        });

    function a() {
        var e = (0, r.default)(function(e) {
            return i
        });
        return {
            useStore: e,
            getState: function() {
                return e.getState()
            },
            setInspectedExpressionPosition: function(t, n, r) {
                e.setState({
                    inspectedExpressionPosition: {
                        rowIndex: n,
                        columnIndex: t,
                        source: r
                    }
                })
            },
            setActiveCategoryIndex: function(t) {
                e.setState({
                    activeCategoryIndex: t
                })
            },
            setSearchPlaceholder: function(t) {
                e.setState({
                    searchPlaceholder: t
                })
            },
            resetStoreState: function() {
                e.setState(i)
            }
        }
    }
    var u = a(),
        s = a(),
        l = a(),
        c = a()
}