function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        formatPomeloForEditing: function() {
            return S
        },
        formatUsernameLiveCheckValidation: function() {
            return I
        },
        getDefaultPomelo: function() {
            return E
        },
        getLocalizedForcedUUDate: function() {
            return g
        },
        getMemberSince: function() {
            return C
        },
        getUserAvatarURLForPomelo: function() {
            return _
        },
        shouldSkipToEditUsername: function() {
            return m
        }
    }), i("757143"), i("47120"), i("627341");
    var s = i("913527"),
        n = i.n(s),
        l = i("278074"),
        r = i("768581"),
        a = i("709054"),
        o = i("624138"),
        d = i("219496"),
        u = i("801461"),
        c = i("689938");

    function _(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return r.default.getUserAvatarURL({
            id: e.id,
            avatar: e.avatar,
            bot: e.bot,
            discriminator: "0000"
        }, t, 80)
    }

    function E(e) {
        let t = (0, o.stripDiacritics)(e.username).replace(u.dirtyChars, "").replace(u.coalescePeriods, ".").toLowerCase();
        return "".concat(t).concat(e.discriminator).substring(0, 32)
    }
    let f = ["@", "#", ":"],
        p = ["```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage", "clyde"],
        h = ["discordtag", "everyone", "here", "discord nitro", "discord", "snowsgiving"];

    function m(e) {
        var t, i;
        let s = e.username.toLowerCase();
        if ((t = s, i = u.CONTROL_CHARACTERS_CODE, t.split("").filter(e => !i.includes(e.charCodeAt(0))).join("")).length < 2) return !0;
        for (let e of f)
            if (s.includes(e)) return !0;
        for (let e of h)
            if (s === e.toLowerCase()) return !0;
        for (let e of p)
            if (s.includes(e.toLowerCase())) return !0;
        return !1
    }

    function S(e) {
        return e.toLowerCase().replace(/\s/g, "").replace("@", "")
    }

    function C(e) {
        let t = a.default.extractTimestamp(e);
        try {
            return n()(new Date(t)).format("MMM DD, YYYY")
        } catch (e) {}
        return null
    }

    function I(e) {
        return (0, l.match)(e).with({
            rateLimited: !0
        }, () => ({
            type: d.NameValidationState.RATE_LIMIT,
            message: c.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT
        })).with({
            error: l.P.not(l.P.nullish)
        }, e => {
            let {
                error: t
            } = e;
            return {
                type: d.NameValidationState.ERROR,
                message: t
            }
        }).with({
            taken: !1
        }, () => ({
            type: d.NameValidationState.AVAILABLE,
            message: c.default.Messages.POMELO_EXISTING_FLOW_AVAILABLE
        })).with({
            taken: !0
        }, () => ({
            type: d.NameValidationState.ERROR,
            message: c.default.Messages.POMELO_EXISTING_FLOW_ERROR_UNAVAILABLE
        })).with({
            error: l.P.nullish
        }, () => ({
            type: d.NameValidationState.INTERNAL_ERROR,
            message: ""
        })).otherwise(() => void 0)
    }

    function g(e) {
        return new Date(2024, 2, 4).toLocaleDateString(e, {
            month: "long",
            day: "numeric",
            year: "numeric"
        })
    }
}