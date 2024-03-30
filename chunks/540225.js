function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        formatPomeloForEditing: function() {
            return v
        },
        formatUsernameLiveCheckValidation: function() {
            return h
        },
        getDefaultPomelo: function() {
            return p
        },
        getLocalizedForcedUUDate: function() {
            return S
        },
        getMemberSince: function() {
            return b
        },
        getUserAvatarURLForPomelo: function() {
            return d
        },
        shouldSkipToEditUsername: function() {
            return y
        }
    });
    var r = n("913527"),
        o = n.n(r),
        i = n("278074"),
        a = n("299529"),
        u = n("523018"),
        l = n("778513"),
        s = n("236924"),
        c = n("446198"),
        f = n("941504");

    function d(e) {
        var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return a.default.getUserAvatarURL({
            id: e.id,
            avatar: e.avatar,
            bot: e.bot,
            discriminator: "0000"
        }, t, 80)
    }

    function p(e) {
        var t = (0, l.stripDiacritics)(e.username).replace(c.dirtyChars, "").replace(c.coalescePeriods, ".").toLowerCase();
        return "".concat(t).concat(e.discriminator).substring(0, 32)
    }
    var E = ["@", "#", ":"],
        _ = ["```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage", "clyde"],
        m = ["discordtag", "everyone", "here", "discord nitro", "discord", "snowsgiving"];

    function y(e) {
        var t = e.username.toLowerCase();
        if ((i = t, a = c.CONTROL_CHARACTERS_CODE, i.split("").filter(function(e) {
                return !a.includes(e.charCodeAt(0))
            }).join("")).length < 2) return !0;
        var n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a, u, l = E[Symbol.iterator](); !(n = (u = l.next()).done); n = !0) {
                var s = u.value;
                if (t.includes(s)) return !0
            }
        } catch (e) {
            r = !0, o = e
        } finally {
            try {
                !n && null != l.return && l.return()
            } finally {
                if (r) throw o
            }
        }
        var f = !0,
            d = !1,
            p = void 0;
        try {
            for (var y, v = m[Symbol.iterator](); !(f = (y = v.next()).done); f = !0) {
                var b = y.value;
                if (t === b.toLowerCase()) return !0
            }
        } catch (e) {
            d = !0, p = e
        } finally {
            try {
                !f && null != v.return && v.return()
            } finally {
                if (d) throw p
            }
        }
        var h = !0,
            S = !1,
            g = void 0;
        try {
            for (var O, I = _[Symbol.iterator](); !(h = (O = I.next()).done); h = !0) {
                var C = O.value;
                if (t.includes(C.toLowerCase())) return !0
            }
        } catch (e) {
            S = !0, g = e
        } finally {
            try {
                !h && null != I.return && I.return()
            } finally {
                if (S) throw g
            }
        }
        return !1
    }

    function v(e) {
        return e.toLowerCase().replace(/\s/g, "").replace("@", "")
    }

    function b(e) {
        var t = u.default.extractTimestamp(e);
        try {
            return o()(new Date(t)).format("MMM DD, YYYY")
        } catch (e) {}
        return null
    }

    function h(e) {
        return (0, i.match)(e).with({
            rateLimited: !0
        }, function() {
            return {
                type: s.NameValidationState.RATE_LIMIT,
                message: f.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT
            }
        }).with({
            error: i.P.not(i.P.nullish)
        }, function(e) {
            var t = e.error;
            return {
                type: s.NameValidationState.ERROR,
                message: t
            }
        }).with({
            taken: !1
        }, function() {
            return {
                type: s.NameValidationState.AVAILABLE,
                message: f.default.Messages.POMELO_EXISTING_FLOW_AVAILABLE
            }
        }).with({
            taken: !0
        }, function() {
            return {
                type: s.NameValidationState.ERROR,
                message: f.default.Messages.POMELO_EXISTING_FLOW_ERROR_UNAVAILABLE
            }
        }).with({
            error: i.P.nullish
        }, function() {
            return {
                type: s.NameValidationState.INTERNAL_ERROR,
                message: ""
            }
        }).otherwise(function() {})
    }

    function S(e) {
        return new Date(2024, 2, 4).toLocaleDateString(e, {
            month: "long",
            day: "numeric",
            year: "numeric"
        })
    }
}