function(e, t, n) {
    "use strict";
    let i, s;
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    }), n("222007");
    var r = n("446674"),
        a = n("913144"),
        o = n("798609"),
        l = n("42203"),
        u = n("3765");
    let d = {},
        c = {},
        _ = {};

    function f(e) {
        delete d[e];
        let t = _[e];
        null != t && delete c[t], delete _[e]
    }
    class E extends r.default.Store {
        getInteraction(e) {
            let t = c[e.id];
            return null != t ? d[t] : null
        }
        getMessageInteractionStates() {
            let e = {};
            for (let [t, n] of Object.entries(d)) {
                let i = _[t];
                null != i && (e[i] = n.state)
            }
            return e
        }
        canQueueInteraction(e, t) {
            let n = c[e];
            return (null == n || null == d[n] || d[n].state === u.InteractionState.FAILED) && (null == d[t] || d[t].state === u.InteractionState.FAILED) && !0
        }
        getIFrameModalApplicationId() {
            return s
        }
        getIFrameModalKey() {
            return i
        }
    }
    E.displayName = "InteractionStore";
    var h = new E(a.default, {
        LOGOUT: function() {
            d = {}, c = {}, _ = {}
        },
        INTERACTION_QUEUE: function(e) {
            let {
                nonce: t,
                messageId: n,
                data: i,
                onCreate: s,
                onCancel: r,
                onSuccess: a,
                onFailure: o
            } = e;
            null != n && (c[n] = t, _[t] = n), d[t] = {
                state: u.InteractionState.QUEUED,
                data: i,
                onCreate: s,
                onCancel: r,
                onSuccess: a,
                onFailure: o
            }
        },
        INTERACTION_CREATE: function(e) {
            var t;
            let {
                nonce: n,
                interactionId: i
            } = e;
            if (null == n) return !1;
            let s = d[n];
            if (null == s || s.state !== u.InteractionState.QUEUED) return !1;
            s.state = u.InteractionState.CREATED, null === (t = s.onCreate) || void 0 === t || t.call(s, i)
        },
        INTERACTION_SUCCESS: function(e) {
            var t;
            let {
                nonce: n
            } = e;
            if (null == n) return !1;
            let i = d[n];
            if (null == i) return !1;
            null === (t = i.onSuccess) || void 0 === t || t.call(i), f(n)
        },
        INTERACTION_FAILURE: function(e) {
            var t;
            let {
                nonce: n,
                errorCode: i,
                errorMessage: s
            } = e;
            if (null == n) return !1;
            let r = d[n];
            if (null == r) return !1;
            null === (t = r.onFailure) || void 0 === t || t.call(r, i, s), r.data.interactionType === o.InteractionTypes.APPLICATION_COMMAND ? f(n) : d[n] = {
                ...r,
                state: u.InteractionState.FAILED,
                errorCode: i,
                errorMessage: s
            }
        },
        MESSAGE_CREATE: function(e) {
            let {
                message: t
            } = e;
            if (null == t.nonce) return !1;
            {
                var n;
                let e = d[t.nonce];
                if (null == e) return !1;
                null === (n = e.onSuccess) || void 0 === n || n.call(e), f(t.nonce)
            }
        },
        CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e, n = l.default.getChannel(t);
            if (null == n) return !1;
            for (let [e, t] of Object.entries(d)) t.state === u.InteractionState.FAILED && f(e)
        },
        INTERACTION_IFRAME_MODAL_CREATE: function(e) {
            let {
                application: t
            } = e;
            s = t.id
        },
        INTERACTION_IFRAME_MODAL_CLOSE: function() {
            i = void 0, s = void 0
        },
        INTERACTION_IFRAME_MODAL_KEY_CREATE: function(e) {
            let {
                modalKey: t
            } = e;
            i = t
        }
    })
}