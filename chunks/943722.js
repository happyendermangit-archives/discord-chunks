function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ActivityEmoji: function() {
            return A
        },
        default: function() {
            return y
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("77078"),
        u = n("430568"),
        d = n("309570"),
        c = n("29088"),
        f = n("867805"),
        m = n("699209"),
        p = n("32346"),
        h = n("342845"),
        E = n("845579"),
        g = n("271938"),
        C = n("42203"),
        S = n("957255"),
        T = n("824563"),
        v = n("800762"),
        I = n("137783"),
        _ = n("49111"),
        N = n("73276");

    function A(e) {
        let {
            emoji: t,
            className: n,
            animate: i = !0,
            hideTooltip: a
        } = e, r = E.AnimateEmoji.useSetting(), d = null != t.id ? ":".concat(t.name, ":") : f.default.translateSurrogatesToInlineEmoji(t.name), c = {
            className: s(N.emoji, n),
            emojiId: t.id,
            emojiName: t.name,
            autoplay: !0,
            animated: !!(t.animated && r && i)
        };
        return a ? (0, l.jsx)(u.default, {
            ...c
        }) : (0, l.jsx)(o.Tooltip, {
            text: d,
            children: e => (0, l.jsx)(u.default, {
                ...e,
                ...c
            })
        })
    }
    let x = e => {
        let {
            className: t,
            text: n
        } = e, a = i.useRef(null), r = i.useRef(null), [u, d] = i.useState(!1);
        return i.useLayoutEffect(() => {
            let {
                current: e
            } = a, {
                current: t
            } = r;
            if (null == e || null == t) return;
            let n = e.clientWidth < t.clientWidth && e.clientHeight <= t.clientHeight;
            d(!n)
        }, [n]), (0, l.jsx)(o.Tooltip, {
            text: u || null == n || "" === n ? null : n,
            delay: 150,
            "aria-label": !1,
            children: e => (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("div", {
                    ...e,
                    className: t,
                    ref: a,
                    children: n
                }), (0, l.jsx)("div", {
                    className: s(N.textRuler, t),
                    ref: r,
                    "aria-hidden": !0,
                    children: n
                })]
            })
        })
    };
    var y = e => {
        var t;
        let {
            activities: n,
            applicationStream: i,
            className: a,
            textClassName: s,
            emojiClassName: o,
            animate: u = !0,
            hideTooltip: f = !1,
            hideEmoji: E = !1,
            user: y
        } = e, O = null != n ? n.find(e => e.type === _.ActivityTypes.CUSTOM_STATUS) : null, R = (0, r.useStateFromStores)([g.default], () => g.default.getId() === (null == y ? void 0 : y.id)), M = (0, r.useStateFromStores)([p.default], () => R ? p.default.getHangStatusActivity() : null != n ? n.find(e => e.type === _.ActivityTypes.HANG_STATUS) : null), L = (0, r.useStateFromStores)([v.default, C.default], () => {
            var e;
            return null != M && null != y ? C.default.getChannel(null === (e = v.default.getVoiceStateForUser(y.id)) || void 0 === e ? void 0 : e.channelId) : null
        }), {
            enableHangStatus: P
        } = m.HangStatusExperiment.useExperiment({
            guildId: null == L ? void 0 : L.guild_id,
            location: "ActivityStatus"
        }, {
            autoTrackExposure: !1
        }), b = null, j = P && null != M && S.default.can(_.Permissions.CONNECT, L);
        j ? b = (0, l.jsx)(h.default, {
            className: o,
            hangStatusActivity: M
        }) : null != O && null != O.emoji && !E && (b = (0, l.jsx)(A, {
            emoji: O.emoji,
            animate: u,
            hideTooltip: f,
            className: o
        }));
        let U = (0, r.useStateFromStores)([T.default], () => null != y ? T.default.getStatus(y.id) : null),
            D = null !== U && [_.StatusTypes.OFFLINE, _.StatusTypes.INVISIBLE].includes(U),
            k = null === (t = (0, c.default)(n, i, void 0, j)) || void 0 === t ? void 0 : t.activityText,
            w = null != k && k.length > 0;
        return D || null == b && !w ? null : (0, l.jsxs)("div", {
            className: a,
            children: [b, (0, l.jsx)(x, {
                text: k,
                className: s
            }), null != n && n.some(d.default) ? (0, l.jsx)(I.default, {
                width: 16,
                height: 16,
                className: N.icon
            }) : null]
        })
    }
}