function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        clearCompletedHighFive: function() {
            return l
        },
        completeHighFive: function() {
            return o
        },
        queueHighFive: function() {
            return r
        },
        removeHighFive: function() {
            return a
        },
        setHighFiveEnabled: function() {
            return s
        }
    });
    var i = n("570140");

    function r(e, t, n) {
        i.default.dispatch({
            type: "HIGH_FIVE_QUEUE",
            userId: t,
            channelId: n,
            emoji: e
        })
    }

    function a(e, t) {
        i.default.dispatch({
            type: "HIGH_FIVE_REMOVE",
            channelId: t,
            userId: e
        })
    }

    function s(e) {
        i.default.dispatch({
            type: "HIGH_FIVE_SET_ENABLED",
            enabled: e
        })
    }

    function o(e, t, n, r) {
        i.default.dispatch({
            type: "HIGH_FIVE_COMPLETE",
            waitingUserId: e,
            completingUserId: t,
            channelId: n,
            completingEmoji: r
        })
    }

    function l(e, t, n) {
        i.default.dispatch({
            type: "HIGH_FIVE_COMPLETE_CLEAR",
            firstUserId: e,
            secondUserId: t,
            channelId: n
        })
    }
}