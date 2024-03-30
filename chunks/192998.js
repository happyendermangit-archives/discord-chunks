function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createBotMessage: function() {
            return _
        },
        createNonce: function() {
            return c
        },
        default: function() {
            return d
        },
        userRecordToServer: function() {
            return f
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("299794"),
        a = n("428009"),
        u = n("208454"),
        s = n("523018"),
        l = n("281767");

    function c() {
        return s.default.fromTimestamp(Date.now())
    }

    function f(e) {
        return {
            id: e.id,
            username: e.username,
            avatar: e.avatar,
            discriminator: e.discriminator,
            bot: e.bot,
            global_name: e.globalName
        }
    }

    function d(e) {
        var t, n, r = e.channelId,
            s = e.content,
            d = e.tts,
            _ = e.type,
            E = void 0 === _ ? l.MessageTypes.DEFAULT : _,
            p = e.messageReference,
            m = e.allowedMentions,
            y = e.author,
            I = e.flags,
            h = e.nonce,
            O = e.poll,
            T = [];
        if (E === l.MessageTypes.REPLY && (o()(null != p, "Replies must have a message reference"), null == m || m.replied_user)) {
            var S = i.default.getMessageByReference(p);
            (null == S ? void 0 : S.state) === i.ReferencedMessageState.LOADED && T.push(f(S.message.author))
        }
        if (null == y && (y = u.default.getCurrentUser()), t = y, null != (n = a.default) && "undefined" != typeof Symbol && n[Symbol.hasInstance] ? !!n[Symbol.hasInstance](t) : t instanceof n) y = f(y);
        return o()(null != y, "createMessage: author cannot be undefined"), {
            id: null != h ? h : c(),
            type: E,
            content: s,
            channel_id: r,
            author: y,
            attachments: [],
            embeds: [],
            pinned: !1,
            mentions: T,
            mention_channels: [],
            mention_roles: [],
            mention_everyone: !1,
            timestamp: new Date().toISOString(),
            state: l.MessageStates.SENDING,
            tts: void 0 !== d && d,
            message_reference: p,
            flags: I,
            nonce: h,
            poll: O
        }
    }

    function _(e) {
        var t = e.messageId,
            n = e.channelId,
            r = e.content,
            o = e.embeds,
            i = e.loggingName;
        return {
            id: null != t ? t : c(),
            type: l.MessageTypes.DEFAULT,
            flags: l.MessageFlags.EPHEMERAL,
            content: r,
            channel_id: n,
            author: {
                id: l.LOCAL_BOT_ID,
                username: "Clyde",
                discriminator: l.NON_USER_BOT_DISCRIMINATOR,
                avatar: "clyde",
                bot: !0
            },
            attachments: [],
            embeds: null != o ? o : [],
            pinned: !1,
            mentions: [],
            mention_channels: [],
            mention_roles: [],
            mention_everyone: !1,
            timestamp: new Date().toISOString(),
            state: l.MessageStates.SENT,
            tts: !1,
            loggingName: i
        }
    }
}