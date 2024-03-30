function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        channelEditorPopupStore: function() {
            return a
        },
        dismissChannelEditorPopup: function() {
            return s
        },
        useChannelEditorPopup: function() {
            return u
        }
    });
    var r = n("470079"),
        o = n("652874"),
        i = Object.freeze({
            id: null,
            activeDescendant: null
        }),
        a = (0, o.default)(function() {
            return i
        });

    function u(e, t, n) {
        (0, r.useEffect)(function() {
            t ? a.setState({
                id: e,
                activeDescendant: n
            }) : a.setState({
                id: null,
                activeDescendant: null
            })
        }, [e, t, n])
    }

    function s() {
        a.setState(function() {
            return i
        })
    }
}