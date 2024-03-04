function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        open: function() {
            return r
        },
        close: function() {
            return a
        },
        openReplay: function() {
            return o
        },
        setSection: function() {
            return l
        },
        setShouldRecordNextConnection: function() {
            return u
        },
        chooseReplayPath: function() {
            return d
        }
    });
    var i = n("913144"),
        s = n("49671");

    function r(e) {
        i.default.dispatch({
            type: "RTC_DEBUG_MODAL_OPEN",
            section: e
        }), i.default.dispatch({
            type: "RTC_DEBUG_POPOUT_WINDOW_OPEN"
        })
    }

    function a() {
        i.default.dispatch({
            type: "RTC_DEBUG_MODAL_CLOSE"
        })
    }

    function o() {
        i.default.dispatch({
            type: "RTC_DEBUG_MODAL_OPEN_REPLAY"
        })
    }

    function l(e) {
        i.default.dispatch({
            type: "RTC_DEBUG_MODAL_SET_SECTION",
            section: e
        })
    }

    function u(e) {
        i.default.dispatch({
            type: "RTC_DEBUG_SET_RECORDING_FLAG",
            value: e
        })
    }

    function d() {
        s.default.fileManager.showOpenDialog({
            filters: [{
                name: "All Files",
                extensions: ["*"]
            }]
        }).then(e => {
            let t = 0 === e.length ? "" : e[0];
            i.default.dispatch({
                type: "RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH",
                path: t
            })
        })
    }
}