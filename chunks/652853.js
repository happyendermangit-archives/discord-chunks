function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserProfileThemeContextProvider: function() {
            return u
        },
        useUserProfileThemeContext: function() {
            return d
        }
    });
    var i, r = n("735250"),
        a = n("470079"),
        s = n("541049"),
        o = n("231338");
    let l = a.createContext({
        profileType: null,
        theme: null !== (i = (0, s.default)()) && void 0 !== i ? i : o.ThemeTypes.DARK,
        primaryColor: null,
        secondaryColor: null
    });

    function u(e) {
        let {
            profileType: t,
            theme: n,
            primaryColor: i,
            secondaryColor: s,
            children: o
        } = e, u = a.useMemo(() => ({
            profileType: t,
            theme: n,
            primaryColor: i,
            secondaryColor: s
        }), [t, n, i, s]);
        return (0, r.jsx)(l.Provider, {
            value: u,
            children: o
        })
    }
    let d = () => a.useContext(l)
}