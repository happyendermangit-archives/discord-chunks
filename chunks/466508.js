function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("197080"),
        u = n("784184"),
        s = n("289917"),
        l = n("797056"),
        c = n("689758"),
        f = n("891661"),
        d = n("228897"),
        _ = n("636146"),
        E = n("995254"),
        p = n("686309"),
        m = n("941504"),
        y = n("89358");

    function I(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function h(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                I(e, t, n[t])
            })
        }
        return e
    }

    function O(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }
    var T = [8, 8, 8, 8];

    function S(e) {
        var t = e.icon,
            n = e.isSelected,
            o = e.onClick,
            a = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(e, ["icon", "isSelected", "onClick"]);
        return r.createElement(u.Clickable, O(h({}, a), {
            onClick: o,
            className: i()(y.categoryIcon, I({}, y.selected, n))
        }), r.createElement(t, {
            className: y.categoryIconIcon
        }))
    }

    function v(e, t, n, o) {
        return r.createElement(u.Tooltip, {
            text: function(e) {
                switch (e.categoryInfo.type) {
                    case p.SoundboardSoundGridSectionType.FAVORITES:
                        return m.default.Messages.FAVORITES;
                    case p.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                        return m.default.Messages.RECENTLY_HEARD;
                    case p.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                        return m.default.Messages.FREQUENTLY_USED;
                    case p.SoundboardSoundGridSectionType.GUILD:
                        return r.createElement(f.GuildTooltipText, {
                            guild: e.categoryInfo.guild,
                            includeActivity: !1
                        });
                    case p.SoundboardSoundGridSectionType.DEFAULTS:
                        return m.default.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS
                }
            }(e),
            "aria-label": function(e) {
                switch (e.categoryInfo.type) {
                    case p.SoundboardSoundGridSectionType.FAVORITES:
                        return m.default.Messages.FAVORITES;
                    case p.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                        return m.default.Messages.RECENTLY_HEARD;
                    case p.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                        return m.default.Messages.FREQUENTLY_USED;
                    case p.SoundboardSoundGridSectionType.GUILD:
                        return e.categoryInfo.guild.name;
                    case p.SoundboardSoundGridSectionType.DEFAULTS:
                        return m.default.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS
                }
            }(e),
            position: "right"
        }, function(t) {
            return function(e, t, n, o) {
                switch (e.categoryInfo.type) {
                    case p.SoundboardSoundGridSectionType.FAVORITES:
                        return r.createElement(S, O(h({
                            key: e.key
                        }, o), {
                            icon: E.default,
                            onClick: t,
                            isSelected: n
                        }));
                    case p.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                        return r.createElement(S, O(h({
                            key: e.key
                        }, o), {
                            icon: d.default,
                            onClick: t,
                            isSelected: n
                        }));
                    case p.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                        return r.createElement(S, O(h({
                            key: e.key
                        }, o), {
                            icon: a.AnalyticsIcon,
                            onClick: t,
                            isSelected: n
                        }));
                    case p.SoundboardSoundGridSectionType.GUILD:
                        return r.createElement(u.Clickable, O(h({
                            key: e.key
                        }, o), {
                            className: y.category,
                            onClick: t
                        }), r.createElement(s.default, {
                            guild: e.categoryInfo.guild,
                            isSelected: n
                        }));
                    case p.SoundboardSoundGridSectionType.DEFAULTS:
                        return r.createElement(S, O(h({
                            key: e.key
                        }, o), {
                            icon: _.default,
                            onClick: t,
                            isSelected: n
                        }));
                    default:
                        return null
                }
            }(e, n, o, t)
        })
    }

    function g(e) {
        var t = e.soundboardListRef,
            n = e.categories,
            o = e.listPadding,
            i = r.useRef(null);
        return r.createElement(c.default, {
            className: y.categoryList,
            categoryListRef: i,
            expressionsListRef: t,
            store: l.SoundboardPickerStore,
            categories: n,
            listPadding: void 0 === o ? T : o,
            renderCategoryListItem: v,
            rowCount: n.length,
            categoryHeight: 40
        })
    }
}