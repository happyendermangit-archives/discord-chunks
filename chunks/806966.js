function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ApplicationCommandDiscoveryPickerStore: function() {
            return d
        },
        EmojiPickerStore: function() {
            return o
        },
        INACTIVE_CATEGORY_INDEX: function() {
            return r
        },
        SoundboardPickerStore: function() {
            return u
        },
        StickerPickerStore: function() {
            return l
        }
    });
    var i = n("652874");
    let r = -1,
        a = Object.freeze({
            inspectedExpressionPosition: {
                rowIndex: 0,
                columnIndex: 0
            },
            activeCategoryIndex: 0,
            searchPlaceholder: null
        });

    function s() {
        let e = (0, i.default)(e => a);
        return {
            useStore: e,
            getState: () => e.getState(),
            setInspectedExpressionPosition: (t, n, i) => {
                e.setState({
                    inspectedExpressionPosition: {
                        rowIndex: n,
                        columnIndex: t,
                        source: i
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
    let o = s(),
        l = s(),
        u = s(),
        d = s()
}