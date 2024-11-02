const express = require("express");
const router = express.Router();

router.post("/api/register", adminMiddleware, xyzcontroller);

module.exports = router;
// bu sayfada çalışan bir şey yok. örnek bir yazı sadece
