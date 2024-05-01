function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        a = n.n(r),
        s = n("442837"),
        o = n("693789"),
        l = n("235874"),
        u = n("944613"),
        d = n("607070"),
        _ = n("605436"),
        c = n("496675"),
        E = n("729285"),
        I = n("537387"),
        T = n("689938"),
        f = n("236219");

    function S(e) {
        let {
            guild: t,
            guildMember: n,
            highestRole: r,
            onAddRole: S,
            className: h
        } = e, A = (0, s.useStateFromStores)([d.default], () => d.default.roleStyle), m = e => (0, _.isNotEveryoneRoleId)(t.id, e.id) && !e.managed && c.default.isRoleHigher(t, r, e) && -1 === n.roles.indexOf(e.id);
        return (0, i.jsx)(l.Popout, {
            position: "bottom",
            align: "center",
            renderPopout: e => {
                let {
                    closePopout: n
                } = e;
                return (0, i.jsx)(u.default, {
                    guild: t,
                    roleStyle: A,
                    roleFilter: m,
                    onSelect: S,
                    onClose: n
                })
            },
            children: e => (0, i.jsx)(I.default, {
                ...e,
                className: a()(f.button, h),
                innerClassName: f.buttonInner,
                text: T.default.Messages.USER_PROFILE_ADD_ROLE,
                icon: e => (0, i.jsx)(E.default, {
                    ...e,
                    width: 20,
                    height: 20
                }),
                color: f.color,
                look: o.Button.Looks.BLANK
            })
        })
    }
}