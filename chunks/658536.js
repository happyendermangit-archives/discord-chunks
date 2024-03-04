function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("222007");
    var a = n("913144"),
        l = n("689988"),
        i = n("26989"),
        _ = n("697218"),
        r = n("509");
    let u = null,
        s = () => {
            let e = i.default.getCommunicationDisabledUserMap();
            Object.keys(e).forEach(t => {
                let n = (0, i.getGuildIdFromCommunicationDisabledUserKey)(t),
                    a = (0, i.getUserIdFromCommunicationDisabledUserKey)(t),
                    l = e[t];
                !(0, r.isCommunicationDisabled)(l) && o(n, a)
            })
        },
        o = (e, t) => {
            var n, l, u, s, o, d;
            let E = i.default.getMember(e, t),
                c = _.default.getUser(t);
            if (null == E || null == c || (0, r.isMemberCommunicationDisabled)(E)) return;
            let f = {
                ...E,
                guildId: e,
                nick: null !== (n = E.nick) && void 0 !== n ? n : c.username,
                avatar: null !== (l = E.avatar) && void 0 !== l ? l : void 0,
                avatarDecoration: null != E.avatarDecoration ? {
                    ...E.avatarDecoration
                } : void 0,
                premiumSince: null !== (u = E.premiumSince) && void 0 !== u ? u : void 0,
                isPending: null !== (s = E.isPending) && void 0 !== s && s,
                user: {
                    ...c,
                    email: null !== (o = c.email) && void 0 !== o ? o : void 0,
                    phone: null !== (d = c.phone) && void 0 !== d ? d : void 0
                },
                communicationDisabledUntil: null
            };
            a.default.dispatch({
                type: "GUILD_MEMBER_UPDATE",
                ...f
            })
        };
    class d extends l.default {
        _initialize() {
            u = setInterval(() => s(), 1e4)
        }
        _terminate() {
            clearInterval(u)
        }
        constructor(...e) {
            super(...e), this.clearGuildMemberTimeout = o
        }
    }
    var E = new d
}