function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ActivityEmoji: function() {
            return v
        },
        default: function() {
            return A
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("77078"),
        u = n("430568"),
        d = n("309570"),
        c = n("29088"),
        f = n("867805"),
        p = n("699209"),
        m = n("32346"),
        h = n("342845"),
        x = n("845579"),
        E = n("271938"),
        y = n("42203"),
        g = n("957255"),
        S = n("824563"),
        C = n("800762"),
        T = n("137783"),
        _ = n("49111"),
        I = n("73276");

    function v(e) {
        let {
            emoji: t,
            className: n,
            animate: l = !0,
            hideTooltip: a
        } = e, r = x.AnimateEmoji.useSetting(), d = null != t.id ? ":".concat(t.name, ":") : f.default.translateSurrogatesToInlineEmoji(t.name), c = {
            className: s(I.emoji, n),
            emojiId: t.id,
            emojiName: t.name,
            autoplay: !0,
            animated: !!(t.animated && r && l)
        };
        return a ? (0, i.jsx)(u.default, {
            ...c
        }) : (0, i.jsx)(o.Tooltip, {
            text: d,
            children: e => (0, i.jsx)(u.default, {
                ...e,
                ...c
            })
        })
    }
    let N = e => {
        let {
            className: t,
            text: n
        } = e, a = l.useRef(null), r = l.useRef(null), [u, d] = l.useState(!1);
        return l.useLayoutEffect(() => {
            let {
                current: e
            } = a, {
                current: t
            } = r;
            if (null == e || null == t) return;
            let n = e.clientWidth < t.clientWidth && e.clientHeight <= t.clientHeight;
            d(!n)
        }, [n]), (0, i.jsx)(o.Tooltip, {
            text: u || null == n || "" === n ? null : n,
            delay: 150,
            "aria-label": !1,
            children: e => (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    ...e,
                    className: t,
                    ref: a,
                    children: n
                }), (0, i.jsx)("div", {
                    className: s(I.textRuler, t),
                    ref: r,
                    "aria-hidden": !0,
                    children: n
                })]
            })
        })
    };
    var A = e => {
        var t;
        let {
            activities: n,
            applicationStream: l,
            className: a,
            textClassName: s,
            emojiClassName: o,
            animate: u = !0,
            hideTooltip: f = !1,
            hideEmoji: x = !1,
            user: A
        } = e, O = null != n ? n.find(e => e.type === _.ActivityTypes.CUSTOM_STATUS) : null, R = (0, r.useStateFromStores)([E.default], () => E.default.getId() === (null == A ? void 0 : A.id)), M = (0, r.useStateFromStores)([m.default], () => R ? m.default.getHangStatusActivity() : null != n ? n.find(e => e.type === _.ActivityTypes.HANG_STATUS) : null), k = (0, r.useStateFromStores)([C.default, y.default], () => {
            var e;
            return null != M && null != A ? y.default.getChannel(null === (e = C.default.getVoiceStateForUser(A.id)) || void 0 === e ? void 0 : e.channelId) : null
        }), {
            enableHangStatus: L
        } = p.HangStatusExperiment.useExperiment({
            guildId: null == k ? void 0 : k.guild_id,
            location: "ActivityStatus"
        }, {
            autoTrackExposure: !1
        }), P = null, b = L && null != M && g.default.can(_.Permissions.CONNECT, k);
        b ? P = (0, i.jsx)(h.default, {
            className: o,
            hangStatusActivity: M
        }) : null != O && null != O.emoji && !x && (P = (0, i.jsx)(v, {
            emoji: O.emoji,
            animate: u,
            hideTooltip: f,
            className: o
        }));
        let j = (0, r.useStateFromStores)([S.default], () => null != A ? S.default.getStatus(A.id) : null),
            U = null !== j && [_.StatusTypes.OFFLINE, _.StatusTypes.INVISIBLE].includes(j),
            D = null === (t = (0, c.default)(n, l, void 0, b)) || void 0 === t ? void 0 : t.activityText,
            w = null != D && D.length > 0;
        return U || null == P && !w ? null : (0, i.jsxs)("div", {
            className: a,
            children: [P, (0, i.jsx)(N, {
                text: D,
                className: s
            }), null != n && n.some(e => (0, d.default)(e, b)) ? (0, i.jsx)(T.default, {
                width: 16,
                height: 16,
                className: I.icon
            }) : null]
        })
    }
}