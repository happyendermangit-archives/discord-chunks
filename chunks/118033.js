function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        packStageChannelPartyId: function() {
            return d
        },
        unpackStageChannelParty: function() {
            return c
        },
        isStageActivity: function() {
            return f
        },
        shouldShowActivity: function() {
            return _
        }
    }), n("222007");
    var i = n("271938"),
        s = n("42203"),
        r = n("305961"),
        a = n("325861"),
        o = n("837979"),
        l = n("49111");
    let u = "stage:";

    function d(e, t) {
        let n = 0,
            s = i.default.getId(),
            o = a.default.isSpeaker(s, e.id);
        o && (n |= 1);
        let d = r.default.getGuild(e.getGuildId());
        null != d && (d.hasFeature(l.GuildFeatures.PARTNERED) && (n |= 2), d.hasFeature(l.GuildFeatures.VERIFIED) && (n |= 4));
        let c = n.toString(16);
        return "".concat(u).concat(e.guild_id, ":").concat(e.id, ":").concat(c, ":").concat(t.id)
    }

    function c(e) {
        if (null == e || null == e.party) return;
        let {
            id: t,
            size: n
        } = e.party;
        try {
            if (null == t || !t.startsWith(u)) return;
            let [, e, i, s, r] = t.split(":"), a = parseInt(s, 16);
            return {
                guildId: e,
                channelId: i,
                size: n,
                userIsSpeaker: (1 & a) != 0,
                guildIsPartnered: (2 & a) != 0,
                guildIsVerified: (4 & a) != 0,
                stageInstanceId: r
            }
        } catch (e) {
            return null
        }
    }

    function f(e) {
        return (null == e ? void 0 : e.application_id) === o.STAGE_APPLICATION_ID
    }

    function _(e) {
        let t = c(e);
        if (null == t) return !1;
        let {
            channelId: n
        } = t, i = s.default.getChannel(n);
        return null != i
    }
}