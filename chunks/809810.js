function(t, e, n) {
    "use strict";
    let a, i;
    n.r(e), n.d(e, {
        default: function() {
            return f
        }
    }), n("222007");
    var l = n("446674"),
        r = n("913144"),
        u = n("798609"),
        d = n("42203"),
        o = n("3765");
    let c = {},
        s = {},
        E = {};

    function p(t) {
        delete c[t];
        let e = E[t];
        null != e && delete s[e], delete E[t]
    }
    class I extends l.default.Store {
        getInteraction(t) {
            let e = s[t.id];
            return null != e ? c[e] : null
        }
        getMessageInteractionStates() {
            let t = {};
            for (let [e, n] of Object.entries(c)) {
                let a = E[e];
                null != a && (t[a] = n.state)
            }
            return t
        }
        canQueueInteraction(t, e) {
            let n = s[t];
            return (null == n || null == c[n] || c[n].state === o.InteractionState.FAILED) && (null == c[e] || c[e].state === o.InteractionState.FAILED) && !0
        }
        getIFrameModalApplicationId() {
            return i
        }
        getIFrameModalKey() {
            return a
        }
    }
    I.displayName = "InteractionStore";
    var f = new I(r.default, {
        LOGOUT: function() {
            c = {}, s = {}, E = {}
        },
        INTERACTION_QUEUE: function(t) {
            let {
                nonce: e,
                messageId: n,
                data: a,
                onCreate: i,
                onCancel: l,
                onSuccess: r,
                onFailure: u
            } = t;
            null != n && (s[n] = e, E[e] = n), c[e] = {
                state: o.InteractionState.QUEUED,
                data: a,
                onCreate: i,
                onCancel: l,
                onSuccess: r,
                onFailure: u
            }
        },
        INTERACTION_CREATE: function(t) {
            var e;
            let {
                nonce: n,
                interactionId: a
            } = t;
            if (null == n) return !1;
            let i = c[n];
            if (null == i || i.state !== o.InteractionState.QUEUED) return !1;
            i.state = o.InteractionState.CREATED, null === (e = i.onCreate) || void 0 === e || e.call(i, a)
        },
        INTERACTION_SUCCESS: function(t) {
            var e;
            let {
                nonce: n
            } = t;
            if (null == n) return !1;
            let a = c[n];
            if (null == a) return !1;
            null === (e = a.onSuccess) || void 0 === e || e.call(a), p(n)
        },
        INTERACTION_FAILURE: function(t) {
            var e;
            let {
                nonce: n,
                errorCode: a,
                errorMessage: i
            } = t;
            if (null == n) return !1;
            let l = c[n];
            if (null == l) return !1;
            null === (e = l.onFailure) || void 0 === e || e.call(l, a, i), l.data.interactionType === u.InteractionTypes.APPLICATION_COMMAND ? p(n) : c[n] = {
                ...l,
                state: o.InteractionState.FAILED,
                errorCode: a,
                errorMessage: i
            }
        },
        MESSAGE_CREATE: function(t) {
            let {
                message: e
            } = t;
            if (null == e.nonce) return !1;
            {
                var n;
                let t = c[e.nonce];
                if (null == t) return !1;
                null === (n = t.onSuccess) || void 0 === n || n.call(t), p(e.nonce)
            }
        },
        CHANNEL_SELECT: function(t) {
            let {
                channelId: e
            } = t, n = d.default.getChannel(e);
            if (null == n) return !1;
            for (let [t, e] of Object.entries(c)) e.state === o.InteractionState.FAILED && p(t)
        },
        INTERACTION_IFRAME_MODAL_CREATE: function(t) {
            let {
                application: e
            } = t;
            i = e.id
        },
        INTERACTION_IFRAME_MODAL_CLOSE: function() {
            a = void 0, i = void 0
        },
        INTERACTION_IFRAME_MODAL_KEY_CREATE: function(t) {
            let {
                modalKey: e
            } = t;
            a = e
        }
    })
}