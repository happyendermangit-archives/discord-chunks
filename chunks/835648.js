function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("91192"),
        l = n("552075"),
        u = n("481060"),
        d = n("880949"),
        _ = n("806966"),
        c = n("254494"),
        E = n("593618"),
        I = n("855693"),
        T = n("68972"),
        f = n("887208"),
        S = n("697426"),
        h = n("689938"),
        A = n("89358");
    let m = [8, 8, 8, 8];

    function N(e) {
        let {
            icon: t,
            isSelected: n,
            onClick: r,
            listItemProps: s,
            ...o
        } = e;
        return (0, i.jsx)(u.Clickable, {
            ...s,
            ...o,
            onClick: r,
            className: a()(A.categoryIcon, {
                [A.selected]: n
            }),
            children: (0, i.jsx)(t, {
                className: A.categoryIconIcon
            })
        })
    }

    function p(e) {
        let {
            category: t,
            categoryIndex: n,
            onClick: r,
            isSelected: s
        } = e, a = (0, o.useListItem)("soundboard_guild_".concat(n));
        return (0, i.jsx)(u.Tooltip, {
            text: function(e) {
                switch (e.categoryInfo.type) {
                    case S.SoundboardSoundGridSectionType.FAVORITES:
                        return h.default.Messages.FAVORITES;
                    case S.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                        return h.default.Messages.RECENTLY_HEARD;
                    case S.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                        return h.default.Messages.FREQUENTLY_USED;
                    case S.SoundboardSoundGridSectionType.GUILD:
                        return (0, i.jsx)(E.GuildTooltipText, {
                            guild: e.categoryInfo.guild,
                            includeActivity: !1
                        });
                    case S.SoundboardSoundGridSectionType.DEFAULTS:
                        return h.default.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS
                }
            }(t),
            "aria-label": function(e) {
                switch (e.categoryInfo.type) {
                    case S.SoundboardSoundGridSectionType.FAVORITES:
                        return h.default.Messages.FAVORITES;
                    case S.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                        return h.default.Messages.RECENTLY_HEARD;
                    case S.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                        return h.default.Messages.FREQUENTLY_USED;
                    case S.SoundboardSoundGridSectionType.GUILD:
                        return e.categoryInfo.guild.name;
                    case S.SoundboardSoundGridSectionType.DEFAULTS:
                        return h.default.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS
                }
            }(t),
            position: "right",
            children: e => (function(e, t, n, r, s) {
                switch (e.categoryInfo.type) {
                    case S.SoundboardSoundGridSectionType.FAVORITES:
                        return (0, i.jsx)(N, {
                            ...r,
                            icon: f.default,
                            onClick: t,
                            isSelected: n,
                            listItemProps: s
                        }, e.key);
                    case S.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                        return (0, i.jsx)(N, {
                            ...r,
                            icon: I.default,
                            onClick: t,
                            isSelected: n,
                            listItemProps: s
                        }, e.key);
                    case S.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                        return (0, i.jsx)(N, {
                            ...r,
                            icon: l.AnalyticsIcon,
                            onClick: t,
                            isSelected: n,
                            listItemProps: s
                        }, e.key);
                    case S.SoundboardSoundGridSectionType.GUILD:
                        return (0, i.jsx)(u.Clickable, {
                            ...s,
                            ...r,
                            className: A.category,
                            onClick: t,
                            children: (0, i.jsx)(d.default, {
                                guild: e.categoryInfo.guild,
                                isSelected: n
                            })
                        }, e.key);
                    case S.SoundboardSoundGridSectionType.DEFAULTS:
                        return (0, i.jsx)(N, {
                            ...r,
                            icon: T.default,
                            onClick: t,
                            isSelected: n,
                            listItemProps: s
                        }, e.key);
                    default:
                        return null
                }
            })(t, r, s, e, a)
        })
    }

    function O(e) {
        let {
            soundboardListRef: t,
            categories: n,
            listPadding: s = m
        } = e, a = r.useRef(null), o = r.useCallback((e, t, n, r) => (0, i.jsx)(p, {
            category: e,
            categoryIndex: t,
            onClick: n,
            isSelected: r
        }), []);
        return (0, i.jsx)(c.default, {
            className: A.categoryList,
            categoryListRef: a,
            expressionsListRef: t,
            store: _.SoundboardPickerStore,
            categories: n,
            listPadding: s,
            renderCategoryListItem: o,
            rowCount: n.length,
            categoryHeight: 40
        })
    }
}