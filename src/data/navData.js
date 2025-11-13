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
        key: "project-1",
        url: "/services/project-1/"
      },
      {
        key: "project-2",
        url: "/services/project-2/"
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