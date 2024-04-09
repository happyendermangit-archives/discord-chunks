function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("552075"),
        l = n("481060"),
        u = n("880949"),
        d = n("806966"),
        _ = n("254494"),
        c = n("593618"),
        E = n("855693"),
        I = n("68972"),
        T = n("887208"),
        f = n("697426"),
        S = n("689938"),
        h = n("89358");
    let A = [8, 8, 8, 8];

    function m(e) {
        let {
            icon: t,
            isSelected: n,
            onClick: r,
            ...s
        } = e;
        return (0, i.jsx)(l.Clickable, {
            ...s,
            onClick: r,
            className: a()(h.categoryIcon, {
                [h.selected]: n
            }),
            children: (0, i.jsx)(t, {
                className: h.categoryIconIcon
            })
        })
    }

    function N(e, t, n, r) {
        return (0, i.jsx)(l.Tooltip, {
            text: function(e) {
                switch (e.categoryInfo.type) {
                    case f.SoundboardSoundGridSectionType.FAVORITES:
                        return S.default.Messages.FAVORITES;
                    case f.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                        return S.default.Messages.RECENTLY_HEARD;
                    case f.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                        return S.default.Messages.FREQUENTLY_USED;
                    case f.SoundboardSoundGridSectionType.GUILD:
                        return (0, i.jsx)(c.GuildTooltipText, {
                            guild: e.categoryInfo.guild,
                            includeActivity: !1
                        });
                    case f.SoundboardSoundGridSectionType.DEFAULTS:
                        return S.default.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS
                }
            }(e),
            "aria-label": function(e) {
                switch (e.categoryInfo.type) {
                    case f.SoundboardSoundGridSectionType.FAVORITES:
                        return S.default.Messages.FAVORITES;
                    case f.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                        return S.default.Messages.RECENTLY_HEARD;
                    case f.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                        return S.default.Messages.FREQUENTLY_USED;
                    case f.SoundboardSoundGridSectionType.GUILD:
                        return e.categoryInfo.guild.name;
                    case f.SoundboardSoundGridSectionType.DEFAULTS:
                        return S.default.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS
                }
            }(e),
            position: "right",
            children: t => (function(e, t, n, r) {
                switch (e.categoryInfo.type) {
                    case f.SoundboardSoundGridSectionType.FAVORITES:
                        return (0, i.jsx)(m, {
                            ...r,
                            icon: T.default,
                            onClick: t,
                            isSelected: n
                        }, e.key);
                    case f.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                        return (0, i.jsx)(m, {
                            ...r,
                            icon: E.default,
                            onClick: t,
                            isSelected: n
                        }, e.key);
                    case f.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                        return (0, i.jsx)(m, {
                            ...r,
                            icon: o.AnalyticsIcon,
                            onClick: t,
                            isSelected: n
                        }, e.key);
                    case f.SoundboardSoundGridSectionType.GUILD:
                        return (0, i.jsx)(l.Clickable, {
                            ...r,
                            className: h.category,
                            onClick: t,
                            children: (0, i.jsx)(u.default, {
                                guild: e.categoryInfo.guild,
                                isSelected: n
                            })
                        }, e.key);
                    case f.SoundboardSoundGridSectionType.DEFAULTS:
                        return (0, i.jsx)(m, {
                            ...r,
                            icon: I.default,
                            onClick: t,
                            isSelected: n
                        }, e.key);
                    default:
                        return null
                }
            })(e, n, r, t)
        })
    }

    function O(e) {
        let {
            soundboardListRef: t,
            categories: n,
            listPadding: s = A
        } = e, a = r.useRef(null);
        return (0, i.jsx)(_.default, {
            className: h.categoryList,
            categoryListRef: a,
            expressionsListRef: t,
            store: d.SoundboardPickerStore,
            categories: n,
            listPadding: s,
            renderCategoryListItem: N,
            rowCount: n.length,
            categoryHeight: 40
        })
    }
}