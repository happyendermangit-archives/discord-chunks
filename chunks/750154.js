function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isStageActivity: function() {
            return c
        },
        packStageChannelPartyId: function() {
            return d
        },
        shouldShowActivity: function() {
            return E
        },
        unpackStageChannelParty: function() {
            return _
        }
    }), n("47120");
    var i = n("314897"),
        r = n("592125"),
        s = n("430824"),
        a = n("88751"),
        o = n("157925"),
        l = n("981631");
    let u = "stage:";

    function d(e, t) {
        let n = 0,
            r = i.default.getId();
        a.default.isSpeaker(r, e.id) && (n |= 1);
        let o = s.default.getGuild(e.getGuildId());
        null != o && (o.hasFeature(l.GuildFeatures.PARTNERED) && (n |= 2), o.hasFeature(l.GuildFeatures.VERIFIED) && (n |= 4));
        let d = n.toString(16);
        return "".concat(u).concat(e.guild_id, ":").concat(e.id, ":").concat(d, ":").concat(t.id)
    }

    function _(e) {
        if (null == e || null == e.party) return;
        let {
            id: t,
            size: n
        } = e.party;
        try {
            if (null == t || !t.startsWith(u)) return;
            let [, e, i, r, s] = t.split(":"), a = parseInt(r, 16);
            return {
                guildId: e,
                channelId: i,
                size: n,
                userIsSpeaker: (1 & a) != 0,
                guildIsPartnered: (2 & a) != 0,
                guildIsVerified: (4 & a) != 0,
                stageInstanceId: s
            }
        } catch (e) {
            return null
        }
    }

    function c(e) {
        return (null == e ? void 0 : e.application_id) === o.STAGE_APPLICATION_ID
    }

    function E(e) {
        let t = _(e);
        if (null == t) return !1;
        let {
            channelId: n
        } = t;
        return null != r.default.getChannel(n)
    }
}