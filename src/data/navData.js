const navData = [
  {
    key: "home",
    url: "/",
    children: []
  },
  {
    key: "about",
    url: "/about",
    children: []
  },
  {
    key: "gallery",
    url: "/gallery",
    children: []
  },
  {
    key: "services",
    children: [
      {
        key: "gel-x",
        url: "/services/gel-x/"
      },
      {
        key: "builder-gel",
        url: "/services/builder-gel/"
      },
      {
        key: "deluxe-pedicure",
        url: "/services/deluxe-pedicure/"
      },
    ]
  },
  {
    key: "prices",
    url: "/prices",
    children: []
  },
  // {
  //   key: "contact",
  //   url: "/contact",
  //   children: []
  // },
]
export default navData