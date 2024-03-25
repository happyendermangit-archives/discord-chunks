function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        getUserAvatarURLForPomelo: function() {
            return E
        },
        getDefaultPomelo: function() {
            return _
        },
        shouldSkipToEditUsername: function() {
            return S
        },
        formatPomeloForEditing: function() {
            return m
        },
        getMemberSince: function() {
            return p
        },
        formatUsernameLiveCheckValidation: function() {
            return I
        },
        getLocalizedForcedUUDate: function() {
            return g
        }
    }), i("781738"), i("222007"), i("794252");
    var s = i("866227"),
        n = i.n(s),
        l = i("506838"),
        r = i("315102"),
        a = i("299039"),
        u = i("159885"),
        d = i("644417"),
        o = i("935583"),
        c = i("782340");

    function E(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return r.default.getUserAvatarURL({
            id: e.id,
            avatar: e.avatar,
            bot: e.bot,
            discriminator: "0000"
        }, t, 80)
    }

    function _(e) {
        let t = (0, u.stripDiacritics)(e.username).replace(o.dirtyChars, "").replace(o.coalescePeriods, ".").toLowerCase();
        return "".concat(t).concat(e.discriminator).substring(0, 32)
    }
    let f = ["@", "#", ":"],
        C = ["```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage", "clyde"],
        h = ["discordtag", "everyone", "here", "discord nitro", "discord", "snowsgiving"];

    function S(e) {
        var t, i;
        let s = e.username.toLowerCase();
        if ((t = s, i = o.CONTROL_CHARACTERS_CODE, t.split("").filter(e => !i.includes(e.charCodeAt(0))).join("")).length < 2) return !0;
        for (let e of f)
            if (s.includes(e)) return !0;
        for (let e of h)
            if (s === e.toLowerCase()) return !0;
        for (let e of C)
            if (s.includes(e.toLowerCase())) return !0;
        return !1
    }

    function m(e) {
        return e.toLowerCase().replace(/\s/g, "").replace("@", "")
    }

    function p(e) {
        let t = a.default.extractTimestamp(e);
        try {
            return n(new Date(t)).format("MMM DD, YYYY")
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
        let t = new Date(2024, 2, 4);
        return t.toLocaleDateString(e, {
            month: "long",
            day: "numeric",
            year: "numeric"
        })
    }
}