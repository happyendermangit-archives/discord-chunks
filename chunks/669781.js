function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        chooseReplayPath: function() {
            return c
        },
        close: function() {
            return a
        },
        open: function() {
            return i
        },
        openReplay: function() {
            return u
        },
        setSection: function() {
            return s
        },
        setShouldRecordNextConnection: function() {
            return l
        }
    });
    var r = n("629815"),
        o = n("517727");

    function i(e) {
        r.default.dispatch({
            type: "RTC_DEBUG_MODAL_OPEN",
            section: e
        }), r.default.dispatch({
            type: "RTC_DEBUG_POPOUT_WINDOW_OPEN"
        })
    }

    function a() {
        r.default.dispatch({
            type: "RTC_DEBUG_MODAL_CLOSE"
        })
    }

    function u() {
        r.default.dispatch({
            type: "RTC_DEBUG_MODAL_OPEN_REPLAY"
        })
    }

    function s(e) {
        r.default.dispatch({
            type: "RTC_DEBUG_MODAL_SET_SECTION",
            section: e
        })
    }

    function l(e) {
        r.default.dispatch({
            type: "RTC_DEBUG_SET_RECORDING_FLAG",
            value: e
        })
    }

    function c() {
        o.default.fileManager.showOpenDialog({
            filters: [{
                name: "All Files",
                extensions: ["*"]
            }]
        }).then(function(e) {
            var t = 0 === e.length ? "" : e[0];
            r.default.dispatch({
                type: "RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH",
                path: t
            })
        })
    }
}