function(e, t, l) {
    "use strict";
    l.r(t), l.d(t, {
        formatPomeloForEditing: function() {
            return h
        },
        formatUsernameLiveCheckValidation: function() {
            return I
        },
        getDefaultPomelo: function() {
            return E
        },
        getLocalizedForcedUUDate: function() {
            return T
        },
        getMemberSince: function() {
            return p
        },
        getUserAvatarURLForPomelo: function() {
            return _
        },
        shouldSkipToEditUsername: function() {
            return m
        }
    }), l("757143"), l("47120"), l("627341");
    var n = l("913527"),
        a = l.n(n),
        i = l("278074"),
        s = l("768581"),
        r = l("709054"),
        d = l("624138"),
        o = l("219496"),
        u = l("801461"),
        c = l("689938");

    function _(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return s.default.getUserAvatarURL({
            id: e.id,
            avatar: e.avatar,
            bot: e.bot,
            discriminator: "0000"
        }, t, 80)
    }

    function E(e) {
        let t = (0, d.stripDiacritics)(e.username).replace(u.dirtyChars, "").replace(u.coalescePeriods, ".").toLowerCase();
        return "".concat(t).concat(e.discriminator).substring(0, 32)
    }
    let f = ["@", "#", ":"],
        C = ["```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage", "clyde"],
        S = ["discordtag", "everyone", "here", "discord nitro", "discord", "snowsgiving"];

    function m(e) {
        var t, l;
        let n = e.username.toLowerCase();
        if ((t = n, l = u.CONTROL_CHARACTERS_CODE, t.split("").filter(e => !l.includes(e.charCodeAt(0))).join("")).length < 2) return !0;
        for (let e of f)
            if (n.includes(e)) return !0;
        for (let e of S)
            if (n === e.toLowerCase()) return !0;
        for (let e of C)
            if (n.includes(e.toLowerCase())) return !0;
        return !1
    }

    function h(e) {
        return e.toLowerCase().replace(/\s/g, "").replace("@", "")
    }

    function p(e) {
        let t = r.default.extractTimestamp(e);
        try {
            return a()(new Date(t)).format("MMM DD, YYYY")
        } catch (e) {}
        return null
    }

    function I(e) {
        return (0, i.match)(e).with({
            rateLimited: !0
        }, () => ({
            type: o.NameValidationState.RATE_LIMIT,
            message: c.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT
        })).with({
            error: i.P.not(i.P.nullish)
        }, e => {
            let {
                error: t
            } = e;
            return {
                type: o.NameValidationState.ERROR,
                message: t
            }
        }).with({
            taken: !1
        }, () => ({
            type: o.NameValidationState.AVAILABLE,
            message: c.default.Messages.POMELO_EXISTING_FLOW_AVAILABLE
        })).with({
            taken: !0
        }, () => ({
            type: o.NameValidationState.ERROR,
            message: c.default.Messages.POMELO_EXISTING_FLOW_ERROR_UNAVAILABLE
        })).with({
            error: i.P.nullish
        }, () => ({
            type: o.NameValidationState.INTERNAL_ERROR,
            message: ""
        })).otherwise(() => void 0)
    }

    function T(e) {
        return new Date(2024, 2, 4).toLocaleDateString(e, {
            month: "long",
            day: "numeric",
            year: "numeric"
        })
    }
}