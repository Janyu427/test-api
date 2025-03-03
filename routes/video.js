const express = require("express");
const router = express.Router();

const videos = {
    "video": [
        {
            "key": "1",
            "title": "挑戰工業風主臥室(上)",
            "videoUrl": "https://www.youtube.com/embed/zOVrdar-918?mute=1&autopause=0&modestbranding=1",
            "text": "全民住宅改造，展現魔術大空間的時刻"
        },
        {
            "key": "2",
            "title": "挑戰工業風主臥室(下)",
            "videoUrl": "https://www.youtube.com/embed/dKdg2m6aN_4?mute=1&autopause=0&modestbranding=1",
            "text": "全民住宅改造，展現魔術大空間的時刻"
        },
        {
            "key": "3",
            "title": "南法鄉村風特集(上)",
            "videoUrl": "https://www.youtube.com/embed/bKRPrDH5tGQ?mute=1&autopause=0&modestbranding=1",
            "text": "全民住宅改造，展現魔術大空間的時刻"
        },
        {
            "key": "4",
            "title": "南法鄉村風特集(下)",
            "videoUrl": "https://www.youtube.com/embed/D8qZFbYweJo?mute=1&autopause=0&modestbranding=1",
            "text": "全民住宅改造，展現魔術大空間的時刻"
        },
        {
            "key": "5",
            "title": "屋主現身分享兩度合作經驗",
            "videoUrl": "https://www.youtube.com/embed/PUp1VfCu-kg?mute=1&autopause=0&modestbranding=1",
            "text": "全民住宅改造，展現魔術大空間的時刻"
        },
        {
            "key": "6",
            "title": "有景的時候可以借景，沒有景的時候我們就自己造景",
            "videoUrl": "https://www.youtube.com/embed/dxusYYBSlTo?mute=1&autopause=0&modestbranding=1",
            "text": "全民住宅改造，展現魔術大空間的時刻"
        },
        {
            "key": "7",
            "title": "設計師的家-廚房開箱",
            "videoUrl": "https://www.youtube.com/embed/3zkBsdZlVaI?mute=1&autopause=0&modestbranding=1",
            "text": "全民住宅改造，展現魔術大空間的時刻"
        },
        {
            "key": "8",
            "title": "中國風廚具開箱",
            "videoUrl": "https://www.youtube.com/embed/rkfst__BuXc?mute=1&autopause=0&modestbranding=1",
            "text": "全民住宅改造，展現魔術大空間的時刻"
        },
        {
            "key": "9",
            "title": "最細心的監工就在程翊",
            "videoUrl": "https://www.youtube.com/embed/ydm6AHOIPBI?mute=1&autopause=0&modestbranding=1",
            "text": "全民住宅改造，展現魔術大空間的時刻"
        },
        {
            "key": "10",
            "title": "電視拍攝花絮來囉",
            "videoUrl": "https://www.youtube.com/embed/CkKMJ3ZNx0E?mute=1&autopause=0&modestbranding=1",
            "text": "全民住宅改造，展現魔術大空間的時刻"
        }
    ]
};

router.get("/", (req, res) => {
    res.json(videos);
});

module.exports = router;