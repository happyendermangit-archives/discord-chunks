function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        open: function() {
            return r
        },
        openChannelCallPopout: function() {
            return a
        },
        close: function() {
            return o
        },
        setAlwaysOnTop: function() {
            return d
        }
    });
    var s = n("913144");
    let i = {
        menubar: !1,
        toolbar: !1,
        location: !1,
        directories: !1
    };

    function r(e, t, n) {
        return s.default.dispatch({
            type: "POPOUT_WINDOW_OPEN",
            key: e,
            features: {
                ...i,
                ...n
            },
            render: t
        })
    }

    function a(e) {
        return s.default.dispatch({
            type: "CHANNEL_CALL_POPOUT_WINDOW_OPEN",
            channel: e
        })
    }

    function o(e) {
        return s.default.dispatch({
            type: "POPOUT_WINDOW_CLOSE",
            key: e
        })
    }

    function d(e, t) {
        return s.default.dispatch({
            type: "POPOUT_WINDOW_SET_ALWAYS_ON_TOP",
            alwaysOnTop: t,
            key: e
        })
    }
}