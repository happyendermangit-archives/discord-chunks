function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        channelEditorPopupStore: function() {
            return s
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
    let a = Object.freeze({
            id: null,
            activeDescendant: null
        }),
        s = (0, r.default)(() => a);

    function o(e, t, n) {
        (0, i.useEffect)(() => {
            t ? s.setState({
                id: e,
                activeDescendant: n
            }) : s.setState({
                id: null,
                activeDescendant: null
            })
        }, [e, t, n])
    }

    function l() {
        s.setState(() => a)
    }
}