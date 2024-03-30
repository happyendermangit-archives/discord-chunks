function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("544891"),
        r = n("904245"),
        s = n("981631"),
        a = n("689938");
    t.default = {
        changeNickname: (e, t, n, o) => i.HTTP.patch({
            url: s.Endpoints.GUILD_MEMBER_NICK(e, n),
            body: {
                nick: o
            },
            oldFormErrors: !0
        }).then(e => {
            o = e.body.nick, r.default.sendBotMessage(t, null != o && "" !== o ? a.default.Messages.COMMAND_NICK_SUCCESS.plainFormat({
                nick: o
            }) : a.default.Messages.COMMAND_NICK_RESET)
        }, e => {
            403 === e.status ? r.default.sendBotMessage(t, a.default.Messages.COMMAND_NICK_FAILURE_PERMISSION.plainFormat()) : r.default.sendBotMessage(t, a.default.Messages.COMMAND_NICK_FAILURE)
        })
    }
}