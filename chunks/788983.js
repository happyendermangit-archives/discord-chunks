function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        close: function() {
            return o
        },
        open: function() {
            return s
        },
        openChannelCallPopout: function() {
            return a
        },
        setAlwaysOnTop: function() {
            return l
        }
    });
    var i = n("570140");
    let r = {
        menubar: !1,
        toolbar: !1,
        location: !1,
        directories: !1
    };

    function s(e, t, n) {
        return i.default.dispatch({
            type: "POPOUT_WINDOW_OPEN",
            key: e,
            features: {
                ...r,
                ...n
            },
            render: t
        })
    }

    function a(e) {
        return i.default.dispatch({
            type: "CHANNEL_CALL_POPOUT_WINDOW_OPEN",
            channel: e
        })
    }

    function o(e) {
        return i.default.dispatch({
            type: "POPOUT_WINDOW_CLOSE",
            key: e
        })
    }

    function l(e, t) {
        return i.default.dispatch({
            type: "POPOUT_WINDOW_SET_ALWAYS_ON_TOP",
            alwaysOnTop: t,
            key: e
        })
    }
}