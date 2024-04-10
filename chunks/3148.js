function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createBotMessage: function() {
            return E
        },
        createNonce: function() {
            return d
        },
        default: function() {
            return c
        },
        userRecordToServer: function() {
            return _
        }
    }), n("789020"), n("653041");
    var i = n("512722"),
        r = n.n(i),
        s = n("869765"),
        a = n("598077"),
        o = n("594174"),
        l = n("709054"),
        u = n("981631");

    function d() {
        return l.default.fromTimestamp(Date.now())
    }

    function _(e) {
        let {
            id: t,
            username: n,
            avatar: i,
            discriminator: r,
            bot: s,
            globalName: a
        } = e;
        return {
            id: t,
            username: n,
            avatar: i,
            discriminator: r,
            bot: s,
            global_name: a
        }
    }

    function c(e) {
        let {
            channelId: t,
            content: n,
            tts: i = !1,
            type: l = u.MessageTypes.DEFAULT,
            messageReference: c,
            allowedMentions: E,
            author: I,
            flags: T,
            nonce: f,
            poll: S
        } = e, A = [];
        if (l === u.MessageTypes.REPLY && (r()(null != c, "Replies must have a message reference"), null == E || E.replied_user)) {
            let e = s.default.getMessageByReference(c);
            (null == e ? void 0 : e.state) === s.ReferencedMessageState.LOADED && A.push(_(e.message.author))
        }
        return null == I && (I = o.default.getCurrentUser()), I instanceof a.default && (I = _(I)), r()(null != I, "createMessage: author cannot be undefined"), {
            id: null != f ? f : d(),
            type: l,
            content: n,
            channel_id: t,
            author: I,
            attachments: [],
            embeds: [],
            pinned: !1,
            mentions: A,
            mention_channels: [],
            mention_roles: [],
            mention_everyone: !1,
            timestamp: new Date().toISOString(),
            state: u.MessageStates.SENDING,
            tts: i,
            message_reference: c,
            flags: T,
            nonce: f,
            poll: S
        }
    }

    function E(e) {
        let {
            messageId: t,
            channelId: n,
            content: i,
            embeds: r,
            loggingName: s
        } = e;
        return {
            id: null != t ? t : d(),
            type: u.MessageTypes.DEFAULT,
            flags: u.MessageFlags.EPHEMERAL,
            content: i,
            channel_id: n,
            author: {
                id: u.LOCAL_BOT_ID,
                username: "Clyde",
                discriminator: u.NON_USER_BOT_DISCRIMINATOR,
                avatar: "clyde",
                bot: !0
            },
            attachments: [],
            embeds: null != r ? r : [],
            pinned: !1,
            mentions: [],
            mention_channels: [],
            mention_roles: [],
            mention_everyone: !1,
            timestamp: new Date().toISOString(),
            state: u.MessageStates.SENT,
            tts: !1,
            loggingName: s
        }
    }
}