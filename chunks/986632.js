function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        INACTIVE_CATEGORY_INDEX: function() {
            return i
        },
        EmojiPickerStore: function() {
            return r
        },
        StickerPickerStore: function() {
            return o
        },
        SoundboardPickerStore: function() {
            return u
        },
        ApplicationCommandDiscoveryPickerStore: function() {
            return d
        }
    });
    var l = n("308503");
    let i = -1,
        a = Object.freeze({
            inspectedExpressionPosition: {
                rowIndex: 0,
                columnIndex: 0
            },
            activeCategoryIndex: 0,
            searchPlaceholder: null
        });

    function s() {
        let e = (0, l.default)(e => a);
        return {
            useStore: e,
            getState: () => e.getState(),
            setInspectedExpressionPosition: (t, n, l) => {
                e.setState({
                    inspectedExpressionPosition: {
                        rowIndex: n,
                        columnIndex: t,
                        source: l
                    }
                })
            },
            setActiveCategoryIndex: t => {
                e.setState({
                    activeCategoryIndex: t
                })
            },
            setSearchPlaceholder: t => {
                e.setState({
                    searchPlaceholder: t
                })
            },
            resetStoreState: () => {
                e.setState(a)
            }
        }
    }
    let r = s(),
        o = s(),
        u = s(),
        d = s()
}