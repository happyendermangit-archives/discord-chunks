function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        clearCompletedHighFive: function() {
            return s
        },
        completeHighFive: function() {
            return u
        },
        queueHighFive: function() {
            return o
        },
        removeHighFive: function() {
            return i
        },
        setHighFiveEnabled: function() {
            return a
        }
    });
    var r = n("629815");

    function o(e, t, n) {
        r.default.dispatch({
            type: "HIGH_FIVE_QUEUE",
            userId: t,
            channelId: n,
            emoji: e
        })
    }

    function i(e, t) {
        r.default.dispatch({
            type: "HIGH_FIVE_REMOVE",
            channelId: t,
            userId: e
        })
    }

    function a(e) {
        r.default.dispatch({
            type: "HIGH_FIVE_SET_ENABLED",
            enabled: e
        })
    }

    function u(e, t, n, o) {
        r.default.dispatch({
            type: "HIGH_FIVE_COMPLETE",
            waitingUserId: e,
            completingUserId: t,
            channelId: n,
            completingEmoji: o
        })
    }

    function s(e, t, n) {
        r.default.dispatch({
            type: "HIGH_FIVE_COMPLETE_CLEAR",
            firstUserId: e,
            secondUserId: t,
            channelId: n
        })
    }
}