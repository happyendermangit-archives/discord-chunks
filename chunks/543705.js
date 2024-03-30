function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("967888"),
        o = n("443458"),
        i = n("281767"),
        a = n("941504");
    t.default = {
        changeNickname: function(e, t, n, u) {
            return r.HTTP.patch({
                url: i.Endpoints.GUILD_MEMBER_NICK(e, n),
                body: {
                    nick: u
                },
                oldFormErrors: !0
            }).then(function(e) {
                u = e.body.nick, o.default.sendBotMessage(t, null != u && "" !== u ? a.default.Messages.COMMAND_NICK_SUCCESS.plainFormat({
                    nick: u
                }) : a.default.Messages.COMMAND_NICK_RESET)
            }, function(e) {
                403 === e.status ? o.default.sendBotMessage(t, a.default.Messages.COMMAND_NICK_FAILURE_PERMISSION.plainFormat()) : o.default.sendBotMessage(t, a.default.Messages.COMMAND_NICK_FAILURE)
            })
        }
    }
}