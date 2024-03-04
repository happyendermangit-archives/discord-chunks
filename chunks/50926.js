function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var i = n("872717"),
        s = n("913144"),
        r = n("479756"),
        a = n("38654"),
        o = n("9294"),
        l = n("26989"),
        u = n("337543"),
        d = n("697218"),
        c = n("49111");
    let f = async (e, t) => {
        let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
            r = d.default.getCurrentUser(),
            a = !l.default.isMember(e, null == r ? void 0 : r.id);
        try {
            let t = await i.default.get({
                url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                query: {
                    with_guild: a,
                    invite_code: null != n ? (0, o.parseInviteCodeFromInviteKey)(n) : void 0
                },
                oldFormErrors: !0
            });
            if (null == t.body) throw t;
            let {
                body: r
            } = t;
            return s.default.dispatch({
                type: "MEMBER_VERIFICATION_FORM_UPDATE",
                guildId: e,
                form: {
                    version: r.version,
                    description: r.description,
                    formFields: r.form_fields,
                    guild: r.guild
                }
            }), r
        } catch (t) {
            s.default.dispatch({
                type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                guildId: e
            })
        }
    }, _ = async (e, t) => {
        let n = await i.default.patch({
                url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                body: {
                    form_fields: t
                },
                oldFormErrors: !0
            }),
            {
                body: r
            } = n;
        s.default.dispatch({
            type: "MEMBER_VERIFICATION_FORM_UPDATE",
            guildId: e,
            form: {
                version: r.version,
                description: r.description,
                formFields: r.form_fields
            }
        })
    }, h = async (e, t) => {
        let n = await i.default.patch({
                url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                body: {
                    description: t
                },
                oldFormErrors: !0
            }),
            {
                body: r
            } = n;
        s.default.dispatch({
            type: "MEMBER_VERIFICATION_FORM_UPDATE",
            guildId: e,
            form: {
                version: r.version,
                description: r.description,
                formFields: r.form_fields
            }
        })
    }, E = async (e, t) => {
        await i.default.patch({
            url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
            body: {
                enabled: t
            },
            oldFormErrors: !0
        })
    }, g = async (e, t) => {
        if (a.default.isFullServerPreview(e)) {
            (0, r.updateImpersonatedData)(e, {
                memberOptions: {
                    isPending: !1
                }
            });
            return
        }
        try {
            let n = await i.default.put({
                    url: c.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                    body: {
                        version: t.version,
                        form_fields: t.formFields
                    }
                }),
                {
                    body: r
                } = n;
            return s.default.dispatch({
                type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                guildId: e,
                request: r
            }), r
        } catch (e) {
            throw e
        }
    };
    var m = {
        fetchVerificationForm: f,
        updateVerificationForm: _,
        updateVerificationFormDescription: h,
        enableVerificationForm: E,
        submitVerificationForm: g
    }
}