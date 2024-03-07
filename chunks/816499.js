function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        generateRedditMetadataItems: function() {
            return p
        },
        generateTwitterMetadataItems: function() {
            return h
        },
        generateSteamMetadataItems: function() {
            return E
        },
        generatePaypalMetadataItems: function() {
            return g
        },
        generateEbayMetadataItems: function() {
            return S
        },
        generateTikTokMetadataItems: function() {
            return C
        },
        generateRoleConnectionMetadataItems: function() {
            return T
        }
    }), n("424973"), n("222007");
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        s = n("917351"),
        r = n.n(s),
        o = n("77078"),
        u = n("240481"),
        d = n("535013"),
        c = n("214509"),
        f = n("782340"),
        m = n("483263");

    function p(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            i = [],
            a = Number(null !== (t = e[c.MetadataFields.REDDIT_TOTAL_KARMA]) && void 0 !== t ? t : -1),
            s = "1" === e[c.MetadataFields.REDDIT_GOLD],
            r = "1" === e[c.MetadataFields.REDDIT_MOD];
        return a > -1 && i.push((0, l.jsx)(v, {
            className: n,
            count: a,
            label: f.default.Messages.CONNECTIONS_PROFILE_REDDIT_KARMA
        }, c.MetadataFields.REDDIT_TOTAL_KARMA)), s && i.push((0, l.jsx)(N, {
            className: n,
            label: f.default.Messages.CONNECTIONS_REDDIT_GOLD
        }, c.MetadataFields.REDDIT_GOLD)), r && i.push((0, l.jsx)(N, {
            className: n,
            label: f.default.Messages.CONNECTIONS_REDDIT_MOD
        }, c.MetadataFields.REDDIT_MOD)), i
    }

    function h(e) {
        var t, n;
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            a = [],
            s = Number(null !== (t = e[c.MetadataFields.TWITTER_STATUSES_COUNT]) && void 0 !== t ? t : -1),
            r = Number(null !== (n = e[c.MetadataFields.TWITTER_FOLLOWERS_COUNT]) && void 0 !== n ? n : -1);
        return s > -1 && a.push((0, l.jsx)(v, {
            className: i,
            count: s,
            label: f.default.Messages.CONNECTIONS_PROFILE_TWITTER_STATUSES
        }, c.MetadataFields.TWITTER_STATUSES_COUNT)), r > -1 && a.push((0, l.jsx)(v, {
            className: i,
            count: r,
            label: f.default.Messages.CONNECTIONS_PROFILE_TWITTER_FOLLOWERS
        }, c.MetadataFields.TWITTER_FOLLOWERS_COUNT)), a
    }

    function E(e) {
        var t, i, a;
        let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            r = [],
            o = Number(null !== (t = e[c.MetadataFields.STEAM_GAME_COUNT]) && void 0 !== t ? t : -1),
            u = Number(null !== (i = e[c.MetadataFields.STEAM_ITEM_COUNT_DOTA2]) && void 0 !== i ? i : -1),
            d = Number(null !== (a = e[c.MetadataFields.STEAM_ITEM_COUNT_TF2]) && void 0 !== a ? a : -1);
        return o > -1 && r.push((0, l.jsx)(v, {
            className: s,
            count: o,
            label: f.default.Messages.CONNECTIONS_PROFILE_STEAM_GAMES
        }, c.MetadataFields.STEAM_GAME_COUNT)), u > -1 && r.push((0, l.jsx)(_, {
            className: s,
            label: f.default.Messages.CONNECTIONS_STEAM_ITEMS.format({
                count: u
            }),
            imageSrc: n("142226"),
            imageAlt: f.default.Messages.CONNECTIONS_STEAM_DOTA2
        }, c.MetadataFields.STEAM_ITEM_COUNT_DOTA2)), d > -1 && r.push((0, l.jsx)(_, {
            className: s,
            label: f.default.Messages.CONNECTIONS_STEAM_ITEMS.format({
                count: d
            }),
            imageSrc: n("449236"),
            imageAlt: f.default.Messages.CONNECTIONS_STEAM_TF2
        }, c.MetadataFields.STEAM_ITEM_COUNT_TF2)), r
    }

    function g(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            n = [],
            i = "1" === e[c.MetadataFields.PAYPAL_VERIFIED];
        return i && n.push((0, l.jsx)(N, {
            className: a(t, m.paypalVerifiedTag),
            label: f.default.Messages.CONNECTIONS_PAYPAL_VERIFIED
        }, c.MetadataFields.PAYPAL_VERIFIED)), n
    }

    function S(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            i = [],
            a = Number(null !== (t = e[c.MetadataFields.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) && void 0 !== t ? t : -1),
            s = "1" === e[c.MetadataFields.EBAY_TOP_RATED_SELLER];
        return a > 0 && i.push((0, l.jsx)(v, {
            className: n,
            count: a,
            label: f.default.Messages.CONNECTIONS_PROFILE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
            percent: !0
        }, c.MetadataFields.EBAY_POSITIVE_FEEDBACK_PERCENTAGE)), s && i.push((0, l.jsx)(N, {
            className: n,
            label: f.default.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER
        }, c.MetadataFields.EBAY_TOP_RATED_SELLER)), i
    }

    function C(e) {
        var t, n, i;
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            s = [],
            r = "1" === e[c.MetadataFields.TIKTOK_VERIFIED],
            o = Number(null !== (t = e[c.MetadataFields.TIKTOK_FOLLOWER_COUNT]) && void 0 !== t ? t : -1),
            u = Number(null !== (n = e[c.MetadataFields.TIKTOK_FOLLOWING_COUNT]) && void 0 !== n ? n : -1),
            d = Number(null !== (i = e[c.MetadataFields.TIKTOK_LIKES_COUNT]) && void 0 !== i ? i : -1);
        return o > -1 && s.push((0, l.jsx)(v, {
            className: a,
            count: o,
            label: f.default.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWERS
        }, c.MetadataFields.TIKTOK_FOLLOWER_COUNT)), u > -1 && s.push((0, l.jsx)(v, {
            className: a,
            count: u,
            label: f.default.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWING
        }, c.MetadataFields.TIKTOK_FOLLOWING_COUNT)), d > -1 && s.push((0, l.jsx)(v, {
            className: a,
            count: d,
            label: f.default.Messages.CONNECTIONS_PROFILE_TIKTOK_LIKES
        }, c.MetadataFields.TIKTOK_LIKES_COUNT)), r && s.push((0, l.jsx)(N, {
            className: a,
            label: f.default.Messages.CONNECTIONS_TIKTOK_VERIFIED
        }, c.MetadataFields.TIKTOK_VERIFIED)), s
    }

    function T(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
            i = [],
            a = Object.keys(e.metadata);
        if (null == e.application_metadata || 0 === Object.keys(e.application_metadata).length || 0 === a.length) return i;
        let s = r.sortBy(a, t => {
            var n, l;
            return null === (l = e.application_metadata) || void 0 === l ? void 0 : null === (n = l[t]) || void 0 === n ? void 0 : n.name
        });
        for (let a of s) {
            let s = e.application_metadata[a];
            if (null == s) continue;
            let r = e.metadata[a];
            try {
                switch (s.type) {
                    case c.MetadataItemTypes.BOOLEAN_EQUAL:
                    case c.MetadataItemTypes.BOOLEAN_NOT_EQUAL: {
                        let e = s.type === c.MetadataItemTypes.BOOLEAN_EQUAL && "1" === r || s.type === c.MetadataItemTypes.BOOLEAN_NOT_EQUAL && "1" !== r;
                        e && i.push((0, l.jsx)(N, {
                            className: t,
                            label: s.name
                        }, s.key))
                    }
                    break;
                    case c.MetadataItemTypes.DATETIME_GREATER_THAN_EQUAL:
                    case c.MetadataItemTypes.DATETIME_LESS_THAN_EQUAL:
                        i.push((0, l.jsx)(I, {
                            className: t,
                            date: r,
                            locale: n,
                            label: s.name
                        }, s.key));
                        break;
                    case c.MetadataItemTypes.INTEGER_EQUAL:
                    case c.MetadataItemTypes.INTEGER_NOT_EQUAL:
                    case c.MetadataItemTypes.INTEGER_GREATER_THAN_EQUAL:
                    case c.MetadataItemTypes.INTEGER_LESS_THAN_EQUAL:
                        i.push((0, l.jsx)(v, {
                            className: t,
                            count: Number(r),
                            label: s.name
                        }, s.key))
                }
            } catch (e) {}
        }
        return i
    }

    function v(e) {
        let t, {
                count: n,
                label: i,
                className: s,
                percent: r
            } = e,
            d = (0, u.shortenAndLocalizeNumber)(n) + (r ? "%" : "");
        return t = "string" == typeof i ? f.default.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
            name: i,
            value: d
        }) : i.format({
            value: d
        }), (0, l.jsx)(o.Text, {
            className: a(m.connectedAccountVanityMetadata, s),
            variant: "text-xs/normal",
            color: "interactive-active",
            children: t
        })
    }

    function I(e) {
        let {
            date: t,
            locale: n,
            label: i,
            className: s
        } = e;
        return (0, l.jsx)(o.Text, {
            className: a(m.connectedAccountVanityMetadata, s),
            variant: "text-xs/normal",
            color: "interactive-active",
            children: f.default.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
                value: (0, d.getCreatedAtDate)(t, n),
                name: i
            })
        })
    }

    function _(e) {
        let {
            label: t,
            imageSrc: n,
            imageAlt: i,
            className: s
        } = e;
        return (0, l.jsxs)("div", {
            className: a(m.connectedAccountVanityMetadata, m.connectedAccountVanityMetadataItem, s),
            children: [(0, l.jsx)(o.Tooltip, {
                text: i,
                children: e => (0, l.jsx)("img", {
                    ...e,
                    src: n,
                    alt: i,
                    className: m.connectedAccountVanityMetadataItemIcon
                })
            }), (0, l.jsx)(o.Text, {
                variant: "text-xs/normal",
                color: "interactive-active",
                children: t
            })]
        })
    }

    function N(e) {
        let {
            label: t,
            className: n
        } = e;
        return (0, l.jsx)(o.Text, {
            variant: "text-xs/semibold",
            color: "interactive-active",
            className: a(m.connectedAccountVanityMetadata, m.connectedAccountVanityMetadataTag, n),
            children: t
        })
    }
}