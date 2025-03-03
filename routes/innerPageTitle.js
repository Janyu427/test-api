const express = require("express");
const router = express.Router();

const innerPageTitle = {
    "InnerBannerPageTitle": [
        {
            "key": "about",
            "title": "公司簡介",
            "enTitle": "About Us",
            "titleImgUrl": "https://janyu427.github.io/test/teiImages/wireAbout.svg"
        },
        {
            "key": "product",
            "title": "作品展示",
            "enTitle": "Projects",
            "titleImgUrl": "https://janyu427.github.io/test/teiImages/wireProjects.svg"
        },
        {
            "key": "productDetails",
            "title": "作品展示",
            "enTitle": "Projects",
            "titleImgUrl": "https://janyu427.github.io/test/teiImages/wireProjects.svg"
        },
        {
            "key": "video",
            "title": "影音專區",
            "enTitle": "Video",
            "titleImgUrl": "https://janyu427.github.io/test/teiImages/wireVideo.svg"
        },
        {
            "key": "contact",
            "title": "聯絡我們",
            "enTitle": "Contact",
            "titleImgUrl": "https://janyu427.github.io/test/teiImages/wireContact.svg"
        }
    ]
};

router.get("/", (req, res) => {
    res.json(innerPageTitle);
});

router.get("/:key", (req, res) => {
    const key = req.params.key;

    for (let i = 0; i < innerPageTitle.InnerBannerPageTitle.length; i ++) {
        if (innerPageTitle.InnerBannerPageTitle[i].key == key) {
            return res.json(innerPageTitle.InnerBannerPageTitle[i]);
        }
    }
});

module.exports = router;
