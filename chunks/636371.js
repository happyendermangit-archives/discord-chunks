function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        queueHighFive: function() {
            return o
        },
        removeHighFive: function() {
            return n
        },
        setHighFiveEnabled: function() {
            return r
        },
        completeHighFive: function() {
            return i
        },
        clearCompletedHighFive: function() {
            return a
        }
    });
    var t = E("913144");

    function o(e, _, E) {
        t.default.dispatch({
            type: "HIGH_FIVE_QUEUE",
            userId: _,
            channelId: E,
            emoji: e
        })
    }

    function n(e, _) {
        t.default.dispatch({
            type: "HIGH_FIVE_REMOVE",
            channelId: _,
            userId: e
        })
    }

    function r(e) {
        t.default.dispatch({
            type: "HIGH_FIVE_SET_ENABLED",
            enabled: e
        })
    }

    function i(e, _, E, o) {
        t.default.dispatch({
            type: "HIGH_FIVE_COMPLETE",
            waitingUserId: e,
            completingUserId: _,
            channelId: E,
            completingEmoji: o
        })
    }

    function a(e, _, E) {
        t.default.dispatch({
            type: "HIGH_FIVE_COMPLETE_CLEAR",
            firstUserId: e,
            secondUserId: _,
            channelId: E
        })
    }
}