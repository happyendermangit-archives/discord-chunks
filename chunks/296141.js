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
    var l = n("884691"),
        i = n("308503");
    let a = Object.freeze({
            id: null,
            activeDescendant: null
        }),
        s = (0, i.default)(() => a);

    function r(e, t, n) {
        (0, l.useEffect)(() => {
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