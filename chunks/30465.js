function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        channelEditorPopupStore: function() {
            return a
        },
        dismissChannelEditorPopup: function() {
            return l
        },
        useChannelEditorPopup: function() {
            return o
        }
    });
    var i = n("470079"),
        r = n("652874");
    let s = Object.freeze({
            id: null,
            activeDescendant: null
        }),
        a = (0, r.default)(() => s);

    function o(e, t, n) {
        (0, i.useEffect)(() => {
            t ? a.setState({
                id: e,
                activeDescendant: n
            }) : a.setState({
                id: null,
                activeDescendant: null
            })
        }, [e, t, n])
    }

    function l() {
        a.setState(() => s)
    }
}