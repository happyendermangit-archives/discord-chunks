function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ActivityEmoji: function() {
            return R
        },
        default: function() {
            return M
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("421050"),
        o = n("446674"),
        u = n("77078"),
        d = n("430568"),
        c = n("309570"),
        f = n("29088"),
        m = n("449918"),
        p = n("867805"),
        h = n("699209"),
        x = n("32346"),
        E = n("342845"),
        y = n("845579"),
        g = n("271938"),
        S = n("42203"),
        C = n("957255"),
        T = n("824563"),
        _ = n("800762"),
        I = n("137783"),
        v = n("49111"),
        A = n("73276");
    let N = "14px";

    function R(e) {
        let {
            emoji: t,
            className: n,
            animate: l = !0,
            hideTooltip: a
        } = e, r = y.AnimateEmoji.useSetting(), o = null != t.id ? ":".concat(t.name, ":") : p.default.translateSurrogatesToInlineEmoji(t.name), c = {
            className: s(A.emoji, n),
            emojiId: t.id,
            emojiName: t.name,
            autoplay: !0,
            animated: !!(t.animated && r && l)
        };
        return a ? (0, i.jsx)(d.default, {
            ...c
        }) : (0, i.jsx)(u.Tooltip, {
            text: o,
            children: e => (0, i.jsx)(d.default, {
                ...e,
                ...c
            })
        })
    }
    let O = e => {
        let {
            className: t,
            text: n
        } = e, a = l.useRef(null), r = l.useRef(null), [o, d] = l.useState(!1);
        return l.useLayoutEffect(() => {
            let {
                current: e
            } = a, {
                current: t
            } = r;
            if (null == e || null == t) return;
            let n = e.clientWidth < t.clientWidth && e.clientHeight <= t.clientHeight;
            d(!n)
        }, [n]), (0, i.jsx)(u.Tooltip, {
            text: o || null == n || "" === n ? null : n,
            delay: 150,
            "aria-label": !1,
            children: e => (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    ...e,
                    className: t,
                    ref: a,
                    children: n
                }), (0, i.jsx)("div", {
                    className: s(A.textRuler, t),
                    ref: r,
                    "aria-hidden": !0,
                    children: n
                })]
            })
        })
    };
    var M = e => {
        var t;
        let {
            activities: n,
            applicationStream: l,
            className: a,
            textClassName: s,
            emojiClassName: u,
            animate: d = !0,
            hideTooltip: p = !1,
            hideEmoji: y = !1,
            user: M,
            hasQuest: k
        } = e, L = null != n ? n.find(e => e.type === v.ActivityTypes.CUSTOM_STATUS) : null, P = (0, o.useStateFromStores)([g.default], () => g.default.getId() === (null == M ? void 0 : M.id)), b = (0, o.useStateFromStores)([x.default], () => P ? x.default.getHangStatusActivity() : null != n ? n.find(e => e.type === v.ActivityTypes.HANG_STATUS) : null), j = (0, o.useStateFromStores)([_.default, S.default], () => {
            var e;
            return null != b && null != M ? S.default.getChannel(null === (e = _.default.getVoiceStateForUser(M.id)) || void 0 === e ? void 0 : e.channelId) : null
        }), {
            enableHangStatus: U
        } = h.HangStatusExperiment.useExperiment({
            guildId: null == j ? void 0 : j.guild_id,
            location: "ActivityStatus"
        }, {
            autoTrackExposure: !1
        }), D = (0, m.useColorValue)(v.Color.BRAND_345), w = null, F = U && null != b && C.default.can(v.Permissions.CONNECT, j);
        F ? w = (0, i.jsx)(E.default, {
            className: u,
            hangStatusActivity: b
        }) : null != L && null != L.emoji && !y && (w = (0, i.jsx)(R, {
            emoji: L.emoji,
            animate: d,
            hideTooltip: p,
            className: u
        }));
        let G = (0, o.useStateFromStores)([T.default], () => null != M ? T.default.getStatus(M.id) : null),
            H = null !== G && [v.StatusTypes.OFFLINE, v.StatusTypes.INVISIBLE].includes(G),
            B = null === (t = (0, f.default)(n, l, void 0, F)) || void 0 === t ? void 0 : t.activityText,
            V = null != B && B.length > 0;
        return H || null == w && !V ? null : (0, i.jsxs)("div", {
            className: a,
            children: [w, (0, i.jsx)(O, {
                text: B,
                className: s
            }), k && (0, i.jsx)(r.QuestsIcon, {
                className: A.questsIcon,
                height: N,
                width: N,
                color: D.hex
            }), null != n && n.some(e => (0, c.default)(e, F)) ? (0, i.jsx)(I.default, {
                width: 16,
                height: 16,
                className: A.icon
            }) : null]
        })
    }
}