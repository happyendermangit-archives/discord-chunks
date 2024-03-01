function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    });
    var s = n("872717"),
        i = n("913144"),
        r = n("479756"),
        a = n("38654"),
        o = n("9294"),
        d = n("26989"),
        u = n("337543"),
        l = n("697218"),
        f = n("49111");
    let _ = async (e, t) => {
        let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
            r = l.default.getCurrentUser(),
            a = !d.default.isMember(e, null == r ? void 0 : r.id);
        try {
            let t = await s.default.get({
                url: f.Endpoints.GUILD_MEMBER_VERIFICATION(e),
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
            return i.default.dispatch({
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
            i.default.dispatch({
                type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                guildId: e
            })
        }
    }, c = async (e, t) => {
        let n = await s.default.patch({
                url: f.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                body: {
                    form_fields: t
                },
                oldFormErrors: !0
            }),
            {
                body: r
            } = n;
        i.default.dispatch({
            type: "MEMBER_VERIFICATION_FORM_UPDATE",
            guildId: e,
            form: {
                version: r.version,
                description: r.description,
                formFields: r.form_fields
            }
        })
    }, g = async (e, t) => {
        let n = await s.default.patch({
                url: f.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                body: {
                    description: t
                },
                oldFormErrors: !0
            }),
            {
                body: r
            } = n;
        i.default.dispatch({
            type: "MEMBER_VERIFICATION_FORM_UPDATE",
            guildId: e,
            form: {
                version: r.version,
                description: r.description,
                formFields: r.form_fields
            }
        })
    }, m = async (e, t) => {
        await s.default.patch({
            url: f.Endpoints.GUILD_MEMBER_VERIFICATION(e),
            body: {
                enabled: t
            },
            oldFormErrors: !0
        })
    }, h = async (e, t) => {
        if (a.default.isFullServerPreview(e)) {
            (0, r.updateImpersonatedData)(e, {
                memberOptions: {
                    isPending: !1
                }
            });
            return
        }
        try {
            let n = await s.default.put({
                    url: f.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                    body: {
                        version: t.version,
                        form_fields: t.formFields
                    }
                }),
                {
                    body: r
                } = n;
            return i.default.dispatch({
                type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                guildId: e,
                request: r
            }), r
        } catch (e) {
            throw e
        }
    };
    var v = {
        fetchVerificationForm: _,
        updateVerificationForm: c,
        updateVerificationFormDescription: g,
        enableVerificationForm: m,
        submitVerificationForm: h
    }
}