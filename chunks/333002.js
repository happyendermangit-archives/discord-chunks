function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PictureInPictureHeader: function() {
            return T
        },
        default: function() {
            return S
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("447515"),
        s = n("467645"),
        l = n("784184"),
        c = n("545072"),
        f = n("143953"),
        d = n("204910"),
        _ = n("298398"),
        E = n("890479"),
        p = n("981123"),
        m = n("127141"),
        y = n("941504"),
        I = n("438249");

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function O(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                h(e, t, n[t])
            })
        }
        return e
    }

    function T(e) {
        var t = e.title,
            n = e.onJumpToChannel,
            o = e.idle,
            i = e.preventIdleComponent,
            s = (0, a.useStateFromStores)([c.default], function() {
                return c.default.getChannelId()
            }),
            f = null != s ? r.createElement(p.default, {
                voiceChannelId: s,
                idle: o
            }) : null;
        return r.createElement(i, {
            className: I.headerIdleContainer
        }, r.createElement(l.Clickable, {
            className: I.headerTitle,
            onClick: n
        }, r.createElement(_.default, {
            "aria-label": y.default.Messages.OPEN_IN_THEATER,
            className: I.backButton,
            width: 20,
            height: 20
        }), r.createElement(E.default, {
            className: I.headerText,
            size: E.default.Sizes.SIZE_16,
            color: u.default.unsafe_rawColors.WHITE_500.css
        }, t)), f)
    }

    function S(e) {
        var t = e.children,
            n = e.idle,
            o = e.onJumpToChannel,
            a = e.backgroundKey,
            u = e.onActive,
            l = e.onForceIdle,
            c = e.renderBottomLeftControls,
            _ = e.renderBottomRightControls,
            E = e.screenMessage,
            p = e.hideControls,
            y = e.className,
            S = e.innerClassName,
            v = function(e, t) {
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
            }(e, ["children", "idle", "onJumpToChannel", "backgroundKey", "onActive", "onForceIdle", "renderBottomLeftControls", "renderBottomRightControls", "screenMessage", "hideControls", "className", "innerClassName"]);
        return r.createElement("div", {
            onMouseMove: u,
            onMouseDown: u,
            onMouseLeave: l,
            className: i()(I.pictureInPictureVideo, h({}, I.idle, n), y),
            onDoubleClick: o
        }, r.createElement(s.TransitionGroup, null, r.createElement(d.BackgroundTransition, {
            key: a,
            className: S
        }, t)), null != E ? r.createElement(m.default, O({
            size: "small"
        }, E)) : null, !(void 0 !== p && p) && r.createElement("div", {
            className: I.videoControls
        }, r.createElement("div", {
            className: I.topControls
        }, r.createElement(T, O({
            idle: n,
            onJumpToChannel: o
        }, v))), r.createElement("div", {
            className: I.bottomControls
        }, r.createElement(f.default, {
            grow: 0,
            shrink: 1,
            basis: "50%",
            align: f.default.Align.CENTER,
            className: I.bottomLeftControls
        }, null == c ? void 0 : c()), r.createElement(f.default, {
            grow: 0,
            shrink: 1,
            justify: f.default.Justify.END,
            basis: "50%",
            align: f.default.Align.CENTER
        }, null == _ ? void 0 : _()))))
    }
}