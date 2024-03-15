function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createNonce: function() {
            return d
        },
        userRecordToServer: function() {
            return c
        },
        default: function() {
            return f
        },
        createBotMessage: function() {
            return _
        }
    }), n("702976"), n("424973");
    var i = n("627445"),
        s = n.n(i),
        r = n("256572"),
        a = n("766274"),
        o = n("697218"),
        l = n("299039"),
        u = n("49111");

    function d() {
        return l.default.fromTimestamp(Date.now())
    }

    function c(e) {
        let {
            id: t,
            username: n,
            avatar: i,
            discriminator: s,
            bot: r,
            globalName: a
        } = e;
        return {
            id: t,
            username: n,
            avatar: i,
            discriminator: s,
            bot: r,
            global_name: a
        }
    }

    function f(e) {
        let {
            channelId: t,
            content: n,
            tts: i = !1,
            type: l = u.MessageTypes.DEFAULT,
            messageReference: f,
            allowedMentions: _,
            author: E,
            flags: h,
            nonce: g,
            poll: m
        } = e, p = [];
        if (l === u.MessageTypes.REPLY && (s(null != f, "Replies must have a message reference"), null == _ || _.replied_user)) {
            let e = r.default.getMessageByReference(f);
            (null == e ? void 0 : e.state) === r.ReferencedMessageState.LOADED && p.push(c(e.message.author))
        }
        return null == E && (E = o.default.getCurrentUser()), E instanceof a.default && (E = c(E)), s(null != E, "createMessage: author cannot be undefined"), {
            id: null != g ? g : d(),
            type: l,
            content: n,
            channel_id: t,
            author: E,
            attachments: [],
            embeds: [],
            pinned: !1,
            mentions: p,
            mention_channels: [],
            mention_roles: [],
            mention_everyone: !1,
            timestamp: new Date().toISOString(),
            state: u.MessageStates.SENDING,
            tts: i,
            message_reference: f,
            flags: h,
            nonce: g,
            poll: m
        }
    }

    function _(e) {
        let {
            messageId: t,
            channelId: n,
            content: i,
            embeds: s,
            loggingName: r
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
            embeds: null != s ? s : [],
            pinned: !1,
            mentions: [],
            mention_channels: [],
            mention_roles: [],
            mention_everyone: !1,
            timestamp: new Date().toISOString(),
            state: u.MessageStates.SENT,
            tts: !1,
            loggingName: r
        }
    }
}