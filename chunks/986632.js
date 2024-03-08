function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        INACTIVE_CATEGORY_INDEX: function() {
            return l
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
    var i = n("308503");
    let l = -1,
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
    let r = s(),
        o = s(),
        u = s(),
        d = s()
}