function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        channelEditorPopupStore: function() {
            return s
        },
        useChannelEditorPopup: function() {
            return r
        },
        dismissChannelEditorPopup: function() {
            return o
        }
    });
    var i = n("884691"),
        l = n("308503");
    let a = Object.freeze({
            id: null,
            activeDescendant: null
        }),
        s = (0, l.default)(() => a);

    function r(e, t, n) {
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

    function o() {
        s.setState(() => a)
    }
}