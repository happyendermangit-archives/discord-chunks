function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addQueued: function() {
            return o
        },
        fetchMessageInteractionData: function() {
            return u
        },
        queueInteractionComponentState: function() {
            return a
        },
        setFailed: function() {
            return l
        }
    });
    var i = n("544891"),
        r = n("570140"),
        s = n("981631");

    function a(e, t, n, i) {
        r.default.dispatch({
            type: "QUEUE_INTERACTION_COMPONENT_STATE",
            messageId: e,
            nonce: t,
            state: n,
            componentId: i
        })
    }

    function o(e, t) {
        let {
            data: n,
            messageId: i,
            onCreate: s,
            onSuccess: a,
            onFailure: o
        } = t;
        r.default.dispatch({
            type: "INTERACTION_QUEUE",
            data: n,
            nonce: e,
            messageId: i,
            onCreate: s,
            onSuccess: a,
            onFailure: o
        })
    }

    function l(e, t, n) {
        r.default.dispatch({
            type: "INTERACTION_FAILURE",
            nonce: e,
            errorMessage: n,
            errorCode: t
        })
    }
    async function u(e, t) {
        let n = await i.HTTP.get({
            url: s.Endpoints.MESSAGE_INTERACTION_DATA(e, t),
            oldFormErrors: !0
        });
        if (n.ok) {
            let i = n.body;
            r.default.dispatch({
                type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
                channelId: e,
                messageId: t,
                interactionData: i
            })
        }
    }
}