function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("872717"),
        l = n("819689"),
        a = n("49111"),
        o = n("782340"),
        s = {
            changeNickname: (e, t, n, s) => i.HTTP.patch({
                url: a.Endpoints.GUILD_MEMBER_NICK(e, n),
                body: {
                    nick: s
                },
                oldFormErrors: !0
            }).then(e => {
                s = e.body.nick, l.default.sendBotMessage(t, null != s && "" !== s ? o.default.Messages.COMMAND_NICK_SUCCESS.plainFormat({
                    nick: s
                }) : o.default.Messages.COMMAND_NICK_RESET)
            }, e => {
                403 === e.status ? l.default.sendBotMessage(t, o.default.Messages.COMMAND_NICK_FAILURE_PERMISSION.plainFormat()) : l.default.sendBotMessage(t, o.default.Messages.COMMAND_NICK_FAILURE)
            })
        }
}