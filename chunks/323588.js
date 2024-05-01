function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        generateEbayMetadataItems: function() {
            return h
        },
        generatePaypalMetadataItems: function() {
            return S
        },
        generateRedditMetadataItems: function() {
            return I
        },
        generateRoleConnectionMetadataItems: function() {
            return m
        },
        generateSteamMetadataItems: function() {
            return f
        },
        generateTikTokMetadataItems: function() {
            return A
        },
        generateTwitterMetadataItems: function() {
            return T
        }
    }), n("653041"), n("47120");
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("392711"),
        o = n.n(a),
        l = n("481060"),
        u = n("930153"),
        d = n("275759"),
        _ = n("856651"),
        c = n("689938"),
        E = n("98649");

    function I(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            r = [],
            s = Number(null !== (t = e[_.MetadataFields.REDDIT_TOTAL_KARMA]) && void 0 !== t ? t : -1),
            a = "1" === e[_.MetadataFields.REDDIT_GOLD],
            o = "1" === e[_.MetadataFields.REDDIT_MOD];
        return s > -1 && r.push((0, i.jsx)(N, {
            className: n,
            count: s,
            label: c.default.Messages.CONNECTIONS_PROFILE_REDDIT_KARMA
        }, _.MetadataFields.REDDIT_TOTAL_KARMA)), a && r.push((0, i.jsx)(R, {
            className: n,
            label: c.default.Messages.CONNECTIONS_REDDIT_GOLD
        }, _.MetadataFields.REDDIT_GOLD)), o && r.push((0, i.jsx)(R, {
            className: n,
            label: c.default.Messages.CONNECTIONS_REDDIT_MOD
        }, _.MetadataFields.REDDIT_MOD)), r
    }

    function T(e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            s = [],
            a = Number(null !== (t = e[_.MetadataFields.TWITTER_STATUSES_COUNT]) && void 0 !== t ? t : -1),
            o = Number(null !== (n = e[_.MetadataFields.TWITTER_FOLLOWERS_COUNT]) && void 0 !== n ? n : -1);
        return a > -1 && s.push((0, i.jsx)(N, {
            className: r,
            count: a,
            label: c.default.Messages.CONNECTIONS_PROFILE_TWITTER_STATUSES
        }, _.MetadataFields.TWITTER_STATUSES_COUNT)), o > -1 && s.push((0, i.jsx)(N, {
            className: r,
            count: o,
            label: c.default.Messages.CONNECTIONS_PROFILE_TWITTER_FOLLOWERS
        }, _.MetadataFields.TWITTER_FOLLOWERS_COUNT)), s
    }

    function f(e) {
        var t, r, s;
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            o = [],
            l = Number(null !== (t = e[_.MetadataFields.STEAM_GAME_COUNT]) && void 0 !== t ? t : -1),
            u = Number(null !== (r = e[_.MetadataFields.STEAM_ITEM_COUNT_DOTA2]) && void 0 !== r ? r : -1),
            d = Number(null !== (s = e[_.MetadataFields.STEAM_ITEM_COUNT_TF2]) && void 0 !== s ? s : -1);
        return l > -1 && o.push((0, i.jsx)(N, {
            className: a,
            count: l,
            label: c.default.Messages.CONNECTIONS_PROFILE_STEAM_GAMES
        }, _.MetadataFields.STEAM_GAME_COUNT)), u > -1 && o.push((0, i.jsx)(O, {
            className: a,
            label: c.default.Messages.CONNECTIONS_STEAM_ITEMS.format({
                count: u
            }),
            imageSrc: n("448238"),
            imageAlt: c.default.Messages.CONNECTIONS_STEAM_DOTA2
        }, _.MetadataFields.STEAM_ITEM_COUNT_DOTA2)), d > -1 && o.push((0, i.jsx)(O, {
            className: a,
            label: c.default.Messages.CONNECTIONS_STEAM_ITEMS.format({
                count: d
            }),
            imageSrc: n("80730"),
            imageAlt: c.default.Messages.CONNECTIONS_STEAM_TF2
        }, _.MetadataFields.STEAM_ITEM_COUNT_TF2)), o
    }

    function S(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            n = [];
        return "1" === e[_.MetadataFields.PAYPAL_VERIFIED] && n.push((0, i.jsx)(R, {
            className: s()(t, E.paypalVerifiedTag),
            label: c.default.Messages.CONNECTIONS_PAYPAL_VERIFIED
        }, _.MetadataFields.PAYPAL_VERIFIED)), n
    }

    function h(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            r = [],
            s = Number(null !== (t = e[_.MetadataFields.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) && void 0 !== t ? t : -1),
            a = "1" === e[_.MetadataFields.EBAY_TOP_RATED_SELLER];
        return s > 0 && r.push((0, i.jsx)(N, {
            className: n,
            count: s,
            label: c.default.Messages.CONNECTIONS_PROFILE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
            percent: !0
        }, _.MetadataFields.EBAY_POSITIVE_FEEDBACK_PERCENTAGE)), a && r.push((0, i.jsx)(R, {
            className: n,
            label: c.default.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER
        }, _.MetadataFields.EBAY_TOP_RATED_SELLER)), r
    }

    function A(e) {
        var t, n, r;
        let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            a = [],
            o = "1" === e[_.MetadataFields.TIKTOK_VERIFIED],
            l = Number(null !== (t = e[_.MetadataFields.TIKTOK_FOLLOWER_COUNT]) && void 0 !== t ? t : -1),
            u = Number(null !== (n = e[_.MetadataFields.TIKTOK_FOLLOWING_COUNT]) && void 0 !== n ? n : -1),
            d = Number(null !== (r = e[_.MetadataFields.TIKTOK_LIKES_COUNT]) && void 0 !== r ? r : -1);
        return l > -1 && a.push((0, i.jsx)(N, {
            className: s,
            count: l,
            label: c.default.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWERS
        }, _.MetadataFields.TIKTOK_FOLLOWER_COUNT)), u > -1 && a.push((0, i.jsx)(N, {
            className: s,
            count: u,
            label: c.default.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWING
        }, _.MetadataFields.TIKTOK_FOLLOWING_COUNT)), d > -1 && a.push((0, i.jsx)(N, {
            className: s,
            count: d,
            label: c.default.Messages.CONNECTIONS_PROFILE_TIKTOK_LIKES
        }, _.MetadataFields.TIKTOK_LIKES_COUNT)), o && a.push((0, i.jsx)(R, {
            className: s,
            label: c.default.Messages.CONNECTIONS_TIKTOK_VERIFIED
        }, _.MetadataFields.TIKTOK_VERIFIED)), a
    }

    function m(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
            r = [],
            s = Object.keys(e.metadata);
        if (null == e.application_metadata || 0 === Object.keys(e.application_metadata).length || 0 === s.length) return r;
        for (let a of o().sortBy(s, t => {
                var n, i;
                return null === (i = e.application_metadata) || void 0 === i ? void 0 : null === (n = i[t]) || void 0 === n ? void 0 : n.name
            })) {
            let s = e.application_metadata[a];
            if (null == s) continue;
            let o = e.metadata[a];
            try {
                switch (s.type) {
                    case _.MetadataItemTypes.BOOLEAN_EQUAL:
                    case _.MetadataItemTypes.BOOLEAN_NOT_EQUAL:
                        (s.type === _.MetadataItemTypes.BOOLEAN_EQUAL && "1" === o || s.type === _.MetadataItemTypes.BOOLEAN_NOT_EQUAL && "1" !== o) && r.push((0, i.jsx)(R, {
                            className: t,
                            label: s.name
                        }, s.key));
                        break;
                    case _.MetadataItemTypes.DATETIME_GREATER_THAN_EQUAL:
                    case _.MetadataItemTypes.DATETIME_LESS_THAN_EQUAL:
                        r.push((0, i.jsx)(p, {
                            className: t,
                            date: o,
                            locale: n,
                            label: s.name
                        }, s.key));
                        break;
                    case _.MetadataItemTypes.INTEGER_EQUAL:
                    case _.MetadataItemTypes.INTEGER_NOT_EQUAL:
                    case _.MetadataItemTypes.INTEGER_GREATER_THAN_EQUAL:
                    case _.MetadataItemTypes.INTEGER_LESS_THAN_EQUAL:
                        r.push((0, i.jsx)(N, {
                            className: t,
                            count: Number(o),
                            label: s.name
                        }, s.key))
                }
            } catch (e) {}
        }
        return r
    }

    function N(e) {
        let t, {
                count: n,
                label: r,
                className: a,
                percent: o
            } = e,
            d = (0, u.shortenAndLocalizeNumber)(n) + (o ? "%" : "");
        return t = "string" == typeof r ? c.default.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
            name: r,
            value: d
        }) : r.format({
            value: d
        }), (0, i.jsx)(l.Text, {
            className: s()(E.connectedAccountVanityMetadata, a),
            variant: "text-xs/normal",
            color: "interactive-active",
            children: t
        })
    }

    function p(e) {
        let {
            date: t,
            locale: n,
            label: r,
            className: a
        } = e;
        return (0, i.jsx)(l.Text, {
            className: s()(E.connectedAccountVanityMetadata, a),
            variant: "text-xs/normal",
            color: "interactive-active",
            children: c.default.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
                value: (0, d.getCreatedAtDate)(t, n),
                name: r
            })
        })
    }

    function O(e) {
        let {
            label: t,
            imageSrc: n,
            imageAlt: r,
            className: a
        } = e;
        return (0, i.jsxs)("div", {
            className: s()(E.connectedAccountVanityMetadata, E.connectedAccountVanityMetadataItem, a),
            children: [(0, i.jsx)(l.Tooltip, {
                text: r,
                children: e => (0, i.jsx)("img", {
                    ...e,
                    src: n,
                    alt: r,
                    className: E.connectedAccountVanityMetadataItemIcon
                })
            }), (0, i.jsx)(l.Text, {
                variant: "text-xs/normal",
                color: "interactive-active",
                children: t
            })]
        })
    }

    function R(e) {
        let {
            label: t,
            className: n
        } = e;
        return (0, i.jsx)(l.Text, {
            variant: "text-xs/semibold",
            color: "interactive-active",
            className: s()(E.connectedAccountVanityMetadata, E.connectedAccountVanityMetadataTag, n),
            children: t
        })
    }
}