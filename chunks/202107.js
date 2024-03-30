function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("570140"),
        r = n("147913"),
        s = n("271383"),
        a = n("594174"),
        o = n("69882");
    let l = null,
        u = () => {
            let e = s.default.getCommunicationDisabledUserMap();
            Object.keys(e).forEach(t => {
                let n = (0, s.getGuildIdFromCommunicationDisabledUserKey)(t),
                    i = (0, s.getUserIdFromCommunicationDisabledUserKey)(t),
                    r = e[t];
                !(0, o.isCommunicationDisabled)(r) && d(n, i)
            })
        },
        d = (e, t) => {
            var n, r, l, u, d, _;
            let c = s.default.getMember(e, t),
                E = a.default.getUser(t);
            if (null == c || null == E || (0, o.isMemberCommunicationDisabled)(c)) return;
            let I = {
                ...c,
                guildId: e,
                nick: null !== (n = c.nick) && void 0 !== n ? n : E.username,
                avatar: null !== (r = c.avatar) && void 0 !== r ? r : void 0,
                avatarDecoration: null != c.avatarDecoration ? {
                    ...c.avatarDecoration
                } : void 0,
                premiumSince: null !== (l = c.premiumSince) && void 0 !== l ? l : void 0,
                isPending: null !== (u = c.isPending) && void 0 !== u && u,
                user: {
                    ...E,
                    email: null !== (d = E.email) && void 0 !== d ? d : void 0,
                    phone: null !== (_ = E.phone) && void 0 !== _ ? _ : void 0
                },
                communicationDisabledUntil: null
            };
            i.default.dispatch({
                type: "GUILD_MEMBER_UPDATE",
                ...I
            })
        };
    class _ extends r.default {
        _initialize() {
            l = setInterval(() => u(), 1e4)
        }
        _terminate() {
            clearInterval(l)
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "clearGuildMemberTimeout", i = d, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new _
}