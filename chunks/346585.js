function(e, t, l) {
    "use strict";
    l.r(t), l.d(t, {
        formatPomeloForEditing: function() {
            return m
        },
        formatUsernameLiveCheckValidation: function() {
            return R
        },
        getDefaultPomelo: function() {
            return _
        },
        getLocalizedForcedUUDate: function() {
            return p
        },
        getMemberSince: function() {
            return I
        },
        getUserAvatarURLForPomelo: function() {
            return E
        },
        shouldSkipToEditUsername: function() {
            return h
        }
    }), l("757143"), l("47120"), l("627341");
    var a = l("913527"),
        n = l.n(a),
        i = l("278074"),
        s = l("768581"),
        r = l("709054"),
        d = l("624138"),
        u = l("219496"),
        o = l("801461"),
        c = l("689938");

    function E(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return s.default.getUserAvatarURL({
            id: e.id,
            avatar: e.avatar,
            bot: e.bot,
            discriminator: "0000"
        }, t, 80)
    }

    function _(e) {
        let t = (0, d.stripDiacritics)(e.username).replace(o.dirtyChars, "").replace(o.coalescePeriods, ".").toLowerCase();
        return "".concat(t).concat(e.discriminator).substring(0, 32)
    }
    let f = ["@", "#", ":"],
        C = ["```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage", "clyde"],
        S = ["discordtag", "everyone", "here", "discord nitro", "discord", "snowsgiving"];

    function h(e) {
        var t, l;
        let a = e.username.toLowerCase();
        if ((t = a, l = o.CONTROL_CHARACTERS_CODE, t.split("").filter(e => !l.includes(e.charCodeAt(0))).join("")).length < 2) return !0;
        for (let e of f)
            if (a.includes(e)) return !0;
        for (let e of S)
            if (a === e.toLowerCase()) return !0;
        for (let e of C)
            if (a.includes(e.toLowerCase())) return !0;
        return !1
    }

    function m(e) {
        return e.toLowerCase().replace(/\s/g, "").replace("@", "")
    }

    function I(e) {
        let t = r.default.extractTimestamp(e);
        try {
            return n()(new Date(t)).format("MMM DD, YYYY")
        } catch (e) {}
        return null
    }

    function R(e) {
        return (0, i.match)(e).with({
            rateLimited: !0
        }, () => ({
            type: u.NameValidationState.RATE_LIMIT,
            message: c.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT
        })).with({
            error: i.P.not(i.P.nullish)
        }, e => {
            let {
                error: t
            } = e;
            return {
                type: u.NameValidationState.ERROR,
                message: t
            }
        }).with({
            taken: !1
        }, () => ({
            type: u.NameValidationState.AVAILABLE,
            message: c.default.Messages.POMELO_EXISTING_FLOW_AVAILABLE
        })).with({
            taken: !0
        }, () => ({
            type: u.NameValidationState.ERROR,
            message: c.default.Messages.POMELO_EXISTING_FLOW_ERROR_UNAVAILABLE
        })).with({
            error: i.P.nullish
        }, () => ({
            type: u.NameValidationState.INTERNAL_ERROR,
            message: ""
        })).otherwise(() => void 0)
    }

    function p(e) {
        return new Date(2024, 2, 4).toLocaleDateString(e, {
            month: "long",
            day: "numeric",
            year: "numeric"
        })
    }
}