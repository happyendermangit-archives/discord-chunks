function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        queueInteractionComponentState: function() {
            return a
        },
        addQueued: function() {
            return o
        },
        setFailed: function() {
            return l
        },
        fetchMessageInteractionData: function() {
            return u
        }
    });
    var i = n("872717"),
        s = n("913144"),
        r = n("49111");

    function a(e, t, n, i) {
        s.default.dispatch({
            type: "QUEUE_INTERACTION_COMPONENT_STATE",
            messageId: e,
            nonce: t,
            state: n,
            indices: i
        })
    }

    function o(e, t) {
        let {
            data: n,
            messageId: i,
            onCreate: r,
            onSuccess: a,
            onFailure: o
        } = t;
        s.default.dispatch({
            type: "INTERACTION_QUEUE",
            data: n,
            nonce: e,
            messageId: i,
            onCreate: r,
            onSuccess: a,
            onFailure: o
        })
    }

    function l(e, t, n) {
        s.default.dispatch({
            type: "INTERACTION_FAILURE",
            nonce: e,
            errorMessage: n,
            errorCode: t
        })
    }
    async function u(e, t) {
        let n = await i.default.get({
            url: r.Endpoints.MESSAGE_INTERACTION_DATA(e, t),
            oldFormErrors: !0
        });
        if (n.ok) {
            let i = n.body;
            s.default.dispatch({
                type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
                channelId: e,
                messageId: t,
                interactionData: i
            })
        }
    }
}